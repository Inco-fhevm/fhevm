import { strict as assert } from 'node:assert';

import { overloadTests } from './overloadTests';
import { getUint } from './utils';

export enum ArgumentType {
  Ebool,
  EUint,
  Uint,
}

export type FunctionType = {
  type: ArgumentType;
  bits: number;
};

export type OverloadSignature = {
  name: string;
  arguments: FunctionType[];
  returnType: FunctionType;
  binaryOperator?: string;
  unaryOperator?: string;
};

export type OverloadShard = {
  shardNumber: number;
  overloads: OverloadSignature[];
};

/**
 * This is done because there's a limit on how big
 * of a smart contract you can deploy
 */
export function splitOverloadsToShards(overloads: OverloadSignature[]): OverloadShard[] {
  const MAX_SHARD_SIZE = 100;
  const res: OverloadShard[] = [];

  let shardNo = 1;
  let accumulator: OverloadSignature[] = [];
  overloads.forEach((o) => {
    accumulator.push(o);
    if (accumulator.length >= MAX_SHARD_SIZE) {
      res.push({
        shardNumber: shardNo,
        overloads: Object.assign([], accumulator),
      });
      shardNo++;
      accumulator = [];
    }
  });

  if (accumulator.length > 0) {
    res.push({
      shardNumber: shardNo,
      overloads: Object.assign([], accumulator),
    });
  }

  return res;
}

export function generateTestCode(shards: OverloadShard[], isTeeOperation: boolean): string {
  const res: string[] = [];
  const libName = isTeeOperation ? 'TEE' : 'TFHE';

  res.push(`
    import { expect } from 'chai';
    import { ethers } from 'hardhat';
    import { createInstances } from '../instance';
    import { getSigners, initSigners } from '../signers';

  `);

  shards.forEach((os) => {
    res.push(`
    import type { ${libName}TestSuite${os.shardNumber} } from '../../types/contracts/tests/${libName}TestSuite${os.shardNumber}';
    `);
  });

  shards.forEach((os) => {
    res.push(`
async function deployTfheTestFixture${os.shardNumber}(): Promise<${libName}TestSuite${os.shardNumber}> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('${libName}TestSuite${os.shardNumber}');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}
    `);
  });

  res.push(`
    describe('${libName} operations', function () {
        before(async function () {
            await initSigners(1);
            this.signers = await getSigners();

  `);

  shards.forEach((os) => {
    res.push(`
            const contract${os.shardNumber} = await deployTfheTestFixture${os.shardNumber}();
            this.contract${os.shardNumber}Address = await contract${os.shardNumber}.getAddress();
            this.contract${os.shardNumber} = contract${os.shardNumber};
    `);
    if (!isTeeOperation) {
      res.push(`const instances${os.shardNumber} = await createInstances(this.contract${os.shardNumber}Address, ethers, this.signers);
        this.instances${os.shardNumber} = instances${os.shardNumber};
      `);
    }
  });

  res.push(`
        });
  `);

  // don't allow user to add test for method that doesn't exist
  const overloadUsages: { [methodName: string]: boolean } = {};
  shards.forEach((os) => {
    os.overloads.forEach((o) => {
      const testName = `test operator "${o.name}" overload ${signatureContractEncryptedSignature(o)}`;
      const methodName = signatureContractMethodName(o);
      overloadUsages[methodName] = true;
      const tests = overloadTests[methodName] || [];
      assert(tests.length > 0, `Overload ${methodName} has no tests, please add them.`);
      let testIndex = 1;
      tests.forEach((t) => {
        assert(
          t.inputs.length == o.arguments.length,
          `Test argument count is different to operator arguments, arguments: ${t.inputs}, expected count: ${o.arguments.length}`,
        );
        t.inputs.forEach((input, index) => ensureNumberAcceptableInBitRange(o.arguments[index].bits, input));
        if (typeof t.output === 'number') {
          ensureNumberAcceptableInBitRange(o.returnType.bits, t.output);
        }
        const testArgs = t.inputs.join(', ');
        let testArgsEncrypted: string;
        if (isTeeOperation) {
          testArgsEncrypted = t.inputs
            .map((v) => {
              return `${v}n`;
            })
            .join(', ');
        } else {
          testArgsEncrypted = t.inputs
            .map((v, index) => {
              if (o.arguments[index].type == ArgumentType.EUint) {
                return `this.instances${os.shardNumber}.alice.encrypt${o.arguments[index].bits}(${v}n)`;
              } else {
                return `${v}n`;
              }
            })
            .join(', ');
        }

        let output = t.output.toString();
        if (typeof t.output === 'bigint') output += 'n';
        res.push(`
                it('${testName} test ${testIndex} (${testArgs})', async function () {
                    const res = await this.contract${os.shardNumber}.${methodName}(${testArgsEncrypted});
                    expect(res).to.equal(${output});
                });
            `);
        testIndex++;
      });
    });
  });

  for (const key in overloadTests) {
    assert(overloadUsages[key], `No such overload '${key}' exists for which test data is defined`);
  }

  res.push(`
    });
  `);

  return res.join('');
}

function ensureNumberAcceptableInBitRange(bits: number, input: number | bigint) {
  switch (bits) {
    case 4:
      ensureNumberInRange(bits, input, 0x00, 0xf);
      break;
    case 8:
      ensureNumberInRange(bits, input, 0x00, 0xff);
      break;
    case 16:
      ensureNumberInRange(bits, input, 0x00, 0xffff);
      break;
    case 32:
      ensureNumberInRange(bits, input, 0x00, 0xffffffff);
      break;
    case 64:
      ensureNumberInRange(bits, input, 0x00, 0xffffffffffffffff);
      break;
    default:
      assert(false, `TODO: add support for ${bits} numbers`);
  }
}

