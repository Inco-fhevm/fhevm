import { mkdirSync, writeFileSync } from 'fs';

import { ALL_OPERATORS, Network, SUPPORTED_BITS, checks, networkCodegenContext } from './common';
import * as t from './templates';
import * as testgen from './testgen';

function generateAllFiles(isTee: boolean) {
  const operators = checks(ALL_OPERATORS);

  const network = Network[(process.env.TARGET_NETWORK as keyof typeof Network) || 'Evmos'];
  const context = networkCodegenContext(network);

  if (!isTee) {
    const [tfheSolSource, overloads] = t.tfheSol(context, operators, SUPPORTED_BITS, false, isTee);
    const ovShards = testgen.splitOverloadsToShards(overloads);
    writeFileSync('lib/Impl.sol', t.implSol(context, operators, isTee));
    writeFileSync('lib/TFHE.sol', tfheSolSource);
    writeFileSync('mocks/Impl.sol', t.implSolMock(context, operators, isTee));
    const [tfheSolSourceMock, _] = t.tfheSol(context, operators, SUPPORTED_BITS, true, isTee);
    writeFileSync('mocks/TFHE.sol', tfheSolSourceMock);
    mkdirSync('examples/tests', { recursive: true });
    ovShards.forEach((os) => {
      writeFileSync(`examples/tests/TFHETestSuite${os.shardNumber}.sol`, testgen.generateSmartContract(os, isTee));
    });
    writeFileSync('test/tfheOperations/tfheOperations.ts', testgen.generateTestCode(ovShards));
  } else {
    const [tfheSolSource, overloads] = t.tfheSol(context, operators, SUPPORTED_BITS, false, isTee);
    const ovShards = testgen.splitOverloadsToShards(overloads);
    writeFileSync('lib/TeeImpl.sol', t.implSol(context, operators, isTee));
    writeFileSync('lib/TEE.sol', tfheSolSource);
    writeFileSync('mocks/TeeImpl.sol', t.implSolMock(context, operators, isTee));
    const [tfheSolSourceMock, _] = t.tfheSol(context, operators, SUPPORTED_BITS, true, isTee);
    writeFileSync('mocks/TEE.sol', tfheSolSourceMock);
    mkdirSync('examples/tests', { recursive: true });
    ovShards.forEach((os) => {
      writeFileSync(`examples/tests/TEETestSuite${os.shardNumber}.sol`, testgen.generateSmartContract(os, isTee));
    });
    writeFileSync('test/tfheOperations/teeOperations.ts', testgen.generateTestCode(ovShards));
  }
}

generateAllFiles(true);
generateAllFiles(false);
