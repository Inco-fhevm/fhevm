import { mkdirSync, writeFileSync } from 'fs';

import { ALL_OPERATORS, Network, SUPPORTED_BITS, checks, networkCodegenContext } from './common';
import * as t from './templates';
import * as testgen from './testgen';

function generateAllFiles(isTee: boolean) {
  const operators = checks(ALL_OPERATORS);

  const network = Network[(process.env.TARGET_NETWORK as keyof typeof Network) || 'Evmos'];
  const context = networkCodegenContext(network);
  const libName = isTee ? 'TEE' : 'TFHE';
  const implName = isTee ? 'TeeImpl' : 'Impl';
  const testfilePrefix = isTee ? 'tee' : 'tfhe';

  const [tfheSolSource, overloads] = t.tfheSol(context, operators, SUPPORTED_BITS, false, isTee);
  const ovShards = testgen.splitOverloadsToShards(overloads);
  writeFileSync(`lib/${implName}.sol`, t.implSol(context, operators, isTee));
  writeFileSync(`lib/${libName}.sol`, tfheSolSource);
  writeFileSync(`mocks/${implName}.sol`, t.implSolMock(context, operators, isTee));
  const [tfheSolSourceMock, _] = t.tfheSol(context, operators, SUPPORTED_BITS, true, isTee);
  writeFileSync(`mocks/${libName}.sol`, tfheSolSourceMock);
  mkdirSync('examples/tests', { recursive: true });
  ovShards.forEach((os) => {
    writeFileSync(`examples/tests/${libName}TestSuite${os.shardNumber}.sol`, testgen.generateSmartContract(os, isTee));
  });
  writeFileSync(
    `test/${testfilePrefix}Operations/${testfilePrefix}Operations.ts`,
    testgen.generateTestCode(ovShards, isTee),
  );
}

generateAllFiles(true);
generateAllFiles(false);