function ensureNumberInRange(bits: number, input: number | bigint, min: number, max: number) {
  assert(input >= min && input <= max, `${bits} bit number ${input} doesn't fall into expected [${min}; ${max}] range`);
}

export function generateSmartContract(os: OverloadShard, isTeeOperation: boolean): string {
  const res: string[] = [];

  if (!isTeeOperation) {
    res.push(`
          // SPDX-License-Identifier: BSD-3-Clause-Clear
          pragma solidity ^0.8.20;

          import "../../lib/TFHE.sol";
          contract TFHETestSuite${os.shardNumber} {
      `);
  } else {
    res.push(`
          // SPDX-License-Identifier: BSD-3-Clause-Clear
          pragma solidity ^0.8.20;

          import "../../lib/TEE.sol";
          contract TEETestSuite${os.shardNumber} {
      `);
  }

  generateLibCallTest(os, res, isTeeOperation);

  res.push(`
        }
    `);

  return res.join('');
}

function generateLibCallTest(os: OverloadShard, res: string[], isTeeOperation: boolean) {
  os.overloads.forEach((o) => {
    const libName = isTeeOperation ? 'TEE' : 'TFHE';
    const methodName = signatureContractMethodName(o);
    const args = signatureContractArguments(o, isTeeOperation);
    const retType = functionTypeToDecryptedType(o.returnType);
    res.push(`function ${methodName}(${args}) public view returns (${retType}) {`);
    res.push('\n');

    const procArgs: string[] = [];
    let argName = 97; // letter 'a' in ascii
    o.arguments.forEach((a) => {
      const arg = String.fromCharCode(argName);
      const argProc = `${arg}Proc`;
      procArgs.push(argProc);
      res.push(`${functionTypeToString(a)} ${argProc} = ${castExpressionToType(arg, a, isTeeOperation)};`);
      res.push('\n');
      argName++;
    });

    const tfheArgs = procArgs.join(', ');

    if (o.binaryOperator) {
      assert(o.arguments.length == 2, 'We assume two arguments for binary operator');
      res.push(`${functionTypeToEncryptedType(o.returnType)} result = aProc ${o.binaryOperator} bProc;`);
      res.push('\n');
    } else if (o.unaryOperator) {
      assert(o.arguments.length == 1, 'We assume one argument for unary operator');
      res.push(`${functionTypeToEncryptedType(o.returnType)} result = ${o.unaryOperator}aProc;`);
      res.push('\n');
    } else {
      res.push(`${functionTypeToEncryptedType(o.returnType)} result = ${libName}.${o.name}(${tfheArgs});`);
      res.push('\n');
    }

    res.push(`return ${libName}.decrypt(result);
        }
    `);
  });
}

export function signatureContractMethodName(s: OverloadSignature): string {
  const res: string[] = [];

  res.push(s.name);
  s.arguments.forEach((a) => res.push(functionTypeToString(a)));

  return res.join('_');
}

function signatureContractArguments(s: OverloadSignature, isTeeOperation: boolean): string {
  const res: string[] = [];

  let argName = 97; // letter 'a' in ascii
  s.arguments.forEach((a) => {
    res.push(`${functionTypeToCalldataType(a, isTeeOperation)} ${String.fromCharCode(argName)}`);
    argName++;
  });

  return res.join(', ');
}

function signatureContractEncryptedSignature(s: OverloadSignature): string {
  const res: string[] = [];

  // let argName = 97; // letter 'a' in ascii
  s.arguments.forEach((a) => {
    res.push(`${functionTypeToString(a)}`);
    // argName++;
  });

  const joined = res.join(', ');
  return `(${joined}) => ${functionTypeToEncryptedType(s.returnType)}`;
}

function castExpressionToType(argExpr: string, outputType: FunctionType, isTeeOperation: boolean): string {
  const libName = isTeeOperation ? 'TEE' : 'TFHE';
  switch (outputType.type) {
    case ArgumentType.EUint:
      return `${libName}.asEuint${outputType.bits}(${argExpr})`;
    case ArgumentType.Uint:
      return argExpr;
    case ArgumentType.Ebool:
      return `TFHE.asEbool(${argExpr})`;
  }
}

function functionTypeToCalldataType(t: FunctionType, isTeeOperation: boolean): string {
  switch (t.type) {
    case ArgumentType.EUint:
      return isTeeOperation ? getUint(t.bits) : `bytes calldata`;
    case ArgumentType.Uint:
      return getUint(t.bits);
    case ArgumentType.Ebool:
      return `bool`;
  }
}

function functionTypeToDecryptedType(t: FunctionType): string {
  switch (t.type) {
    case ArgumentType.EUint:
    case ArgumentType.Uint:
      return getUint(t.bits);
    case ArgumentType.Ebool:
      return `bool`;
  }
}

function functionTypeToEncryptedType(t: FunctionType): string {
  switch (t.type) {
    case ArgumentType.EUint:
    case ArgumentType.Uint:
      return `euint${t.bits}`;
    case ArgumentType.Ebool:
      return `ebool`;
  }
}

function functionTypeToString(t: FunctionType): string {
  switch (t.type) {
    case ArgumentType.EUint:
      return `euint${t.bits}`;
    case ArgumentType.Uint:
      return getUint(t.bits);
    case ArgumentType.Ebool:
      return `ebool`;
  }
}
