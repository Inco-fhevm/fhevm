import { expect } from 'chai';
import { ethers } from 'hardhat';

import type { TEETestSuite1 } from '../../types/contracts/tests/TEETestSuite1';
import type { TEETestSuite2 } from '../../types/contracts/tests/TEETestSuite2';
import type { TEETestSuite3 } from '../../types/contracts/tests/TEETestSuite3';
import type { TEETestSuite4 } from '../../types/contracts/tests/TEETestSuite4';
import type { TEETestSuite5 } from '../../types/contracts/tests/TEETestSuite5';
import type { TEETestSuite6 } from '../../types/contracts/tests/TEETestSuite6';
import { createInstances } from '../instance';
import { getSigners, initSigners } from '../signers';

async function deployTfheTestFixture1(): Promise<TEETestSuite1> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TEETestSuite1');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture2(): Promise<TEETestSuite2> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TEETestSuite2');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture3(): Promise<TEETestSuite3> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TEETestSuite3');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture4(): Promise<TEETestSuite4> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TEETestSuite4');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture5(): Promise<TEETestSuite5> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TEETestSuite5');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture6(): Promise<TEETestSuite6> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TEETestSuite6');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

describe('TEE operations', function () {
  before(async function () {
    await initSigners(1);
    this.signers = await getSigners();

    const contract1 = await deployTfheTestFixture1();
    this.contract1Address = await contract1.getAddress();
    this.contract1 = contract1;

    const contract2 = await deployTfheTestFixture2();
    this.contract2Address = await contract2.getAddress();
    this.contract2 = contract2;

    const contract3 = await deployTfheTestFixture3();
    this.contract3Address = await contract3.getAddress();
    this.contract3 = contract3;

    const contract4 = await deployTfheTestFixture4();
    this.contract4Address = await contract4.getAddress();
    this.contract4 = contract4;

    const contract5 = await deployTfheTestFixture5();
    this.contract5Address = await contract5.getAddress();
    this.contract5 = contract5;

    const contract6 = await deployTfheTestFixture6();
    this.contract6Address = await contract6.getAddress();
    this.contract6 = contract6;
  });

  it('test operator "add" overload (euint4, euint4) => euint4 test 1 (3, 2)', async function () {
    const res = await this.contract1.add_euint4_euint4(3n, 2n);
    expect(res).to.equal(5n);
  });

  it('test operator "add" overload (euint4, euint4) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.add_euint4_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint4, euint4) => euint4 test 3 (5, 5)', async function () {
    const res = await this.contract1.add_euint4_euint4(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint4, euint4) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.add_euint4_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "sub" overload (euint4, euint4) => euint4 test 1 (8, 8)', async function () {
    const res = await this.contract1.sub_euint4_euint4(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint4, euint4) => euint4 test 2 (8, 4)', async function () {
    const res = await this.contract1.sub_euint4_euint4(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint4, euint4) => euint4 test 1 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, euint4) => euint4 test 2 (3, 5)', async function () {
    const res = await this.contract1.mul_euint4_euint4(3n, 5n);
    expect(res).to.equal(15n);
  });

  it('test operator "mul" overload (euint4, euint4) => euint4 test 3 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, euint4) => euint4 test 4 (5, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint4(5n, 3n);
    expect(res).to.equal(15n);
  });

  it('test operator "and" overload (euint4, euint4) => euint4 test 1 (8, 8)', async function () {
    const res = await this.contract1.and_euint4_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "and" overload (euint4, euint4) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.and_euint4_euint4(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint4, euint4) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract1.and_euint4_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "and" overload (euint4, euint4) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.and_euint4_euint4(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "or" overload (euint4, euint4) => euint4 test 1 (7, 10)', async function () {
    const res = await this.contract1.or_euint4_euint4(7n, 10n);
    expect(res).to.equal(15n);
  });

  it('test operator "or" overload (euint4, euint4) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.or_euint4_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint4, euint4) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract1.or_euint4_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "or" overload (euint4, euint4) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.or_euint4_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint4) => euint4 test 1 (13, 14)', async function () {
    const res = await this.contract1.xor_euint4_euint4(13n, 14n);
    expect(res).to.equal(3n);
  });

  it('test operator "xor" overload (euint4, euint4) => euint4 test 2 (9, 13)', async function () {
    const res = await this.contract1.xor_euint4_euint4(9n, 13n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint4, euint4) => euint4 test 3 (13, 13)', async function () {
    const res = await this.contract1.xor_euint4_euint4(13n, 13n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint4, euint4) => euint4 test 4 (13, 9)', async function () {
    const res = await this.contract1.xor_euint4_euint4(13n, 9n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint4, euint4) => ebool test 1 (6, 11)', async function () {
    const res = await this.contract1.eq_euint4_euint4(6n, 11n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.eq_euint4_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.eq_euint4_euint4(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint4, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.eq_euint4_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint4) => ebool test 1 (11, 4)', async function () {
    const res = await this.contract1.ne_euint4_euint4(11n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.ne_euint4_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.ne_euint4_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.ne_euint4_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint4) => ebool test 1 (9, 9)', async function () {
    const res = await this.contract1.ge_euint4_euint4(9n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint4) => ebool test 2 (5, 9)', async function () {
    const res = await this.contract1.ge_euint4_euint4(5n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint4) => ebool test 3 (9, 9)', async function () {
    const res = await this.contract1.ge_euint4_euint4(9n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint4) => ebool test 4 (9, 5)', async function () {
    const res = await this.contract1.ge_euint4_euint4(9n, 5n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint4, euint4) => ebool test 1 (4, 14)', async function () {
    const res = await this.contract1.gt_euint4_euint4(4n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.gt_euint4_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.gt_euint4_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.gt_euint4_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint4) => ebool test 1 (10, 9)', async function () {
    const res = await this.contract1.le_euint4_euint4(10n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint4, euint4) => ebool test 2 (5, 9)', async function () {
    const res = await this.contract1.le_euint4_euint4(5n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint4) => ebool test 3 (9, 9)', async function () {
    const res = await this.contract1.le_euint4_euint4(9n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint4) => ebool test 4 (9, 5)', async function () {
    const res = await this.contract1.le_euint4_euint4(9n, 5n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint4) => ebool test 1 (4, 10)', async function () {
    const res = await this.contract1.lt_euint4_euint4(4n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.lt_euint4_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.lt_euint4_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.lt_euint4_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint4, euint4) => euint4 test 1 (7, 10)', async function () {
    const res = await this.contract1.min_euint4_euint4(7n, 10n);
    expect(res).to.equal(7n);
  });

  it('test operator "min" overload (euint4, euint4) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.min_euint4_euint4(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "min" overload (euint4, euint4) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract1.min_euint4_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "min" overload (euint4, euint4) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.min_euint4_euint4(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "max" overload (euint4, euint4) => euint4 test 1 (3, 1)', async function () {
    const res = await this.contract1.max_euint4_euint4(3n, 1n);
    expect(res).to.equal(3n);
  });

  it('test operator "max" overload (euint4, euint4) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.max_euint4_euint4(4n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint4) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract1.max_euint4_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint4) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.max_euint4_euint4(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "add" overload (euint4, euint8) => euint8 test 1 (1, 9)', async function () {
    const res = await this.contract1.add_euint4_euint8(1n, 9n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint4, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract1.add_euint4_euint8(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint4, euint8) => euint8 test 3 (5, 5)', async function () {
    const res = await this.contract1.add_euint4_euint8(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint4, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract1.add_euint4_euint8(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "sub" overload (euint4, euint8) => euint8 test 1 (10, 10)', async function () {
    const res = await this.contract1.sub_euint4_euint8(10n, 10n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint4, euint8) => euint8 test 2 (10, 6)', async function () {
    const res = await this.contract1.sub_euint4_euint8(10n, 6n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint4, euint8) => euint8 test 1 (2, 5)', async function () {
    const res = await this.contract1.mul_euint4_euint8(2n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint4, euint8) => euint8 test 2 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint8(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, euint8) => euint8 test 3 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint8(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, euint8) => euint8 test 4 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint8(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "and" overload (euint4, euint8) => euint8 test 1 (10, 6)', async function () {
    const res = await this.contract1.and_euint4_euint8(10n, 6n);
    expect(res).to.equal(2n);
  });

  it('test operator "and" overload (euint4, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract1.and_euint4_euint8(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint4, euint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract1.and_euint4_euint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "and" overload (euint4, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract1.and_euint4_euint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "or" overload (euint4, euint8) => euint8 test 1 (12, 18)', async function () {
    const res = await this.contract1.or_euint4_euint8(12n, 18n);
    expect(res).to.equal(30n);
  });

  it('test operator "or" overload (euint4, euint8) => euint8 test 2 (8, 12)', async function () {
    const res = await this.contract1.or_euint4_euint8(8n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint4, euint8) => euint8 test 3 (12, 12)', async function () {
    const res = await this.contract1.or_euint4_euint8(12n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint4, euint8) => euint8 test 4 (12, 8)', async function () {
    const res = await this.contract1.or_euint4_euint8(12n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint8) => euint8 test 1 (5, 19)', async function () {
    const res = await this.contract1.xor_euint4_euint8(5n, 19n);
    expect(res).to.equal(22n);
  });

  it('test operator "xor" overload (euint4, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract1.xor_euint4_euint8(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract1.xor_euint4_euint8(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint4, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract1.xor_euint4_euint8(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint4, euint8) => ebool test 1 (4, 5)', async function () {
    const res = await this.contract1.eq_euint4_euint8(4n, 5n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint8) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.eq_euint4_euint8(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint8) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.eq_euint4_euint8(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint4, euint8) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.eq_euint4_euint8(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint8) => ebool test 1 (4, 62)', async function () {
    const res = await this.contract1.ne_euint4_euint8(4n, 62n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint8) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.ne_euint4_euint8(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint8) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.ne_euint4_euint8(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint8) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.ne_euint4_euint8(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint8) => ebool test 1 (13, 91)', async function () {
    const res = await this.contract1.ge_euint4_euint8(13n, 91n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint8) => ebool test 2 (9, 13)', async function () {
    const res = await this.contract1.ge_euint4_euint8(9n, 13n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint8) => ebool test 3 (13, 13)', async function () {
    const res = await this.contract1.ge_euint4_euint8(13n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint8) => ebool test 4 (13, 9)', async function () {
    const res = await this.contract1.ge_euint4_euint8(13n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint4, euint8) => ebool test 1 (14, 199)', async function () {
    const res = await this.contract1.gt_euint4_euint8(14n, 199n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint8) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract1.gt_euint4_euint8(10n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint8) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract1.gt_euint4_euint8(14n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint8) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract1.gt_euint4_euint8(14n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint8) => ebool test 1 (13, 94)', async function () {
    const res = await this.contract1.le_euint4_euint8(13n, 94n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint8) => ebool test 2 (9, 13)', async function () {
    const res = await this.contract1.le_euint4_euint8(9n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint8) => ebool test 3 (13, 13)', async function () {
    const res = await this.contract1.le_euint4_euint8(13n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint8) => ebool test 4 (13, 9)', async function () {
    const res = await this.contract1.le_euint4_euint8(13n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint8) => ebool test 1 (13, 128)', async function () {
    const res = await this.contract1.lt_euint4_euint8(13n, 128n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint8) => ebool test 2 (9, 13)', async function () {
    const res = await this.contract1.lt_euint4_euint8(9n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint8) => ebool test 3 (13, 13)', async function () {
    const res = await this.contract1.lt_euint4_euint8(13n, 13n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint8) => ebool test 4 (13, 9)', async function () {
    const res = await this.contract1.lt_euint4_euint8(13n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint4, euint8) => euint8 test 1 (8, 124)', async function () {
    const res = await this.contract1.min_euint4_euint8(8n, 124n);
    expect(res).to.equal(8n);
  });

  it('test operator "min" overload (euint4, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract1.min_euint4_euint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "min" overload (euint4, euint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract1.min_euint4_euint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "min" overload (euint4, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract1.min_euint4_euint8(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "max" overload (euint4, euint8) => euint8 test 1 (1, 157)', async function () {
    const res = await this.contract1.max_euint4_euint8(1n, 157n);
    expect(res).to.equal(157n);
  });

  it('test operator "max" overload (euint4, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract1.max_euint4_euint8(4n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract1.max_euint4_euint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract1.max_euint4_euint8(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "add" overload (euint4, euint16) => euint16 test 1 (2, 13)', async function () {
    const res = await this.contract1.add_euint4_euint16(2n, 13n);
    expect(res).to.equal(15n);
  });

  it('test operator "add" overload (euint4, euint16) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract1.add_euint4_euint16(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint4, euint16) => euint16 test 3 (5, 5)', async function () {
    const res = await this.contract1.add_euint4_euint16(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint4, euint16) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract1.add_euint4_euint16(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "sub" overload (euint4, euint16) => euint16 test 1 (11, 11)', async function () {
    const res = await this.contract1.sub_euint4_euint16(11n, 11n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint4, euint16) => euint16 test 2 (11, 7)', async function () {
    const res = await this.contract1.sub_euint4_euint16(11n, 7n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint4, euint16) => euint16 test 1 (2, 5)', async function () {
    const res = await this.contract1.mul_euint4_euint16(2n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint4, euint16) => euint16 test 2 (3, 5)', async function () {
    const res = await this.contract1.mul_euint4_euint16(3n, 5n);
    expect(res).to.equal(15n);
  });

  it('test operator "mul" overload (euint4, euint16) => euint16 test 3 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint16(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, euint16) => euint16 test 4 (5, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint16(5n, 3n);
    expect(res).to.equal(15n);
  });

  it('test operator "and" overload (euint4, euint16) => euint16 test 1 (10, 28165)', async function () {
    const res = await this.contract1.and_euint4_euint16(10n, 28165n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint4, euint16) => euint16 test 2 (6, 10)', async function () {
    const res = await this.contract1.and_euint4_euint16(6n, 10n);
    expect(res).to.equal(2n);
  });

  it('test operator "and" overload (euint4, euint16) => euint16 test 3 (10, 10)', async function () {
    const res = await this.contract1.and_euint4_euint16(10n, 10n);
    expect(res).to.equal(10n);
  });

  it('test operator "and" overload (euint4, euint16) => euint16 test 4 (10, 6)', async function () {
    const res = await this.contract1.and_euint4_euint16(10n, 6n);
    expect(res).to.equal(2n);
  });

  it('test operator "or" overload (euint4, euint16) => euint16 test 1 (12, 197)', async function () {
    const res = await this.contract1.or_euint4_euint16(12n, 197n);
    expect(res).to.equal(205n);
  });

  it('test operator "or" overload (euint4, euint16) => euint16 test 2 (8, 12)', async function () {
    const res = await this.contract1.or_euint4_euint16(8n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint4, euint16) => euint16 test 3 (12, 12)', async function () {
    const res = await this.contract1.or_euint4_euint16(12n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint4, euint16) => euint16 test 4 (12, 8)', async function () {
    const res = await this.contract1.or_euint4_euint16(12n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint16) => euint16 test 1 (10, 13907)', async function () {
    const res = await this.contract1.xor_euint4_euint16(10n, 13907n);
    expect(res).to.equal(13913n);
  });

  it('test operator "xor" overload (euint4, euint16) => euint16 test 2 (6, 10)', async function () {
    const res = await this.contract1.xor_euint4_euint16(6n, 10n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint16) => euint16 test 3 (10, 10)', async function () {
    const res = await this.contract1.xor_euint4_euint16(10n, 10n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint4, euint16) => euint16 test 4 (10, 6)', async function () {
    const res = await this.contract1.xor_euint4_euint16(10n, 6n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint4, euint16) => ebool test 1 (10, 41899)', async function () {
    const res = await this.contract1.eq_euint4_euint16(10n, 41899n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint16) => ebool test 2 (6, 10)', async function () {
    const res = await this.contract1.eq_euint4_euint16(6n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint16) => ebool test 3 (10, 10)', async function () {
    const res = await this.contract1.eq_euint4_euint16(10n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint4, euint16) => ebool test 4 (10, 6)', async function () {
    const res = await this.contract1.eq_euint4_euint16(10n, 6n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint16) => ebool test 1 (3, 41708)', async function () {
    const res = await this.contract1.ne_euint4_euint16(3n, 41708n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint16) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.ne_euint4_euint16(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint16) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.ne_euint4_euint16(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint16) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.ne_euint4_euint16(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint16) => ebool test 1 (5, 34397)', async function () {
    const res = await this.contract1.ge_euint4_euint16(5n, 34397n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint16) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.ge_euint4_euint16(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint16) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.ge_euint4_euint16(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint16) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.ge_euint4_euint16(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint4, euint16) => ebool test 1 (10, 34348)', async function () {
    const res = await this.contract1.gt_euint4_euint16(10n, 34348n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint16) => ebool test 2 (6, 10)', async function () {
    const res = await this.contract1.gt_euint4_euint16(6n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint16) => ebool test 3 (10, 10)', async function () {
    const res = await this.contract1.gt_euint4_euint16(10n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint16) => ebool test 4 (10, 6)', async function () {
    const res = await this.contract1.gt_euint4_euint16(10n, 6n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint16) => ebool test 1 (3, 38645)', async function () {
    const res = await this.contract1.le_euint4_euint16(3n, 38645n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint16) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.le_euint4_euint16(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint16) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.le_euint4_euint16(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint16) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.le_euint4_euint16(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint16) => ebool test 1 (10, 15096)', async function () {
    const res = await this.contract1.lt_euint4_euint16(10n, 15096n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint16) => ebool test 2 (6, 10)', async function () {
    const res = await this.contract1.lt_euint4_euint16(6n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint16) => ebool test 3 (10, 10)', async function () {
    const res = await this.contract1.lt_euint4_euint16(10n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint16) => ebool test 4 (10, 6)', async function () {
    const res = await this.contract1.lt_euint4_euint16(10n, 6n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint4, euint16) => euint16 test 1 (12, 47994)', async function () {
    const res = await this.contract1.min_euint4_euint16(12n, 47994n);
    expect(res).to.equal(12n);
  });

  it('test operator "min" overload (euint4, euint16) => euint16 test 2 (8, 12)', async function () {
    const res = await this.contract1.min_euint4_euint16(8n, 12n);
    expect(res).to.equal(8n);
  });

  it('test operator "min" overload (euint4, euint16) => euint16 test 3 (12, 12)', async function () {
    const res = await this.contract1.min_euint4_euint16(12n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "min" overload (euint4, euint16) => euint16 test 4 (12, 8)', async function () {
    const res = await this.contract1.min_euint4_euint16(12n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint16) => euint16 test 1 (6, 62382)', async function () {
    const res = await this.contract1.max_euint4_euint16(6n, 62382n);
    expect(res).to.equal(62382n);
  });

  it('test operator "max" overload (euint4, euint16) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract1.max_euint4_euint16(4n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint16) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract1.max_euint4_euint16(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint16) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract1.max_euint4_euint16(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "add" overload (euint4, euint32) => euint32 test 1 (2, 8)', async function () {
    const res = await this.contract1.add_euint4_euint32(2n, 8n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint4, euint32) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract1.add_euint4_euint32(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint4, euint32) => euint32 test 3 (5, 5)', async function () {
    const res = await this.contract1.add_euint4_euint32(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint4, euint32) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract1.add_euint4_euint32(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "sub" overload (euint4, euint32) => euint32 test 1 (8, 8)', async function () {
    const res = await this.contract1.sub_euint4_euint32(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint4, euint32) => euint32 test 2 (8, 4)', async function () {
    const res = await this.contract1.sub_euint4_euint32(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint4, euint32) => euint32 test 1 (2, 5)', async function () {
    const res = await this.contract1.mul_euint4_euint32(2n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint4, euint32) => euint32 test 2 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint32(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, euint32) => euint32 test 3 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint32(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, euint32) => euint32 test 4 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint32(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "and" overload (euint4, euint32) => euint32 test 1 (1, 1067388092)', async function () {
    const res = await this.contract1.and_euint4_euint32(1n, 1067388092n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint4, euint32) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract1.and_euint4_euint32(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint4, euint32) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract1.and_euint4_euint32(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "and" overload (euint4, euint32) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract1.and_euint4_euint32(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "or" overload (euint4, euint32) => euint32 test 1 (12, 3045135587)', async function () {
    const res = await this.contract1.or_euint4_euint32(12n, 3045135587n);
    expect(res).to.equal(3045135599n);
  });

  it('test operator "or" overload (euint4, euint32) => euint32 test 2 (8, 12)', async function () {
    const res = await this.contract1.or_euint4_euint32(8n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint4, euint32) => euint32 test 3 (12, 12)', async function () {
    const res = await this.contract1.or_euint4_euint32(12n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint4, euint32) => euint32 test 4 (12, 8)', async function () {
    const res = await this.contract1.or_euint4_euint32(12n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint32) => euint32 test 1 (6, 1855370868)', async function () {
    const res = await this.contract1.xor_euint4_euint32(6n, 1855370868n);
    expect(res).to.equal(1855370866n);
  });

  it('test operator "xor" overload (euint4, euint32) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract1.xor_euint4_euint32(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint32) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract1.xor_euint4_euint32(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint4, euint32) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract1.xor_euint4_euint32(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint4, euint32) => ebool test 1 (2, 183972195)', async function () {
    const res = await this.contract1.eq_euint4_euint32(2n, 183972195n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint32) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.eq_euint4_euint32(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint32) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.eq_euint4_euint32(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint4, euint32) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.eq_euint4_euint32(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint32) => ebool test 1 (14, 1312265251)', async function () {
    const res = await this.contract1.ne_euint4_euint32(14n, 1312265251n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint32) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract1.ne_euint4_euint32(10n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint32) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract1.ne_euint4_euint32(14n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint32) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract1.ne_euint4_euint32(14n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint32) => ebool test 1 (3, 735253791)', async function () {
    const res = await this.contract1.ge_euint4_euint32(3n, 735253791n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint32) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.ge_euint4_euint32(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint32) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.ge_euint4_euint32(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint32) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.ge_euint4_euint32(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint4, euint32) => ebool test 1 (1, 2112514560)', async function () {
    const res = await this.contract1.gt_euint4_euint32(1n, 2112514560n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint32) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.gt_euint4_euint32(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint32) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.gt_euint4_euint32(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint32) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.gt_euint4_euint32(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint32) => ebool test 1 (5, 3704560179)', async function () {
    const res = await this.contract1.le_euint4_euint32(5n, 3704560179n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint32) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.le_euint4_euint32(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint32) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.le_euint4_euint32(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint32) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.le_euint4_euint32(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint32) => ebool test 1 (6, 2034411051)', async function () {
    const res = await this.contract1.lt_euint4_euint32(6n, 2034411051n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint32) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.lt_euint4_euint32(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint32) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.lt_euint4_euint32(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint32) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.lt_euint4_euint32(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint4, euint32) => euint32 test 1 (10, 421626494)', async function () {
    const res = await this.contract1.min_euint4_euint32(10n, 421626494n);
    expect(res).to.equal(10n);
  });

  it('test operator "min" overload (euint4, euint32) => euint32 test 2 (6, 10)', async function () {
    const res = await this.contract1.min_euint4_euint32(6n, 10n);
    expect(res).to.equal(6n);
  });

  it('test operator "min" overload (euint4, euint32) => euint32 test 3 (10, 10)', async function () {
    const res = await this.contract1.min_euint4_euint32(10n, 10n);
    expect(res).to.equal(10n);
  });

  it('test operator "min" overload (euint4, euint32) => euint32 test 4 (10, 6)', async function () {
    const res = await this.contract1.min_euint4_euint32(10n, 6n);
    expect(res).to.equal(6n);
  });

  it('test operator "max" overload (euint4, euint32) => euint32 test 1 (12, 3887686486)', async function () {
    const res = await this.contract1.max_euint4_euint32(12n, 3887686486n);
    expect(res).to.equal(3887686486n);
  });

  it('test operator "max" overload (euint4, euint32) => euint32 test 2 (8, 12)', async function () {
    const res = await this.contract1.max_euint4_euint32(8n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "max" overload (euint4, euint32) => euint32 test 3 (12, 12)', async function () {
    const res = await this.contract1.max_euint4_euint32(12n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "max" overload (euint4, euint32) => euint32 test 4 (12, 8)', async function () {
    const res = await this.contract1.max_euint4_euint32(12n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint4, euint64) => euint64 test 1 (2, 9)', async function () {
    const res = await this.contract1.add_euint4_euint64(2n, 9n);
    expect(res).to.equal(11n);
  });

  it('test operator "add" overload (euint4, euint64) => euint64 test 2 (6, 8)', async function () {
    const res = await this.contract1.add_euint4_euint64(6n, 8n);
    expect(res).to.equal(14n);
  });

  it('test operator "add" overload (euint4, euint64) => euint64 test 3 (5, 5)', async function () {
    const res = await this.contract1.add_euint4_euint64(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint4, euint64) => euint64 test 4 (8, 6)', async function () {
    const res = await this.contract1.add_euint4_euint64(8n, 6n);
    expect(res).to.equal(14n);
  });

  it('test operator "sub" overload (euint4, euint64) => euint64 test 1 (8, 8)', async function () {
    const res = await this.contract1.sub_euint4_euint64(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint4, euint64) => euint64 test 2 (8, 4)', async function () {
    const res = await this.contract1.sub_euint4_euint64(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint4, euint64) => euint64 test 1 (2, 5)', async function () {
    const res = await this.contract1.mul_euint4_euint64(2n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint4, euint64) => euint64 test 2 (3, 5)', async function () {
    const res = await this.contract1.mul_euint4_euint64(3n, 5n);
    expect(res).to.equal(15n);
  });

  it('test operator "mul" overload (euint4, euint64) => euint64 test 3 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint64(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, euint64) => euint64 test 4 (5, 3)', async function () {
    const res = await this.contract1.mul_euint4_euint64(5n, 3n);
    expect(res).to.equal(15n);
  });

  it('test operator "and" overload (euint4, euint64) => euint64 test 1 (11, 18444970625118669221)', async function () {
    const res = await this.contract1.and_euint4_euint64(11n, 18444970625118669221n);
    expect(res).to.equal(1n);
  });

  it('test operator "and" overload (euint4, euint64) => euint64 test 2 (7, 11)', async function () {
    const res = await this.contract1.and_euint4_euint64(7n, 11n);
    expect(res).to.equal(3n);
  });

  it('test operator "and" overload (euint4, euint64) => euint64 test 3 (11, 11)', async function () {
    const res = await this.contract1.and_euint4_euint64(11n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "and" overload (euint4, euint64) => euint64 test 4 (11, 7)', async function () {
    const res = await this.contract1.and_euint4_euint64(11n, 7n);
    expect(res).to.equal(3n);
  });

  it('test operator "or" overload (euint4, euint64) => euint64 test 1 (5, 18439458059788568419)', async function () {
    const res = await this.contract1.or_euint4_euint64(5n, 18439458059788568419n);
    expect(res).to.equal(18439458059788568423n);
  });

  it('test operator "or" overload (euint4, euint64) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract1.or_euint4_euint64(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint4, euint64) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract1.or_euint4_euint64(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "or" overload (euint4, euint64) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract1.or_euint4_euint64(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint64) => euint64 test 1 (2, 18446366816185499095)', async function () {
    const res = await this.contract1.xor_euint4_euint64(2n, 18446366816185499095n);
    expect(res).to.equal(18446366816185499093n);
  });

  it('test operator "xor" overload (euint4, euint64) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract1.xor_euint4_euint64(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint4, euint64) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract1.xor_euint4_euint64(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint4, euint64) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract1.xor_euint4_euint64(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint4, euint64) => ebool test 1 (9, 18438414163462572393)', async function () {
    const res = await this.contract1.eq_euint4_euint64(9n, 18438414163462572393n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint64) => ebool test 2 (5, 9)', async function () {
    const res = await this.contract1.eq_euint4_euint64(5n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, euint64) => ebool test 3 (9, 9)', async function () {
    const res = await this.contract1.eq_euint4_euint64(9n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint4, euint64) => ebool test 4 (9, 5)', async function () {
    const res = await this.contract1.eq_euint4_euint64(9n, 5n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint64) => ebool test 1 (7, 18441024342807508949)', async function () {
    const res = await this.contract1.ne_euint4_euint64(7n, 18441024342807508949n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint64) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.ne_euint4_euint64(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, euint64) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.ne_euint4_euint64(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, euint64) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.ne_euint4_euint64(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint64) => ebool test 1 (7, 18446430329213146395)', async function () {
    const res = await this.contract1.ge_euint4_euint64(7n, 18446430329213146395n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint64) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.ge_euint4_euint64(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, euint64) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.ge_euint4_euint64(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, euint64) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.ge_euint4_euint64(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint4, euint64) => ebool test 1 (10, 18442574847292216251)', async function () {
    const res = await this.contract1.gt_euint4_euint64(10n, 18442574847292216251n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint64) => ebool test 2 (6, 10)', async function () {
    const res = await this.contract1.gt_euint4_euint64(6n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint64) => ebool test 3 (10, 10)', async function () {
    const res = await this.contract1.gt_euint4_euint64(10n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, euint64) => ebool test 4 (10, 6)', async function () {
    const res = await this.contract1.gt_euint4_euint64(10n, 6n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint64) => ebool test 1 (9, 18445100928210525947)', async function () {
    const res = await this.contract1.le_euint4_euint64(9n, 18445100928210525947n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint64) => ebool test 2 (5, 9)', async function () {
    const res = await this.contract1.le_euint4_euint64(5n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint64) => ebool test 3 (9, 9)', async function () {
    const res = await this.contract1.le_euint4_euint64(9n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, euint64) => ebool test 4 (9, 5)', async function () {
    const res = await this.contract1.le_euint4_euint64(9n, 5n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint64) => ebool test 1 (7, 18445391148064274615)', async function () {
    const res = await this.contract1.lt_euint4_euint64(7n, 18445391148064274615n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint64) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.lt_euint4_euint64(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, euint64) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.lt_euint4_euint64(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, euint64) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.lt_euint4_euint64(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint4, euint64) => euint64 test 1 (12, 18438956406288597713)', async function () {
    const res = await this.contract1.min_euint4_euint64(12n, 18438956406288597713n);
    expect(res).to.equal(12n);
  });

  it('test operator "min" overload (euint4, euint64) => euint64 test 2 (8, 12)', async function () {
    const res = await this.contract1.min_euint4_euint64(8n, 12n);
    expect(res).to.equal(8n);
  });

  it('test operator "min" overload (euint4, euint64) => euint64 test 3 (12, 12)', async function () {
    const res = await this.contract1.min_euint4_euint64(12n, 12n);
    expect(res).to.equal(12n);
  });

  it('test operator "min" overload (euint4, euint64) => euint64 test 4 (12, 8)', async function () {
    const res = await this.contract1.min_euint4_euint64(12n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint64) => euint64 test 1 (5, 18446478225770660877)', async function () {
    const res = await this.contract1.max_euint4_euint64(5n, 18446478225770660877n);
    expect(res).to.equal(18446478225770660877n);
  });

  it('test operator "max" overload (euint4, euint64) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract1.max_euint4_euint64(4n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint64) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract1.max_euint4_euint64(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, euint64) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract1.max_euint4_euint64(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "add" overload (euint4, uint8) => euint4 test 1 (1, 1)', async function () {
    const res = await this.contract1.add_euint4_uint8(1n, 1n);
    expect(res).to.equal(2n);
  });

  it('test operator "add" overload (euint4, uint8) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.add_euint4_uint8(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint4, uint8) => euint4 test 3 (5, 5)', async function () {
    const res = await this.contract1.add_euint4_uint8(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint4, uint8) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.add_euint4_uint8(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (uint8, euint4) => euint4 test 1 (1, 2)', async function () {
    const res = await this.contract1.add_uint8_euint4(1n, 2n);
    expect(res).to.equal(3n);
  });

  it('test operator "add" overload (uint8, euint4) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.add_uint8_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (uint8, euint4) => euint4 test 3 (5, 5)', async function () {
    const res = await this.contract1.add_uint8_euint4(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (uint8, euint4) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.add_uint8_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "sub" overload (euint4, uint8) => euint4 test 1 (10, 10)', async function () {
    const res = await this.contract1.sub_euint4_uint8(10n, 10n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint4, uint8) => euint4 test 2 (10, 6)', async function () {
    const res = await this.contract1.sub_euint4_uint8(10n, 6n);
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint8, euint4) => euint4 test 1 (9, 9)', async function () {
    const res = await this.contract1.sub_uint8_euint4(9n, 9n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint8, euint4) => euint4 test 2 (9, 5)', async function () {
    const res = await this.contract1.sub_uint8_euint4(9n, 5n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint4, uint8) => euint4 test 1 (5, 2)', async function () {
    const res = await this.contract1.mul_euint4_uint8(5n, 2n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint4, uint8) => euint4 test 2 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_uint8(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, uint8) => euint4 test 3 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_uint8(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint4, uint8) => euint4 test 4 (3, 3)', async function () {
    const res = await this.contract1.mul_euint4_uint8(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (uint8, euint4) => euint4 test 1 (3, 3)', async function () {
    const res = await this.contract1.mul_uint8_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (uint8, euint4) => euint4 test 2 (3, 5)', async function () {
    const res = await this.contract1.mul_uint8_euint4(3n, 5n);
    expect(res).to.equal(15n);
  });

  it('test operator "mul" overload (uint8, euint4) => euint4 test 3 (3, 3)', async function () {
    const res = await this.contract1.mul_uint8_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (uint8, euint4) => euint4 test 4 (5, 3)', async function () {
    const res = await this.contract1.mul_uint8_euint4(5n, 3n);
    expect(res).to.equal(15n);
  });

  it('test operator "div" overload (euint4, uint8) => euint4 test 1 (14, 14)', async function () {
    const res = await this.contract1.div_euint4_uint8(14n, 14n);
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint4, uint8) => euint4 test 2 (10, 14)', async function () {
    const res = await this.contract1.div_euint4_uint8(10n, 14n);
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint4, uint8) => euint4 test 3 (14, 14)', async function () {
    const res = await this.contract1.div_euint4_uint8(14n, 14n);
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint4, uint8) => euint4 test 4 (14, 10)', async function () {
    const res = await this.contract1.div_euint4_uint8(14n, 10n);
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint4, uint8) => euint4 test 1 (9, 5)', async function () {
    const res = await this.contract1.rem_euint4_uint8(9n, 5n);
    expect(res).to.equal(4n);
  });

  it('test operator "rem" overload (euint4, uint8) => euint4 test 2 (5, 9)', async function () {
    const res = await this.contract1.rem_euint4_uint8(5n, 9n);
    expect(res).to.equal(5n);
  });

  it('test operator "rem" overload (euint4, uint8) => euint4 test 3 (9, 9)', async function () {
    const res = await this.contract1.rem_euint4_uint8(9n, 9n);
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint4, uint8) => euint4 test 4 (9, 5)', async function () {
    const res = await this.contract1.rem_euint4_uint8(9n, 5n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint4, uint8) => ebool test 1 (4, 1)', async function () {
    const res = await this.contract1.eq_euint4_uint8(4n, 1n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, uint8) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.eq_euint4_uint8(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint4, uint8) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.eq_euint4_uint8(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint4, uint8) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.eq_euint4_uint8(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint4) => ebool test 1 (2, 7)', async function () {
    const res = await this.contract1.eq_uint8_euint4(2n, 7n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.eq_uint8_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.eq_uint8_euint4(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint8, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.eq_uint8_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, uint8) => ebool test 1 (4, 6)', async function () {
    const res = await this.contract1.ne_euint4_uint8(4n, 6n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, uint8) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.ne_euint4_uint8(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint4, uint8) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.ne_euint4_uint8(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint4, uint8) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.ne_euint4_uint8(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint4) => ebool test 1 (3, 14)', async function () {
    const res = await this.contract1.ne_uint8_euint4(3n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint4) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract1.ne_uint8_euint4(10n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint4) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract1.ne_uint8_euint4(14n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint8, euint4) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract1.ne_uint8_euint4(14n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, uint8) => ebool test 1 (13, 2)', async function () {
    const res = await this.contract1.ge_euint4_uint8(13n, 2n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, uint8) => ebool test 2 (9, 13)', async function () {
    const res = await this.contract1.ge_euint4_uint8(9n, 13n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint4, uint8) => ebool test 3 (13, 13)', async function () {
    const res = await this.contract1.ge_euint4_uint8(13n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint4, uint8) => ebool test 4 (13, 9)', async function () {
    const res = await this.contract1.ge_euint4_uint8(13n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint4) => ebool test 1 (1, 12)', async function () {
    const res = await this.contract1.ge_uint8_euint4(1n, 12n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint8, euint4) => ebool test 2 (8, 12)', async function () {
    const res = await this.contract1.ge_uint8_euint4(8n, 12n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint8, euint4) => ebool test 3 (12, 12)', async function () {
    const res = await this.contract1.ge_uint8_euint4(12n, 12n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint4) => ebool test 4 (12, 8)', async function () {
    const res = await this.contract1.ge_uint8_euint4(12n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint4, uint8) => ebool test 1 (14, 13)', async function () {
    const res = await this.contract1.gt_euint4_uint8(14n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint4, uint8) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract1.gt_euint4_uint8(10n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, uint8) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract1.gt_euint4_uint8(14n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint4, uint8) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract1.gt_euint4_uint8(14n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint8, euint4) => ebool test 1 (1, 2)', async function () {
    const res = await this.contract1.gt_uint8_euint4(1n, 2n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract1.gt_uint8_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract1.gt_uint8_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract1.gt_uint8_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, uint8) => ebool test 1 (13, 9)', async function () {
    const res = await this.contract1.le_euint4_uint8(13n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint4, uint8) => ebool test 2 (9, 13)', async function () {
    const res = await this.contract1.le_euint4_uint8(9n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, uint8) => ebool test 3 (13, 13)', async function () {
    const res = await this.contract1.le_euint4_uint8(13n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint4, uint8) => ebool test 4 (13, 9)', async function () {
    const res = await this.contract1.le_euint4_uint8(13n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint8, euint4) => ebool test 1 (8, 13)', async function () {
    const res = await this.contract1.le_uint8_euint4(8n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint4) => ebool test 2 (9, 13)', async function () {
    const res = await this.contract1.le_uint8_euint4(9n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint4) => ebool test 3 (13, 13)', async function () {
    const res = await this.contract1.le_uint8_euint4(13n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint4) => ebool test 4 (13, 9)', async function () {
    const res = await this.contract1.le_uint8_euint4(13n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, uint8) => ebool test 1 (13, 1)', async function () {
    const res = await this.contract1.lt_euint4_uint8(13n, 1n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, uint8) => ebool test 2 (9, 13)', async function () {
    const res = await this.contract1.lt_euint4_uint8(9n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint4, uint8) => ebool test 3 (13, 13)', async function () {
    const res = await this.contract1.lt_euint4_uint8(13n, 13n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint4, uint8) => ebool test 4 (13, 9)', async function () {
    const res = await this.contract1.lt_euint4_uint8(13n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint4) => ebool test 1 (11, 14)', async function () {
    const res = await this.contract1.lt_uint8_euint4(11n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint8, euint4) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract1.lt_uint8_euint4(10n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint8, euint4) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract1.lt_uint8_euint4(14n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint4) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract1.lt_uint8_euint4(14n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint4, uint8) => euint4 test 1 (8, 7)', async function () {
    const res = await this.contract1.min_euint4_uint8(8n, 7n);
    expect(res).to.equal(7n);
  });

  it('test operator "min" overload (euint4, uint8) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.min_euint4_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "min" overload (euint4, uint8) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract1.min_euint4_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "min" overload (euint4, uint8) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.min_euint4_uint8(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "min" overload (uint8, euint4) => euint4 test 1 (5, 3)', async function () {
    const res = await this.contract1.min_uint8_euint4(5n, 3n);
    expect(res).to.equal(3n);
  });

  it('test operator "min" overload (uint8, euint4) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.min_uint8_euint4(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "min" overload (uint8, euint4) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract1.min_uint8_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "min" overload (uint8, euint4) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.min_uint8_euint4(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "max" overload (euint4, uint8) => euint4 test 1 (1, 2)', async function () {
    const res = await this.contract1.max_euint4_uint8(1n, 2n);
    expect(res).to.equal(2n);
  });

  it('test operator "max" overload (euint4, uint8) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract1.max_euint4_uint8(4n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, uint8) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract1.max_euint4_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint4, uint8) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract1.max_euint4_uint8(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (uint8, euint4) => euint4 test 1 (10, 11)', async function () {
    const res = await this.contract1.max_uint8_euint4(10n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "max" overload (uint8, euint4) => euint4 test 2 (7, 11)', async function () {
    const res = await this.contract1.max_uint8_euint4(7n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "max" overload (uint8, euint4) => euint4 test 3 (11, 11)', async function () {
    const res = await this.contract1.max_uint8_euint4(11n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "max" overload (uint8, euint4) => euint4 test 4 (11, 7)', async function () {
    const res = await this.contract1.max_uint8_euint4(11n, 7n);
    expect(res).to.equal(11n);
  });

  it('test operator "add" overload (euint8, euint4) => euint8 test 1 (10, 2)', async function () {
    const res = await this.contract1.add_euint8_euint4(10n, 2n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint8, euint4) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract1.add_euint8_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint8, euint4) => euint8 test 3 (5, 5)', async function () {
    const res = await this.contract1.add_euint8_euint4(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint8, euint4) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract1.add_euint8_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "sub" overload (euint8, euint4) => euint8 test 1 (9, 9)', async function () {
    const res = await this.contract1.sub_euint8_euint4(9n, 9n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint8, euint4) => euint8 test 2 (9, 5)', async function () {
    const res = await this.contract1.sub_euint8_euint4(9n, 5n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint8, euint4) => euint8 test 1 (5, 2)', async function () {
    const res = await this.contract1.mul_euint8_euint4(5n, 2n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint8, euint4) => euint8 test 2 (3, 5)', async function () {
    const res = await this.contract1.mul_euint8_euint4(3n, 5n);
    expect(res).to.equal(15n);
  });

  it('test operator "mul" overload (euint8, euint4) => euint8 test 3 (3, 3)', async function () {
    const res = await this.contract1.mul_euint8_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint8, euint4) => euint8 test 4 (5, 3)', async function () {
    const res = await this.contract1.mul_euint8_euint4(5n, 3n);
    expect(res).to.equal(15n);
  });

  it('test operator "and" overload (euint8, euint4) => euint8 test 1 (185, 9)', async function () {
    const res = await this.contract1.and_euint8_euint4(185n, 9n);
    expect(res).to.equal(9n);
  });

  it('test operator "and" overload (euint8, euint4) => euint8 test 2 (5, 9)', async function () {
    const res = await this.contract1.and_euint8_euint4(5n, 9n);
    expect(res).to.equal(1n);
  });

  it('test operator "and" overload (euint8, euint4) => euint8 test 3 (9, 9)', async function () {
    const res = await this.contract1.and_euint8_euint4(9n, 9n);
    expect(res).to.equal(9n);
  });

  it('test operator "and" overload (euint8, euint4) => euint8 test 4 (9, 5)', async function () {
    const res = await this.contract1.and_euint8_euint4(9n, 5n);
    expect(res).to.equal(1n);
  });

  it('test operator "or" overload (euint8, euint4) => euint8 test 1 (37, 6)', async function () {
    const res = await this.contract1.or_euint8_euint4(37n, 6n);
    expect(res).to.equal(39n);
  });

  it('test operator "or" overload (euint8, euint4) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract1.or_euint8_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint8, euint4) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract1.or_euint8_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "or" overload (euint8, euint4) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract1.or_euint8_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint8, euint4) => euint8 test 1 (253, 3)', async function () {
    const res = await this.contract1.xor_euint8_euint4(253n, 3n);
    expect(res).to.equal(254n);
  });

  it('test operator "xor" overload (euint8, euint4) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract1.xor_euint8_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint8, euint4) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract1.xor_euint8_euint4(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint8, euint4) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract1.xor_euint8_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint8, euint4) => ebool test 1 (37, 7)', async function () {
    const res = await this.contract2.eq_euint8_euint4(37n, 7n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.eq_euint8_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.eq_euint8_euint4(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint8, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.eq_euint8_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint4) => ebool test 1 (145, 14)', async function () {
    const res = await this.contract2.ne_euint8_euint4(145n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint4) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract2.ne_euint8_euint4(10n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint4) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract2.ne_euint8_euint4(14n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint4) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract2.ne_euint8_euint4(14n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint4) => ebool test 1 (85, 12)', async function () {
    const res = await this.contract2.ge_euint8_euint4(85n, 12n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint4) => ebool test 2 (8, 12)', async function () {
    const res = await this.contract2.ge_euint8_euint4(8n, 12n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint4) => ebool test 3 (12, 12)', async function () {
    const res = await this.contract2.ge_euint8_euint4(12n, 12n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint4) => ebool test 4 (12, 8)', async function () {
    const res = await this.contract2.ge_euint8_euint4(12n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, euint4) => ebool test 1 (248, 2)', async function () {
    const res = await this.contract2.gt_euint8_euint4(248n, 2n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.gt_euint8_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.gt_euint8_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.gt_euint8_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint4) => ebool test 1 (92, 13)', async function () {
    const res = await this.contract2.le_euint8_euint4(92n, 13n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint8, euint4) => ebool test 2 (9, 13)', async function () {
    const res = await this.contract2.le_euint8_euint4(9n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint4) => ebool test 3 (13, 13)', async function () {
    const res = await this.contract2.le_euint8_euint4(13n, 13n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint4) => ebool test 4 (13, 9)', async function () {
    const res = await this.contract2.le_euint8_euint4(13n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint4) => ebool test 1 (195, 14)', async function () {
    const res = await this.contract2.lt_euint8_euint4(195n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint4) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract2.lt_euint8_euint4(10n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint4) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract2.lt_euint8_euint4(14n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint4) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract2.lt_euint8_euint4(14n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint8, euint4) => euint8 test 1 (55, 3)', async function () {
    const res = await this.contract2.min_euint8_euint4(55n, 3n);
    expect(res).to.equal(3n);
  });

  it('test operator "min" overload (euint8, euint4) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract2.min_euint8_euint4(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "min" overload (euint8, euint4) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract2.min_euint8_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "min" overload (euint8, euint4) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract2.min_euint8_euint4(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "max" overload (euint8, euint4) => euint8 test 1 (41, 11)', async function () {
    const res = await this.contract2.max_euint8_euint4(41n, 11n);
    expect(res).to.equal(41n);
  });

  it('test operator "max" overload (euint8, euint4) => euint8 test 2 (7, 11)', async function () {
    const res = await this.contract2.max_euint8_euint4(7n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "max" overload (euint8, euint4) => euint8 test 3 (11, 11)', async function () {
    const res = await this.contract2.max_euint8_euint4(11n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "max" overload (euint8, euint4) => euint8 test 4 (11, 7)', async function () {
    const res = await this.contract2.max_euint8_euint4(11n, 7n);
    expect(res).to.equal(11n);
  });

  it('test operator "add" overload (euint8, euint8) => euint8 test 1 (56, 89)', async function () {
    const res = await this.contract2.add_euint8_euint8(56n, 89n);
    expect(res).to.equal(145n);
  });

  it('test operator "add" overload (euint8, euint8) => euint8 test 2 (52, 56)', async function () {
    const res = await this.contract2.add_euint8_euint8(52n, 56n);
    expect(res).to.equal(108n);
  });

  it('test operator "add" overload (euint8, euint8) => euint8 test 3 (56, 56)', async function () {
    const res = await this.contract2.add_euint8_euint8(56n, 56n);
    expect(res).to.equal(112n);
  });

  it('test operator "add" overload (euint8, euint8) => euint8 test 4 (56, 52)', async function () {
    const res = await this.contract2.add_euint8_euint8(56n, 52n);
    expect(res).to.equal(108n);
  });

  it('test operator "sub" overload (euint8, euint8) => euint8 test 1 (64, 64)', async function () {
    const res = await this.contract2.sub_euint8_euint8(64n, 64n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint8, euint8) => euint8 test 2 (64, 60)', async function () {
    const res = await this.contract2.sub_euint8_euint8(64n, 60n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint8, euint8) => euint8 test 1 (14, 15)', async function () {
    const res = await this.contract2.mul_euint8_euint8(14n, 15n);
    expect(res).to.equal(210n);
  });

  it('test operator "mul" overload (euint8, euint8) => euint8 test 2 (14, 14)', async function () {
    const res = await this.contract2.mul_euint8_euint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "mul" overload (euint8, euint8) => euint8 test 3 (14, 14)', async function () {
    const res = await this.contract2.mul_euint8_euint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "mul" overload (euint8, euint8) => euint8 test 4 (14, 14)', async function () {
    const res = await this.contract2.mul_euint8_euint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "and" overload (euint8, euint8) => euint8 test 1 (68, 245)', async function () {
    const res = await this.contract2.and_euint8_euint8(68n, 245n);
    expect(res).to.equal(68n);
  });

  it('test operator "and" overload (euint8, euint8) => euint8 test 2 (64, 68)', async function () {
    const res = await this.contract2.and_euint8_euint8(64n, 68n);
    expect(res).to.equal(64n);
  });

  it('test operator "and" overload (euint8, euint8) => euint8 test 3 (68, 68)', async function () {
    const res = await this.contract2.and_euint8_euint8(68n, 68n);
    expect(res).to.equal(68n);
  });

  it('test operator "and" overload (euint8, euint8) => euint8 test 4 (68, 64)', async function () {
    const res = await this.contract2.and_euint8_euint8(68n, 64n);
    expect(res).to.equal(64n);
  });

  it('test operator "or" overload (euint8, euint8) => euint8 test 1 (245, 47)', async function () {
    const res = await this.contract2.or_euint8_euint8(245n, 47n);
    expect(res).to.equal(255n);
  });

  it('test operator "or" overload (euint8, euint8) => euint8 test 2 (43, 47)', async function () {
    const res = await this.contract2.or_euint8_euint8(43n, 47n);
    expect(res).to.equal(47n);
  });

  it('test operator "or" overload (euint8, euint8) => euint8 test 3 (47, 47)', async function () {
    const res = await this.contract2.or_euint8_euint8(47n, 47n);
    expect(res).to.equal(47n);
  });

  it('test operator "or" overload (euint8, euint8) => euint8 test 4 (47, 43)', async function () {
    const res = await this.contract2.or_euint8_euint8(47n, 43n);
    expect(res).to.equal(47n);
  });

  it('test operator "xor" overload (euint8, euint8) => euint8 test 1 (213, 62)', async function () {
    const res = await this.contract2.xor_euint8_euint8(213n, 62n);
    expect(res).to.equal(235n);
  });

  it('test operator "xor" overload (euint8, euint8) => euint8 test 2 (58, 62)', async function () {
    const res = await this.contract2.xor_euint8_euint8(58n, 62n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint8, euint8) => euint8 test 3 (62, 62)', async function () {
    const res = await this.contract2.xor_euint8_euint8(62n, 62n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint8, euint8) => euint8 test 4 (62, 58)', async function () {
    const res = await this.contract2.xor_euint8_euint8(62n, 58n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint8, euint8) => ebool test 1 (51, 70)', async function () {
    const res = await this.contract2.eq_euint8_euint8(51n, 70n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint8) => ebool test 2 (47, 51)', async function () {
    const res = await this.contract2.eq_euint8_euint8(47n, 51n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint8) => ebool test 3 (51, 51)', async function () {
    const res = await this.contract2.eq_euint8_euint8(51n, 51n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint8, euint8) => ebool test 4 (51, 47)', async function () {
    const res = await this.contract2.eq_euint8_euint8(51n, 47n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint8) => ebool test 1 (236, 26)', async function () {
    const res = await this.contract2.ne_euint8_euint8(236n, 26n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint8) => ebool test 2 (22, 26)', async function () {
    const res = await this.contract2.ne_euint8_euint8(22n, 26n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint8) => ebool test 3 (26, 26)', async function () {
    const res = await this.contract2.ne_euint8_euint8(26n, 26n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint8) => ebool test 4 (26, 22)', async function () {
    const res = await this.contract2.ne_euint8_euint8(26n, 22n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint8) => ebool test 1 (89, 227)', async function () {
    const res = await this.contract2.ge_euint8_euint8(89n, 227n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint8) => ebool test 2 (85, 89)', async function () {
    const res = await this.contract2.ge_euint8_euint8(85n, 89n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint8) => ebool test 3 (89, 89)', async function () {
    const res = await this.contract2.ge_euint8_euint8(89n, 89n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint8) => ebool test 4 (89, 85)', async function () {
    const res = await this.contract2.ge_euint8_euint8(89n, 85n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, euint8) => ebool test 1 (247, 56)', async function () {
    const res = await this.contract2.gt_euint8_euint8(247n, 56n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, euint8) => ebool test 2 (52, 56)', async function () {
    const res = await this.contract2.gt_euint8_euint8(52n, 56n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint8) => ebool test 3 (56, 56)', async function () {
    const res = await this.contract2.gt_euint8_euint8(56n, 56n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint8) => ebool test 4 (56, 52)', async function () {
    const res = await this.contract2.gt_euint8_euint8(56n, 52n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint8) => ebool test 1 (182, 238)', async function () {
    const res = await this.contract2.le_euint8_euint8(182n, 238n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint8) => ebool test 2 (178, 182)', async function () {
    const res = await this.contract2.le_euint8_euint8(178n, 182n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint8) => ebool test 3 (182, 182)', async function () {
    const res = await this.contract2.le_euint8_euint8(182n, 182n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint8) => ebool test 4 (182, 178)', async function () {
    const res = await this.contract2.le_euint8_euint8(182n, 178n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint8) => ebool test 1 (44, 62)', async function () {
    const res = await this.contract2.lt_euint8_euint8(44n, 62n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint8) => ebool test 2 (40, 44)', async function () {
    const res = await this.contract2.lt_euint8_euint8(40n, 44n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint8) => ebool test 3 (44, 44)', async function () {
    const res = await this.contract2.lt_euint8_euint8(44n, 44n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint8) => ebool test 4 (44, 40)', async function () {
    const res = await this.contract2.lt_euint8_euint8(44n, 40n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint8, euint8) => euint8 test 1 (254, 73)', async function () {
    const res = await this.contract2.min_euint8_euint8(254n, 73n);
    expect(res).to.equal(73n);
  });

  it('test operator "min" overload (euint8, euint8) => euint8 test 2 (69, 73)', async function () {
    const res = await this.contract2.min_euint8_euint8(69n, 73n);
    expect(res).to.equal(69n);
  });

  it('test operator "min" overload (euint8, euint8) => euint8 test 3 (73, 73)', async function () {
    const res = await this.contract2.min_euint8_euint8(73n, 73n);
    expect(res).to.equal(73n);
  });

  it('test operator "min" overload (euint8, euint8) => euint8 test 4 (73, 69)', async function () {
    const res = await this.contract2.min_euint8_euint8(73n, 69n);
    expect(res).to.equal(69n);
  });

  it('test operator "max" overload (euint8, euint8) => euint8 test 1 (227, 29)', async function () {
    const res = await this.contract2.max_euint8_euint8(227n, 29n);
    expect(res).to.equal(227n);
  });

  it('test operator "max" overload (euint8, euint8) => euint8 test 2 (25, 29)', async function () {
    const res = await this.contract2.max_euint8_euint8(25n, 29n);
    expect(res).to.equal(29n);
  });

  it('test operator "max" overload (euint8, euint8) => euint8 test 3 (29, 29)', async function () {
    const res = await this.contract2.max_euint8_euint8(29n, 29n);
    expect(res).to.equal(29n);
  });

  it('test operator "max" overload (euint8, euint8) => euint8 test 4 (29, 25)', async function () {
    const res = await this.contract2.max_euint8_euint8(29n, 25n);
    expect(res).to.equal(29n);
  });

  it('test operator "add" overload (euint8, euint16) => euint16 test 1 (2, 246)', async function () {
    const res = await this.contract2.add_euint8_euint16(2n, 246n);
    expect(res).to.equal(248n);
  });

  it('test operator "add" overload (euint8, euint16) => euint16 test 2 (104, 106)', async function () {
    const res = await this.contract2.add_euint8_euint16(104n, 106n);
    expect(res).to.equal(210n);
  });

  it('test operator "add" overload (euint8, euint16) => euint16 test 3 (106, 106)', async function () {
    const res = await this.contract2.add_euint8_euint16(106n, 106n);
    expect(res).to.equal(212n);
  });

  it('test operator "add" overload (euint8, euint16) => euint16 test 4 (106, 104)', async function () {
    const res = await this.contract2.add_euint8_euint16(106n, 104n);
    expect(res).to.equal(210n);
  });

  it('test operator "sub" overload (euint8, euint16) => euint16 test 1 (17, 17)', async function () {
    const res = await this.contract2.sub_euint8_euint16(17n, 17n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint8, euint16) => euint16 test 2 (17, 13)', async function () {
    const res = await this.contract2.sub_euint8_euint16(17n, 13n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint8, euint16) => euint16 test 1 (2, 56)', async function () {
    const res = await this.contract2.mul_euint8_euint16(2n, 56n);
    expect(res).to.equal(112n);
  });

  it('test operator "mul" overload (euint8, euint16) => euint16 test 2 (10, 10)', async function () {
    const res = await this.contract2.mul_euint8_euint16(10n, 10n);
    expect(res).to.equal(100n);
  });

  it('test operator "mul" overload (euint8, euint16) => euint16 test 3 (10, 10)', async function () {
    const res = await this.contract2.mul_euint8_euint16(10n, 10n);
    expect(res).to.equal(100n);
  });

  it('test operator "mul" overload (euint8, euint16) => euint16 test 4 (10, 10)', async function () {
    const res = await this.contract2.mul_euint8_euint16(10n, 10n);
    expect(res).to.equal(100n);
  });

  it('test operator "and" overload (euint8, euint16) => euint16 test 1 (140, 15292)', async function () {
    const res = await this.contract2.and_euint8_euint16(140n, 15292n);
    expect(res).to.equal(140n);
  });

  it('test operator "and" overload (euint8, euint16) => euint16 test 2 (136, 140)', async function () {
    const res = await this.contract2.and_euint8_euint16(136n, 140n);
    expect(res).to.equal(136n);
  });

  it('test operator "and" overload (euint8, euint16) => euint16 test 3 (140, 140)', async function () {
    const res = await this.contract2.and_euint8_euint16(140n, 140n);
    expect(res).to.equal(140n);
  });

  it('test operator "and" overload (euint8, euint16) => euint16 test 4 (140, 136)', async function () {
    const res = await this.contract2.and_euint8_euint16(140n, 136n);
    expect(res).to.equal(136n);
  });

  it('test operator "or" overload (euint8, euint16) => euint16 test 1 (140, 39215)', async function () {
    const res = await this.contract2.or_euint8_euint16(140n, 39215n);
    expect(res).to.equal(39343n);
  });

  it('test operator "or" overload (euint8, euint16) => euint16 test 2 (136, 140)', async function () {
    const res = await this.contract2.or_euint8_euint16(136n, 140n);
    expect(res).to.equal(140n);
  });

  it('test operator "or" overload (euint8, euint16) => euint16 test 3 (140, 140)', async function () {
    const res = await this.contract2.or_euint8_euint16(140n, 140n);
    expect(res).to.equal(140n);
  });

  it('test operator "or" overload (euint8, euint16) => euint16 test 4 (140, 136)', async function () {
    const res = await this.contract2.or_euint8_euint16(140n, 136n);
    expect(res).to.equal(140n);
  });

  it('test operator "xor" overload (euint8, euint16) => euint16 test 1 (2, 64716)', async function () {
    const res = await this.contract2.xor_euint8_euint16(2n, 64716n);
    expect(res).to.equal(64718n);
  });

  it('test operator "xor" overload (euint8, euint16) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract2.xor_euint8_euint16(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint8, euint16) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract2.xor_euint8_euint16(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint8, euint16) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract2.xor_euint8_euint16(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint8, euint16) => ebool test 1 (22, 5993)', async function () {
    const res = await this.contract2.eq_euint8_euint16(22n, 5993n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint16) => ebool test 2 (18, 22)', async function () {
    const res = await this.contract2.eq_euint8_euint16(18n, 22n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint16) => ebool test 3 (22, 22)', async function () {
    const res = await this.contract2.eq_euint8_euint16(22n, 22n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint8, euint16) => ebool test 4 (22, 18)', async function () {
    const res = await this.contract2.eq_euint8_euint16(22n, 18n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint16) => ebool test 1 (201, 56595)', async function () {
    const res = await this.contract2.ne_euint8_euint16(201n, 56595n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint16) => ebool test 2 (197, 201)', async function () {
    const res = await this.contract2.ne_euint8_euint16(197n, 201n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint16) => ebool test 3 (201, 201)', async function () {
    const res = await this.contract2.ne_euint8_euint16(201n, 201n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint16) => ebool test 4 (201, 197)', async function () {
    const res = await this.contract2.ne_euint8_euint16(201n, 197n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint16) => ebool test 1 (12, 41571)', async function () {
    const res = await this.contract2.ge_euint8_euint16(12n, 41571n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint16) => ebool test 2 (8, 12)', async function () {
    const res = await this.contract2.ge_euint8_euint16(8n, 12n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint16) => ebool test 3 (12, 12)', async function () {
    const res = await this.contract2.ge_euint8_euint16(12n, 12n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint16) => ebool test 4 (12, 8)', async function () {
    const res = await this.contract2.ge_euint8_euint16(12n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, euint16) => ebool test 1 (67, 34612)', async function () {
    const res = await this.contract2.gt_euint8_euint16(67n, 34612n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint16) => ebool test 2 (63, 67)', async function () {
    const res = await this.contract2.gt_euint8_euint16(63n, 67n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint16) => ebool test 3 (67, 67)', async function () {
    const res = await this.contract2.gt_euint8_euint16(67n, 67n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint16) => ebool test 4 (67, 63)', async function () {
    const res = await this.contract2.gt_euint8_euint16(67n, 63n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint16) => ebool test 1 (157, 25391)', async function () {
    const res = await this.contract2.le_euint8_euint16(157n, 25391n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint16) => ebool test 2 (153, 157)', async function () {
    const res = await this.contract2.le_euint8_euint16(153n, 157n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint16) => ebool test 3 (157, 157)', async function () {
    const res = await this.contract2.le_euint8_euint16(157n, 157n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint16) => ebool test 4 (157, 153)', async function () {
    const res = await this.contract2.le_euint8_euint16(157n, 153n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint16) => ebool test 1 (115, 9566)', async function () {
    const res = await this.contract2.lt_euint8_euint16(115n, 9566n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint16) => ebool test 2 (111, 115)', async function () {
    const res = await this.contract2.lt_euint8_euint16(111n, 115n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint16) => ebool test 3 (115, 115)', async function () {
    const res = await this.contract2.lt_euint8_euint16(115n, 115n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint16) => ebool test 4 (115, 111)', async function () {
    const res = await this.contract2.lt_euint8_euint16(115n, 111n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint8, euint16) => euint16 test 1 (59, 17033)', async function () {
    const res = await this.contract2.min_euint8_euint16(59n, 17033n);
    expect(res).to.equal(59n);
  });

  it('test operator "min" overload (euint8, euint16) => euint16 test 2 (55, 59)', async function () {
    const res = await this.contract2.min_euint8_euint16(55n, 59n);
    expect(res).to.equal(55n);
  });

  it('test operator "min" overload (euint8, euint16) => euint16 test 3 (59, 59)', async function () {
    const res = await this.contract2.min_euint8_euint16(59n, 59n);
    expect(res).to.equal(59n);
  });

  it('test operator "min" overload (euint8, euint16) => euint16 test 4 (59, 55)', async function () {
    const res = await this.contract2.min_euint8_euint16(59n, 55n);
    expect(res).to.equal(55n);
  });

  it('test operator "max" overload (euint8, euint16) => euint16 test 1 (76, 60931)', async function () {
    const res = await this.contract2.max_euint8_euint16(76n, 60931n);
    expect(res).to.equal(60931n);
  });

  it('test operator "max" overload (euint8, euint16) => euint16 test 2 (72, 76)', async function () {
    const res = await this.contract2.max_euint8_euint16(72n, 76n);
    expect(res).to.equal(76n);
  });

  it('test operator "max" overload (euint8, euint16) => euint16 test 3 (76, 76)', async function () {
    const res = await this.contract2.max_euint8_euint16(76n, 76n);
    expect(res).to.equal(76n);
  });

  it('test operator "max" overload (euint8, euint16) => euint16 test 4 (76, 72)', async function () {
    const res = await this.contract2.max_euint8_euint16(76n, 72n);
    expect(res).to.equal(76n);
  });

  it('test operator "add" overload (euint8, euint32) => euint32 test 1 (2, 131)', async function () {
    const res = await this.contract2.add_euint8_euint32(2n, 131n);
    expect(res).to.equal(133n);
  });

  it('test operator "add" overload (euint8, euint32) => euint32 test 2 (88, 92)', async function () {
    const res = await this.contract2.add_euint8_euint32(88n, 92n);
    expect(res).to.equal(180n);
  });

  it('test operator "add" overload (euint8, euint32) => euint32 test 3 (92, 92)', async function () {
    const res = await this.contract2.add_euint8_euint32(92n, 92n);
    expect(res).to.equal(184n);
  });

  it('test operator "add" overload (euint8, euint32) => euint32 test 4 (92, 88)', async function () {
    const res = await this.contract2.add_euint8_euint32(92n, 88n);
    expect(res).to.equal(180n);
  });

  it('test operator "sub" overload (euint8, euint32) => euint32 test 1 (10, 10)', async function () {
    const res = await this.contract2.sub_euint8_euint32(10n, 10n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint8, euint32) => euint32 test 2 (10, 6)', async function () {
    const res = await this.contract2.sub_euint8_euint32(10n, 6n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint8, euint32) => euint32 test 1 (2, 79)', async function () {
    const res = await this.contract2.mul_euint8_euint32(2n, 79n);
    expect(res).to.equal(158n);
  });

  it('test operator "mul" overload (euint8, euint32) => euint32 test 2 (10, 11)', async function () {
    const res = await this.contract2.mul_euint8_euint32(10n, 11n);
    expect(res).to.equal(110n);
  });

  it('test operator "mul" overload (euint8, euint32) => euint32 test 3 (11, 11)', async function () {
    const res = await this.contract2.mul_euint8_euint32(11n, 11n);
    expect(res).to.equal(121n);
  });

  it('test operator "mul" overload (euint8, euint32) => euint32 test 4 (11, 10)', async function () {
    const res = await this.contract2.mul_euint8_euint32(11n, 10n);
    expect(res).to.equal(110n);
  });

  it('test operator "and" overload (euint8, euint32) => euint32 test 1 (39, 58691136)', async function () {
    const res = await this.contract2.and_euint8_euint32(39n, 58691136n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint8, euint32) => euint32 test 2 (35, 39)', async function () {
    const res = await this.contract2.and_euint8_euint32(35n, 39n);
    expect(res).to.equal(35n);
  });

  it('test operator "and" overload (euint8, euint32) => euint32 test 3 (39, 39)', async function () {
    const res = await this.contract2.and_euint8_euint32(39n, 39n);
    expect(res).to.equal(39n);
  });

  it('test operator "and" overload (euint8, euint32) => euint32 test 4 (39, 35)', async function () {
    const res = await this.contract2.and_euint8_euint32(39n, 35n);
    expect(res).to.equal(35n);
  });

  it('test operator "or" overload (euint8, euint32) => euint32 test 1 (99, 1264632675)', async function () {
    const res = await this.contract2.or_euint8_euint32(99n, 1264632675n);
    expect(res).to.equal(1264632675n);
  });

  it('test operator "or" overload (euint8, euint32) => euint32 test 2 (95, 99)', async function () {
    const res = await this.contract2.or_euint8_euint32(95n, 99n);
    expect(res).to.equal(127n);
  });

  it('test operator "or" overload (euint8, euint32) => euint32 test 3 (99, 99)', async function () {
    const res = await this.contract2.or_euint8_euint32(99n, 99n);
    expect(res).to.equal(99n);
  });

  it('test operator "or" overload (euint8, euint32) => euint32 test 4 (99, 95)', async function () {
    const res = await this.contract2.or_euint8_euint32(99n, 95n);
    expect(res).to.equal(127n);
  });

  it('test operator "xor" overload (euint8, euint32) => euint32 test 1 (184, 3590065955)', async function () {
    const res = await this.contract2.xor_euint8_euint32(184n, 3590065955n);
    expect(res).to.equal(3590066075n);
  });

  it('test operator "xor" overload (euint8, euint32) => euint32 test 2 (180, 184)', async function () {
    const res = await this.contract2.xor_euint8_euint32(180n, 184n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint8, euint32) => euint32 test 3 (184, 184)', async function () {
    const res = await this.contract2.xor_euint8_euint32(184n, 184n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint8, euint32) => euint32 test 4 (184, 180)', async function () {
    const res = await this.contract2.xor_euint8_euint32(184n, 180n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint8, euint32) => ebool test 1 (110, 224862953)', async function () {
    const res = await this.contract2.eq_euint8_euint32(110n, 224862953n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint32) => ebool test 2 (106, 110)', async function () {
    const res = await this.contract2.eq_euint8_euint32(106n, 110n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint32) => ebool test 3 (110, 110)', async function () {
    const res = await this.contract2.eq_euint8_euint32(110n, 110n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint8, euint32) => ebool test 4 (110, 106)', async function () {
    const res = await this.contract2.eq_euint8_euint32(110n, 106n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint32) => ebool test 1 (189, 472792825)', async function () {
    const res = await this.contract2.ne_euint8_euint32(189n, 472792825n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint32) => ebool test 2 (185, 189)', async function () {
    const res = await this.contract2.ne_euint8_euint32(185n, 189n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint32) => ebool test 3 (189, 189)', async function () {
    const res = await this.contract2.ne_euint8_euint32(189n, 189n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint32) => ebool test 4 (189, 185)', async function () {
    const res = await this.contract2.ne_euint8_euint32(189n, 185n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint32) => ebool test 1 (222, 4025894176)', async function () {
    const res = await this.contract2.ge_euint8_euint32(222n, 4025894176n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint32) => ebool test 2 (218, 222)', async function () {
    const res = await this.contract2.ge_euint8_euint32(218n, 222n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint32) => ebool test 3 (222, 222)', async function () {
    const res = await this.contract2.ge_euint8_euint32(222n, 222n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint32) => ebool test 4 (222, 218)', async function () {
    const res = await this.contract2.ge_euint8_euint32(222n, 218n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, euint32) => ebool test 1 (193, 1536979513)', async function () {
    const res = await this.contract2.gt_euint8_euint32(193n, 1536979513n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint32) => ebool test 2 (189, 193)', async function () {
    const res = await this.contract2.gt_euint8_euint32(189n, 193n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint32) => ebool test 3 (193, 193)', async function () {
    const res = await this.contract2.gt_euint8_euint32(193n, 193n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint32) => ebool test 4 (193, 189)', async function () {
    const res = await this.contract2.gt_euint8_euint32(193n, 189n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint32) => ebool test 1 (217, 193633124)', async function () {
    const res = await this.contract2.le_euint8_euint32(217n, 193633124n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint32) => ebool test 2 (213, 217)', async function () {
    const res = await this.contract2.le_euint8_euint32(213n, 217n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint32) => ebool test 3 (217, 217)', async function () {
    const res = await this.contract2.le_euint8_euint32(217n, 217n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint32) => ebool test 4 (217, 213)', async function () {
    const res = await this.contract2.le_euint8_euint32(217n, 213n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint32) => ebool test 1 (97, 73387652)', async function () {
    const res = await this.contract2.lt_euint8_euint32(97n, 73387652n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint32) => ebool test 2 (93, 97)', async function () {
    const res = await this.contract2.lt_euint8_euint32(93n, 97n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint32) => ebool test 3 (97, 97)', async function () {
    const res = await this.contract2.lt_euint8_euint32(97n, 97n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint32) => ebool test 4 (97, 93)', async function () {
    const res = await this.contract2.lt_euint8_euint32(97n, 93n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint8, euint32) => euint32 test 1 (47, 1833760772)', async function () {
    const res = await this.contract2.min_euint8_euint32(47n, 1833760772n);
    expect(res).to.equal(47n);
  });

  it('test operator "min" overload (euint8, euint32) => euint32 test 2 (43, 47)', async function () {
    const res = await this.contract2.min_euint8_euint32(43n, 47n);
    expect(res).to.equal(43n);
  });

  it('test operator "min" overload (euint8, euint32) => euint32 test 3 (47, 47)', async function () {
    const res = await this.contract2.min_euint8_euint32(47n, 47n);
    expect(res).to.equal(47n);
  });

  it('test operator "min" overload (euint8, euint32) => euint32 test 4 (47, 43)', async function () {
    const res = await this.contract2.min_euint8_euint32(47n, 43n);
    expect(res).to.equal(43n);
  });

  it('test operator "max" overload (euint8, euint32) => euint32 test 1 (103, 990460263)', async function () {
    const res = await this.contract2.max_euint8_euint32(103n, 990460263n);
    expect(res).to.equal(990460263n);
  });

  it('test operator "max" overload (euint8, euint32) => euint32 test 2 (99, 103)', async function () {
    const res = await this.contract2.max_euint8_euint32(99n, 103n);
    expect(res).to.equal(103n);
  });

  it('test operator "max" overload (euint8, euint32) => euint32 test 3 (103, 103)', async function () {
    const res = await this.contract2.max_euint8_euint32(103n, 103n);
    expect(res).to.equal(103n);
  });

  it('test operator "max" overload (euint8, euint32) => euint32 test 4 (103, 99)', async function () {
    const res = await this.contract2.max_euint8_euint32(103n, 99n);
    expect(res).to.equal(103n);
  });

  it('test operator "add" overload (euint8, euint64) => euint64 test 1 (2, 129)', async function () {
    const res = await this.contract2.add_euint8_euint64(2n, 129n);
    expect(res).to.equal(131n);
  });

  it('test operator "add" overload (euint8, euint64) => euint64 test 2 (12, 16)', async function () {
    const res = await this.contract2.add_euint8_euint64(12n, 16n);
    expect(res).to.equal(28n);
  });

  it('test operator "add" overload (euint8, euint64) => euint64 test 3 (16, 16)', async function () {
    const res = await this.contract2.add_euint8_euint64(16n, 16n);
    expect(res).to.equal(32n);
  });

  it('test operator "add" overload (euint8, euint64) => euint64 test 4 (16, 12)', async function () {
    const res = await this.contract2.add_euint8_euint64(16n, 12n);
    expect(res).to.equal(28n);
  });

  it('test operator "sub" overload (euint8, euint64) => euint64 test 1 (15, 15)', async function () {
    const res = await this.contract2.sub_euint8_euint64(15n, 15n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint8, euint64) => euint64 test 2 (15, 11)', async function () {
    const res = await this.contract2.sub_euint8_euint64(15n, 11n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint8, euint64) => euint64 test 1 (2, 65)', async function () {
    const res = await this.contract2.mul_euint8_euint64(2n, 65n);
    expect(res).to.equal(130n);
  });

  it('test operator "mul" overload (euint8, euint64) => euint64 test 2 (13, 13)', async function () {
    const res = await this.contract2.mul_euint8_euint64(13n, 13n);
    expect(res).to.equal(169n);
  });

  it('test operator "mul" overload (euint8, euint64) => euint64 test 3 (13, 13)', async function () {
    const res = await this.contract2.mul_euint8_euint64(13n, 13n);
    expect(res).to.equal(169n);
  });

  it('test operator "mul" overload (euint8, euint64) => euint64 test 4 (13, 13)', async function () {
    const res = await this.contract2.mul_euint8_euint64(13n, 13n);
    expect(res).to.equal(169n);
  });

  it('test operator "and" overload (euint8, euint64) => euint64 test 1 (62, 18441742416037218435)', async function () {
    const res = await this.contract2.and_euint8_euint64(62n, 18441742416037218435n);
    expect(res).to.equal(2n);
  });

  it('test operator "and" overload (euint8, euint64) => euint64 test 2 (58, 62)', async function () {
    const res = await this.contract2.and_euint8_euint64(58n, 62n);
    expect(res).to.equal(58n);
  });

  it('test operator "and" overload (euint8, euint64) => euint64 test 3 (62, 62)', async function () {
    const res = await this.contract2.and_euint8_euint64(62n, 62n);
    expect(res).to.equal(62n);
  });

  it('test operator "and" overload (euint8, euint64) => euint64 test 4 (62, 58)', async function () {
    const res = await this.contract2.and_euint8_euint64(62n, 58n);
    expect(res).to.equal(58n);
  });

  it('test operator "or" overload (euint8, euint64) => euint64 test 1 (66, 18439693911625769587)', async function () {
    const res = await this.contract2.or_euint8_euint64(66n, 18439693911625769587n);
    expect(res).to.equal(18439693911625769587n);
  });

  it('test operator "or" overload (euint8, euint64) => euint64 test 2 (62, 66)', async function () {
    const res = await this.contract2.or_euint8_euint64(62n, 66n);
    expect(res).to.equal(126n);
  });

  it('test operator "or" overload (euint8, euint64) => euint64 test 3 (66, 66)', async function () {
    const res = await this.contract2.or_euint8_euint64(66n, 66n);
    expect(res).to.equal(66n);
  });

  it('test operator "or" overload (euint8, euint64) => euint64 test 4 (66, 62)', async function () {
    const res = await this.contract2.or_euint8_euint64(66n, 62n);
    expect(res).to.equal(126n);
  });

  it('test operator "xor" overload (euint8, euint64) => euint64 test 1 (212, 18437987864856647089)', async function () {
    const res = await this.contract2.xor_euint8_euint64(212n, 18437987864856647089n);
    expect(res).to.equal(18437987864856647013n);
  });

  it('test operator "xor" overload (euint8, euint64) => euint64 test 2 (208, 212)', async function () {
    const res = await this.contract2.xor_euint8_euint64(208n, 212n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint8, euint64) => euint64 test 3 (212, 212)', async function () {
    const res = await this.contract2.xor_euint8_euint64(212n, 212n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint8, euint64) => euint64 test 4 (212, 208)', async function () {
    const res = await this.contract2.xor_euint8_euint64(212n, 208n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint8, euint64) => ebool test 1 (151, 18441484264494857597)', async function () {
    const res = await this.contract2.eq_euint8_euint64(151n, 18441484264494857597n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint64) => ebool test 2 (147, 151)', async function () {
    const res = await this.contract2.eq_euint8_euint64(147n, 151n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, euint64) => ebool test 3 (151, 151)', async function () {
    const res = await this.contract2.eq_euint8_euint64(151n, 151n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint8, euint64) => ebool test 4 (151, 147)', async function () {
    const res = await this.contract2.eq_euint8_euint64(151n, 147n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint64) => ebool test 1 (174, 18439836363494569405)', async function () {
    const res = await this.contract2.ne_euint8_euint64(174n, 18439836363494569405n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint64) => ebool test 2 (170, 174)', async function () {
    const res = await this.contract2.ne_euint8_euint64(170n, 174n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, euint64) => ebool test 3 (174, 174)', async function () {
    const res = await this.contract2.ne_euint8_euint64(174n, 174n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, euint64) => ebool test 4 (174, 170)', async function () {
    const res = await this.contract2.ne_euint8_euint64(174n, 170n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint64) => ebool test 1 (201, 18443640492228529453)', async function () {
    const res = await this.contract2.ge_euint8_euint64(201n, 18443640492228529453n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint64) => ebool test 2 (197, 201)', async function () {
    const res = await this.contract2.ge_euint8_euint64(197n, 201n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, euint64) => ebool test 3 (201, 201)', async function () {
    const res = await this.contract2.ge_euint8_euint64(201n, 201n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, euint64) => ebool test 4 (201, 197)', async function () {
    const res = await this.contract2.ge_euint8_euint64(201n, 197n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, euint64) => ebool test 1 (237, 18441103586480031265)', async function () {
    const res = await this.contract2.gt_euint8_euint64(237n, 18441103586480031265n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint64) => ebool test 2 (233, 237)', async function () {
    const res = await this.contract2.gt_euint8_euint64(233n, 237n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint64) => ebool test 3 (237, 237)', async function () {
    const res = await this.contract2.gt_euint8_euint64(237n, 237n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, euint64) => ebool test 4 (237, 233)', async function () {
    const res = await this.contract2.gt_euint8_euint64(237n, 233n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint64) => ebool test 1 (18, 18442364533783886901)', async function () {
    const res = await this.contract2.le_euint8_euint64(18n, 18442364533783886901n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint64) => ebool test 2 (14, 18)', async function () {
    const res = await this.contract2.le_euint8_euint64(14n, 18n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint64) => ebool test 3 (18, 18)', async function () {
    const res = await this.contract2.le_euint8_euint64(18n, 18n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, euint64) => ebool test 4 (18, 14)', async function () {
    const res = await this.contract2.le_euint8_euint64(18n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint64) => ebool test 1 (1, 18442662886837590601)', async function () {
    const res = await this.contract2.lt_euint8_euint64(1n, 18442662886837590601n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint64) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.lt_euint8_euint64(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, euint64) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.lt_euint8_euint64(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, euint64) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.lt_euint8_euint64(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint8, euint64) => euint64 test 1 (240, 18439345293201198903)', async function () {
    const res = await this.contract2.min_euint8_euint64(240n, 18439345293201198903n);
    expect(res).to.equal(240n);
  });

  it('test operator "min" overload (euint8, euint64) => euint64 test 2 (236, 240)', async function () {
    const res = await this.contract2.min_euint8_euint64(236n, 240n);
    expect(res).to.equal(236n);
  });

  it('test operator "min" overload (euint8, euint64) => euint64 test 3 (240, 240)', async function () {
    const res = await this.contract2.min_euint8_euint64(240n, 240n);
    expect(res).to.equal(240n);
  });

  it('test operator "min" overload (euint8, euint64) => euint64 test 4 (240, 236)', async function () {
    const res = await this.contract2.min_euint8_euint64(240n, 236n);
    expect(res).to.equal(236n);
  });

  it('test operator "max" overload (euint8, euint64) => euint64 test 1 (180, 18445785341899355785)', async function () {
    const res = await this.contract2.max_euint8_euint64(180n, 18445785341899355785n);
    expect(res).to.equal(18445785341899355785n);
  });

  it('test operator "max" overload (euint8, euint64) => euint64 test 2 (176, 180)', async function () {
    const res = await this.contract2.max_euint8_euint64(176n, 180n);
    expect(res).to.equal(180n);
  });

  it('test operator "max" overload (euint8, euint64) => euint64 test 3 (180, 180)', async function () {
    const res = await this.contract2.max_euint8_euint64(180n, 180n);
    expect(res).to.equal(180n);
  });

  it('test operator "max" overload (euint8, euint64) => euint64 test 4 (180, 176)', async function () {
    const res = await this.contract2.max_euint8_euint64(180n, 176n);
    expect(res).to.equal(180n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 1 (56, 11)', async function () {
    const res = await this.contract2.add_euint8_uint8(56n, 11n);
    expect(res).to.equal(67n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 2 (52, 56)', async function () {
    const res = await this.contract2.add_euint8_uint8(52n, 56n);
    expect(res).to.equal(108n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 3 (56, 56)', async function () {
    const res = await this.contract2.add_euint8_uint8(56n, 56n);
    expect(res).to.equal(112n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 4 (56, 52)', async function () {
    const res = await this.contract2.add_euint8_uint8(56n, 52n);
    expect(res).to.equal(108n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 1 (69, 11)', async function () {
    const res = await this.contract2.add_uint8_euint8(69n, 11n);
    expect(res).to.equal(80n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 2 (52, 56)', async function () {
    const res = await this.contract2.add_uint8_euint8(52n, 56n);
    expect(res).to.equal(108n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 3 (56, 56)', async function () {
    const res = await this.contract2.add_uint8_euint8(56n, 56n);
    expect(res).to.equal(112n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 4 (56, 52)', async function () {
    const res = await this.contract2.add_uint8_euint8(56n, 52n);
    expect(res).to.equal(108n);
  });

  it('test operator "sub" overload (euint8, uint8) => euint8 test 1 (64, 64)', async function () {
    const res = await this.contract2.sub_euint8_uint8(64n, 64n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint8, uint8) => euint8 test 2 (64, 60)', async function () {
    const res = await this.contract2.sub_euint8_uint8(64n, 60n);
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint8, euint8) => euint8 test 1 (64, 64)', async function () {
    const res = await this.contract2.sub_uint8_euint8(64n, 64n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint8, euint8) => euint8 test 2 (64, 60)', async function () {
    const res = await this.contract2.sub_uint8_euint8(64n, 60n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 1 (8, 14)', async function () {
    const res = await this.contract2.mul_euint8_uint8(8n, 14n);
    expect(res).to.equal(112n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 2 (14, 14)', async function () {
    const res = await this.contract2.mul_euint8_uint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 3 (14, 14)', async function () {
    const res = await this.contract2.mul_euint8_uint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 4 (14, 14)', async function () {
    const res = await this.contract2.mul_euint8_uint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 1 (8, 14)', async function () {
    const res = await this.contract2.mul_uint8_euint8(8n, 14n);
    expect(res).to.equal(112n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 2 (14, 14)', async function () {
    const res = await this.contract2.mul_uint8_euint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 3 (14, 14)', async function () {
    const res = await this.contract2.mul_uint8_euint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 4 (14, 14)', async function () {
    const res = await this.contract2.mul_uint8_euint8(14n, 14n);
    expect(res).to.equal(196n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 1 (168, 148)', async function () {
    const res = await this.contract2.div_euint8_uint8(168n, 148n);
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 2 (164, 168)', async function () {
    const res = await this.contract2.div_euint8_uint8(164n, 168n);
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 3 (168, 168)', async function () {
    const res = await this.contract2.div_euint8_uint8(168n, 168n);
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 4 (168, 164)', async function () {
    const res = await this.contract2.div_euint8_uint8(168n, 164n);
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 1 (225, 242)', async function () {
    const res = await this.contract2.rem_euint8_uint8(225n, 242n);
    expect(res).to.equal(225n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 2 (183, 187)', async function () {
    const res = await this.contract2.rem_euint8_uint8(183n, 187n);
    expect(res).to.equal(183n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 3 (187, 187)', async function () {
    const res = await this.contract2.rem_euint8_uint8(187n, 187n);
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 4 (187, 183)', async function () {
    const res = await this.contract2.rem_euint8_uint8(187n, 183n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 1 (51, 215)', async function () {
    const res = await this.contract2.eq_euint8_uint8(51n, 215n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 2 (47, 51)', async function () {
    const res = await this.contract2.eq_euint8_uint8(47n, 51n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 3 (51, 51)', async function () {
    const res = await this.contract2.eq_euint8_uint8(51n, 51n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 4 (51, 47)', async function () {
    const res = await this.contract2.eq_euint8_uint8(51n, 47n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 1 (31, 215)', async function () {
    const res = await this.contract2.eq_uint8_euint8(31n, 215n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 2 (47, 51)', async function () {
    const res = await this.contract2.eq_uint8_euint8(47n, 51n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 3 (51, 51)', async function () {
    const res = await this.contract2.eq_uint8_euint8(51n, 51n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 4 (51, 47)', async function () {
    const res = await this.contract2.eq_uint8_euint8(51n, 47n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 1 (236, 213)', async function () {
    const res = await this.contract2.ne_euint8_uint8(236n, 213n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 2 (22, 26)', async function () {
    const res = await this.contract2.ne_euint8_uint8(22n, 26n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 3 (26, 26)', async function () {
    const res = await this.contract2.ne_euint8_uint8(26n, 26n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 4 (26, 22)', async function () {
    const res = await this.contract2.ne_euint8_uint8(26n, 22n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 1 (66, 213)', async function () {
    const res = await this.contract2.ne_uint8_euint8(66n, 213n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 2 (22, 26)', async function () {
    const res = await this.contract2.ne_uint8_euint8(22n, 26n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 3 (26, 26)', async function () {
    const res = await this.contract2.ne_uint8_euint8(26n, 26n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 4 (26, 22)', async function () {
    const res = await this.contract2.ne_uint8_euint8(26n, 22n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 1 (89, 157)', async function () {
    const res = await this.contract2.ge_euint8_uint8(89n, 157n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 2 (85, 89)', async function () {
    const res = await this.contract2.ge_euint8_uint8(85n, 89n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 3 (89, 89)', async function () {
    const res = await this.contract2.ge_euint8_uint8(89n, 89n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 4 (89, 85)', async function () {
    const res = await this.contract2.ge_euint8_uint8(89n, 85n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 1 (164, 157)', async function () {
    const res = await this.contract2.ge_uint8_euint8(164n, 157n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 2 (85, 89)', async function () {
    const res = await this.contract2.ge_uint8_euint8(85n, 89n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 3 (89, 89)', async function () {
    const res = await this.contract2.ge_uint8_euint8(89n, 89n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 4 (89, 85)', async function () {
    const res = await this.contract2.ge_uint8_euint8(89n, 85n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 1 (247, 141)', async function () {
    const res = await this.contract2.gt_euint8_uint8(247n, 141n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 2 (52, 56)', async function () {
    const res = await this.contract2.gt_euint8_uint8(52n, 56n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 3 (56, 56)', async function () {
    const res = await this.contract2.gt_euint8_uint8(56n, 56n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 4 (56, 52)', async function () {
    const res = await this.contract2.gt_euint8_uint8(56n, 52n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 1 (186, 141)', async function () {
    const res = await this.contract2.gt_uint8_euint8(186n, 141n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 2 (52, 56)', async function () {
    const res = await this.contract2.gt_uint8_euint8(52n, 56n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 3 (56, 56)', async function () {
    const res = await this.contract2.gt_uint8_euint8(56n, 56n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 4 (56, 52)', async function () {
    const res = await this.contract2.gt_uint8_euint8(56n, 52n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 1 (182, 83)', async function () {
    const res = await this.contract2.le_euint8_uint8(182n, 83n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 2 (178, 182)', async function () {
    const res = await this.contract2.le_euint8_uint8(178n, 182n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 3 (182, 182)', async function () {
    const res = await this.contract2.le_euint8_uint8(182n, 182n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 4 (182, 178)', async function () {
    const res = await this.contract2.le_euint8_uint8(182n, 178n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 1 (14, 83)', async function () {
    const res = await this.contract2.le_uint8_euint8(14n, 83n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 2 (178, 182)', async function () {
    const res = await this.contract2.le_uint8_euint8(178n, 182n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 3 (182, 182)', async function () {
    const res = await this.contract2.le_uint8_euint8(182n, 182n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 4 (182, 178)', async function () {
    const res = await this.contract2.le_uint8_euint8(182n, 178n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 1 (44, 12)', async function () {
    const res = await this.contract2.lt_euint8_uint8(44n, 12n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 2 (40, 44)', async function () {
    const res = await this.contract2.lt_euint8_uint8(40n, 44n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 3 (44, 44)', async function () {
    const res = await this.contract2.lt_euint8_uint8(44n, 44n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 4 (44, 40)', async function () {
    const res = await this.contract2.lt_euint8_uint8(44n, 40n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 1 (106, 12)', async function () {
    const res = await this.contract2.lt_uint8_euint8(106n, 12n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 2 (40, 44)', async function () {
    const res = await this.contract2.lt_uint8_euint8(40n, 44n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 3 (44, 44)', async function () {
    const res = await this.contract2.lt_uint8_euint8(44n, 44n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 4 (44, 40)', async function () {
    const res = await this.contract2.lt_uint8_euint8(44n, 40n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 1 (254, 134)', async function () {
    const res = await this.contract2.min_euint8_uint8(254n, 134n);
    expect(res).to.equal(134n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 2 (69, 73)', async function () {
    const res = await this.contract2.min_euint8_uint8(69n, 73n);
    expect(res).to.equal(69n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 3 (73, 73)', async function () {
    const res = await this.contract2.min_euint8_uint8(73n, 73n);
    expect(res).to.equal(73n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 4 (73, 69)', async function () {
    const res = await this.contract2.min_euint8_uint8(73n, 69n);
    expect(res).to.equal(69n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 1 (48, 134)', async function () {
    const res = await this.contract2.min_uint8_euint8(48n, 134n);
    expect(res).to.equal(48n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 2 (69, 73)', async function () {
    const res = await this.contract2.min_uint8_euint8(69n, 73n);
    expect(res).to.equal(69n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 3 (73, 73)', async function () {
    const res = await this.contract2.min_uint8_euint8(73n, 73n);
    expect(res).to.equal(73n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 4 (73, 69)', async function () {
    const res = await this.contract2.min_uint8_euint8(73n, 69n);
    expect(res).to.equal(69n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 1 (227, 27)', async function () {
    const res = await this.contract2.max_euint8_uint8(227n, 27n);
    expect(res).to.equal(227n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 2 (25, 29)', async function () {
    const res = await this.contract2.max_euint8_uint8(25n, 29n);
    expect(res).to.equal(29n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 3 (29, 29)', async function () {
    const res = await this.contract2.max_euint8_uint8(29n, 29n);
    expect(res).to.equal(29n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 4 (29, 25)', async function () {
    const res = await this.contract2.max_euint8_uint8(29n, 25n);
    expect(res).to.equal(29n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 1 (174, 27)', async function () {
    const res = await this.contract2.max_uint8_euint8(174n, 27n);
    expect(res).to.equal(174n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 2 (25, 29)', async function () {
    const res = await this.contract2.max_uint8_euint8(25n, 29n);
    expect(res).to.equal(29n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 3 (29, 29)', async function () {
    const res = await this.contract2.max_uint8_euint8(29n, 29n);
    expect(res).to.equal(29n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 4 (29, 25)', async function () {
    const res = await this.contract2.max_uint8_euint8(29n, 25n);
    expect(res).to.equal(29n);
  });

  it('test operator "add" overload (euint16, euint4) => euint16 test 1 (8, 2)', async function () {
    const res = await this.contract2.add_euint16_euint4(8n, 2n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint16, euint4) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract2.add_euint16_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint16, euint4) => euint16 test 3 (5, 5)', async function () {
    const res = await this.contract2.add_euint16_euint4(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint16, euint4) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract2.add_euint16_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "sub" overload (euint16, euint4) => euint16 test 1 (14, 14)', async function () {
    const res = await this.contract2.sub_euint16_euint4(14n, 14n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint4) => euint16 test 2 (14, 10)', async function () {
    const res = await this.contract2.sub_euint16_euint4(14n, 10n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint4) => euint16 test 1 (5, 2)', async function () {
    const res = await this.contract2.mul_euint16_euint4(5n, 2n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint16, euint4) => euint16 test 2 (3, 4)', async function () {
    const res = await this.contract2.mul_euint16_euint4(3n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "mul" overload (euint16, euint4) => euint16 test 3 (3, 3)', async function () {
    const res = await this.contract2.mul_euint16_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint16, euint4) => euint16 test 4 (4, 3)', async function () {
    const res = await this.contract2.mul_euint16_euint4(4n, 3n);
    expect(res).to.equal(12n);
  });

  it('test operator "and" overload (euint16, euint4) => euint16 test 1 (62185, 11)', async function () {
    const res = await this.contract2.and_euint16_euint4(62185n, 11n);
    expect(res).to.equal(9n);
  });

  it('test operator "and" overload (euint16, euint4) => euint16 test 2 (7, 11)', async function () {
    const res = await this.contract2.and_euint16_euint4(7n, 11n);
    expect(res).to.equal(3n);
  });

  it('test operator "and" overload (euint16, euint4) => euint16 test 3 (11, 11)', async function () {
    const res = await this.contract2.and_euint16_euint4(11n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "and" overload (euint16, euint4) => euint16 test 4 (11, 7)', async function () {
    const res = await this.contract2.and_euint16_euint4(11n, 7n);
    expect(res).to.equal(3n);
  });

  it('test operator "or" overload (euint16, euint4) => euint16 test 1 (40123, 11)', async function () {
    const res = await this.contract2.or_euint16_euint4(40123n, 11n);
    expect(res).to.equal(40123n);
  });

  it('test operator "or" overload (euint16, euint4) => euint16 test 2 (7, 11)', async function () {
    const res = await this.contract2.or_euint16_euint4(7n, 11n);
    expect(res).to.equal(15n);
  });

  it('test operator "or" overload (euint16, euint4) => euint16 test 3 (11, 11)', async function () {
    const res = await this.contract2.or_euint16_euint4(11n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "or" overload (euint16, euint4) => euint16 test 4 (11, 7)', async function () {
    const res = await this.contract2.or_euint16_euint4(11n, 7n);
    expect(res).to.equal(15n);
  });

  it('test operator "xor" overload (euint16, euint4) => euint16 test 1 (34235, 7)', async function () {
    const res = await this.contract2.xor_euint16_euint4(34235n, 7n);
    expect(res).to.equal(34236n);
  });

  it('test operator "xor" overload (euint16, euint4) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract2.xor_euint16_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint16, euint4) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract2.xor_euint16_euint4(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint4) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract2.xor_euint16_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint16, euint4) => ebool test 1 (57152, 3)', async function () {
    const res = await this.contract2.eq_euint16_euint4(57152n, 3n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.eq_euint16_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.eq_euint16_euint4(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.eq_euint16_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint4) => ebool test 1 (24920, 3)', async function () {
    const res = await this.contract2.ne_euint16_euint4(24920n, 3n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.ne_euint16_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.ne_euint16_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.ne_euint16_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint4) => ebool test 1 (27268, 4)', async function () {
    const res = await this.contract2.ge_euint16_euint4(27268n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.ge_euint16_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.ge_euint16_euint4(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.ge_euint16_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint4) => ebool test 1 (6870, 8)', async function () {
    const res = await this.contract2.gt_euint16_euint4(6870n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.gt_euint16_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.gt_euint16_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.gt_euint16_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint4) => ebool test 1 (39104, 8)', async function () {
    const res = await this.contract2.le_euint16_euint4(39104n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint16, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.le_euint16_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.le_euint16_euint4(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.le_euint16_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint4) => ebool test 1 (57762, 4)', async function () {
    const res = await this.contract2.lt_euint16_euint4(57762n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract2.lt_euint16_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract2.lt_euint16_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract2.lt_euint16_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint4) => euint16 test 1 (10884, 9)', async function () {
    const res = await this.contract3.min_euint16_euint4(10884n, 9n);
    expect(res).to.equal(9n);
  });

  it('test operator "min" overload (euint16, euint4) => euint16 test 2 (5, 9)', async function () {
    const res = await this.contract3.min_euint16_euint4(5n, 9n);
    expect(res).to.equal(5n);
  });

  it('test operator "min" overload (euint16, euint4) => euint16 test 3 (9, 9)', async function () {
    const res = await this.contract3.min_euint16_euint4(9n, 9n);
    expect(res).to.equal(9n);
  });

  it('test operator "min" overload (euint16, euint4) => euint16 test 4 (9, 5)', async function () {
    const res = await this.contract3.min_euint16_euint4(9n, 5n);
    expect(res).to.equal(5n);
  });

  it('test operator "max" overload (euint16, euint4) => euint16 test 1 (58569, 10)', async function () {
    const res = await this.contract3.max_euint16_euint4(58569n, 10n);
    expect(res).to.equal(58569n);
  });

  it('test operator "max" overload (euint16, euint4) => euint16 test 2 (6, 10)', async function () {
    const res = await this.contract3.max_euint16_euint4(6n, 10n);
    expect(res).to.equal(10n);
  });

  it('test operator "max" overload (euint16, euint4) => euint16 test 3 (10, 10)', async function () {
    const res = await this.contract3.max_euint16_euint4(10n, 10n);
    expect(res).to.equal(10n);
  });

  it('test operator "max" overload (euint16, euint4) => euint16 test 4 (10, 6)', async function () {
    const res = await this.contract3.max_euint16_euint4(10n, 6n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint16, euint8) => euint16 test 1 (147, 3)', async function () {
    const res = await this.contract3.add_euint16_euint8(147n, 3n);
    expect(res).to.equal(150n);
  });

  it('test operator "add" overload (euint16, euint8) => euint16 test 2 (116, 118)', async function () {
    const res = await this.contract3.add_euint16_euint8(116n, 118n);
    expect(res).to.equal(234n);
  });

  it('test operator "add" overload (euint16, euint8) => euint16 test 3 (118, 118)', async function () {
    const res = await this.contract3.add_euint16_euint8(118n, 118n);
    expect(res).to.equal(236n);
  });

  it('test operator "add" overload (euint16, euint8) => euint16 test 4 (118, 116)', async function () {
    const res = await this.contract3.add_euint16_euint8(118n, 116n);
    expect(res).to.equal(234n);
  });

  it('test operator "sub" overload (euint16, euint8) => euint16 test 1 (143, 143)', async function () {
    const res = await this.contract3.sub_euint16_euint8(143n, 143n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint8) => euint16 test 2 (143, 139)', async function () {
    const res = await this.contract3.sub_euint16_euint8(143n, 139n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint8) => euint16 test 1 (127, 2)', async function () {
    const res = await this.contract3.mul_euint16_euint8(127n, 2n);
    expect(res).to.equal(254n);
  });

  it('test operator "mul" overload (euint16, euint8) => euint16 test 2 (10, 10)', async function () {
    const res = await this.contract3.mul_euint16_euint8(10n, 10n);
    expect(res).to.equal(100n);
  });

  it('test operator "mul" overload (euint16, euint8) => euint16 test 3 (10, 10)', async function () {
    const res = await this.contract3.mul_euint16_euint8(10n, 10n);
    expect(res).to.equal(100n);
  });

  it('test operator "mul" overload (euint16, euint8) => euint16 test 4 (10, 10)', async function () {
    const res = await this.contract3.mul_euint16_euint8(10n, 10n);
    expect(res).to.equal(100n);
  });

  it('test operator "and" overload (euint16, euint8) => euint16 test 1 (19261, 5)', async function () {
    const res = await this.contract3.and_euint16_euint8(19261n, 5n);
    expect(res).to.equal(5n);
  });

  it('test operator "and" overload (euint16, euint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract3.and_euint16_euint8(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint16, euint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract3.and_euint16_euint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "and" overload (euint16, euint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract3.and_euint16_euint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "or" overload (euint16, euint8) => euint16 test 1 (37227, 88)', async function () {
    const res = await this.contract3.or_euint16_euint8(37227n, 88n);
    expect(res).to.equal(37243n);
  });

  it('test operator "or" overload (euint16, euint8) => euint16 test 2 (84, 88)', async function () {
    const res = await this.contract3.or_euint16_euint8(84n, 88n);
    expect(res).to.equal(92n);
  });

  it('test operator "or" overload (euint16, euint8) => euint16 test 3 (88, 88)', async function () {
    const res = await this.contract3.or_euint16_euint8(88n, 88n);
    expect(res).to.equal(88n);
  });

  it('test operator "or" overload (euint16, euint8) => euint16 test 4 (88, 84)', async function () {
    const res = await this.contract3.or_euint16_euint8(88n, 84n);
    expect(res).to.equal(92n);
  });

  it('test operator "xor" overload (euint16, euint8) => euint16 test 1 (43168, 233)', async function () {
    const res = await this.contract3.xor_euint16_euint8(43168n, 233n);
    expect(res).to.equal(43081n);
  });

  it('test operator "xor" overload (euint16, euint8) => euint16 test 2 (229, 233)', async function () {
    const res = await this.contract3.xor_euint16_euint8(229n, 233n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint16, euint8) => euint16 test 3 (233, 233)', async function () {
    const res = await this.contract3.xor_euint16_euint8(233n, 233n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint8) => euint16 test 4 (233, 229)', async function () {
    const res = await this.contract3.xor_euint16_euint8(233n, 229n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint16, euint8) => ebool test 1 (64589, 145)', async function () {
    const res = await this.contract3.eq_euint16_euint8(64589n, 145n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint8) => ebool test 2 (141, 145)', async function () {
    const res = await this.contract3.eq_euint16_euint8(141n, 145n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint8) => ebool test 3 (145, 145)', async function () {
    const res = await this.contract3.eq_euint16_euint8(145n, 145n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint8) => ebool test 4 (145, 141)', async function () {
    const res = await this.contract3.eq_euint16_euint8(145n, 141n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint8) => ebool test 1 (59614, 149)', async function () {
    const res = await this.contract3.ne_euint16_euint8(59614n, 149n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint8) => ebool test 2 (145, 149)', async function () {
    const res = await this.contract3.ne_euint16_euint8(145n, 149n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint8) => ebool test 3 (149, 149)', async function () {
    const res = await this.contract3.ne_euint16_euint8(149n, 149n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint8) => ebool test 4 (149, 145)', async function () {
    const res = await this.contract3.ne_euint16_euint8(149n, 145n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint8) => ebool test 1 (24994, 118)', async function () {
    const res = await this.contract3.ge_euint16_euint8(24994n, 118n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint8) => ebool test 2 (114, 118)', async function () {
    const res = await this.contract3.ge_euint16_euint8(114n, 118n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint8) => ebool test 3 (118, 118)', async function () {
    const res = await this.contract3.ge_euint16_euint8(118n, 118n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint8) => ebool test 4 (118, 114)', async function () {
    const res = await this.contract3.ge_euint16_euint8(118n, 114n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint8) => ebool test 1 (15548, 171)', async function () {
    const res = await this.contract3.gt_euint16_euint8(15548n, 171n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint8) => ebool test 2 (167, 171)', async function () {
    const res = await this.contract3.gt_euint16_euint8(167n, 171n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint8) => ebool test 3 (171, 171)', async function () {
    const res = await this.contract3.gt_euint16_euint8(171n, 171n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint8) => ebool test 4 (171, 167)', async function () {
    const res = await this.contract3.gt_euint16_euint8(171n, 167n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint8) => ebool test 1 (53893, 183)', async function () {
    const res = await this.contract3.le_euint16_euint8(53893n, 183n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint16, euint8) => ebool test 2 (179, 183)', async function () {
    const res = await this.contract3.le_euint16_euint8(179n, 183n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint8) => ebool test 3 (183, 183)', async function () {
    const res = await this.contract3.le_euint16_euint8(183n, 183n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint8) => ebool test 4 (183, 179)', async function () {
    const res = await this.contract3.le_euint16_euint8(183n, 179n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint8) => ebool test 1 (14349, 199)', async function () {
    const res = await this.contract3.lt_euint16_euint8(14349n, 199n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint8) => ebool test 2 (195, 199)', async function () {
    const res = await this.contract3.lt_euint16_euint8(195n, 199n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint8) => ebool test 3 (199, 199)', async function () {
    const res = await this.contract3.lt_euint16_euint8(199n, 199n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint8) => ebool test 4 (199, 195)', async function () {
    const res = await this.contract3.lt_euint16_euint8(199n, 195n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint8) => euint16 test 1 (29386, 59)', async function () {
    const res = await this.contract3.min_euint16_euint8(29386n, 59n);
    expect(res).to.equal(59n);
  });

  it('test operator "min" overload (euint16, euint8) => euint16 test 2 (55, 59)', async function () {
    const res = await this.contract3.min_euint16_euint8(55n, 59n);
    expect(res).to.equal(55n);
  });

  it('test operator "min" overload (euint16, euint8) => euint16 test 3 (59, 59)', async function () {
    const res = await this.contract3.min_euint16_euint8(59n, 59n);
    expect(res).to.equal(59n);
  });

  it('test operator "min" overload (euint16, euint8) => euint16 test 4 (59, 55)', async function () {
    const res = await this.contract3.min_euint16_euint8(59n, 55n);
    expect(res).to.equal(55n);
  });

  it('test operator "max" overload (euint16, euint8) => euint16 test 1 (46663, 31)', async function () {
    const res = await this.contract3.max_euint16_euint8(46663n, 31n);
    expect(res).to.equal(46663n);
  });

  it('test operator "max" overload (euint16, euint8) => euint16 test 2 (27, 31)', async function () {
    const res = await this.contract3.max_euint16_euint8(27n, 31n);
    expect(res).to.equal(31n);
  });

  it('test operator "max" overload (euint16, euint8) => euint16 test 3 (31, 31)', async function () {
    const res = await this.contract3.max_euint16_euint8(31n, 31n);
    expect(res).to.equal(31n);
  });

  it('test operator "max" overload (euint16, euint8) => euint16 test 4 (31, 27)', async function () {
    const res = await this.contract3.max_euint16_euint8(31n, 27n);
    expect(res).to.equal(31n);
  });

  it('test operator "add" overload (euint16, euint16) => euint16 test 1 (12135, 15379)', async function () {
    const res = await this.contract3.add_euint16_euint16(12135n, 15379n);
    expect(res).to.equal(27514n);
  });

  it('test operator "add" overload (euint16, euint16) => euint16 test 2 (12131, 12135)', async function () {
    const res = await this.contract3.add_euint16_euint16(12131n, 12135n);
    expect(res).to.equal(24266n);
  });

  it('test operator "add" overload (euint16, euint16) => euint16 test 3 (12135, 12135)', async function () {
    const res = await this.contract3.add_euint16_euint16(12135n, 12135n);
    expect(res).to.equal(24270n);
  });

  it('test operator "add" overload (euint16, euint16) => euint16 test 4 (12135, 12131)', async function () {
    const res = await this.contract3.add_euint16_euint16(12135n, 12131n);
    expect(res).to.equal(24266n);
  });

  it('test operator "sub" overload (euint16, euint16) => euint16 test 1 (3171, 3171)', async function () {
    const res = await this.contract3.sub_euint16_euint16(3171n, 3171n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint16) => euint16 test 2 (3171, 3167)', async function () {
    const res = await this.contract3.sub_euint16_euint16(3171n, 3167n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint16) => euint16 test 1 (78, 381)', async function () {
    const res = await this.contract3.mul_euint16_euint16(78n, 381n);
    expect(res).to.equal(29718n);
  });

  it('test operator "mul" overload (euint16, euint16) => euint16 test 2 (155, 155)', async function () {
    const res = await this.contract3.mul_euint16_euint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "mul" overload (euint16, euint16) => euint16 test 3 (155, 155)', async function () {
    const res = await this.contract3.mul_euint16_euint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "mul" overload (euint16, euint16) => euint16 test 4 (155, 155)', async function () {
    const res = await this.contract3.mul_euint16_euint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "and" overload (euint16, euint16) => euint16 test 1 (3535, 5032)', async function () {
    const res = await this.contract3.and_euint16_euint16(3535n, 5032n);
    expect(res).to.equal(392n);
  });

  it('test operator "and" overload (euint16, euint16) => euint16 test 2 (3531, 3535)', async function () {
    const res = await this.contract3.and_euint16_euint16(3531n, 3535n);
    expect(res).to.equal(3531n);
  });

  it('test operator "and" overload (euint16, euint16) => euint16 test 3 (3535, 3535)', async function () {
    const res = await this.contract3.and_euint16_euint16(3535n, 3535n);
    expect(res).to.equal(3535n);
  });

  it('test operator "and" overload (euint16, euint16) => euint16 test 4 (3535, 3531)', async function () {
    const res = await this.contract3.and_euint16_euint16(3535n, 3531n);
    expect(res).to.equal(3531n);
  });

  it('test operator "or" overload (euint16, euint16) => euint16 test 1 (33634, 27003)', async function () {
    const res = await this.contract3.or_euint16_euint16(33634n, 27003n);
    expect(res).to.equal(60283n);
  });

  it('test operator "or" overload (euint16, euint16) => euint16 test 2 (26999, 27003)', async function () {
    const res = await this.contract3.or_euint16_euint16(26999n, 27003n);
    expect(res).to.equal(27007n);
  });

  it('test operator "or" overload (euint16, euint16) => euint16 test 3 (27003, 27003)', async function () {
    const res = await this.contract3.or_euint16_euint16(27003n, 27003n);
    expect(res).to.equal(27003n);
  });

  it('test operator "or" overload (euint16, euint16) => euint16 test 4 (27003, 26999)', async function () {
    const res = await this.contract3.or_euint16_euint16(27003n, 26999n);
    expect(res).to.equal(27007n);
  });

  it('test operator "xor" overload (euint16, euint16) => euint16 test 1 (64619, 2520)', async function () {
    const res = await this.contract3.xor_euint16_euint16(64619n, 2520n);
    expect(res).to.equal(62899n);
  });

  it('test operator "xor" overload (euint16, euint16) => euint16 test 2 (2516, 2520)', async function () {
    const res = await this.contract3.xor_euint16_euint16(2516n, 2520n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint16, euint16) => euint16 test 3 (2520, 2520)', async function () {
    const res = await this.contract3.xor_euint16_euint16(2520n, 2520n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint16) => euint16 test 4 (2520, 2516)', async function () {
    const res = await this.contract3.xor_euint16_euint16(2520n, 2516n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint16, euint16) => ebool test 1 (63705, 3249)', async function () {
    const res = await this.contract3.eq_euint16_euint16(63705n, 3249n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint16) => ebool test 2 (3245, 3249)', async function () {
    const res = await this.contract3.eq_euint16_euint16(3245n, 3249n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint16) => ebool test 3 (3249, 3249)', async function () {
    const res = await this.contract3.eq_euint16_euint16(3249n, 3249n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint16) => ebool test 4 (3249, 3245)', async function () {
    const res = await this.contract3.eq_euint16_euint16(3249n, 3245n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint16) => ebool test 1 (27750, 23851)', async function () {
    const res = await this.contract3.ne_euint16_euint16(27750n, 23851n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint16) => ebool test 2 (23847, 23851)', async function () {
    const res = await this.contract3.ne_euint16_euint16(23847n, 23851n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint16) => ebool test 3 (23851, 23851)', async function () {
    const res = await this.contract3.ne_euint16_euint16(23851n, 23851n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint16) => ebool test 4 (23851, 23847)', async function () {
    const res = await this.contract3.ne_euint16_euint16(23851n, 23847n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint16) => ebool test 1 (8825, 39131)', async function () {
    const res = await this.contract3.ge_euint16_euint16(8825n, 39131n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint16) => ebool test 2 (8821, 8825)', async function () {
    const res = await this.contract3.ge_euint16_euint16(8821n, 8825n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint16) => ebool test 3 (8825, 8825)', async function () {
    const res = await this.contract3.ge_euint16_euint16(8825n, 8825n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint16) => ebool test 4 (8825, 8821)', async function () {
    const res = await this.contract3.ge_euint16_euint16(8825n, 8821n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint16) => ebool test 1 (33735, 54333)', async function () {
    const res = await this.contract3.gt_euint16_euint16(33735n, 54333n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint16) => ebool test 2 (33731, 33735)', async function () {
    const res = await this.contract3.gt_euint16_euint16(33731n, 33735n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint16) => ebool test 3 (33735, 33735)', async function () {
    const res = await this.contract3.gt_euint16_euint16(33735n, 33735n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint16) => ebool test 4 (33735, 33731)', async function () {
    const res = await this.contract3.gt_euint16_euint16(33735n, 33731n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint16) => ebool test 1 (38605, 53936)', async function () {
    const res = await this.contract3.le_euint16_euint16(38605n, 53936n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint16) => ebool test 2 (38601, 38605)', async function () {
    const res = await this.contract3.le_euint16_euint16(38601n, 38605n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint16) => ebool test 3 (38605, 38605)', async function () {
    const res = await this.contract3.le_euint16_euint16(38605n, 38605n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint16) => ebool test 4 (38605, 38601)', async function () {
    const res = await this.contract3.le_euint16_euint16(38605n, 38601n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint16) => ebool test 1 (59332, 12427)', async function () {
    const res = await this.contract3.lt_euint16_euint16(59332n, 12427n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint16) => ebool test 2 (12423, 12427)', async function () {
    const res = await this.contract3.lt_euint16_euint16(12423n, 12427n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint16) => ebool test 3 (12427, 12427)', async function () {
    const res = await this.contract3.lt_euint16_euint16(12427n, 12427n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint16) => ebool test 4 (12427, 12423)', async function () {
    const res = await this.contract3.lt_euint16_euint16(12427n, 12423n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint16) => euint16 test 1 (18209, 14696)', async function () {
    const res = await this.contract3.min_euint16_euint16(18209n, 14696n);
    expect(res).to.equal(14696n);
  });

  it('test operator "min" overload (euint16, euint16) => euint16 test 2 (14692, 14696)', async function () {
    const res = await this.contract3.min_euint16_euint16(14692n, 14696n);
    expect(res).to.equal(14692n);
  });

  it('test operator "min" overload (euint16, euint16) => euint16 test 3 (14696, 14696)', async function () {
    const res = await this.contract3.min_euint16_euint16(14696n, 14696n);
    expect(res).to.equal(14696n);
  });

  it('test operator "min" overload (euint16, euint16) => euint16 test 4 (14696, 14692)', async function () {
    const res = await this.contract3.min_euint16_euint16(14696n, 14692n);
    expect(res).to.equal(14692n);
  });

  it('test operator "max" overload (euint16, euint16) => euint16 test 1 (35722, 7688)', async function () {
    const res = await this.contract3.max_euint16_euint16(35722n, 7688n);
    expect(res).to.equal(35722n);
  });

  it('test operator "max" overload (euint16, euint16) => euint16 test 2 (7684, 7688)', async function () {
    const res = await this.contract3.max_euint16_euint16(7684n, 7688n);
    expect(res).to.equal(7688n);
  });

  it('test operator "max" overload (euint16, euint16) => euint16 test 3 (7688, 7688)', async function () {
    const res = await this.contract3.max_euint16_euint16(7688n, 7688n);
    expect(res).to.equal(7688n);
  });

  it('test operator "max" overload (euint16, euint16) => euint16 test 4 (7688, 7684)', async function () {
    const res = await this.contract3.max_euint16_euint16(7688n, 7684n);
    expect(res).to.equal(7688n);
  });

  it('test operator "add" overload (euint16, euint32) => euint32 test 1 (2, 40496)', async function () {
    const res = await this.contract3.add_euint16_euint32(2n, 40496n);
    expect(res).to.equal(40498n);
  });

  it('test operator "add" overload (euint16, euint32) => euint32 test 2 (18317, 18319)', async function () {
    const res = await this.contract3.add_euint16_euint32(18317n, 18319n);
    expect(res).to.equal(36636n);
  });

  it('test operator "add" overload (euint16, euint32) => euint32 test 3 (18319, 18319)', async function () {
    const res = await this.contract3.add_euint16_euint32(18319n, 18319n);
    expect(res).to.equal(36638n);
  });

  it('test operator "add" overload (euint16, euint32) => euint32 test 4 (18319, 18317)', async function () {
    const res = await this.contract3.add_euint16_euint32(18319n, 18317n);
    expect(res).to.equal(36636n);
  });

  it('test operator "sub" overload (euint16, euint32) => euint32 test 1 (17812, 17812)', async function () {
    const res = await this.contract3.sub_euint16_euint32(17812n, 17812n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint32) => euint32 test 2 (17812, 17808)', async function () {
    const res = await this.contract3.sub_euint16_euint32(17812n, 17808n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 1 (2, 18411)', async function () {
    const res = await this.contract3.mul_euint16_euint32(2n, 18411n);
    expect(res).to.equal(36822n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 2 (139, 139)', async function () {
    const res = await this.contract3.mul_euint16_euint32(139n, 139n);
    expect(res).to.equal(19321n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 3 (139, 139)', async function () {
    const res = await this.contract3.mul_euint16_euint32(139n, 139n);
    expect(res).to.equal(19321n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 4 (139, 139)', async function () {
    const res = await this.contract3.mul_euint16_euint32(139n, 139n);
    expect(res).to.equal(19321n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 1 (27862, 1736690738)', async function () {
    const res = await this.contract3.and_euint16_euint32(27862n, 1736690738n);
    expect(res).to.equal(19474n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 2 (27858, 27862)', async function () {
    const res = await this.contract3.and_euint16_euint32(27858n, 27862n);
    expect(res).to.equal(27858n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 3 (27862, 27862)', async function () {
    const res = await this.contract3.and_euint16_euint32(27862n, 27862n);
    expect(res).to.equal(27862n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 4 (27862, 27858)', async function () {
    const res = await this.contract3.and_euint16_euint32(27862n, 27858n);
    expect(res).to.equal(27858n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 1 (440, 1863142416)', async function () {
    const res = await this.contract3.or_euint16_euint32(440n, 1863142416n);
    expect(res).to.equal(1863142840n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 2 (436, 440)', async function () {
    const res = await this.contract3.or_euint16_euint32(436n, 440n);
    expect(res).to.equal(444n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 3 (440, 440)', async function () {
    const res = await this.contract3.or_euint16_euint32(440n, 440n);
    expect(res).to.equal(440n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 4 (440, 436)', async function () {
    const res = await this.contract3.or_euint16_euint32(440n, 436n);
    expect(res).to.equal(444n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 1 (51717, 501889469)', async function () {
    const res = await this.contract3.xor_euint16_euint32(51717n, 501889469n);
    expect(res).to.equal(501937080n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 2 (51713, 51717)', async function () {
    const res = await this.contract3.xor_euint16_euint32(51713n, 51717n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 3 (51717, 51717)', async function () {
    const res = await this.contract3.xor_euint16_euint32(51717n, 51717n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 4 (51717, 51713)', async function () {
    const res = await this.contract3.xor_euint16_euint32(51717n, 51713n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 1 (19428, 3260350416)', async function () {
    const res = await this.contract3.eq_euint16_euint32(19428n, 3260350416n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 2 (19424, 19428)', async function () {
    const res = await this.contract3.eq_euint16_euint32(19424n, 19428n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 3 (19428, 19428)', async function () {
    const res = await this.contract3.eq_euint16_euint32(19428n, 19428n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 4 (19428, 19424)', async function () {
    const res = await this.contract3.eq_euint16_euint32(19428n, 19424n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 1 (4461, 3322499889)', async function () {
    const res = await this.contract3.ne_euint16_euint32(4461n, 3322499889n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 2 (4457, 4461)', async function () {
    const res = await this.contract3.ne_euint16_euint32(4457n, 4461n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 3 (4461, 4461)', async function () {
    const res = await this.contract3.ne_euint16_euint32(4461n, 4461n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 4 (4461, 4457)', async function () {
    const res = await this.contract3.ne_euint16_euint32(4461n, 4457n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 1 (23826, 3191695510)', async function () {
    const res = await this.contract3.ge_euint16_euint32(23826n, 3191695510n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 2 (23822, 23826)', async function () {
    const res = await this.contract3.ge_euint16_euint32(23822n, 23826n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 3 (23826, 23826)', async function () {
    const res = await this.contract3.ge_euint16_euint32(23826n, 23826n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 4 (23826, 23822)', async function () {
    const res = await this.contract3.ge_euint16_euint32(23826n, 23822n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 1 (20452, 2742403767)', async function () {
    const res = await this.contract3.gt_euint16_euint32(20452n, 2742403767n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 2 (20448, 20452)', async function () {
    const res = await this.contract3.gt_euint16_euint32(20448n, 20452n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 3 (20452, 20452)', async function () {
    const res = await this.contract3.gt_euint16_euint32(20452n, 20452n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 4 (20452, 20448)', async function () {
    const res = await this.contract3.gt_euint16_euint32(20452n, 20448n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 1 (32489, 2097840840)', async function () {
    const res = await this.contract3.le_euint16_euint32(32489n, 2097840840n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 2 (32485, 32489)', async function () {
    const res = await this.contract3.le_euint16_euint32(32485n, 32489n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 3 (32489, 32489)', async function () {
    const res = await this.contract3.le_euint16_euint32(32489n, 32489n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 4 (32489, 32485)', async function () {
    const res = await this.contract3.le_euint16_euint32(32489n, 32485n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 1 (46117, 3066026054)', async function () {
    const res = await this.contract3.lt_euint16_euint32(46117n, 3066026054n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 2 (46113, 46117)', async function () {
    const res = await this.contract3.lt_euint16_euint32(46113n, 46117n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 3 (46117, 46117)', async function () {
    const res = await this.contract3.lt_euint16_euint32(46117n, 46117n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 4 (46117, 46113)', async function () {
    const res = await this.contract3.lt_euint16_euint32(46117n, 46113n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 1 (5231, 2030449754)', async function () {
    const res = await this.contract3.min_euint16_euint32(5231n, 2030449754n);
    expect(res).to.equal(5231n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 2 (5227, 5231)', async function () {
    const res = await this.contract3.min_euint16_euint32(5227n, 5231n);
    expect(res).to.equal(5227n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 3 (5231, 5231)', async function () {
    const res = await this.contract3.min_euint16_euint32(5231n, 5231n);
    expect(res).to.equal(5231n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 4 (5231, 5227)', async function () {
    const res = await this.contract3.min_euint16_euint32(5231n, 5227n);
    expect(res).to.equal(5227n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 1 (34046, 3126513605)', async function () {
    const res = await this.contract3.max_euint16_euint32(34046n, 3126513605n);
    expect(res).to.equal(3126513605n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 2 (34042, 34046)', async function () {
    const res = await this.contract3.max_euint16_euint32(34042n, 34046n);
    expect(res).to.equal(34046n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 3 (34046, 34046)', async function () {
    const res = await this.contract3.max_euint16_euint32(34046n, 34046n);
    expect(res).to.equal(34046n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 4 (34046, 34042)', async function () {
    const res = await this.contract3.max_euint16_euint32(34046n, 34042n);
    expect(res).to.equal(34046n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 1 (2, 65506)', async function () {
    const res = await this.contract3.add_euint16_euint64(2n, 65506n);
    expect(res).to.equal(65508n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 2 (12725, 12729)', async function () {
    const res = await this.contract3.add_euint16_euint64(12725n, 12729n);
    expect(res).to.equal(25454n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 3 (12729, 12729)', async function () {
    const res = await this.contract3.add_euint16_euint64(12729n, 12729n);
    expect(res).to.equal(25458n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 4 (12729, 12725)', async function () {
    const res = await this.contract3.add_euint16_euint64(12729n, 12725n);
    expect(res).to.equal(25454n);
  });

  it('test operator "sub" overload (euint16, euint64) => euint64 test 1 (45021, 45021)', async function () {
    const res = await this.contract3.sub_euint16_euint64(45021n, 45021n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint64) => euint64 test 2 (45021, 45017)', async function () {
    const res = await this.contract3.sub_euint16_euint64(45021n, 45017n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 1 (2, 32761)', async function () {
    const res = await this.contract3.mul_euint16_euint64(2n, 32761n);
    expect(res).to.equal(65522n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 2 (221, 221)', async function () {
    const res = await this.contract3.mul_euint16_euint64(221n, 221n);
    expect(res).to.equal(48841n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 3 (221, 221)', async function () {
    const res = await this.contract3.mul_euint16_euint64(221n, 221n);
    expect(res).to.equal(48841n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 4 (221, 221)', async function () {
    const res = await this.contract3.mul_euint16_euint64(221n, 221n);
    expect(res).to.equal(48841n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 1 (17953, 18443736631892089939)', async function () {
    const res = await this.contract3.and_euint16_euint64(17953n, 18443736631892089939n);
    expect(res).to.equal(1025n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 2 (17949, 17953)', async function () {
    const res = await this.contract3.and_euint16_euint64(17949n, 17953n);
    expect(res).to.equal(17921n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 3 (17953, 17953)', async function () {
    const res = await this.contract3.and_euint16_euint64(17953n, 17953n);
    expect(res).to.equal(17953n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 4 (17953, 17949)', async function () {
    const res = await this.contract3.and_euint16_euint64(17953n, 17949n);
    expect(res).to.equal(17921n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 1 (12837, 18444850378165005521)', async function () {
    const res = await this.contract3.or_euint16_euint64(12837n, 18444850378165005521n);
    expect(res).to.equal(18444850378165010165n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 2 (12833, 12837)', async function () {
    const res = await this.contract3.or_euint16_euint64(12833n, 12837n);
    expect(res).to.equal(12837n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 3 (12837, 12837)', async function () {
    const res = await this.contract3.or_euint16_euint64(12837n, 12837n);
    expect(res).to.equal(12837n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 4 (12837, 12833)', async function () {
    const res = await this.contract3.or_euint16_euint64(12837n, 12833n);
    expect(res).to.equal(12837n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 1 (12673, 18438027026491597713)', async function () {
    const res = await this.contract3.xor_euint16_euint64(12673n, 18438027026491597713n);
    expect(res).to.equal(18438027026491593232n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 2 (12669, 12673)', async function () {
    const res = await this.contract3.xor_euint16_euint64(12669n, 12673n);
    expect(res).to.equal(252n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 3 (12673, 12673)', async function () {
    const res = await this.contract3.xor_euint16_euint64(12673n, 12673n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 4 (12673, 12669)', async function () {
    const res = await this.contract3.xor_euint16_euint64(12673n, 12669n);
    expect(res).to.equal(252n);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 1 (15185, 18442214214141554887)', async function () {
    const res = await this.contract3.eq_euint16_euint64(15185n, 18442214214141554887n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 2 (15181, 15185)', async function () {
    const res = await this.contract3.eq_euint16_euint64(15181n, 15185n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 3 (15185, 15185)', async function () {
    const res = await this.contract3.eq_euint16_euint64(15185n, 15185n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 4 (15185, 15181)', async function () {
    const res = await this.contract3.eq_euint16_euint64(15185n, 15181n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 1 (6072, 18442627728041568827)', async function () {
    const res = await this.contract3.ne_euint16_euint64(6072n, 18442627728041568827n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 2 (6068, 6072)', async function () {
    const res = await this.contract3.ne_euint16_euint64(6068n, 6072n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 3 (6072, 6072)', async function () {
    const res = await this.contract3.ne_euint16_euint64(6072n, 6072n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 4 (6072, 6068)', async function () {
    const res = await this.contract3.ne_euint16_euint64(6072n, 6068n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 1 (63199, 18444428591303537867)', async function () {
    const res = await this.contract3.ge_euint16_euint64(63199n, 18444428591303537867n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 2 (63195, 63199)', async function () {
    const res = await this.contract3.ge_euint16_euint64(63195n, 63199n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 3 (63199, 63199)', async function () {
    const res = await this.contract3.ge_euint16_euint64(63199n, 63199n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 4 (63199, 63195)', async function () {
    const res = await this.contract3.ge_euint16_euint64(63199n, 63195n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 1 (63105, 18440430414982980885)', async function () {
    const res = await this.contract3.gt_euint16_euint64(63105n, 18440430414982980885n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 2 (63101, 63105)', async function () {
    const res = await this.contract3.gt_euint16_euint64(63101n, 63105n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 3 (63105, 63105)', async function () {
    const res = await this.contract3.gt_euint16_euint64(63105n, 63105n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 4 (63105, 63101)', async function () {
    const res = await this.contract3.gt_euint16_euint64(63105n, 63101n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 1 (46492, 18439416152876310159)', async function () {
    const res = await this.contract3.le_euint16_euint64(46492n, 18439416152876310159n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 2 (46488, 46492)', async function () {
    const res = await this.contract3.le_euint16_euint64(46488n, 46492n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 3 (46492, 46492)', async function () {
    const res = await this.contract3.le_euint16_euint64(46492n, 46492n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 4 (46492, 46488)', async function () {
    const res = await this.contract3.le_euint16_euint64(46492n, 46488n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 1 (20266, 18439286572290779257)', async function () {
    const res = await this.contract3.lt_euint16_euint64(20266n, 18439286572290779257n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 2 (20262, 20266)', async function () {
    const res = await this.contract3.lt_euint16_euint64(20262n, 20266n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 3 (20266, 20266)', async function () {
    const res = await this.contract3.lt_euint16_euint64(20266n, 20266n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 4 (20266, 20262)', async function () {
    const res = await this.contract3.lt_euint16_euint64(20266n, 20262n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 1 (44251, 18443711845572494969)', async function () {
    const res = await this.contract3.min_euint16_euint64(44251n, 18443711845572494969n);
    expect(res).to.equal(44251n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 2 (44247, 44251)', async function () {
    const res = await this.contract3.min_euint16_euint64(44247n, 44251n);
    expect(res).to.equal(44247n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 3 (44251, 44251)', async function () {
    const res = await this.contract3.min_euint16_euint64(44251n, 44251n);
    expect(res).to.equal(44251n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 4 (44251, 44247)', async function () {
    const res = await this.contract3.min_euint16_euint64(44251n, 44247n);
    expect(res).to.equal(44247n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 1 (28367, 18440532375906129937)', async function () {
    const res = await this.contract3.max_euint16_euint64(28367n, 18440532375906129937n);
    expect(res).to.equal(18440532375906129937n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 2 (28363, 28367)', async function () {
    const res = await this.contract3.max_euint16_euint64(28363n, 28367n);
    expect(res).to.equal(28367n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 3 (28367, 28367)', async function () {
    const res = await this.contract3.max_euint16_euint64(28367n, 28367n);
    expect(res).to.equal(28367n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 4 (28367, 28363)', async function () {
    const res = await this.contract3.max_euint16_euint64(28367n, 28363n);
    expect(res).to.equal(28367n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 1 (12135, 52126)', async function () {
    const res = await this.contract3.add_euint16_uint16(12135n, 52126n);
    expect(res).to.equal(64261n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 2 (12131, 12135)', async function () {
    const res = await this.contract3.add_euint16_uint16(12131n, 12135n);
    expect(res).to.equal(24266n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 3 (12135, 12135)', async function () {
    const res = await this.contract3.add_euint16_uint16(12135n, 12135n);
    expect(res).to.equal(24270n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 4 (12135, 12131)', async function () {
    const res = await this.contract3.add_euint16_uint16(12135n, 12131n);
    expect(res).to.equal(24266n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 1 (12140, 26064)', async function () {
    const res = await this.contract3.add_uint16_euint16(12140n, 26064n);
    expect(res).to.equal(38204n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 2 (12131, 12135)', async function () {
    const res = await this.contract3.add_uint16_euint16(12131n, 12135n);
    expect(res).to.equal(24266n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 3 (12135, 12135)', async function () {
    const res = await this.contract3.add_uint16_euint16(12135n, 12135n);
    expect(res).to.equal(24270n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 4 (12135, 12131)', async function () {
    const res = await this.contract3.add_uint16_euint16(12135n, 12131n);
    expect(res).to.equal(24266n);
  });

  it('test operator "sub" overload (euint16, uint16) => euint16 test 1 (3171, 3171)', async function () {
    const res = await this.contract3.sub_euint16_uint16(3171n, 3171n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, uint16) => euint16 test 2 (3171, 3167)', async function () {
    const res = await this.contract3.sub_euint16_uint16(3171n, 3167n);
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint16, euint16) => euint16 test 1 (3171, 3171)', async function () {
    const res = await this.contract3.sub_uint16_euint16(3171n, 3171n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint16, euint16) => euint16 test 2 (3171, 3167)', async function () {
    const res = await this.contract3.sub_uint16_euint16(3171n, 3167n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 1 (78, 344)', async function () {
    const res = await this.contract3.mul_euint16_uint16(78n, 344n);
    expect(res).to.equal(26832n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 2 (155, 155)', async function () {
    const res = await this.contract3.mul_euint16_uint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 3 (155, 155)', async function () {
    const res = await this.contract3.mul_euint16_uint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 4 (155, 155)', async function () {
    const res = await this.contract3.mul_euint16_uint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 1 (256, 173)', async function () {
    const res = await this.contract3.mul_uint16_euint16(256n, 173n);
    expect(res).to.equal(44288n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 2 (155, 155)', async function () {
    const res = await this.contract3.mul_uint16_euint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 3 (155, 155)', async function () {
    const res = await this.contract3.mul_uint16_euint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 4 (155, 155)', async function () {
    const res = await this.contract3.mul_uint16_euint16(155n, 155n);
    expect(res).to.equal(24025n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 1 (8852, 38586)', async function () {
    const res = await this.contract3.div_euint16_uint16(8852n, 38586n);
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 2 (8848, 8852)', async function () {
    const res = await this.contract3.div_euint16_uint16(8848n, 8852n);
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 3 (8852, 8852)', async function () {
    const res = await this.contract3.div_euint16_uint16(8852n, 8852n);
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 4 (8852, 8848)', async function () {
    const res = await this.contract3.div_euint16_uint16(8852n, 8848n);
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 1 (53463, 2321)', async function () {
    const res = await this.contract3.rem_euint16_uint16(53463n, 2321n);
    expect(res).to.equal(80n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 2 (20898, 20902)', async function () {
    const res = await this.contract3.rem_euint16_uint16(20898n, 20902n);
    expect(res).to.equal(20898n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 3 (20902, 20902)', async function () {
    const res = await this.contract3.rem_euint16_uint16(20902n, 20902n);
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 4 (20902, 20898)', async function () {
    const res = await this.contract3.rem_euint16_uint16(20902n, 20898n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 1 (63705, 39705)', async function () {
    const res = await this.contract3.eq_euint16_uint16(63705n, 39705n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 2 (3245, 3249)', async function () {
    const res = await this.contract3.eq_euint16_uint16(3245n, 3249n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 3 (3249, 3249)', async function () {
    const res = await this.contract3.eq_euint16_uint16(3249n, 3249n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 4 (3249, 3245)', async function () {
    const res = await this.contract3.eq_euint16_uint16(3249n, 3245n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 1 (28254, 39705)', async function () {
    const res = await this.contract3.eq_uint16_euint16(28254n, 39705n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 2 (3245, 3249)', async function () {
    const res = await this.contract3.eq_uint16_euint16(3245n, 3249n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 3 (3249, 3249)', async function () {
    const res = await this.contract3.eq_uint16_euint16(3249n, 3249n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 4 (3249, 3245)', async function () {
    const res = await this.contract3.eq_uint16_euint16(3249n, 3245n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 1 (27750, 3479)', async function () {
    const res = await this.contract3.ne_euint16_uint16(27750n, 3479n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 2 (23847, 23851)', async function () {
    const res = await this.contract3.ne_euint16_uint16(23847n, 23851n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 3 (23851, 23851)', async function () {
    const res = await this.contract3.ne_euint16_uint16(23851n, 23851n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 4 (23851, 23847)', async function () {
    const res = await this.contract3.ne_euint16_uint16(23851n, 23847n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 1 (20385, 3479)', async function () {
    const res = await this.contract3.ne_uint16_euint16(20385n, 3479n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 2 (23847, 23851)', async function () {
    const res = await this.contract3.ne_uint16_euint16(23847n, 23851n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 3 (23851, 23851)', async function () {
    const res = await this.contract3.ne_uint16_euint16(23851n, 23851n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 4 (23851, 23847)', async function () {
    const res = await this.contract3.ne_uint16_euint16(23851n, 23847n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 1 (8825, 23737)', async function () {
    const res = await this.contract3.ge_euint16_uint16(8825n, 23737n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 2 (8821, 8825)', async function () {
    const res = await this.contract3.ge_euint16_uint16(8821n, 8825n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 3 (8825, 8825)', async function () {
    const res = await this.contract3.ge_euint16_uint16(8825n, 8825n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 4 (8825, 8821)', async function () {
    const res = await this.contract3.ge_euint16_uint16(8825n, 8821n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 1 (43508, 23737)', async function () {
    const res = await this.contract3.ge_uint16_euint16(43508n, 23737n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 2 (8821, 8825)', async function () {
    const res = await this.contract3.ge_uint16_euint16(8821n, 8825n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 3 (8825, 8825)', async function () {
    const res = await this.contract3.ge_uint16_euint16(8825n, 8825n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 4 (8825, 8821)', async function () {
    const res = await this.contract3.ge_uint16_euint16(8825n, 8821n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 1 (33735, 40439)', async function () {
    const res = await this.contract3.gt_euint16_uint16(33735n, 40439n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 2 (33731, 33735)', async function () {
    const res = await this.contract3.gt_euint16_uint16(33731n, 33735n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 3 (33735, 33735)', async function () {
    const res = await this.contract3.gt_euint16_uint16(33735n, 33735n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 4 (33735, 33731)', async function () {
    const res = await this.contract3.gt_euint16_uint16(33735n, 33731n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 1 (47103, 40439)', async function () {
    const res = await this.contract3.gt_uint16_euint16(47103n, 40439n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 2 (33731, 33735)', async function () {
    const res = await this.contract3.gt_uint16_euint16(33731n, 33735n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 3 (33735, 33735)', async function () {
    const res = await this.contract3.gt_uint16_euint16(33735n, 33735n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 4 (33735, 33731)', async function () {
    const res = await this.contract3.gt_uint16_euint16(33735n, 33731n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 1 (38605, 15668)', async function () {
    const res = await this.contract3.le_euint16_uint16(38605n, 15668n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 2 (38601, 38605)', async function () {
    const res = await this.contract3.le_euint16_uint16(38601n, 38605n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 3 (38605, 38605)', async function () {
    const res = await this.contract3.le_euint16_uint16(38605n, 38605n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 4 (38605, 38601)', async function () {
    const res = await this.contract3.le_euint16_uint16(38605n, 38601n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 1 (26564, 15668)', async function () {
    const res = await this.contract3.le_uint16_euint16(26564n, 15668n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 2 (38601, 38605)', async function () {
    const res = await this.contract3.le_uint16_euint16(38601n, 38605n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 3 (38605, 38605)', async function () {
    const res = await this.contract3.le_uint16_euint16(38605n, 38605n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 4 (38605, 38601)', async function () {
    const res = await this.contract3.le_uint16_euint16(38605n, 38601n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 1 (59332, 5218)', async function () {
    const res = await this.contract3.lt_euint16_uint16(59332n, 5218n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 2 (12423, 12427)', async function () {
    const res = await this.contract3.lt_euint16_uint16(12423n, 12427n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 3 (12427, 12427)', async function () {
    const res = await this.contract3.lt_euint16_uint16(12427n, 12427n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 4 (12427, 12423)', async function () {
    const res = await this.contract3.lt_euint16_uint16(12427n, 12423n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 1 (8638, 5218)', async function () {
    const res = await this.contract3.lt_uint16_euint16(8638n, 5218n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 2 (12423, 12427)', async function () {
    const res = await this.contract3.lt_uint16_euint16(12423n, 12427n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 3 (12427, 12427)', async function () {
    const res = await this.contract3.lt_uint16_euint16(12427n, 12427n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 4 (12427, 12423)', async function () {
    const res = await this.contract3.lt_uint16_euint16(12427n, 12423n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 1 (18209, 9598)', async function () {
    const res = await this.contract3.min_euint16_uint16(18209n, 9598n);
    expect(res).to.equal(9598n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 2 (14692, 14696)', async function () {
    const res = await this.contract3.min_euint16_uint16(14692n, 14696n);
    expect(res).to.equal(14692n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 3 (14696, 14696)', async function () {
    const res = await this.contract3.min_euint16_uint16(14696n, 14696n);
    expect(res).to.equal(14696n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 4 (14696, 14692)', async function () {
    const res = await this.contract3.min_euint16_uint16(14696n, 14692n);
    expect(res).to.equal(14692n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 1 (16454, 9598)', async function () {
    const res = await this.contract3.min_uint16_euint16(16454n, 9598n);
    expect(res).to.equal(9598n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 2 (14692, 14696)', async function () {
    const res = await this.contract3.min_uint16_euint16(14692n, 14696n);
    expect(res).to.equal(14692n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 3 (14696, 14696)', async function () {
    const res = await this.contract3.min_uint16_euint16(14696n, 14696n);
    expect(res).to.equal(14696n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 4 (14696, 14692)', async function () {
    const res = await this.contract3.min_uint16_euint16(14696n, 14692n);
    expect(res).to.equal(14692n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 1 (35722, 5145)', async function () {
    const res = await this.contract3.max_euint16_uint16(35722n, 5145n);
    expect(res).to.equal(35722n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 2 (7684, 7688)', async function () {
    const res = await this.contract3.max_euint16_uint16(7684n, 7688n);
    expect(res).to.equal(7688n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 3 (7688, 7688)', async function () {
    const res = await this.contract3.max_euint16_uint16(7688n, 7688n);
    expect(res).to.equal(7688n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 4 (7688, 7684)', async function () {
    const res = await this.contract3.max_euint16_uint16(7688n, 7684n);
    expect(res).to.equal(7688n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 1 (56359, 5145)', async function () {
    const res = await this.contract3.max_uint16_euint16(56359n, 5145n);
    expect(res).to.equal(56359n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 2 (7684, 7688)', async function () {
    const res = await this.contract3.max_uint16_euint16(7684n, 7688n);
    expect(res).to.equal(7688n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 3 (7688, 7688)', async function () {
    const res = await this.contract3.max_uint16_euint16(7688n, 7688n);
    expect(res).to.equal(7688n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 4 (7688, 7684)', async function () {
    const res = await this.contract3.max_uint16_euint16(7688n, 7684n);
    expect(res).to.equal(7688n);
  });

  it('test operator "add" overload (euint32, euint4) => euint32 test 1 (12, 2)', async function () {
    const res = await this.contract3.add_euint32_euint4(12n, 2n);
    expect(res).to.equal(14n);
  });

  it('test operator "add" overload (euint32, euint4) => euint32 test 2 (4, 6)', async function () {
    const res = await this.contract3.add_euint32_euint4(4n, 6n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint32, euint4) => euint32 test 3 (6, 6)', async function () {
    const res = await this.contract3.add_euint32_euint4(6n, 6n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint32, euint4) => euint32 test 4 (6, 4)', async function () {
    const res = await this.contract3.add_euint32_euint4(6n, 4n);
    expect(res).to.equal(10n);
  });

  it('test operator "sub" overload (euint32, euint4) => euint32 test 1 (8, 8)', async function () {
    const res = await this.contract3.sub_euint32_euint4(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint4) => euint32 test 2 (8, 4)', async function () {
    const res = await this.contract3.sub_euint32_euint4(8n, 4n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint4) => euint32 test 1 (5, 2)', async function () {
    const res = await this.contract3.mul_euint32_euint4(5n, 2n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint32, euint4) => euint32 test 2 (3, 3)', async function () {
    const res = await this.contract3.mul_euint32_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint32, euint4) => euint32 test 3 (3, 3)', async function () {
    const res = await this.contract3.mul_euint32_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint32, euint4) => euint32 test 4 (3, 3)', async function () {
    const res = await this.contract3.mul_euint32_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "and" overload (euint32, euint4) => euint32 test 1 (2599330540, 1)', async function () {
    const res = await this.contract3.and_euint32_euint4(2599330540n, 1n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint32, euint4) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract3.and_euint32_euint4(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint32, euint4) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract3.and_euint32_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "and" overload (euint32, euint4) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract3.and_euint32_euint4(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "or" overload (euint32, euint4) => euint32 test 1 (2761097401, 13)', async function () {
    const res = await this.contract3.or_euint32_euint4(2761097401n, 13n);
    expect(res).to.equal(2761097405n);
  });

  it('test operator "or" overload (euint32, euint4) => euint32 test 2 (9, 13)', async function () {
    const res = await this.contract3.or_euint32_euint4(9n, 13n);
    expect(res).to.equal(13n);
  });

  it('test operator "or" overload (euint32, euint4) => euint32 test 3 (13, 13)', async function () {
    const res = await this.contract3.or_euint32_euint4(13n, 13n);
    expect(res).to.equal(13n);
  });

  it('test operator "or" overload (euint32, euint4) => euint32 test 4 (13, 9)', async function () {
    const res = await this.contract3.or_euint32_euint4(13n, 9n);
    expect(res).to.equal(13n);
  });

  it('test operator "xor" overload (euint32, euint4) => euint32 test 1 (2588014920, 3)', async function () {
    const res = await this.contract3.xor_euint32_euint4(2588014920n, 3n);
    expect(res).to.equal(2588014923n);
  });

  it('test operator "xor" overload (euint32, euint4) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract3.xor_euint32_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint32, euint4) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract3.xor_euint32_euint4(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint4) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract3.xor_euint32_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint32, euint4) => ebool test 1 (3027950561, 14)', async function () {
    const res = await this.contract3.eq_euint32_euint4(3027950561n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint4) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract3.eq_euint32_euint4(10n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint4) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract3.eq_euint32_euint4(14n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint4) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract3.eq_euint32_euint4(14n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint4) => ebool test 1 (2599901708, 3)', async function () {
    const res = await this.contract3.ne_euint32_euint4(2599901708n, 3n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract3.ne_euint32_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract3.ne_euint32_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract3.ne_euint32_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint4) => ebool test 1 (1601227311, 14)', async function () {
    const res = await this.contract3.ge_euint32_euint4(1601227311n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint4) => ebool test 2 (10, 14)', async function () {
    const res = await this.contract3.ge_euint32_euint4(10n, 14n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint4) => ebool test 3 (14, 14)', async function () {
    const res = await this.contract3.ge_euint32_euint4(14n, 14n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint4) => ebool test 4 (14, 10)', async function () {
    const res = await this.contract3.ge_euint32_euint4(14n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint4) => ebool test 1 (3548820179, 1)', async function () {
    const res = await this.contract3.gt_euint32_euint4(3548820179n, 1n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract3.gt_euint32_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract3.gt_euint32_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract3.gt_euint32_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint4) => ebool test 1 (681177958, 4)', async function () {
    const res = await this.contract3.le_euint32_euint4(681177958n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint32, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract3.le_euint32_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract3.le_euint32_euint4(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract3.le_euint32_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint4) => ebool test 1 (928445097, 2)', async function () {
    const res = await this.contract3.lt_euint32_euint4(928445097n, 2n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract3.lt_euint32_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract3.lt_euint32_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract3.lt_euint32_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint4) => euint32 test 1 (2403125524, 11)', async function () {
    const res = await this.contract3.min_euint32_euint4(2403125524n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "min" overload (euint32, euint4) => euint32 test 2 (7, 11)', async function () {
    const res = await this.contract3.min_euint32_euint4(7n, 11n);
    expect(res).to.equal(7n);
  });

  it('test operator "min" overload (euint32, euint4) => euint32 test 3 (11, 11)', async function () {
    const res = await this.contract3.min_euint32_euint4(11n, 11n);
    expect(res).to.equal(11n);
  });

  it('test operator "min" overload (euint32, euint4) => euint32 test 4 (11, 7)', async function () {
    const res = await this.contract3.min_euint32_euint4(11n, 7n);
    expect(res).to.equal(7n);
  });

  it('test operator "max" overload (euint32, euint4) => euint32 test 1 (1272584917, 14)', async function () {
    const res = await this.contract3.max_euint32_euint4(1272584917n, 14n);
    expect(res).to.equal(1272584917n);
  });

  it('test operator "max" overload (euint32, euint4) => euint32 test 2 (10, 14)', async function () {
    const res = await this.contract3.max_euint32_euint4(10n, 14n);
    expect(res).to.equal(14n);
  });

  it('test operator "max" overload (euint32, euint4) => euint32 test 3 (14, 14)', async function () {
    const res = await this.contract3.max_euint32_euint4(14n, 14n);
    expect(res).to.equal(14n);
  });

  it('test operator "max" overload (euint32, euint4) => euint32 test 4 (14, 10)', async function () {
    const res = await this.contract3.max_euint32_euint4(14n, 10n);
    expect(res).to.equal(14n);
  });

  it('test operator "add" overload (euint32, euint8) => euint32 test 1 (153, 2)', async function () {
    const res = await this.contract3.add_euint32_euint8(153n, 2n);
    expect(res).to.equal(155n);
  });

  it('test operator "add" overload (euint32, euint8) => euint32 test 2 (123, 125)', async function () {
    const res = await this.contract3.add_euint32_euint8(123n, 125n);
    expect(res).to.equal(248n);
  });

  it('test operator "add" overload (euint32, euint8) => euint32 test 3 (125, 125)', async function () {
    const res = await this.contract3.add_euint32_euint8(125n, 125n);
    expect(res).to.equal(250n);
  });

  it('test operator "add" overload (euint32, euint8) => euint32 test 4 (125, 123)', async function () {
    const res = await this.contract3.add_euint32_euint8(125n, 123n);
    expect(res).to.equal(248n);
  });

  it('test operator "sub" overload (euint32, euint8) => euint32 test 1 (52, 52)', async function () {
    const res = await this.contract3.sub_euint32_euint8(52n, 52n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint8) => euint32 test 2 (52, 48)', async function () {
    const res = await this.contract3.sub_euint32_euint8(52n, 48n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint8) => euint32 test 1 (102, 2)', async function () {
    const res = await this.contract3.mul_euint32_euint8(102n, 2n);
    expect(res).to.equal(204n);
  });

  it('test operator "mul" overload (euint32, euint8) => euint32 test 2 (10, 12)', async function () {
    const res = await this.contract3.mul_euint32_euint8(10n, 12n);
    expect(res).to.equal(120n);
  });

  it('test operator "mul" overload (euint32, euint8) => euint32 test 3 (12, 12)', async function () {
    const res = await this.contract3.mul_euint32_euint8(12n, 12n);
    expect(res).to.equal(144n);
  });

  it('test operator "mul" overload (euint32, euint8) => euint32 test 4 (12, 10)', async function () {
    const res = await this.contract3.mul_euint32_euint8(12n, 10n);
    expect(res).to.equal(120n);
  });

  it('test operator "and" overload (euint32, euint8) => euint32 test 1 (2756559333, 33)', async function () {
    const res = await this.contract3.and_euint32_euint8(2756559333n, 33n);
    expect(res).to.equal(33n);
  });

  it('test operator "and" overload (euint32, euint8) => euint32 test 2 (29, 33)', async function () {
    const res = await this.contract3.and_euint32_euint8(29n, 33n);
    expect(res).to.equal(1n);
  });

  it('test operator "and" overload (euint32, euint8) => euint32 test 3 (33, 33)', async function () {
    const res = await this.contract3.and_euint32_euint8(33n, 33n);
    expect(res).to.equal(33n);
  });

  it('test operator "and" overload (euint32, euint8) => euint32 test 4 (33, 29)', async function () {
    const res = await this.contract3.and_euint32_euint8(33n, 29n);
    expect(res).to.equal(1n);
  });

  it('test operator "or" overload (euint32, euint8) => euint32 test 1 (1062322837, 212)', async function () {
    const res = await this.contract4.or_euint32_euint8(1062322837n, 212n);
    expect(res).to.equal(1062322901n);
  });

  it('test operator "or" overload (euint32, euint8) => euint32 test 2 (208, 212)', async function () {
    const res = await this.contract4.or_euint32_euint8(208n, 212n);
    expect(res).to.equal(212n);
  });

  it('test operator "or" overload (euint32, euint8) => euint32 test 3 (212, 212)', async function () {
    const res = await this.contract4.or_euint32_euint8(212n, 212n);
    expect(res).to.equal(212n);
  });

  it('test operator "or" overload (euint32, euint8) => euint32 test 4 (212, 208)', async function () {
    const res = await this.contract4.or_euint32_euint8(212n, 208n);
    expect(res).to.equal(212n);
  });

  it('test operator "xor" overload (euint32, euint8) => euint32 test 1 (2442028658, 23)', async function () {
    const res = await this.contract4.xor_euint32_euint8(2442028658n, 23n);
    expect(res).to.equal(2442028645n);
  });

  it('test operator "xor" overload (euint32, euint8) => euint32 test 2 (19, 23)', async function () {
    const res = await this.contract4.xor_euint32_euint8(19n, 23n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint32, euint8) => euint32 test 3 (23, 23)', async function () {
    const res = await this.contract4.xor_euint32_euint8(23n, 23n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint8) => euint32 test 4 (23, 19)', async function () {
    const res = await this.contract4.xor_euint32_euint8(23n, 19n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint32, euint8) => ebool test 1 (1831274090, 104)', async function () {
    const res = await this.contract4.eq_euint32_euint8(1831274090n, 104n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint8) => ebool test 2 (100, 104)', async function () {
    const res = await this.contract4.eq_euint32_euint8(100n, 104n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint8) => ebool test 3 (104, 104)', async function () {
    const res = await this.contract4.eq_euint32_euint8(104n, 104n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint8) => ebool test 4 (104, 100)', async function () {
    const res = await this.contract4.eq_euint32_euint8(104n, 100n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint8) => ebool test 1 (3821365412, 152)', async function () {
    const res = await this.contract4.ne_euint32_euint8(3821365412n, 152n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint8) => ebool test 2 (148, 152)', async function () {
    const res = await this.contract4.ne_euint32_euint8(148n, 152n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint8) => ebool test 3 (152, 152)', async function () {
    const res = await this.contract4.ne_euint32_euint8(152n, 152n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint8) => ebool test 4 (152, 148)', async function () {
    const res = await this.contract4.ne_euint32_euint8(152n, 148n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint8) => ebool test 1 (1799963609, 233)', async function () {
    const res = await this.contract4.ge_euint32_euint8(1799963609n, 233n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint8) => ebool test 2 (229, 233)', async function () {
    const res = await this.contract4.ge_euint32_euint8(229n, 233n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint8) => ebool test 3 (233, 233)', async function () {
    const res = await this.contract4.ge_euint32_euint8(233n, 233n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint8) => ebool test 4 (233, 229)', async function () {
    const res = await this.contract4.ge_euint32_euint8(233n, 229n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint8) => ebool test 1 (3893344872, 37)', async function () {
    const res = await this.contract4.gt_euint32_euint8(3893344872n, 37n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint8) => ebool test 2 (33, 37)', async function () {
    const res = await this.contract4.gt_euint32_euint8(33n, 37n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint8) => ebool test 3 (37, 37)', async function () {
    const res = await this.contract4.gt_euint32_euint8(37n, 37n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint8) => ebool test 4 (37, 33)', async function () {
    const res = await this.contract4.gt_euint32_euint8(37n, 33n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint8) => ebool test 1 (804391035, 133)', async function () {
    const res = await this.contract4.le_euint32_euint8(804391035n, 133n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint32, euint8) => ebool test 2 (129, 133)', async function () {
    const res = await this.contract4.le_euint32_euint8(129n, 133n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint8) => ebool test 3 (133, 133)', async function () {
    const res = await this.contract4.le_euint32_euint8(133n, 133n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint8) => ebool test 4 (133, 129)', async function () {
    const res = await this.contract4.le_euint32_euint8(133n, 129n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint8) => ebool test 1 (3782116241, 158)', async function () {
    const res = await this.contract4.lt_euint32_euint8(3782116241n, 158n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint8) => ebool test 2 (154, 158)', async function () {
    const res = await this.contract4.lt_euint32_euint8(154n, 158n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint8) => ebool test 3 (158, 158)', async function () {
    const res = await this.contract4.lt_euint32_euint8(158n, 158n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint8) => ebool test 4 (158, 154)', async function () {
    const res = await this.contract4.lt_euint32_euint8(158n, 154n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint8) => euint32 test 1 (2689679661, 114)', async function () {
    const res = await this.contract4.min_euint32_euint8(2689679661n, 114n);
    expect(res).to.equal(114n);
  });

  it('test operator "min" overload (euint32, euint8) => euint32 test 2 (110, 114)', async function () {
    const res = await this.contract4.min_euint32_euint8(110n, 114n);
    expect(res).to.equal(110n);
  });

  it('test operator "min" overload (euint32, euint8) => euint32 test 3 (114, 114)', async function () {
    const res = await this.contract4.min_euint32_euint8(114n, 114n);
    expect(res).to.equal(114n);
  });

  it('test operator "min" overload (euint32, euint8) => euint32 test 4 (114, 110)', async function () {
    const res = await this.contract4.min_euint32_euint8(114n, 110n);
    expect(res).to.equal(110n);
  });

  it('test operator "max" overload (euint32, euint8) => euint32 test 1 (2001471362, 68)', async function () {
    const res = await this.contract4.max_euint32_euint8(2001471362n, 68n);
    expect(res).to.equal(2001471362n);
  });

  it('test operator "max" overload (euint32, euint8) => euint32 test 2 (64, 68)', async function () {
    const res = await this.contract4.max_euint32_euint8(64n, 68n);
    expect(res).to.equal(68n);
  });

  it('test operator "max" overload (euint32, euint8) => euint32 test 3 (68, 68)', async function () {
    const res = await this.contract4.max_euint32_euint8(68n, 68n);
    expect(res).to.equal(68n);
  });

  it('test operator "max" overload (euint32, euint8) => euint32 test 4 (68, 64)', async function () {
    const res = await this.contract4.max_euint32_euint8(68n, 64n);
    expect(res).to.equal(68n);
  });

  it('test operator "add" overload (euint32, euint16) => euint32 test 1 (62662, 2)', async function () {
    const res = await this.contract4.add_euint32_euint16(62662n, 2n);
    expect(res).to.equal(62664n);
  });

  it('test operator "add" overload (euint32, euint16) => euint32 test 2 (19188, 19190)', async function () {
    const res = await this.contract4.add_euint32_euint16(19188n, 19190n);
    expect(res).to.equal(38378n);
  });

  it('test operator "add" overload (euint32, euint16) => euint32 test 3 (19190, 19190)', async function () {
    const res = await this.contract4.add_euint32_euint16(19190n, 19190n);
    expect(res).to.equal(38380n);
  });

  it('test operator "add" overload (euint32, euint16) => euint32 test 4 (19190, 19188)', async function () {
    const res = await this.contract4.add_euint32_euint16(19190n, 19188n);
    expect(res).to.equal(38378n);
  });

  it('test operator "sub" overload (euint32, euint16) => euint32 test 1 (35686, 35686)', async function () {
    const res = await this.contract4.sub_euint32_euint16(35686n, 35686n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint16) => euint32 test 2 (35686, 35682)', async function () {
    const res = await this.contract4.sub_euint32_euint16(35686n, 35682n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint16) => euint32 test 1 (22131, 2)', async function () {
    const res = await this.contract4.mul_euint32_euint16(22131n, 2n);
    expect(res).to.equal(44262n);
  });

  it('test operator "mul" overload (euint32, euint16) => euint32 test 2 (158, 158)', async function () {
    const res = await this.contract4.mul_euint32_euint16(158n, 158n);
    expect(res).to.equal(24964n);
  });

  it('test operator "mul" overload (euint32, euint16) => euint32 test 3 (158, 158)', async function () {
    const res = await this.contract4.mul_euint32_euint16(158n, 158n);
    expect(res).to.equal(24964n);
  });

  it('test operator "mul" overload (euint32, euint16) => euint32 test 4 (158, 158)', async function () {
    const res = await this.contract4.mul_euint32_euint16(158n, 158n);
    expect(res).to.equal(24964n);
  });

  it('test operator "and" overload (euint32, euint16) => euint32 test 1 (46593294, 4785)', async function () {
    const res = await this.contract4.and_euint32_euint16(46593294n, 4785n);
    expect(res).to.equal(4096n);
  });

  it('test operator "and" overload (euint32, euint16) => euint32 test 2 (4781, 4785)', async function () {
    const res = await this.contract4.and_euint32_euint16(4781n, 4785n);
    expect(res).to.equal(4769n);
  });

  it('test operator "and" overload (euint32, euint16) => euint32 test 3 (4785, 4785)', async function () {
    const res = await this.contract4.and_euint32_euint16(4785n, 4785n);
    expect(res).to.equal(4785n);
  });

  it('test operator "and" overload (euint32, euint16) => euint32 test 4 (4785, 4781)', async function () {
    const res = await this.contract4.and_euint32_euint16(4785n, 4781n);
    expect(res).to.equal(4769n);
  });

  it('test operator "or" overload (euint32, euint16) => euint32 test 1 (1914437939, 49825)', async function () {
    const res = await this.contract4.or_euint32_euint16(1914437939n, 49825n);
    expect(res).to.equal(1914487731n);
  });

  it('test operator "or" overload (euint32, euint16) => euint32 test 2 (49821, 49825)', async function () {
    const res = await this.contract4.or_euint32_euint16(49821n, 49825n);
    expect(res).to.equal(49853n);
  });

  it('test operator "or" overload (euint32, euint16) => euint32 test 3 (49825, 49825)', async function () {
    const res = await this.contract4.or_euint32_euint16(49825n, 49825n);
    expect(res).to.equal(49825n);
  });

  it('test operator "or" overload (euint32, euint16) => euint32 test 4 (49825, 49821)', async function () {
    const res = await this.contract4.or_euint32_euint16(49825n, 49821n);
    expect(res).to.equal(49853n);
  });

  it('test operator "xor" overload (euint32, euint16) => euint32 test 1 (4035221230, 58371)', async function () {
    const res = await this.contract4.xor_euint32_euint16(4035221230n, 58371n);
    expect(res).to.equal(4035212013n);
  });

  it('test operator "xor" overload (euint32, euint16) => euint32 test 2 (58367, 58371)', async function () {
    const res = await this.contract4.xor_euint32_euint16(58367n, 58371n);
    expect(res).to.equal(2044n);
  });

  it('test operator "xor" overload (euint32, euint16) => euint32 test 3 (58371, 58371)', async function () {
    const res = await this.contract4.xor_euint32_euint16(58371n, 58371n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint16) => euint32 test 4 (58371, 58367)', async function () {
    const res = await this.contract4.xor_euint32_euint16(58371n, 58367n);
    expect(res).to.equal(2044n);
  });

  it('test operator "eq" overload (euint32, euint16) => ebool test 1 (3944731587, 33929)', async function () {
    const res = await this.contract4.eq_euint32_euint16(3944731587n, 33929n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint16) => ebool test 2 (33925, 33929)', async function () {
    const res = await this.contract4.eq_euint32_euint16(33925n, 33929n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint16) => ebool test 3 (33929, 33929)', async function () {
    const res = await this.contract4.eq_euint32_euint16(33929n, 33929n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint16) => ebool test 4 (33929, 33925)', async function () {
    const res = await this.contract4.eq_euint32_euint16(33929n, 33925n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint16) => ebool test 1 (3302913406, 10832)', async function () {
    const res = await this.contract4.ne_euint32_euint16(3302913406n, 10832n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint16) => ebool test 2 (10828, 10832)', async function () {
    const res = await this.contract4.ne_euint32_euint16(10828n, 10832n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint16) => ebool test 3 (10832, 10832)', async function () {
    const res = await this.contract4.ne_euint32_euint16(10832n, 10832n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint16) => ebool test 4 (10832, 10828)', async function () {
    const res = await this.contract4.ne_euint32_euint16(10832n, 10828n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint16) => ebool test 1 (1742405068, 56059)', async function () {
    const res = await this.contract4.ge_euint32_euint16(1742405068n, 56059n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint16) => ebool test 2 (56055, 56059)', async function () {
    const res = await this.contract4.ge_euint32_euint16(56055n, 56059n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint16) => ebool test 3 (56059, 56059)', async function () {
    const res = await this.contract4.ge_euint32_euint16(56059n, 56059n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint16) => ebool test 4 (56059, 56055)', async function () {
    const res = await this.contract4.ge_euint32_euint16(56059n, 56055n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint16) => ebool test 1 (4017313863, 63284)', async function () {
    const res = await this.contract4.gt_euint32_euint16(4017313863n, 63284n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint16) => ebool test 2 (63280, 63284)', async function () {
    const res = await this.contract4.gt_euint32_euint16(63280n, 63284n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint16) => ebool test 3 (63284, 63284)', async function () {
    const res = await this.contract4.gt_euint32_euint16(63284n, 63284n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint16) => ebool test 4 (63284, 63280)', async function () {
    const res = await this.contract4.gt_euint32_euint16(63284n, 63280n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint16) => ebool test 1 (1660443539, 63916)', async function () {
    const res = await this.contract4.le_euint32_euint16(1660443539n, 63916n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint32, euint16) => ebool test 2 (63912, 63916)', async function () {
    const res = await this.contract4.le_euint32_euint16(63912n, 63916n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint16) => ebool test 3 (63916, 63916)', async function () {
    const res = await this.contract4.le_euint32_euint16(63916n, 63916n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint16) => ebool test 4 (63916, 63912)', async function () {
    const res = await this.contract4.le_euint32_euint16(63916n, 63912n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint16) => ebool test 1 (1150183024, 6871)', async function () {
    const res = await this.contract4.lt_euint32_euint16(1150183024n, 6871n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint16) => ebool test 2 (6867, 6871)', async function () {
    const res = await this.contract4.lt_euint32_euint16(6867n, 6871n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint16) => ebool test 3 (6871, 6871)', async function () {
    const res = await this.contract4.lt_euint32_euint16(6871n, 6871n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint16) => ebool test 4 (6871, 6867)', async function () {
    const res = await this.contract4.lt_euint32_euint16(6871n, 6867n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint16) => euint32 test 1 (2355937467, 15361)', async function () {
    const res = await this.contract4.min_euint32_euint16(2355937467n, 15361n);
    expect(res).to.equal(15361n);
  });

  it('test operator "min" overload (euint32, euint16) => euint32 test 2 (15357, 15361)', async function () {
    const res = await this.contract4.min_euint32_euint16(15357n, 15361n);
    expect(res).to.equal(15357n);
  });

  it('test operator "min" overload (euint32, euint16) => euint32 test 3 (15361, 15361)', async function () {
    const res = await this.contract4.min_euint32_euint16(15361n, 15361n);
    expect(res).to.equal(15361n);
  });

  it('test operator "min" overload (euint32, euint16) => euint32 test 4 (15361, 15357)', async function () {
    const res = await this.contract4.min_euint32_euint16(15361n, 15357n);
    expect(res).to.equal(15357n);
  });

  it('test operator "max" overload (euint32, euint16) => euint32 test 1 (4156714889, 5440)', async function () {
    const res = await this.contract4.max_euint32_euint16(4156714889n, 5440n);
    expect(res).to.equal(4156714889n);
  });

  it('test operator "max" overload (euint32, euint16) => euint32 test 2 (5436, 5440)', async function () {
    const res = await this.contract4.max_euint32_euint16(5436n, 5440n);
    expect(res).to.equal(5440n);
  });

  it('test operator "max" overload (euint32, euint16) => euint32 test 3 (5440, 5440)', async function () {
    const res = await this.contract4.max_euint32_euint16(5440n, 5440n);
    expect(res).to.equal(5440n);
  });

  it('test operator "max" overload (euint32, euint16) => euint32 test 4 (5440, 5436)', async function () {
    const res = await this.contract4.max_euint32_euint16(5440n, 5436n);
    expect(res).to.equal(5440n);
  });

  it('test operator "add" overload (euint32, euint32) => euint32 test 1 (451501910, 1802073207)', async function () {
    const res = await this.contract4.add_euint32_euint32(451501910n, 1802073207n);
    expect(res).to.equal(2253575117n);
  });

  it('test operator "add" overload (euint32, euint32) => euint32 test 2 (903003814, 903003818)', async function () {
    const res = await this.contract4.add_euint32_euint32(903003814n, 903003818n);
    expect(res).to.equal(1806007632n);
  });

  it('test operator "add" overload (euint32, euint32) => euint32 test 3 (903003818, 903003818)', async function () {
    const res = await this.contract4.add_euint32_euint32(903003818n, 903003818n);
    expect(res).to.equal(1806007636n);
  });

  it('test operator "add" overload (euint32, euint32) => euint32 test 4 (903003818, 903003814)', async function () {
    const res = await this.contract4.add_euint32_euint32(903003818n, 903003814n);
    expect(res).to.equal(1806007632n);
  });

  it('test operator "sub" overload (euint32, euint32) => euint32 test 1 (296156690, 296156690)', async function () {
    const res = await this.contract4.sub_euint32_euint32(296156690n, 296156690n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint32) => euint32 test 2 (296156690, 296156686)', async function () {
    const res = await this.contract4.sub_euint32_euint32(296156690n, 296156686n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint32) => euint32 test 1 (54583, 21224)', async function () {
    const res = await this.contract4.mul_euint32_euint32(54583n, 21224n);
    expect(res).to.equal(1158469592n);
  });

  it('test operator "mul" overload (euint32, euint32) => euint32 test 2 (42446, 42446)', async function () {
    const res = await this.contract4.mul_euint32_euint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "mul" overload (euint32, euint32) => euint32 test 3 (42446, 42446)', async function () {
    const res = await this.contract4.mul_euint32_euint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "mul" overload (euint32, euint32) => euint32 test 4 (42446, 42446)', async function () {
    const res = await this.contract4.mul_euint32_euint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "and" overload (euint32, euint32) => euint32 test 1 (2522719500, 2344855070)', async function () {
    const res = await this.contract4.and_euint32_euint32(2522719500n, 2344855070n);
    expect(res).to.equal(2185339916n);
  });

  it('test operator "and" overload (euint32, euint32) => euint32 test 2 (2344855066, 2344855070)', async function () {
    const res = await this.contract4.and_euint32_euint32(2344855066n, 2344855070n);
    expect(res).to.equal(2344855066n);
  });

  it('test operator "and" overload (euint32, euint32) => euint32 test 3 (2344855070, 2344855070)', async function () {
    const res = await this.contract4.and_euint32_euint32(2344855070n, 2344855070n);
    expect(res).to.equal(2344855070n);
  });

  it('test operator "and" overload (euint32, euint32) => euint32 test 4 (2344855070, 2344855066)', async function () {
    const res = await this.contract4.and_euint32_euint32(2344855070n, 2344855066n);
    expect(res).to.equal(2344855066n);
  });

  it('test operator "or" overload (euint32, euint32) => euint32 test 1 (1757798833, 311935858)', async function () {
    const res = await this.contract4.or_euint32_euint32(1757798833n, 311935858n);
    expect(res).to.equal(2060968947n);
  });

  it('test operator "or" overload (euint32, euint32) => euint32 test 2 (311935854, 311935858)', async function () {
    const res = await this.contract4.or_euint32_euint32(311935854n, 311935858n);
    expect(res).to.equal(311935870n);
  });

  it('test operator "or" overload (euint32, euint32) => euint32 test 3 (311935858, 311935858)', async function () {
    const res = await this.contract4.or_euint32_euint32(311935858n, 311935858n);
    expect(res).to.equal(311935858n);
  });

  it('test operator "or" overload (euint32, euint32) => euint32 test 4 (311935858, 311935854)', async function () {
    const res = await this.contract4.or_euint32_euint32(311935858n, 311935854n);
    expect(res).to.equal(311935870n);
  });

  it('test operator "xor" overload (euint32, euint32) => euint32 test 1 (3321450403, 449148535)', async function () {
    const res = await this.contract4.xor_euint32_euint32(3321450403n, 449148535n);
    expect(res).to.equal(3745266132n);
  });

  it('test operator "xor" overload (euint32, euint32) => euint32 test 2 (449148531, 449148535)', async function () {
    const res = await this.contract4.xor_euint32_euint32(449148531n, 449148535n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint32, euint32) => euint32 test 3 (449148535, 449148535)', async function () {
    const res = await this.contract4.xor_euint32_euint32(449148535n, 449148535n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint32) => euint32 test 4 (449148535, 449148531)', async function () {
    const res = await this.contract4.xor_euint32_euint32(449148535n, 449148531n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint32, euint32) => ebool test 1 (287391998, 2464993294)', async function () {
    const res = await this.contract4.eq_euint32_euint32(287391998n, 2464993294n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint32) => ebool test 2 (287391994, 287391998)', async function () {
    const res = await this.contract4.eq_euint32_euint32(287391994n, 287391998n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint32) => ebool test 3 (287391998, 287391998)', async function () {
    const res = await this.contract4.eq_euint32_euint32(287391998n, 287391998n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint32) => ebool test 4 (287391998, 287391994)', async function () {
    const res = await this.contract4.eq_euint32_euint32(287391998n, 287391994n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint32) => ebool test 1 (221510600, 3939036059)', async function () {
    const res = await this.contract4.ne_euint32_euint32(221510600n, 3939036059n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint32) => ebool test 2 (221510596, 221510600)', async function () {
    const res = await this.contract4.ne_euint32_euint32(221510596n, 221510600n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint32) => ebool test 3 (221510600, 221510600)', async function () {
    const res = await this.contract4.ne_euint32_euint32(221510600n, 221510600n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint32) => ebool test 4 (221510600, 221510596)', async function () {
    const res = await this.contract4.ne_euint32_euint32(221510600n, 221510596n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint32) => ebool test 1 (1736787381, 970577162)', async function () {
    const res = await this.contract4.ge_euint32_euint32(1736787381n, 970577162n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint32) => ebool test 2 (970577158, 970577162)', async function () {
    const res = await this.contract4.ge_euint32_euint32(970577158n, 970577162n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint32) => ebool test 3 (970577162, 970577162)', async function () {
    const res = await this.contract4.ge_euint32_euint32(970577162n, 970577162n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint32) => ebool test 4 (970577162, 970577158)', async function () {
    const res = await this.contract4.ge_euint32_euint32(970577162n, 970577158n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint32) => ebool test 1 (212629196, 2875731526)', async function () {
    const res = await this.contract4.gt_euint32_euint32(212629196n, 2875731526n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint32) => ebool test 2 (212629192, 212629196)', async function () {
    const res = await this.contract4.gt_euint32_euint32(212629192n, 212629196n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint32) => ebool test 3 (212629196, 212629196)', async function () {
    const res = await this.contract4.gt_euint32_euint32(212629196n, 212629196n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint32) => ebool test 4 (212629196, 212629192)', async function () {
    const res = await this.contract4.gt_euint32_euint32(212629196n, 212629192n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint32) => ebool test 1 (2708913268, 1446383134)', async function () {
    const res = await this.contract4.le_euint32_euint32(2708913268n, 1446383134n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint32, euint32) => ebool test 2 (1446383130, 1446383134)', async function () {
    const res = await this.contract4.le_euint32_euint32(1446383130n, 1446383134n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint32) => ebool test 3 (1446383134, 1446383134)', async function () {
    const res = await this.contract4.le_euint32_euint32(1446383134n, 1446383134n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint32) => ebool test 4 (1446383134, 1446383130)', async function () {
    const res = await this.contract4.le_euint32_euint32(1446383134n, 1446383130n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint32) => ebool test 1 (1837089382, 4089682184)', async function () {
    const res = await this.contract4.lt_euint32_euint32(1837089382n, 4089682184n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint32) => ebool test 2 (1837089378, 1837089382)', async function () {
    const res = await this.contract4.lt_euint32_euint32(1837089378n, 1837089382n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint32) => ebool test 3 (1837089382, 1837089382)', async function () {
    const res = await this.contract4.lt_euint32_euint32(1837089382n, 1837089382n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint32) => ebool test 4 (1837089382, 1837089378)', async function () {
    const res = await this.contract4.lt_euint32_euint32(1837089382n, 1837089378n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint32) => euint32 test 1 (4226618007, 2940808913)', async function () {
    const res = await this.contract4.min_euint32_euint32(4226618007n, 2940808913n);
    expect(res).to.equal(2940808913n);
  });

  it('test operator "min" overload (euint32, euint32) => euint32 test 2 (2940808909, 2940808913)', async function () {
    const res = await this.contract4.min_euint32_euint32(2940808909n, 2940808913n);
    expect(res).to.equal(2940808909n);
  });

  it('test operator "min" overload (euint32, euint32) => euint32 test 3 (2940808913, 2940808913)', async function () {
    const res = await this.contract4.min_euint32_euint32(2940808913n, 2940808913n);
    expect(res).to.equal(2940808913n);
  });

  it('test operator "min" overload (euint32, euint32) => euint32 test 4 (2940808913, 2940808909)', async function () {
    const res = await this.contract4.min_euint32_euint32(2940808913n, 2940808909n);
    expect(res).to.equal(2940808909n);
  });

  it('test operator "max" overload (euint32, euint32) => euint32 test 1 (3535438432, 2851290845)', async function () {
    const res = await this.contract4.max_euint32_euint32(3535438432n, 2851290845n);
    expect(res).to.equal(3535438432n);
  });

  it('test operator "max" overload (euint32, euint32) => euint32 test 2 (2851290841, 2851290845)', async function () {
    const res = await this.contract4.max_euint32_euint32(2851290841n, 2851290845n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "max" overload (euint32, euint32) => euint32 test 3 (2851290845, 2851290845)', async function () {
    const res = await this.contract4.max_euint32_euint32(2851290845n, 2851290845n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "max" overload (euint32, euint32) => euint32 test 4 (2851290845, 2851290841)', async function () {
    const res = await this.contract4.max_euint32_euint32(2851290845n, 2851290841n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "add" overload (euint32, euint64) => euint64 test 1 (2, 4294200415)', async function () {
    const res = await this.contract4.add_euint32_euint64(2n, 4294200415n);
    expect(res).to.equal(4294200417n);
  });

  it('test operator "add" overload (euint32, euint64) => euint64 test 2 (184177949, 184177953)', async function () {
    const res = await this.contract4.add_euint32_euint64(184177949n, 184177953n);
    expect(res).to.equal(368355902n);
  });

  it('test operator "add" overload (euint32, euint64) => euint64 test 3 (184177953, 184177953)', async function () {
    const res = await this.contract4.add_euint32_euint64(184177953n, 184177953n);
    expect(res).to.equal(368355906n);
  });

  it('test operator "add" overload (euint32, euint64) => euint64 test 4 (184177953, 184177949)', async function () {
    const res = await this.contract4.add_euint32_euint64(184177953n, 184177949n);
    expect(res).to.equal(368355902n);
  });

  it('test operator "sub" overload (euint32, euint64) => euint64 test 1 (2163998221, 2163998221)', async function () {
    const res = await this.contract4.sub_euint32_euint64(2163998221n, 2163998221n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, euint64) => euint64 test 2 (2163998221, 2163998217)', async function () {
    const res = await this.contract4.sub_euint32_euint64(2163998221n, 2163998217n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, euint64) => euint64 test 1 (2, 2146443814)', async function () {
    const res = await this.contract4.mul_euint32_euint64(2n, 2146443814n);
    expect(res).to.equal(4292887628n);
  });

  it('test operator "mul" overload (euint32, euint64) => euint64 test 2 (61456, 61456)', async function () {
    const res = await this.contract4.mul_euint32_euint64(61456n, 61456n);
    expect(res).to.equal(3776839936n);
  });

  it('test operator "mul" overload (euint32, euint64) => euint64 test 3 (61456, 61456)', async function () {
    const res = await this.contract4.mul_euint32_euint64(61456n, 61456n);
    expect(res).to.equal(3776839936n);
  });

  it('test operator "mul" overload (euint32, euint64) => euint64 test 4 (61456, 61456)', async function () {
    const res = await this.contract4.mul_euint32_euint64(61456n, 61456n);
    expect(res).to.equal(3776839936n);
  });

  it('test operator "and" overload (euint32, euint64) => euint64 test 1 (595906685, 18438632387690440007)', async function () {
    const res = await this.contract4.and_euint32_euint64(595906685n, 18438632387690440007n);
    expect(res).to.equal(537133125n);
  });

  it('test operator "and" overload (euint32, euint64) => euint64 test 2 (595906681, 595906685)', async function () {
    const res = await this.contract4.and_euint32_euint64(595906681n, 595906685n);
    expect(res).to.equal(595906681n);
  });

  it('test operator "and" overload (euint32, euint64) => euint64 test 3 (595906685, 595906685)', async function () {
    const res = await this.contract4.and_euint32_euint64(595906685n, 595906685n);
    expect(res).to.equal(595906685n);
  });

  it('test operator "and" overload (euint32, euint64) => euint64 test 4 (595906685, 595906681)', async function () {
    const res = await this.contract4.and_euint32_euint64(595906685n, 595906681n);
    expect(res).to.equal(595906681n);
  });

  it('test operator "or" overload (euint32, euint64) => euint64 test 1 (1312726121, 18440203558036734807)', async function () {
    const res = await this.contract4.or_euint32_euint64(1312726121n, 18440203558036734807n);
    expect(res).to.equal(18440203559245881215n);
  });

  it('test operator "or" overload (euint32, euint64) => euint64 test 2 (1312726117, 1312726121)', async function () {
    const res = await this.contract4.or_euint32_euint64(1312726117n, 1312726121n);
    expect(res).to.equal(1312726125n);
  });

  it('test operator "or" overload (euint32, euint64) => euint64 test 3 (1312726121, 1312726121)', async function () {
    const res = await this.contract4.or_euint32_euint64(1312726121n, 1312726121n);
    expect(res).to.equal(1312726121n);
  });

  it('test operator "or" overload (euint32, euint64) => euint64 test 4 (1312726121, 1312726117)', async function () {
    const res = await this.contract4.or_euint32_euint64(1312726121n, 1312726117n);
    expect(res).to.equal(1312726125n);
  });

  it('test operator "xor" overload (euint32, euint64) => euint64 test 1 (3933920874, 18441384818446198365)', async function () {
    const res = await this.contract4.xor_euint32_euint64(3933920874n, 18441384818446198365n);
    expect(res).to.equal(18441384821297952823n);
  });

  it('test operator "xor" overload (euint32, euint64) => euint64 test 2 (3933920870, 3933920874)', async function () {
    const res = await this.contract4.xor_euint32_euint64(3933920870n, 3933920874n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint32, euint64) => euint64 test 3 (3933920874, 3933920874)', async function () {
    const res = await this.contract4.xor_euint32_euint64(3933920874n, 3933920874n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint32, euint64) => euint64 test 4 (3933920874, 3933920870)', async function () {
    const res = await this.contract4.xor_euint32_euint64(3933920874n, 3933920870n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint32, euint64) => ebool test 1 (709957546, 18441724614470442911)', async function () {
    const res = await this.contract4.eq_euint32_euint64(709957546n, 18441724614470442911n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint64) => ebool test 2 (709957542, 709957546)', async function () {
    const res = await this.contract4.eq_euint32_euint64(709957542n, 709957546n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, euint64) => ebool test 3 (709957546, 709957546)', async function () {
    const res = await this.contract4.eq_euint32_euint64(709957546n, 709957546n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, euint64) => ebool test 4 (709957546, 709957542)', async function () {
    const res = await this.contract4.eq_euint32_euint64(709957546n, 709957542n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint64) => ebool test 1 (897008808, 18446223426742336677)', async function () {
    const res = await this.contract4.ne_euint32_euint64(897008808n, 18446223426742336677n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint64) => ebool test 2 (897008804, 897008808)', async function () {
    const res = await this.contract4.ne_euint32_euint64(897008804n, 897008808n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, euint64) => ebool test 3 (897008808, 897008808)', async function () {
    const res = await this.contract4.ne_euint32_euint64(897008808n, 897008808n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, euint64) => ebool test 4 (897008808, 897008804)', async function () {
    const res = await this.contract4.ne_euint32_euint64(897008808n, 897008804n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint64) => ebool test 1 (2551620349, 18444102078323452175)', async function () {
    const res = await this.contract4.ge_euint32_euint64(2551620349n, 18444102078323452175n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint64) => ebool test 2 (2551620345, 2551620349)', async function () {
    const res = await this.contract4.ge_euint32_euint64(2551620345n, 2551620349n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, euint64) => ebool test 3 (2551620349, 2551620349)', async function () {
    const res = await this.contract4.ge_euint32_euint64(2551620349n, 2551620349n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, euint64) => ebool test 4 (2551620349, 2551620345)', async function () {
    const res = await this.contract4.ge_euint32_euint64(2551620349n, 2551620345n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, euint64) => ebool test 1 (2256977835, 18442208006659778105)', async function () {
    const res = await this.contract4.gt_euint32_euint64(2256977835n, 18442208006659778105n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint64) => ebool test 2 (2256977831, 2256977835)', async function () {
    const res = await this.contract4.gt_euint32_euint64(2256977831n, 2256977835n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint64) => ebool test 3 (2256977835, 2256977835)', async function () {
    const res = await this.contract4.gt_euint32_euint64(2256977835n, 2256977835n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, euint64) => ebool test 4 (2256977835, 2256977831)', async function () {
    const res = await this.contract4.gt_euint32_euint64(2256977835n, 2256977831n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint64) => ebool test 1 (557237517, 18442682499983449751)', async function () {
    const res = await this.contract4.le_euint32_euint64(557237517n, 18442682499983449751n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint64) => ebool test 2 (557237513, 557237517)', async function () {
    const res = await this.contract4.le_euint32_euint64(557237513n, 557237517n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint64) => ebool test 3 (557237517, 557237517)', async function () {
    const res = await this.contract4.le_euint32_euint64(557237517n, 557237517n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, euint64) => ebool test 4 (557237517, 557237513)', async function () {
    const res = await this.contract4.le_euint32_euint64(557237517n, 557237513n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint64) => ebool test 1 (1941297565, 18438856464497751915)', async function () {
    const res = await this.contract4.lt_euint32_euint64(1941297565n, 18438856464497751915n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint64) => ebool test 2 (1941297561, 1941297565)', async function () {
    const res = await this.contract4.lt_euint32_euint64(1941297561n, 1941297565n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, euint64) => ebool test 3 (1941297565, 1941297565)', async function () {
    const res = await this.contract4.lt_euint32_euint64(1941297565n, 1941297565n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, euint64) => ebool test 4 (1941297565, 1941297561)', async function () {
    const res = await this.contract4.lt_euint32_euint64(1941297565n, 1941297561n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, euint64) => euint64 test 1 (3364933042, 18443534177311383841)', async function () {
    const res = await this.contract4.min_euint32_euint64(3364933042n, 18443534177311383841n);
    expect(res).to.equal(3364933042n);
  });

  it('test operator "min" overload (euint32, euint64) => euint64 test 2 (3364933038, 3364933042)', async function () {
    const res = await this.contract4.min_euint32_euint64(3364933038n, 3364933042n);
    expect(res).to.equal(3364933038n);
  });

  it('test operator "min" overload (euint32, euint64) => euint64 test 3 (3364933042, 3364933042)', async function () {
    const res = await this.contract4.min_euint32_euint64(3364933042n, 3364933042n);
    expect(res).to.equal(3364933042n);
  });

  it('test operator "min" overload (euint32, euint64) => euint64 test 4 (3364933042, 3364933038)', async function () {
    const res = await this.contract4.min_euint32_euint64(3364933042n, 3364933038n);
    expect(res).to.equal(3364933038n);
  });

  it('test operator "max" overload (euint32, euint64) => euint64 test 1 (821915788, 18441217303884363213)', async function () {
    const res = await this.contract4.max_euint32_euint64(821915788n, 18441217303884363213n);
    expect(res).to.equal(18441217303884363213n);
  });

  it('test operator "max" overload (euint32, euint64) => euint64 test 2 (821915784, 821915788)', async function () {
    const res = await this.contract4.max_euint32_euint64(821915784n, 821915788n);
    expect(res).to.equal(821915788n);
  });

  it('test operator "max" overload (euint32, euint64) => euint64 test 3 (821915788, 821915788)', async function () {
    const res = await this.contract4.max_euint32_euint64(821915788n, 821915788n);
    expect(res).to.equal(821915788n);
  });

  it('test operator "max" overload (euint32, euint64) => euint64 test 4 (821915788, 821915784)', async function () {
    const res = await this.contract4.max_euint32_euint64(821915788n, 821915784n);
    expect(res).to.equal(821915788n);
  });

  it('test operator "add" overload (euint32, uint32) => euint32 test 1 (451501910, 2087738652)', async function () {
    const res = await this.contract4.add_euint32_uint32(451501910n, 2087738652n);
    expect(res).to.equal(2539240562n);
  });

  it('test operator "add" overload (euint32, uint32) => euint32 test 2 (903003814, 903003818)', async function () {
    const res = await this.contract4.add_euint32_uint32(903003814n, 903003818n);
    expect(res).to.equal(1806007632n);
  });

  it('test operator "add" overload (euint32, uint32) => euint32 test 3 (903003818, 903003818)', async function () {
    const res = await this.contract4.add_euint32_uint32(903003818n, 903003818n);
    expect(res).to.equal(1806007636n);
  });

  it('test operator "add" overload (euint32, uint32) => euint32 test 4 (903003818, 903003814)', async function () {
    const res = await this.contract4.add_euint32_uint32(903003818n, 903003814n);
    expect(res).to.equal(1806007632n);
  });

  it('test operator "add" overload (uint32, euint32) => euint32 test 1 (823987277, 2087738652)', async function () {
    const res = await this.contract4.add_uint32_euint32(823987277n, 2087738652n);
    expect(res).to.equal(2911725929n);
  });

  it('test operator "add" overload (uint32, euint32) => euint32 test 2 (903003814, 903003818)', async function () {
    const res = await this.contract4.add_uint32_euint32(903003814n, 903003818n);
    expect(res).to.equal(1806007632n);
  });

  it('test operator "add" overload (uint32, euint32) => euint32 test 3 (903003818, 903003818)', async function () {
    const res = await this.contract4.add_uint32_euint32(903003818n, 903003818n);
    expect(res).to.equal(1806007636n);
  });

  it('test operator "add" overload (uint32, euint32) => euint32 test 4 (903003818, 903003814)', async function () {
    const res = await this.contract4.add_uint32_euint32(903003818n, 903003814n);
    expect(res).to.equal(1806007632n);
  });

  it('test operator "sub" overload (euint32, uint32) => euint32 test 1 (296156690, 296156690)', async function () {
    const res = await this.contract4.sub_euint32_uint32(296156690n, 296156690n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint32, uint32) => euint32 test 2 (296156690, 296156686)', async function () {
    const res = await this.contract4.sub_euint32_uint32(296156690n, 296156686n);
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint32, euint32) => euint32 test 1 (296156690, 296156690)', async function () {
    const res = await this.contract4.sub_uint32_euint32(296156690n, 296156690n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint32, euint32) => euint32 test 2 (296156690, 296156686)', async function () {
    const res = await this.contract4.sub_uint32_euint32(296156690n, 296156686n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint32, uint32) => euint32 test 1 (54583, 52500)', async function () {
    const res = await this.contract4.mul_euint32_uint32(54583n, 52500n);
    expect(res).to.equal(2865607500n);
  });

  it('test operator "mul" overload (euint32, uint32) => euint32 test 2 (42446, 42446)', async function () {
    const res = await this.contract4.mul_euint32_uint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "mul" overload (euint32, uint32) => euint32 test 3 (42446, 42446)', async function () {
    const res = await this.contract4.mul_euint32_uint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "mul" overload (euint32, uint32) => euint32 test 4 (42446, 42446)', async function () {
    const res = await this.contract4.mul_euint32_uint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "mul" overload (uint32, euint32) => euint32 test 1 (39745, 104998)', async function () {
    const res = await this.contract4.mul_uint32_euint32(39745n, 104998n);
    expect(res).to.equal(4173145510n);
  });

  it('test operator "mul" overload (uint32, euint32) => euint32 test 2 (42446, 42446)', async function () {
    const res = await this.contract4.mul_uint32_euint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "mul" overload (uint32, euint32) => euint32 test 3 (42446, 42446)', async function () {
    const res = await this.contract4.mul_uint32_euint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "mul" overload (uint32, euint32) => euint32 test 4 (42446, 42446)', async function () {
    const res = await this.contract4.mul_uint32_euint32(42446n, 42446n);
    expect(res).to.equal(1801662916n);
  });

  it('test operator "div" overload (euint32, uint32) => euint32 test 1 (1758653773, 1926631032)', async function () {
    const res = await this.contract4.div_euint32_uint32(1758653773n, 1926631032n);
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint32, uint32) => euint32 test 2 (569518498, 569518502)', async function () {
    const res = await this.contract4.div_euint32_uint32(569518498n, 569518502n);
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint32, uint32) => euint32 test 3 (569518502, 569518502)', async function () {
    const res = await this.contract4.div_euint32_uint32(569518502n, 569518502n);
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint32, uint32) => euint32 test 4 (569518502, 569518498)', async function () {
    const res = await this.contract4.div_euint32_uint32(569518502n, 569518498n);
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint32, uint32) => euint32 test 1 (514826887, 2242906184)', async function () {
    const res = await this.contract4.rem_euint32_uint32(514826887n, 2242906184n);
    expect(res).to.equal(514826887n);
  });

  it('test operator "rem" overload (euint32, uint32) => euint32 test 2 (514826883, 514826887)', async function () {
    const res = await this.contract4.rem_euint32_uint32(514826883n, 514826887n);
    expect(res).to.equal(514826883n);
  });

  it('test operator "rem" overload (euint32, uint32) => euint32 test 3 (514826887, 514826887)', async function () {
    const res = await this.contract4.rem_euint32_uint32(514826887n, 514826887n);
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint32, uint32) => euint32 test 4 (514826887, 514826883)', async function () {
    const res = await this.contract4.rem_euint32_uint32(514826887n, 514826883n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint32, uint32) => ebool test 1 (287391998, 3065919083)', async function () {
    const res = await this.contract4.eq_euint32_uint32(287391998n, 3065919083n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, uint32) => ebool test 2 (287391994, 287391998)', async function () {
    const res = await this.contract4.eq_euint32_uint32(287391994n, 287391998n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint32, uint32) => ebool test 3 (287391998, 287391998)', async function () {
    const res = await this.contract4.eq_euint32_uint32(287391998n, 287391998n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint32, uint32) => ebool test 4 (287391998, 287391994)', async function () {
    const res = await this.contract4.eq_euint32_uint32(287391998n, 287391994n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint32, euint32) => ebool test 1 (833280044, 3065919083)', async function () {
    const res = await this.contract4.eq_uint32_euint32(833280044n, 3065919083n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint32, euint32) => ebool test 2 (287391994, 287391998)', async function () {
    const res = await this.contract4.eq_uint32_euint32(287391994n, 287391998n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint32, euint32) => ebool test 3 (287391998, 287391998)', async function () {
    const res = await this.contract4.eq_uint32_euint32(287391998n, 287391998n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint32, euint32) => ebool test 4 (287391998, 287391994)', async function () {
    const res = await this.contract4.eq_uint32_euint32(287391998n, 287391994n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, uint32) => ebool test 1 (221510600, 454323706)', async function () {
    const res = await this.contract4.ne_euint32_uint32(221510600n, 454323706n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, uint32) => ebool test 2 (221510596, 221510600)', async function () {
    const res = await this.contract4.ne_euint32_uint32(221510596n, 221510600n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint32, uint32) => ebool test 3 (221510600, 221510600)', async function () {
    const res = await this.contract4.ne_euint32_uint32(221510600n, 221510600n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint32, uint32) => ebool test 4 (221510600, 221510596)', async function () {
    const res = await this.contract4.ne_euint32_uint32(221510600n, 221510596n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint32, euint32) => ebool test 1 (2107136281, 454323706)', async function () {
    const res = await this.contract4.ne_uint32_euint32(2107136281n, 454323706n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint32, euint32) => ebool test 2 (221510596, 221510600)', async function () {
    const res = await this.contract4.ne_uint32_euint32(221510596n, 221510600n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint32, euint32) => ebool test 3 (221510600, 221510600)', async function () {
    const res = await this.contract4.ne_uint32_euint32(221510600n, 221510600n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint32, euint32) => ebool test 4 (221510600, 221510596)', async function () {
    const res = await this.contract4.ne_uint32_euint32(221510600n, 221510596n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, uint32) => ebool test 1 (1736787381, 3290514741)', async function () {
    const res = await this.contract4.ge_euint32_uint32(1736787381n, 3290514741n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, uint32) => ebool test 2 (970577158, 970577162)', async function () {
    const res = await this.contract4.ge_euint32_uint32(970577158n, 970577162n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint32, uint32) => ebool test 3 (970577162, 970577162)', async function () {
    const res = await this.contract4.ge_euint32_uint32(970577162n, 970577162n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint32, uint32) => ebool test 4 (970577162, 970577158)', async function () {
    const res = await this.contract4.ge_euint32_uint32(970577162n, 970577158n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint32, euint32) => ebool test 1 (586395582, 3290514741)', async function () {
    const res = await this.contract4.ge_uint32_euint32(586395582n, 3290514741n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint32, euint32) => ebool test 2 (970577158, 970577162)', async function () {
    const res = await this.contract4.ge_uint32_euint32(970577158n, 970577162n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint32, euint32) => ebool test 3 (970577162, 970577162)', async function () {
    const res = await this.contract4.ge_uint32_euint32(970577162n, 970577162n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint32, euint32) => ebool test 4 (970577162, 970577158)', async function () {
    const res = await this.contract4.ge_uint32_euint32(970577162n, 970577158n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint32, uint32) => ebool test 1 (212629196, 4059879084)', async function () {
    const res = await this.contract4.gt_euint32_uint32(212629196n, 4059879084n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, uint32) => ebool test 2 (212629192, 212629196)', async function () {
    const res = await this.contract4.gt_euint32_uint32(212629192n, 212629196n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, uint32) => ebool test 3 (212629196, 212629196)', async function () {
    const res = await this.contract4.gt_euint32_uint32(212629196n, 212629196n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint32, uint32) => ebool test 4 (212629196, 212629192)', async function () {
    const res = await this.contract4.gt_euint32_uint32(212629196n, 212629192n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint32, euint32) => ebool test 1 (2732454384, 4059879084)', async function () {
    const res = await this.contract4.gt_uint32_euint32(2732454384n, 4059879084n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint32, euint32) => ebool test 2 (212629192, 212629196)', async function () {
    const res = await this.contract4.gt_uint32_euint32(212629192n, 212629196n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint32, euint32) => ebool test 3 (212629196, 212629196)', async function () {
    const res = await this.contract4.gt_uint32_euint32(212629196n, 212629196n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint32, euint32) => ebool test 4 (212629196, 212629192)', async function () {
    const res = await this.contract4.gt_uint32_euint32(212629196n, 212629192n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, uint32) => ebool test 1 (2708913268, 3120465053)', async function () {
    const res = await this.contract4.le_euint32_uint32(2708913268n, 3120465053n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, uint32) => ebool test 2 (1446383130, 1446383134)', async function () {
    const res = await this.contract4.le_euint32_uint32(1446383130n, 1446383134n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, uint32) => ebool test 3 (1446383134, 1446383134)', async function () {
    const res = await this.contract4.le_euint32_uint32(1446383134n, 1446383134n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint32, uint32) => ebool test 4 (1446383134, 1446383130)', async function () {
    const res = await this.contract4.le_euint32_uint32(1446383134n, 1446383130n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint32, euint32) => ebool test 1 (518556131, 3120465053)', async function () {
    const res = await this.contract4.le_uint32_euint32(518556131n, 3120465053n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint32, euint32) => ebool test 2 (1446383130, 1446383134)', async function () {
    const res = await this.contract4.le_uint32_euint32(1446383130n, 1446383134n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint32, euint32) => ebool test 3 (1446383134, 1446383134)', async function () {
    const res = await this.contract4.le_uint32_euint32(1446383134n, 1446383134n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint32, euint32) => ebool test 4 (1446383134, 1446383130)', async function () {
    const res = await this.contract4.le_uint32_euint32(1446383134n, 1446383130n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, uint32) => ebool test 1 (1837089382, 2866298985)', async function () {
    const res = await this.contract4.lt_euint32_uint32(1837089382n, 2866298985n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, uint32) => ebool test 2 (1837089378, 1837089382)', async function () {
    const res = await this.contract4.lt_euint32_uint32(1837089378n, 1837089382n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint32, uint32) => ebool test 3 (1837089382, 1837089382)', async function () {
    const res = await this.contract4.lt_euint32_uint32(1837089382n, 1837089382n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint32, uint32) => ebool test 4 (1837089382, 1837089378)', async function () {
    const res = await this.contract4.lt_euint32_uint32(1837089382n, 1837089378n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint32, euint32) => ebool test 1 (391192733, 2866298985)', async function () {
    const res = await this.contract4.lt_uint32_euint32(391192733n, 2866298985n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint32, euint32) => ebool test 2 (1837089378, 1837089382)', async function () {
    const res = await this.contract4.lt_uint32_euint32(1837089378n, 1837089382n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint32, euint32) => ebool test 3 (1837089382, 1837089382)', async function () {
    const res = await this.contract4.lt_uint32_euint32(1837089382n, 1837089382n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint32, euint32) => ebool test 4 (1837089382, 1837089378)', async function () {
    const res = await this.contract4.lt_uint32_euint32(1837089382n, 1837089378n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint32, uint32) => euint32 test 1 (4226618007, 2039277146)', async function () {
    const res = await this.contract4.min_euint32_uint32(4226618007n, 2039277146n);
    expect(res).to.equal(2039277146n);
  });

  it('test operator "min" overload (euint32, uint32) => euint32 test 2 (2940808909, 2940808913)', async function () {
    const res = await this.contract4.min_euint32_uint32(2940808909n, 2940808913n);
    expect(res).to.equal(2940808909n);
  });

  it('test operator "min" overload (euint32, uint32) => euint32 test 3 (2940808913, 2940808913)', async function () {
    const res = await this.contract4.min_euint32_uint32(2940808913n, 2940808913n);
    expect(res).to.equal(2940808913n);
  });

  it('test operator "min" overload (euint32, uint32) => euint32 test 4 (2940808913, 2940808909)', async function () {
    const res = await this.contract4.min_euint32_uint32(2940808913n, 2940808909n);
    expect(res).to.equal(2940808909n);
  });

  it('test operator "min" overload (uint32, euint32) => euint32 test 1 (1778120575, 2039277146)', async function () {
    const res = await this.contract4.min_uint32_euint32(1778120575n, 2039277146n);
    expect(res).to.equal(1778120575n);
  });

  it('test operator "min" overload (uint32, euint32) => euint32 test 2 (2940808909, 2940808913)', async function () {
    const res = await this.contract4.min_uint32_euint32(2940808909n, 2940808913n);
    expect(res).to.equal(2940808909n);
  });

  it('test operator "min" overload (uint32, euint32) => euint32 test 3 (2940808913, 2940808913)', async function () {
    const res = await this.contract4.min_uint32_euint32(2940808913n, 2940808913n);
    expect(res).to.equal(2940808913n);
  });

  it('test operator "min" overload (uint32, euint32) => euint32 test 4 (2940808913, 2940808909)', async function () {
    const res = await this.contract4.min_uint32_euint32(2940808913n, 2940808909n);
    expect(res).to.equal(2940808909n);
  });

  it('test operator "max" overload (euint32, uint32) => euint32 test 1 (3535438432, 1480992326)', async function () {
    const res = await this.contract4.max_euint32_uint32(3535438432n, 1480992326n);
    expect(res).to.equal(3535438432n);
  });

  it('test operator "max" overload (euint32, uint32) => euint32 test 2 (2851290841, 2851290845)', async function () {
    const res = await this.contract4.max_euint32_uint32(2851290841n, 2851290845n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "max" overload (euint32, uint32) => euint32 test 3 (2851290845, 2851290845)', async function () {
    const res = await this.contract4.max_euint32_uint32(2851290845n, 2851290845n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "max" overload (euint32, uint32) => euint32 test 4 (2851290845, 2851290841)', async function () {
    const res = await this.contract4.max_euint32_uint32(2851290845n, 2851290841n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "max" overload (uint32, euint32) => euint32 test 1 (760733114, 1480992326)', async function () {
    const res = await this.contract4.max_uint32_euint32(760733114n, 1480992326n);
    expect(res).to.equal(1480992326n);
  });

  it('test operator "max" overload (uint32, euint32) => euint32 test 2 (2851290841, 2851290845)', async function () {
    const res = await this.contract4.max_uint32_euint32(2851290841n, 2851290845n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "max" overload (uint32, euint32) => euint32 test 3 (2851290845, 2851290845)', async function () {
    const res = await this.contract4.max_uint32_euint32(2851290845n, 2851290845n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "max" overload (uint32, euint32) => euint32 test 4 (2851290845, 2851290841)', async function () {
    const res = await this.contract4.max_uint32_euint32(2851290845n, 2851290841n);
    expect(res).to.equal(2851290845n);
  });

  it('test operator "add" overload (euint64, euint4) => euint64 test 1 (9, 2)', async function () {
    const res = await this.contract4.add_euint64_euint4(9n, 2n);
    expect(res).to.equal(11n);
  });

  it('test operator "add" overload (euint64, euint4) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract4.add_euint64_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "add" overload (euint64, euint4) => euint64 test 3 (5, 5)', async function () {
    const res = await this.contract4.add_euint64_euint4(5n, 5n);
    expect(res).to.equal(10n);
  });

  it('test operator "add" overload (euint64, euint4) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract4.add_euint64_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "sub" overload (euint64, euint4) => euint64 test 1 (10, 10)', async function () {
    const res = await this.contract4.sub_euint64_euint4(10n, 10n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint4) => euint64 test 2 (10, 6)', async function () {
    const res = await this.contract4.sub_euint64_euint4(10n, 6n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint4) => euint64 test 1 (5, 2)', async function () {
    const res = await this.contract4.mul_euint64_euint4(5n, 2n);
    expect(res).to.equal(10n);
  });

  it('test operator "mul" overload (euint64, euint4) => euint64 test 2 (3, 5)', async function () {
    const res = await this.contract4.mul_euint64_euint4(3n, 5n);
    expect(res).to.equal(15n);
  });

  it('test operator "mul" overload (euint64, euint4) => euint64 test 3 (3, 3)', async function () {
    const res = await this.contract4.mul_euint64_euint4(3n, 3n);
    expect(res).to.equal(9n);
  });

  it('test operator "mul" overload (euint64, euint4) => euint64 test 4 (5, 3)', async function () {
    const res = await this.contract4.mul_euint64_euint4(5n, 3n);
    expect(res).to.equal(15n);
  });

  it('test operator "and" overload (euint64, euint4) => euint64 test 1 (18444456172028398167, 8)', async function () {
    const res = await this.contract4.and_euint64_euint4(18444456172028398167n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint64, euint4) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract4.and_euint64_euint4(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint64, euint4) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract4.and_euint64_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "and" overload (euint64, euint4) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract4.and_euint64_euint4(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "or" overload (euint64, euint4) => euint64 test 1 (18443742079082438219, 5)', async function () {
    const res = await this.contract4.or_euint64_euint4(18443742079082438219n, 5n);
    expect(res).to.equal(18443742079082438223n);
  });

  it('test operator "or" overload (euint64, euint4) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract4.or_euint64_euint4(4n, 8n);
    expect(res).to.equal(12n);
  });

  it('test operator "or" overload (euint64, euint4) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract4.or_euint64_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "or" overload (euint64, euint4) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract4.or_euint64_euint4(8n, 4n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint64, euint4) => euint64 test 1 (18442015029052104347, 10)', async function () {
    const res = await this.contract4.xor_euint64_euint4(18442015029052104347n, 10n);
    expect(res).to.equal(18442015029052104337n);
  });

  it('test operator "xor" overload (euint64, euint4) => euint64 test 2 (6, 10)', async function () {
    const res = await this.contract4.xor_euint64_euint4(6n, 10n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint64, euint4) => euint64 test 3 (10, 10)', async function () {
    const res = await this.contract4.xor_euint64_euint4(10n, 10n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint4) => euint64 test 4 (10, 6)', async function () {
    const res = await this.contract4.xor_euint64_euint4(10n, 6n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint64, euint4) => ebool test 1 (18446728320459652857, 10)', async function () {
    const res = await this.contract4.eq_euint64_euint4(18446728320459652857n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint4) => ebool test 2 (6, 10)', async function () {
    const res = await this.contract4.eq_euint64_euint4(6n, 10n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint4) => ebool test 3 (10, 10)', async function () {
    const res = await this.contract4.eq_euint64_euint4(10n, 10n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint4) => ebool test 4 (10, 6)', async function () {
    const res = await this.contract4.eq_euint64_euint4(10n, 6n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint4) => ebool test 1 (18446041636272307563, 8)', async function () {
    const res = await this.contract4.ne_euint64_euint4(18446041636272307563n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract4.ne_euint64_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract4.ne_euint64_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract4.ne_euint64_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint4) => ebool test 1 (18439251641807718563, 9)', async function () {
    const res = await this.contract4.ge_euint64_euint4(18439251641807718563n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint4) => ebool test 2 (5, 9)', async function () {
    const res = await this.contract4.ge_euint64_euint4(5n, 9n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint4) => ebool test 3 (9, 9)', async function () {
    const res = await this.contract4.ge_euint64_euint4(9n, 9n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint4) => ebool test 4 (9, 5)', async function () {
    const res = await this.contract4.ge_euint64_euint4(9n, 5n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint4) => ebool test 1 (18441781451110763323, 1)', async function () {
    const res = await this.contract4.gt_euint64_euint4(18441781451110763323n, 1n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract4.gt_euint64_euint4(4n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract4.gt_euint64_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract4.gt_euint64_euint4(8n, 4n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint4) => ebool test 1 (18438089675582739325, 8)', async function () {
    const res = await this.contract4.le_euint64_euint4(18438089675582739325n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract4.le_euint64_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract4.le_euint64_euint4(8n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract4.le_euint64_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint4) => ebool test 1 (18443056909764585511, 1)', async function () {
    const res = await this.contract4.lt_euint64_euint4(18443056909764585511n, 1n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint4) => ebool test 2 (4, 8)', async function () {
    const res = await this.contract4.lt_euint64_euint4(4n, 8n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint4) => ebool test 3 (8, 8)', async function () {
    const res = await this.contract4.lt_euint64_euint4(8n, 8n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint4) => ebool test 4 (8, 4)', async function () {
    const res = await this.contract4.lt_euint64_euint4(8n, 4n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint4) => euint64 test 1 (18446705827641256747, 10)', async function () {
    const res = await this.contract4.min_euint64_euint4(18446705827641256747n, 10n);
    expect(res).to.equal(10n);
  });

  it('test operator "min" overload (euint64, euint4) => euint64 test 2 (6, 10)', async function () {
    const res = await this.contract4.min_euint64_euint4(6n, 10n);
    expect(res).to.equal(6n);
  });

  it('test operator "min" overload (euint64, euint4) => euint64 test 3 (10, 10)', async function () {
    const res = await this.contract4.min_euint64_euint4(10n, 10n);
    expect(res).to.equal(10n);
  });

  it('test operator "min" overload (euint64, euint4) => euint64 test 4 (10, 6)', async function () {
    const res = await this.contract4.min_euint64_euint4(10n, 6n);
    expect(res).to.equal(6n);
  });

  it('test operator "max" overload (euint64, euint4) => euint64 test 1 (18445668950732298129, 5)', async function () {
    const res = await this.contract4.max_euint64_euint4(18445668950732298129n, 5n);
    expect(res).to.equal(18445668950732298129n);
  });

  it('test operator "max" overload (euint64, euint4) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract4.max_euint64_euint4(4n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint64, euint4) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract4.max_euint64_euint4(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "max" overload (euint64, euint4) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract4.max_euint64_euint4(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "add" overload (euint64, euint8) => euint64 test 1 (129, 2)', async function () {
    const res = await this.contract4.add_euint64_euint8(129n, 2n);
    expect(res).to.equal(131n);
  });

  it('test operator "add" overload (euint64, euint8) => euint64 test 2 (89, 91)', async function () {
    const res = await this.contract4.add_euint64_euint8(89n, 91n);
    expect(res).to.equal(180n);
  });

  it('test operator "add" overload (euint64, euint8) => euint64 test 3 (91, 91)', async function () {
    const res = await this.contract4.add_euint64_euint8(91n, 91n);
    expect(res).to.equal(182n);
  });

  it('test operator "add" overload (euint64, euint8) => euint64 test 4 (91, 89)', async function () {
    const res = await this.contract4.add_euint64_euint8(91n, 89n);
    expect(res).to.equal(180n);
  });

  it('test operator "sub" overload (euint64, euint8) => euint64 test 1 (25, 25)', async function () {
    const res = await this.contract4.sub_euint64_euint8(25n, 25n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint8) => euint64 test 2 (25, 21)', async function () {
    const res = await this.contract4.sub_euint64_euint8(25n, 21n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint8) => euint64 test 1 (65, 2)', async function () {
    const res = await this.contract4.mul_euint64_euint8(65n, 2n);
    expect(res).to.equal(130n);
  });

  it('test operator "mul" overload (euint64, euint8) => euint64 test 2 (9, 10)', async function () {
    const res = await this.contract4.mul_euint64_euint8(9n, 10n);
    expect(res).to.equal(90n);
  });

  it('test operator "mul" overload (euint64, euint8) => euint64 test 3 (10, 10)', async function () {
    const res = await this.contract4.mul_euint64_euint8(10n, 10n);
    expect(res).to.equal(100n);
  });

  it('test operator "mul" overload (euint64, euint8) => euint64 test 4 (10, 9)', async function () {
    const res = await this.contract4.mul_euint64_euint8(10n, 9n);
    expect(res).to.equal(90n);
  });

  it('test operator "and" overload (euint64, euint8) => euint64 test 1 (18441413446268134663, 40)', async function () {
    const res = await this.contract4.and_euint64_euint8(18441413446268134663n, 40n);
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint64, euint8) => euint64 test 2 (36, 40)', async function () {
    const res = await this.contract4.and_euint64_euint8(36n, 40n);
    expect(res).to.equal(32n);
  });

  it('test operator "and" overload (euint64, euint8) => euint64 test 3 (40, 40)', async function () {
    const res = await this.contract4.and_euint64_euint8(40n, 40n);
    expect(res).to.equal(40n);
  });

  it('test operator "and" overload (euint64, euint8) => euint64 test 4 (40, 36)', async function () {
    const res = await this.contract4.and_euint64_euint8(40n, 36n);
    expect(res).to.equal(32n);
  });

  it('test operator "or" overload (euint64, euint8) => euint64 test 1 (18442062213086556497, 168)', async function () {
    const res = await this.contract4.or_euint64_euint8(18442062213086556497n, 168n);
    expect(res).to.equal(18442062213086556665n);
  });

  it('test operator "or" overload (euint64, euint8) => euint64 test 2 (164, 168)', async function () {
    const res = await this.contract4.or_euint64_euint8(164n, 168n);
    expect(res).to.equal(172n);
  });

  it('test operator "or" overload (euint64, euint8) => euint64 test 3 (168, 168)', async function () {
    const res = await this.contract4.or_euint64_euint8(168n, 168n);
    expect(res).to.equal(168n);
  });

  it('test operator "or" overload (euint64, euint8) => euint64 test 4 (168, 164)', async function () {
    const res = await this.contract4.or_euint64_euint8(168n, 164n);
    expect(res).to.equal(172n);
  });

  it('test operator "xor" overload (euint64, euint8) => euint64 test 1 (18443626965217997733, 213)', async function () {
    const res = await this.contract4.xor_euint64_euint8(18443626965217997733n, 213n);
    expect(res).to.equal(18443626965217997680n);
  });

  it('test operator "xor" overload (euint64, euint8) => euint64 test 2 (209, 213)', async function () {
    const res = await this.contract4.xor_euint64_euint8(209n, 213n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint64, euint8) => euint64 test 3 (213, 213)', async function () {
    const res = await this.contract4.xor_euint64_euint8(213n, 213n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint8) => euint64 test 4 (213, 209)', async function () {
    const res = await this.contract4.xor_euint64_euint8(213n, 209n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, euint8) => ebool test 1 (18446185668440461367, 98)', async function () {
    const res = await this.contract4.eq_euint64_euint8(18446185668440461367n, 98n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint8) => ebool test 2 (94, 98)', async function () {
    const res = await this.contract4.eq_euint64_euint8(94n, 98n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint8) => ebool test 3 (98, 98)', async function () {
    const res = await this.contract4.eq_euint64_euint8(98n, 98n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint8) => ebool test 4 (98, 94)', async function () {
    const res = await this.contract4.eq_euint64_euint8(98n, 94n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint8) => ebool test 1 (18445474251392791649, 41)', async function () {
    const res = await this.contract4.ne_euint64_euint8(18445474251392791649n, 41n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint8) => ebool test 2 (37, 41)', async function () {
    const res = await this.contract4.ne_euint64_euint8(37n, 41n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint8) => ebool test 3 (41, 41)', async function () {
    const res = await this.contract4.ne_euint64_euint8(41n, 41n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint8) => ebool test 4 (41, 37)', async function () {
    const res = await this.contract4.ne_euint64_euint8(41n, 37n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint8) => ebool test 1 (18444294270645254277, 229)', async function () {
    const res = await this.contract4.ge_euint64_euint8(18444294270645254277n, 229n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint8) => ebool test 2 (225, 229)', async function () {
    const res = await this.contract4.ge_euint64_euint8(225n, 229n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint8) => ebool test 3 (229, 229)', async function () {
    const res = await this.contract4.ge_euint64_euint8(229n, 229n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint8) => ebool test 4 (229, 225)', async function () {
    const res = await this.contract4.ge_euint64_euint8(229n, 225n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint8) => ebool test 1 (18446048537684194985, 113)', async function () {
    const res = await this.contract4.gt_euint64_euint8(18446048537684194985n, 113n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint8) => ebool test 2 (109, 113)', async function () {
    const res = await this.contract4.gt_euint64_euint8(109n, 113n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint8) => ebool test 3 (113, 113)', async function () {
    const res = await this.contract4.gt_euint64_euint8(113n, 113n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint8) => ebool test 4 (113, 109)', async function () {
    const res = await this.contract4.gt_euint64_euint8(113n, 109n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint8) => ebool test 1 (18443934013808426023, 129)', async function () {
    const res = await this.contract5.le_euint64_euint8(18443934013808426023n, 129n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint8) => ebool test 2 (125, 129)', async function () {
    const res = await this.contract5.le_euint64_euint8(125n, 129n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint8) => ebool test 3 (129, 129)', async function () {
    const res = await this.contract5.le_euint64_euint8(129n, 129n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint8) => ebool test 4 (129, 125)', async function () {
    const res = await this.contract5.le_euint64_euint8(129n, 125n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint8) => ebool test 1 (18444118039600142421, 79)', async function () {
    const res = await this.contract5.lt_euint64_euint8(18444118039600142421n, 79n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint8) => ebool test 2 (75, 79)', async function () {
    const res = await this.contract5.lt_euint64_euint8(75n, 79n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint8) => ebool test 3 (79, 79)', async function () {
    const res = await this.contract5.lt_euint64_euint8(79n, 79n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint8) => ebool test 4 (79, 75)', async function () {
    const res = await this.contract5.lt_euint64_euint8(79n, 75n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint8) => euint64 test 1 (18440761228336909285, 170)', async function () {
    const res = await this.contract5.min_euint64_euint8(18440761228336909285n, 170n);
    expect(res).to.equal(170n);
  });

  it('test operator "min" overload (euint64, euint8) => euint64 test 2 (166, 170)', async function () {
    const res = await this.contract5.min_euint64_euint8(166n, 170n);
    expect(res).to.equal(166n);
  });

  it('test operator "min" overload (euint64, euint8) => euint64 test 3 (170, 170)', async function () {
    const res = await this.contract5.min_euint64_euint8(170n, 170n);
    expect(res).to.equal(170n);
  });

  it('test operator "min" overload (euint64, euint8) => euint64 test 4 (170, 166)', async function () {
    const res = await this.contract5.min_euint64_euint8(170n, 166n);
    expect(res).to.equal(166n);
  });

  it('test operator "max" overload (euint64, euint8) => euint64 test 1 (18446007384031513667, 44)', async function () {
    const res = await this.contract5.max_euint64_euint8(18446007384031513667n, 44n);
    expect(res).to.equal(18446007384031513667n);
  });

  it('test operator "max" overload (euint64, euint8) => euint64 test 2 (40, 44)', async function () {
    const res = await this.contract5.max_euint64_euint8(40n, 44n);
    expect(res).to.equal(44n);
  });

  it('test operator "max" overload (euint64, euint8) => euint64 test 3 (44, 44)', async function () {
    const res = await this.contract5.max_euint64_euint8(44n, 44n);
    expect(res).to.equal(44n);
  });

  it('test operator "max" overload (euint64, euint8) => euint64 test 4 (44, 40)', async function () {
    const res = await this.contract5.max_euint64_euint8(44n, 40n);
    expect(res).to.equal(44n);
  });

  it('test operator "add" overload (euint64, euint16) => euint64 test 1 (65527, 2)', async function () {
    const res = await this.contract5.add_euint64_euint16(65527n, 2n);
    expect(res).to.equal(65529n);
  });

  it('test operator "add" overload (euint64, euint16) => euint64 test 2 (22102, 22104)', async function () {
    const res = await this.contract5.add_euint64_euint16(22102n, 22104n);
    expect(res).to.equal(44206n);
  });

  it('test operator "add" overload (euint64, euint16) => euint64 test 3 (22104, 22104)', async function () {
    const res = await this.contract5.add_euint64_euint16(22104n, 22104n);
    expect(res).to.equal(44208n);
  });

  it('test operator "add" overload (euint64, euint16) => euint64 test 4 (22104, 22102)', async function () {
    const res = await this.contract5.add_euint64_euint16(22104n, 22102n);
    expect(res).to.equal(44206n);
  });

  it('test operator "sub" overload (euint64, euint16) => euint64 test 1 (45502, 45502)', async function () {
    const res = await this.contract5.sub_euint64_euint16(45502n, 45502n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint16) => euint64 test 2 (45502, 45498)', async function () {
    const res = await this.contract5.sub_euint64_euint16(45502n, 45498n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint16) => euint64 test 1 (32761, 2)', async function () {
    const res = await this.contract5.mul_euint64_euint16(32761n, 2n);
    expect(res).to.equal(65522n);
  });

  it('test operator "mul" overload (euint64, euint16) => euint64 test 2 (252, 252)', async function () {
    const res = await this.contract5.mul_euint64_euint16(252n, 252n);
    expect(res).to.equal(63504n);
  });

  it('test operator "mul" overload (euint64, euint16) => euint64 test 3 (252, 252)', async function () {
    const res = await this.contract5.mul_euint64_euint16(252n, 252n);
    expect(res).to.equal(63504n);
  });

  it('test operator "mul" overload (euint64, euint16) => euint64 test 4 (252, 252)', async function () {
    const res = await this.contract5.mul_euint64_euint16(252n, 252n);
    expect(res).to.equal(63504n);
  });

  it('test operator "and" overload (euint64, euint16) => euint64 test 1 (18446210605213941359, 52123)', async function () {
    const res = await this.contract5.and_euint64_euint16(18446210605213941359n, 52123n);
    expect(res).to.equal(51723n);
  });

  it('test operator "and" overload (euint64, euint16) => euint64 test 2 (52119, 52123)', async function () {
    const res = await this.contract5.and_euint64_euint16(52119n, 52123n);
    expect(res).to.equal(52115n);
  });

  it('test operator "and" overload (euint64, euint16) => euint64 test 3 (52123, 52123)', async function () {
    const res = await this.contract5.and_euint64_euint16(52123n, 52123n);
    expect(res).to.equal(52123n);
  });

  it('test operator "and" overload (euint64, euint16) => euint64 test 4 (52123, 52119)', async function () {
    const res = await this.contract5.and_euint64_euint16(52123n, 52119n);
    expect(res).to.equal(52115n);
  });

  it('test operator "or" overload (euint64, euint16) => euint64 test 1 (18437769114436402597, 8954)', async function () {
    const res = await this.contract5.or_euint64_euint16(18437769114436402597n, 8954n);
    expect(res).to.equal(18437769114436403199n);
  });

  it('test operator "or" overload (euint64, euint16) => euint64 test 2 (8950, 8954)', async function () {
    const res = await this.contract5.or_euint64_euint16(8950n, 8954n);
    expect(res).to.equal(8958n);
  });

  it('test operator "or" overload (euint64, euint16) => euint64 test 3 (8954, 8954)', async function () {
    const res = await this.contract5.or_euint64_euint16(8954n, 8954n);
    expect(res).to.equal(8954n);
  });

  it('test operator "or" overload (euint64, euint16) => euint64 test 4 (8954, 8950)', async function () {
    const res = await this.contract5.or_euint64_euint16(8954n, 8950n);
    expect(res).to.equal(8958n);
  });

  it('test operator "xor" overload (euint64, euint16) => euint64 test 1 (18442272025927693303, 37790)', async function () {
    const res = await this.contract5.xor_euint64_euint16(18442272025927693303n, 37790n);
    expect(res).to.equal(18442272025927721065n);
  });

  it('test operator "xor" overload (euint64, euint16) => euint64 test 2 (37786, 37790)', async function () {
    const res = await this.contract5.xor_euint64_euint16(37786n, 37790n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint64, euint16) => euint64 test 3 (37790, 37790)', async function () {
    const res = await this.contract5.xor_euint64_euint16(37790n, 37790n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint16) => euint64 test 4 (37790, 37786)', async function () {
    const res = await this.contract5.xor_euint64_euint16(37790n, 37786n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, euint16) => ebool test 1 (18439660654359160363, 41883)', async function () {
    const res = await this.contract5.eq_euint64_euint16(18439660654359160363n, 41883n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint16) => ebool test 2 (41879, 41883)', async function () {
    const res = await this.contract5.eq_euint64_euint16(41879n, 41883n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint16) => ebool test 3 (41883, 41883)', async function () {
    const res = await this.contract5.eq_euint64_euint16(41883n, 41883n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint16) => ebool test 4 (41883, 41879)', async function () {
    const res = await this.contract5.eq_euint64_euint16(41883n, 41879n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint16) => ebool test 1 (18440863971063577997, 29590)', async function () {
    const res = await this.contract5.ne_euint64_euint16(18440863971063577997n, 29590n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint16) => ebool test 2 (29586, 29590)', async function () {
    const res = await this.contract5.ne_euint64_euint16(29586n, 29590n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint16) => ebool test 3 (29590, 29590)', async function () {
    const res = await this.contract5.ne_euint64_euint16(29590n, 29590n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint16) => ebool test 4 (29590, 29586)', async function () {
    const res = await this.contract5.ne_euint64_euint16(29590n, 29586n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint16) => ebool test 1 (18437766862316060605, 31992)', async function () {
    const res = await this.contract5.ge_euint64_euint16(18437766862316060605n, 31992n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint16) => ebool test 2 (31988, 31992)', async function () {
    const res = await this.contract5.ge_euint64_euint16(31988n, 31992n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint16) => ebool test 3 (31992, 31992)', async function () {
    const res = await this.contract5.ge_euint64_euint16(31992n, 31992n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint16) => ebool test 4 (31992, 31988)', async function () {
    const res = await this.contract5.ge_euint64_euint16(31992n, 31988n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint16) => ebool test 1 (18446546126614473389, 55175)', async function () {
    const res = await this.contract5.gt_euint64_euint16(18446546126614473389n, 55175n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint16) => ebool test 2 (55171, 55175)', async function () {
    const res = await this.contract5.gt_euint64_euint16(55171n, 55175n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint16) => ebool test 3 (55175, 55175)', async function () {
    const res = await this.contract5.gt_euint64_euint16(55175n, 55175n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint16) => ebool test 4 (55175, 55171)', async function () {
    const res = await this.contract5.gt_euint64_euint16(55175n, 55171n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint16) => ebool test 1 (18445404390633548443, 34855)', async function () {
    const res = await this.contract5.le_euint64_euint16(18445404390633548443n, 34855n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint16) => ebool test 2 (34851, 34855)', async function () {
    const res = await this.contract5.le_euint64_euint16(34851n, 34855n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint16) => ebool test 3 (34855, 34855)', async function () {
    const res = await this.contract5.le_euint64_euint16(34855n, 34855n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint16) => ebool test 4 (34855, 34851)', async function () {
    const res = await this.contract5.le_euint64_euint16(34855n, 34851n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint16) => ebool test 1 (18438335232029320935, 10564)', async function () {
    const res = await this.contract5.lt_euint64_euint16(18438335232029320935n, 10564n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint16) => ebool test 2 (10560, 10564)', async function () {
    const res = await this.contract5.lt_euint64_euint16(10560n, 10564n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint16) => ebool test 3 (10564, 10564)', async function () {
    const res = await this.contract5.lt_euint64_euint16(10564n, 10564n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint16) => ebool test 4 (10564, 10560)', async function () {
    const res = await this.contract5.lt_euint64_euint16(10564n, 10560n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint16) => euint64 test 1 (18438622448280376415, 51692)', async function () {
    const res = await this.contract5.min_euint64_euint16(18438622448280376415n, 51692n);
    expect(res).to.equal(51692n);
  });

  it('test operator "min" overload (euint64, euint16) => euint64 test 2 (51688, 51692)', async function () {
    const res = await this.contract5.min_euint64_euint16(51688n, 51692n);
    expect(res).to.equal(51688n);
  });

  it('test operator "min" overload (euint64, euint16) => euint64 test 3 (51692, 51692)', async function () {
    const res = await this.contract5.min_euint64_euint16(51692n, 51692n);
    expect(res).to.equal(51692n);
  });

  it('test operator "min" overload (euint64, euint16) => euint64 test 4 (51692, 51688)', async function () {
    const res = await this.contract5.min_euint64_euint16(51692n, 51688n);
    expect(res).to.equal(51688n);
  });

  it('test operator "max" overload (euint64, euint16) => euint64 test 1 (18444284510736997839, 51628)', async function () {
    const res = await this.contract5.max_euint64_euint16(18444284510736997839n, 51628n);
    expect(res).to.equal(18444284510736997839n);
  });

  it('test operator "max" overload (euint64, euint16) => euint64 test 2 (51624, 51628)', async function () {
    const res = await this.contract5.max_euint64_euint16(51624n, 51628n);
    expect(res).to.equal(51628n);
  });

  it('test operator "max" overload (euint64, euint16) => euint64 test 3 (51628, 51628)', async function () {
    const res = await this.contract5.max_euint64_euint16(51628n, 51628n);
    expect(res).to.equal(51628n);
  });

  it('test operator "max" overload (euint64, euint16) => euint64 test 4 (51628, 51624)', async function () {
    const res = await this.contract5.max_euint64_euint16(51628n, 51624n);
    expect(res).to.equal(51628n);
  });

  it('test operator "add" overload (euint64, euint32) => euint64 test 1 (4293751578, 2)', async function () {
    const res = await this.contract5.add_euint64_euint32(4293751578n, 2n);
    expect(res).to.equal(4293751580n);
  });

  it('test operator "add" overload (euint64, euint32) => euint64 test 2 (1806019599, 1806019601)', async function () {
    const res = await this.contract5.add_euint64_euint32(1806019599n, 1806019601n);
    expect(res).to.equal(3612039200n);
  });

  it('test operator "add" overload (euint64, euint32) => euint64 test 3 (1806019601, 1806019601)', async function () {
    const res = await this.contract5.add_euint64_euint32(1806019601n, 1806019601n);
    expect(res).to.equal(3612039202n);
  });

  it('test operator "add" overload (euint64, euint32) => euint64 test 4 (1806019601, 1806019599)', async function () {
    const res = await this.contract5.add_euint64_euint32(1806019601n, 1806019599n);
    expect(res).to.equal(3612039200n);
  });

  it('test operator "sub" overload (euint64, euint32) => euint64 test 1 (3425308729, 3425308729)', async function () {
    const res = await this.contract5.sub_euint64_euint32(3425308729n, 3425308729n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint32) => euint64 test 2 (3425308729, 3425308725)', async function () {
    const res = await this.contract5.sub_euint64_euint32(3425308729n, 3425308725n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint32) => euint64 test 1 (2147367784, 2)', async function () {
    const res = await this.contract5.mul_euint64_euint32(2147367784n, 2n);
    expect(res).to.equal(4294735568n);
  });

  it('test operator "mul" overload (euint64, euint32) => euint64 test 2 (50787, 50787)', async function () {
    const res = await this.contract5.mul_euint64_euint32(50787n, 50787n);
    expect(res).to.equal(2579319369n);
  });

  it('test operator "mul" overload (euint64, euint32) => euint64 test 3 (50787, 50787)', async function () {
    const res = await this.contract5.mul_euint64_euint32(50787n, 50787n);
    expect(res).to.equal(2579319369n);
  });

  it('test operator "mul" overload (euint64, euint32) => euint64 test 4 (50787, 50787)', async function () {
    const res = await this.contract5.mul_euint64_euint32(50787n, 50787n);
    expect(res).to.equal(2579319369n);
  });

  it('test operator "and" overload (euint64, euint32) => euint64 test 1 (18442857416785747441, 1547691532)', async function () {
    const res = await this.contract5.and_euint64_euint32(18442857416785747441n, 1547691532n);
    expect(res).to.equal(137446400n);
  });

  it('test operator "and" overload (euint64, euint32) => euint64 test 2 (1547691528, 1547691532)', async function () {
    const res = await this.contract5.and_euint64_euint32(1547691528n, 1547691532n);
    expect(res).to.equal(1547691528n);
  });

  it('test operator "and" overload (euint64, euint32) => euint64 test 3 (1547691532, 1547691532)', async function () {
    const res = await this.contract5.and_euint64_euint32(1547691532n, 1547691532n);
    expect(res).to.equal(1547691532n);
  });

  it('test operator "and" overload (euint64, euint32) => euint64 test 4 (1547691532, 1547691528)', async function () {
    const res = await this.contract5.and_euint64_euint32(1547691532n, 1547691528n);
    expect(res).to.equal(1547691528n);
  });

  it('test operator "or" overload (euint64, euint32) => euint64 test 1 (18438806940040470143, 729835566)', async function () {
    const res = await this.contract5.or_euint64_euint32(18438806940040470143n, 729835566n);
    expect(res).to.equal(18438806940585754239n);
  });

  it('test operator "or" overload (euint64, euint32) => euint64 test 2 (729835562, 729835566)', async function () {
    const res = await this.contract5.or_euint64_euint32(729835562n, 729835566n);
    expect(res).to.equal(729835566n);
  });

  it('test operator "or" overload (euint64, euint32) => euint64 test 3 (729835566, 729835566)', async function () {
    const res = await this.contract5.or_euint64_euint32(729835566n, 729835566n);
    expect(res).to.equal(729835566n);
  });

  it('test operator "or" overload (euint64, euint32) => euint64 test 4 (729835566, 729835562)', async function () {
    const res = await this.contract5.or_euint64_euint32(729835566n, 729835562n);
    expect(res).to.equal(729835566n);
  });

  it('test operator "xor" overload (euint64, euint32) => euint64 test 1 (18444516407156523745, 3421158537)', async function () {
    const res = await this.contract5.xor_euint64_euint32(18444516407156523745n, 3421158537n);
    expect(res).to.equal(18444516404054425192n);
  });

  it('test operator "xor" overload (euint64, euint32) => euint64 test 2 (3421158533, 3421158537)', async function () {
    const res = await this.contract5.xor_euint64_euint32(3421158533n, 3421158537n);
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint64, euint32) => euint64 test 3 (3421158537, 3421158537)', async function () {
    const res = await this.contract5.xor_euint64_euint32(3421158537n, 3421158537n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint32) => euint64 test 4 (3421158537, 3421158533)', async function () {
    const res = await this.contract5.xor_euint64_euint32(3421158537n, 3421158533n);
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint64, euint32) => ebool test 1 (18445744067307966387, 926561519)', async function () {
    const res = await this.contract5.eq_euint64_euint32(18445744067307966387n, 926561519n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint32) => ebool test 2 (926561515, 926561519)', async function () {
    const res = await this.contract5.eq_euint64_euint32(926561515n, 926561519n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint32) => ebool test 3 (926561519, 926561519)', async function () {
    const res = await this.contract5.eq_euint64_euint32(926561519n, 926561519n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint32) => ebool test 4 (926561519, 926561515)', async function () {
    const res = await this.contract5.eq_euint64_euint32(926561519n, 926561515n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint32) => ebool test 1 (18446476368209552349, 3024704127)', async function () {
    const res = await this.contract5.ne_euint64_euint32(18446476368209552349n, 3024704127n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint32) => ebool test 2 (3024704123, 3024704127)', async function () {
    const res = await this.contract5.ne_euint64_euint32(3024704123n, 3024704127n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint32) => ebool test 3 (3024704127, 3024704127)', async function () {
    const res = await this.contract5.ne_euint64_euint32(3024704127n, 3024704127n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint32) => ebool test 4 (3024704127, 3024704123)', async function () {
    const res = await this.contract5.ne_euint64_euint32(3024704127n, 3024704123n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint32) => ebool test 1 (18440264286866387829, 85256317)', async function () {
    const res = await this.contract5.ge_euint64_euint32(18440264286866387829n, 85256317n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint32) => ebool test 2 (85256313, 85256317)', async function () {
    const res = await this.contract5.ge_euint64_euint32(85256313n, 85256317n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint32) => ebool test 3 (85256317, 85256317)', async function () {
    const res = await this.contract5.ge_euint64_euint32(85256317n, 85256317n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint32) => ebool test 4 (85256317, 85256313)', async function () {
    const res = await this.contract5.ge_euint64_euint32(85256317n, 85256313n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint32) => ebool test 1 (18443613995542007651, 1679838761)', async function () {
    const res = await this.contract5.gt_euint64_euint32(18443613995542007651n, 1679838761n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint32) => ebool test 2 (1679838757, 1679838761)', async function () {
    const res = await this.contract5.gt_euint64_euint32(1679838757n, 1679838761n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint32) => ebool test 3 (1679838761, 1679838761)', async function () {
    const res = await this.contract5.gt_euint64_euint32(1679838761n, 1679838761n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint32) => ebool test 4 (1679838761, 1679838757)', async function () {
    const res = await this.contract5.gt_euint64_euint32(1679838761n, 1679838757n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint32) => ebool test 1 (18443133688534935497, 622548585)', async function () {
    const res = await this.contract5.le_euint64_euint32(18443133688534935497n, 622548585n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint32) => ebool test 2 (622548581, 622548585)', async function () {
    const res = await this.contract5.le_euint64_euint32(622548581n, 622548585n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint32) => ebool test 3 (622548585, 622548585)', async function () {
    const res = await this.contract5.le_euint64_euint32(622548585n, 622548585n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint32) => ebool test 4 (622548585, 622548581)', async function () {
    const res = await this.contract5.le_euint64_euint32(622548585n, 622548581n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint32) => ebool test 1 (18446696862115863979, 853267915)', async function () {
    const res = await this.contract5.lt_euint64_euint32(18446696862115863979n, 853267915n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint32) => ebool test 2 (853267911, 853267915)', async function () {
    const res = await this.contract5.lt_euint64_euint32(853267911n, 853267915n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint32) => ebool test 3 (853267915, 853267915)', async function () {
    const res = await this.contract5.lt_euint64_euint32(853267915n, 853267915n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint32) => ebool test 4 (853267915, 853267911)', async function () {
    const res = await this.contract5.lt_euint64_euint32(853267915n, 853267911n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint32) => euint64 test 1 (18440186743754430625, 4137891061)', async function () {
    const res = await this.contract5.min_euint64_euint32(18440186743754430625n, 4137891061n);
    expect(res).to.equal(4137891061n);
  });

  it('test operator "min" overload (euint64, euint32) => euint64 test 2 (4137891057, 4137891061)', async function () {
    const res = await this.contract5.min_euint64_euint32(4137891057n, 4137891061n);
    expect(res).to.equal(4137891057n);
  });

  it('test operator "min" overload (euint64, euint32) => euint64 test 3 (4137891061, 4137891061)', async function () {
    const res = await this.contract5.min_euint64_euint32(4137891061n, 4137891061n);
    expect(res).to.equal(4137891061n);
  });

  it('test operator "min" overload (euint64, euint32) => euint64 test 4 (4137891061, 4137891057)', async function () {
    const res = await this.contract5.min_euint64_euint32(4137891061n, 4137891057n);
    expect(res).to.equal(4137891057n);
  });

  it('test operator "max" overload (euint64, euint32) => euint64 test 1 (18445662984886583599, 303914102)', async function () {
    const res = await this.contract5.max_euint64_euint32(18445662984886583599n, 303914102n);
    expect(res).to.equal(18445662984886583599n);
  });

  it('test operator "max" overload (euint64, euint32) => euint64 test 2 (303914098, 303914102)', async function () {
    const res = await this.contract5.max_euint64_euint32(303914098n, 303914102n);
    expect(res).to.equal(303914102n);
  });

  it('test operator "max" overload (euint64, euint32) => euint64 test 3 (303914102, 303914102)', async function () {
    const res = await this.contract5.max_euint64_euint32(303914102n, 303914102n);
    expect(res).to.equal(303914102n);
  });

  it('test operator "max" overload (euint64, euint32) => euint64 test 4 (303914102, 303914098)', async function () {
    const res = await this.contract5.max_euint64_euint32(303914102n, 303914098n);
    expect(res).to.equal(303914102n);
  });

  it('test operator "add" overload (euint64, euint64) => euint64 test 1 (9219336648067240893, 9223239842705786428)', async function () {
    const res = await this.contract5.add_euint64_euint64(9219336648067240893n, 9223239842705786428n);
    expect(res).to.equal(18442576490773027321n);
  });

  it('test operator "add" overload (euint64, euint64) => euint64 test 2 (9219336648067240891, 9219336648067240893)', async function () {
    const res = await this.contract5.add_euint64_euint64(9219336648067240891n, 9219336648067240893n);
    expect(res).to.equal(18438673296134481784n);
  });

  it('test operator "add" overload (euint64, euint64) => euint64 test 3 (9219336648067240893, 9219336648067240893)', async function () {
    const res = await this.contract5.add_euint64_euint64(9219336648067240893n, 9219336648067240893n);
    expect(res).to.equal(18438673296134481786n);
  });

  it('test operator "add" overload (euint64, euint64) => euint64 test 4 (9219336648067240893, 9219336648067240891)', async function () {
    const res = await this.contract5.add_euint64_euint64(9219336648067240893n, 9219336648067240891n);
    expect(res).to.equal(18438673296134481784n);
  });

  it('test operator "sub" overload (euint64, euint64) => euint64 test 1 (18442295292010752223, 18442295292010752223)', async function () {
    const res = await this.contract5.sub_euint64_euint64(18442295292010752223n, 18442295292010752223n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, euint64) => euint64 test 2 (18442295292010752223, 18442295292010752219)', async function () {
    const res = await this.contract5.sub_euint64_euint64(18442295292010752223n, 18442295292010752219n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, euint64) => euint64 test 1 (4294744203, 4293841776)', async function () {
    const res = await this.contract5.mul_euint64_euint64(4294744203n, 4293841776n);
    expect(res).to.equal(18440952076075224528n);
  });

  it('test operator "mul" overload (euint64, euint64) => euint64 test 2 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_euint64_euint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "mul" overload (euint64, euint64) => euint64 test 3 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_euint64_euint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "mul" overload (euint64, euint64) => euint64 test 4 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_euint64_euint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "and" overload (euint64, euint64) => euint64 test 1 (18444924635377016941, 18446173308524975411)', async function () {
    const res = await this.contract5.and_euint64_euint64(18444924635377016941n, 18446173308524975411n);
    expect(res).to.equal(18444923419899985953n);
  });

  it('test operator "and" overload (euint64, euint64) => euint64 test 2 (18444924635377016937, 18444924635377016941)', async function () {
    const res = await this.contract5.and_euint64_euint64(18444924635377016937n, 18444924635377016941n);
    expect(res).to.equal(18444924635377016937n);
  });

  it('test operator "and" overload (euint64, euint64) => euint64 test 3 (18444924635377016941, 18444924635377016941)', async function () {
    const res = await this.contract5.and_euint64_euint64(18444924635377016941n, 18444924635377016941n);
    expect(res).to.equal(18444924635377016941n);
  });

  it('test operator "and" overload (euint64, euint64) => euint64 test 4 (18444924635377016941, 18444924635377016937)', async function () {
    const res = await this.contract5.and_euint64_euint64(18444924635377016941n, 18444924635377016937n);
    expect(res).to.equal(18444924635377016937n);
  });

  it('test operator "or" overload (euint64, euint64) => euint64 test 1 (18442105052999173891, 18440193626964063709)', async function () {
    const res = await this.contract5.or_euint64_euint64(18442105052999173891n, 18440193626964063709n);
    expect(res).to.equal(18442168970778769375n);
  });

  it('test operator "or" overload (euint64, euint64) => euint64 test 2 (18440193626964063705, 18440193626964063709)', async function () {
    const res = await this.contract5.or_euint64_euint64(18440193626964063705n, 18440193626964063709n);
    expect(res).to.equal(18440193626964063709n);
  });

  it('test operator "or" overload (euint64, euint64) => euint64 test 3 (18440193626964063709, 18440193626964063709)', async function () {
    const res = await this.contract5.or_euint64_euint64(18440193626964063709n, 18440193626964063709n);
    expect(res).to.equal(18440193626964063709n);
  });

  it('test operator "or" overload (euint64, euint64) => euint64 test 4 (18440193626964063709, 18440193626964063705)', async function () {
    const res = await this.contract5.or_euint64_euint64(18440193626964063709n, 18440193626964063705n);
    expect(res).to.equal(18440193626964063709n);
  });

  it('test operator "xor" overload (euint64, euint64) => euint64 test 1 (18440379911699358599, 18444259094994538125)', async function () {
    const res = await this.contract5.xor_euint64_euint64(18440379911699358599n, 18444259094994538125n);
    expect(res).to.equal(8523658389368074n);
  });

  it('test operator "xor" overload (euint64, euint64) => euint64 test 2 (18440379911699358595, 18440379911699358599)', async function () {
    const res = await this.contract5.xor_euint64_euint64(18440379911699358595n, 18440379911699358599n);
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint64, euint64) => euint64 test 3 (18440379911699358599, 18440379911699358599)', async function () {
    const res = await this.contract5.xor_euint64_euint64(18440379911699358599n, 18440379911699358599n);
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint64, euint64) => euint64 test 4 (18440379911699358599, 18440379911699358595)', async function () {
    const res = await this.contract5.xor_euint64_euint64(18440379911699358599n, 18440379911699358595n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, euint64) => ebool test 1 (18442470885463520691, 18445888562756211467)', async function () {
    const res = await this.contract5.eq_euint64_euint64(18442470885463520691n, 18445888562756211467n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint64) => ebool test 2 (18442470885463520687, 18442470885463520691)', async function () {
    const res = await this.contract5.eq_euint64_euint64(18442470885463520687n, 18442470885463520691n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, euint64) => ebool test 3 (18442470885463520691, 18442470885463520691)', async function () {
    const res = await this.contract5.eq_euint64_euint64(18442470885463520691n, 18442470885463520691n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, euint64) => ebool test 4 (18442470885463520691, 18442470885463520687)', async function () {
    const res = await this.contract5.eq_euint64_euint64(18442470885463520691n, 18442470885463520687n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint64) => ebool test 1 (18442343533763371027, 18438477816592523453)', async function () {
    const res = await this.contract5.ne_euint64_euint64(18442343533763371027n, 18438477816592523453n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint64) => ebool test 2 (18438477816592523449, 18438477816592523453)', async function () {
    const res = await this.contract5.ne_euint64_euint64(18438477816592523449n, 18438477816592523453n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, euint64) => ebool test 3 (18438477816592523453, 18438477816592523453)', async function () {
    const res = await this.contract5.ne_euint64_euint64(18438477816592523453n, 18438477816592523453n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, euint64) => ebool test 4 (18438477816592523453, 18438477816592523449)', async function () {
    const res = await this.contract5.ne_euint64_euint64(18438477816592523453n, 18438477816592523449n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint64) => ebool test 1 (18441951286640352465, 18443086804815428517)', async function () {
    const res = await this.contract5.ge_euint64_euint64(18441951286640352465n, 18443086804815428517n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint64) => ebool test 2 (18441951286640352461, 18441951286640352465)', async function () {
    const res = await this.contract5.ge_euint64_euint64(18441951286640352461n, 18441951286640352465n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, euint64) => ebool test 3 (18441951286640352465, 18441951286640352465)', async function () {
    const res = await this.contract5.ge_euint64_euint64(18441951286640352465n, 18441951286640352465n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, euint64) => ebool test 4 (18441951286640352465, 18441951286640352461)', async function () {
    const res = await this.contract5.ge_euint64_euint64(18441951286640352465n, 18441951286640352461n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, euint64) => ebool test 1 (18443021258691337483, 18443593997946075985)', async function () {
    const res = await this.contract5.gt_euint64_euint64(18443021258691337483n, 18443593997946075985n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint64) => ebool test 2 (18443021258691337479, 18443021258691337483)', async function () {
    const res = await this.contract5.gt_euint64_euint64(18443021258691337479n, 18443021258691337483n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint64) => ebool test 3 (18443021258691337483, 18443021258691337483)', async function () {
    const res = await this.contract5.gt_euint64_euint64(18443021258691337483n, 18443021258691337483n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, euint64) => ebool test 4 (18443021258691337483, 18443021258691337479)', async function () {
    const res = await this.contract5.gt_euint64_euint64(18443021258691337483n, 18443021258691337479n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint64) => ebool test 1 (18443782238591650169, 18441978790273961913)', async function () {
    const res = await this.contract5.le_euint64_euint64(18443782238591650169n, 18441978790273961913n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, euint64) => ebool test 2 (18441978790273961909, 18441978790273961913)', async function () {
    const res = await this.contract5.le_euint64_euint64(18441978790273961909n, 18441978790273961913n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint64) => ebool test 3 (18441978790273961913, 18441978790273961913)', async function () {
    const res = await this.contract5.le_euint64_euint64(18441978790273961913n, 18441978790273961913n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, euint64) => ebool test 4 (18441978790273961913, 18441978790273961909)', async function () {
    const res = await this.contract5.le_euint64_euint64(18441978790273961913n, 18441978790273961909n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint64) => ebool test 1 (18445972196307174659, 18438760003066140571)', async function () {
    const res = await this.contract5.lt_euint64_euint64(18445972196307174659n, 18438760003066140571n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint64) => ebool test 2 (18438760003066140567, 18438760003066140571)', async function () {
    const res = await this.contract5.lt_euint64_euint64(18438760003066140567n, 18438760003066140571n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, euint64) => ebool test 3 (18438760003066140571, 18438760003066140571)', async function () {
    const res = await this.contract5.lt_euint64_euint64(18438760003066140571n, 18438760003066140571n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, euint64) => ebool test 4 (18438760003066140571, 18438760003066140567)', async function () {
    const res = await this.contract5.lt_euint64_euint64(18438760003066140571n, 18438760003066140567n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, euint64) => euint64 test 1 (18446277918636147641, 18439099819121701507)', async function () {
    const res = await this.contract5.min_euint64_euint64(18446277918636147641n, 18439099819121701507n);
    expect(res).to.equal(18439099819121701507n);
  });

  it('test operator "min" overload (euint64, euint64) => euint64 test 2 (18439099819121701503, 18439099819121701507)', async function () {
    const res = await this.contract5.min_euint64_euint64(18439099819121701503n, 18439099819121701507n);
    expect(res).to.equal(18439099819121701503n);
  });

  it('test operator "min" overload (euint64, euint64) => euint64 test 3 (18439099819121701507, 18439099819121701507)', async function () {
    const res = await this.contract5.min_euint64_euint64(18439099819121701507n, 18439099819121701507n);
    expect(res).to.equal(18439099819121701507n);
  });

  it('test operator "min" overload (euint64, euint64) => euint64 test 4 (18439099819121701507, 18439099819121701503)', async function () {
    const res = await this.contract5.min_euint64_euint64(18439099819121701507n, 18439099819121701503n);
    expect(res).to.equal(18439099819121701503n);
  });

  it('test operator "max" overload (euint64, euint64) => euint64 test 1 (18438631683554897479, 18438807769877774597)', async function () {
    const res = await this.contract5.max_euint64_euint64(18438631683554897479n, 18438807769877774597n);
    expect(res).to.equal(18438807769877774597n);
  });

  it('test operator "max" overload (euint64, euint64) => euint64 test 2 (18438631683554897475, 18438631683554897479)', async function () {
    const res = await this.contract5.max_euint64_euint64(18438631683554897475n, 18438631683554897479n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "max" overload (euint64, euint64) => euint64 test 3 (18438631683554897479, 18438631683554897479)', async function () {
    const res = await this.contract5.max_euint64_euint64(18438631683554897479n, 18438631683554897479n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "max" overload (euint64, euint64) => euint64 test 4 (18438631683554897479, 18438631683554897475)', async function () {
    const res = await this.contract5.max_euint64_euint64(18438631683554897479n, 18438631683554897475n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "add" overload (euint64, uint64) => euint64 test 1 (9219336648067240893, 9219865027937887870)', async function () {
    const res = await this.contract5.add_euint64_uint64(9219336648067240893n, 9219865027937887870n);
    expect(res).to.equal(18439201676005128763n);
  });

  it('test operator "add" overload (euint64, uint64) => euint64 test 2 (9219336648067240891, 9219336648067240893)', async function () {
    const res = await this.contract5.add_euint64_uint64(9219336648067240891n, 9219336648067240893n);
    expect(res).to.equal(18438673296134481784n);
  });

  it('test operator "add" overload (euint64, uint64) => euint64 test 3 (9219336648067240893, 9219336648067240893)', async function () {
    const res = await this.contract5.add_euint64_uint64(9219336648067240893n, 9219336648067240893n);
    expect(res).to.equal(18438673296134481786n);
  });

  it('test operator "add" overload (euint64, uint64) => euint64 test 4 (9219336648067240893, 9219336648067240891)', async function () {
    const res = await this.contract5.add_euint64_uint64(9219336648067240893n, 9219336648067240891n);
    expect(res).to.equal(18438673296134481784n);
  });

  it('test operator "add" overload (uint64, euint64) => euint64 test 1 (9221821645145019755, 9219865027937887870)', async function () {
    const res = await this.contract5.add_uint64_euint64(9221821645145019755n, 9219865027937887870n);
    expect(res).to.equal(18441686673082907625n);
  });

  it('test operator "add" overload (uint64, euint64) => euint64 test 2 (9219336648067240891, 9219336648067240893)', async function () {
    const res = await this.contract5.add_uint64_euint64(9219336648067240891n, 9219336648067240893n);
    expect(res).to.equal(18438673296134481784n);
  });

  it('test operator "add" overload (uint64, euint64) => euint64 test 3 (9219336648067240893, 9219336648067240893)', async function () {
    const res = await this.contract5.add_uint64_euint64(9219336648067240893n, 9219336648067240893n);
    expect(res).to.equal(18438673296134481786n);
  });

  it('test operator "add" overload (uint64, euint64) => euint64 test 4 (9219336648067240893, 9219336648067240891)', async function () {
    const res = await this.contract5.add_uint64_euint64(9219336648067240893n, 9219336648067240891n);
    expect(res).to.equal(18438673296134481784n);
  });

  it('test operator "sub" overload (euint64, uint64) => euint64 test 1 (18442295292010752223, 18442295292010752223)', async function () {
    const res = await this.contract5.sub_euint64_uint64(18442295292010752223n, 18442295292010752223n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint64, uint64) => euint64 test 2 (18442295292010752223, 18442295292010752219)', async function () {
    const res = await this.contract5.sub_euint64_uint64(18442295292010752223n, 18442295292010752219n);
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint64, euint64) => euint64 test 1 (18442295292010752223, 18442295292010752223)', async function () {
    const res = await this.contract5.sub_uint64_euint64(18442295292010752223n, 18442295292010752223n);
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint64, euint64) => euint64 test 2 (18442295292010752223, 18442295292010752219)', async function () {
    const res = await this.contract5.sub_uint64_euint64(18442295292010752223n, 18442295292010752219n);
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint64, uint64) => euint64 test 1 (4294744203, 4294589707)', async function () {
    const res = await this.contract5.mul_euint64_uint64(4294744203n, 4294589707n);
    expect(res).to.equal(18444164248401718521n);
  });

  it('test operator "mul" overload (euint64, uint64) => euint64 test 2 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_euint64_uint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "mul" overload (euint64, uint64) => euint64 test 3 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_euint64_uint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "mul" overload (euint64, uint64) => euint64 test 4 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_euint64_uint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "mul" overload (uint64, euint64) => euint64 test 1 (4293263967, 4294589707)', async function () {
    const res = await this.contract5.mul_uint64_euint64(4293263967n, 4294589707n);
    expect(res).to.equal(18437807242112187669n);
  });

  it('test operator "mul" overload (uint64, euint64) => euint64 test 2 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_uint64_euint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "mul" overload (uint64, euint64) => euint64 test 3 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_uint64_euint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "mul" overload (uint64, euint64) => euint64 test 4 (4293841776, 4293841776)', async function () {
    const res = await this.contract5.mul_uint64_euint64(4293841776n, 4293841776n);
    expect(res).to.equal(18437077197322834176n);
  });

  it('test operator "div" overload (euint64, uint64) => euint64 test 1 (18442885434890559161, 18443612733078410209)', async function () {
    const res = await this.contract5.div_euint64_uint64(18442885434890559161n, 18443612733078410209n);
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint64, uint64) => euint64 test 2 (18442885434890559157, 18442885434890559161)', async function () {
    const res = await this.contract5.div_euint64_uint64(18442885434890559157n, 18442885434890559161n);
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint64, uint64) => euint64 test 3 (18442885434890559161, 18442885434890559161)', async function () {
    const res = await this.contract5.div_euint64_uint64(18442885434890559161n, 18442885434890559161n);
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint64, uint64) => euint64 test 4 (18442885434890559161, 18442885434890559157)', async function () {
    const res = await this.contract5.div_euint64_uint64(18442885434890559161n, 18442885434890559157n);
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint64, uint64) => euint64 test 1 (18445299104872939013, 18441298343819074757)', async function () {
    const res = await this.contract5.rem_euint64_uint64(18445299104872939013n, 18441298343819074757n);
    expect(res).to.equal(4000761053864256n);
  });

  it('test operator "rem" overload (euint64, uint64) => euint64 test 2 (18441202573467232859, 18441202573467232863)', async function () {
    const res = await this.contract5.rem_euint64_uint64(18441202573467232859n, 18441202573467232863n);
    expect(res).to.equal(18441202573467232859n);
  });

  it('test operator "rem" overload (euint64, uint64) => euint64 test 3 (18441202573467232863, 18441202573467232863)', async function () {
    const res = await this.contract5.rem_euint64_uint64(18441202573467232863n, 18441202573467232863n);
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint64, uint64) => euint64 test 4 (18441202573467232863, 18441202573467232859)', async function () {
    const res = await this.contract5.rem_euint64_uint64(18441202573467232863n, 18441202573467232859n);
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint64, uint64) => ebool test 1 (18442470885463520691, 18444839379902899701)', async function () {
    const res = await this.contract5.eq_euint64_uint64(18442470885463520691n, 18444839379902899701n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, uint64) => ebool test 2 (18442470885463520687, 18442470885463520691)', async function () {
    const res = await this.contract5.eq_euint64_uint64(18442470885463520687n, 18442470885463520691n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint64, uint64) => ebool test 3 (18442470885463520691, 18442470885463520691)', async function () {
    const res = await this.contract5.eq_euint64_uint64(18442470885463520691n, 18442470885463520691n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint64, uint64) => ebool test 4 (18442470885463520691, 18442470885463520687)', async function () {
    const res = await this.contract5.eq_euint64_uint64(18442470885463520691n, 18442470885463520687n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint64, euint64) => ebool test 1 (18446106064654681685, 18444839379902899701)', async function () {
    const res = await this.contract5.eq_uint64_euint64(18446106064654681685n, 18444839379902899701n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint64, euint64) => ebool test 2 (18442470885463520687, 18442470885463520691)', async function () {
    const res = await this.contract5.eq_uint64_euint64(18442470885463520687n, 18442470885463520691n);
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint64, euint64) => ebool test 3 (18442470885463520691, 18442470885463520691)', async function () {
    const res = await this.contract5.eq_uint64_euint64(18442470885463520691n, 18442470885463520691n);
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint64, euint64) => ebool test 4 (18442470885463520691, 18442470885463520687)', async function () {
    const res = await this.contract5.eq_uint64_euint64(18442470885463520691n, 18442470885463520687n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, uint64) => ebool test 1 (18442343533763371027, 18445982647402256701)', async function () {
    const res = await this.contract5.ne_euint64_uint64(18442343533763371027n, 18445982647402256701n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, uint64) => ebool test 2 (18438477816592523449, 18438477816592523453)', async function () {
    const res = await this.contract5.ne_euint64_uint64(18438477816592523449n, 18438477816592523453n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint64, uint64) => ebool test 3 (18438477816592523453, 18438477816592523453)', async function () {
    const res = await this.contract5.ne_euint64_uint64(18438477816592523453n, 18438477816592523453n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint64, uint64) => ebool test 4 (18438477816592523453, 18438477816592523449)', async function () {
    const res = await this.contract5.ne_euint64_uint64(18438477816592523453n, 18438477816592523449n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint64, euint64) => ebool test 1 (18440875682349733785, 18445982647402256701)', async function () {
    const res = await this.contract5.ne_uint64_euint64(18440875682349733785n, 18445982647402256701n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint64, euint64) => ebool test 2 (18438477816592523449, 18438477816592523453)', async function () {
    const res = await this.contract5.ne_uint64_euint64(18438477816592523449n, 18438477816592523453n);
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint64, euint64) => ebool test 3 (18438477816592523453, 18438477816592523453)', async function () {
    const res = await this.contract5.ne_uint64_euint64(18438477816592523453n, 18438477816592523453n);
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint64, euint64) => ebool test 4 (18438477816592523453, 18438477816592523449)', async function () {
    const res = await this.contract5.ne_uint64_euint64(18438477816592523453n, 18438477816592523449n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 1 (18441951286640352465, 18443569233121144247)', async function () {
    const res = await this.contract5.ge_euint64_uint64(18441951286640352465n, 18443569233121144247n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 2 (18441951286640352461, 18441951286640352465)', async function () {
    const res = await this.contract5.ge_euint64_uint64(18441951286640352461n, 18441951286640352465n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 3 (18441951286640352465, 18441951286640352465)', async function () {
    const res = await this.contract5.ge_euint64_uint64(18441951286640352465n, 18441951286640352465n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 4 (18441951286640352465, 18441951286640352461)', async function () {
    const res = await this.contract5.ge_euint64_uint64(18441951286640352465n, 18441951286640352461n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 1 (18439035083186430691, 18443569233121144247)', async function () {
    const res = await this.contract5.ge_uint64_euint64(18439035083186430691n, 18443569233121144247n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 2 (18441951286640352461, 18441951286640352465)', async function () {
    const res = await this.contract5.ge_uint64_euint64(18441951286640352461n, 18441951286640352465n);
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 3 (18441951286640352465, 18441951286640352465)', async function () {
    const res = await this.contract5.ge_uint64_euint64(18441951286640352465n, 18441951286640352465n);
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 4 (18441951286640352465, 18441951286640352461)', async function () {
    const res = await this.contract5.ge_uint64_euint64(18441951286640352465n, 18441951286640352461n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 1 (18443021258691337483, 18440565481263531071)', async function () {
    const res = await this.contract5.gt_euint64_uint64(18443021258691337483n, 18440565481263531071n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 2 (18443021258691337479, 18443021258691337483)', async function () {
    const res = await this.contract5.gt_euint64_uint64(18443021258691337479n, 18443021258691337483n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 3 (18443021258691337483, 18443021258691337483)', async function () {
    const res = await this.contract5.gt_euint64_uint64(18443021258691337483n, 18443021258691337483n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 4 (18443021258691337483, 18443021258691337479)', async function () {
    const res = await this.contract5.gt_euint64_uint64(18443021258691337483n, 18443021258691337479n);
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 1 (18439903764692512057, 18440565481263531071)', async function () {
    const res = await this.contract5.gt_uint64_euint64(18439903764692512057n, 18440565481263531071n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 2 (18443021258691337479, 18443021258691337483)', async function () {
    const res = await this.contract5.gt_uint64_euint64(18443021258691337479n, 18443021258691337483n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 3 (18443021258691337483, 18443021258691337483)', async function () {
    const res = await this.contract5.gt_uint64_euint64(18443021258691337483n, 18443021258691337483n);
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 4 (18443021258691337483, 18443021258691337479)', async function () {
    const res = await this.contract5.gt_uint64_euint64(18443021258691337483n, 18443021258691337479n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 1 (18443782238591650169, 18439298139086159343)', async function () {
    const res = await this.contract5.le_euint64_uint64(18443782238591650169n, 18439298139086159343n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 2 (18441978790273961909, 18441978790273961913)', async function () {
    const res = await this.contract5.le_euint64_uint64(18441978790273961909n, 18441978790273961913n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 3 (18441978790273961913, 18441978790273961913)', async function () {
    const res = await this.contract5.le_euint64_uint64(18441978790273961913n, 18441978790273961913n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 4 (18441978790273961913, 18441978790273961909)', async function () {
    const res = await this.contract5.le_euint64_uint64(18441978790273961913n, 18441978790273961909n);
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 1 (18438386930936343347, 18439298139086159343)', async function () {
    const res = await this.contract5.le_uint64_euint64(18438386930936343347n, 18439298139086159343n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 2 (18441978790273961909, 18441978790273961913)', async function () {
    const res = await this.contract5.le_uint64_euint64(18441978790273961909n, 18441978790273961913n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 3 (18441978790273961913, 18441978790273961913)', async function () {
    const res = await this.contract5.le_uint64_euint64(18441978790273961913n, 18441978790273961913n);
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 4 (18441978790273961913, 18441978790273961909)', async function () {
    const res = await this.contract5.le_uint64_euint64(18441978790273961913n, 18441978790273961909n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 1 (18445972196307174659, 18441359463085216855)', async function () {
    const res = await this.contract5.lt_euint64_uint64(18445972196307174659n, 18441359463085216855n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 2 (18438760003066140567, 18438760003066140571)', async function () {
    const res = await this.contract5.lt_euint64_uint64(18438760003066140567n, 18438760003066140571n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 3 (18438760003066140571, 18438760003066140571)', async function () {
    const res = await this.contract5.lt_euint64_uint64(18438760003066140571n, 18438760003066140571n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 4 (18438760003066140571, 18438760003066140567)', async function () {
    const res = await this.contract5.lt_euint64_uint64(18438760003066140571n, 18438760003066140567n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint64, euint64) => ebool test 1 (18440565799944043085, 18441359463085216855)', async function () {
    const res = await this.contract5.lt_uint64_euint64(18440565799944043085n, 18441359463085216855n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint64, euint64) => ebool test 2 (18438760003066140567, 18438760003066140571)', async function () {
    const res = await this.contract5.lt_uint64_euint64(18438760003066140567n, 18438760003066140571n);
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint64, euint64) => ebool test 3 (18438760003066140571, 18438760003066140571)', async function () {
    const res = await this.contract5.lt_uint64_euint64(18438760003066140571n, 18438760003066140571n);
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint64, euint64) => ebool test 4 (18438760003066140571, 18438760003066140567)', async function () {
    const res = await this.contract5.lt_uint64_euint64(18438760003066140571n, 18438760003066140567n);
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, uint64) => euint64 test 1 (18446277918636147641, 18444361908116912137)', async function () {
    const res = await this.contract5.min_euint64_uint64(18446277918636147641n, 18444361908116912137n);
    expect(res).to.equal(18444361908116912137n);
  });

  it('test operator "min" overload (euint64, uint64) => euint64 test 2 (18439099819121701503, 18439099819121701507)', async function () {
    const res = await this.contract5.min_euint64_uint64(18439099819121701503n, 18439099819121701507n);
    expect(res).to.equal(18439099819121701503n);
  });

  it('test operator "min" overload (euint64, uint64) => euint64 test 3 (18439099819121701507, 18439099819121701507)', async function () {
    const res = await this.contract5.min_euint64_uint64(18439099819121701507n, 18439099819121701507n);
    expect(res).to.equal(18439099819121701507n);
  });

  it('test operator "min" overload (euint64, uint64) => euint64 test 4 (18439099819121701507, 18439099819121701503)', async function () {
    const res = await this.contract5.min_euint64_uint64(18439099819121701507n, 18439099819121701503n);
    expect(res).to.equal(18439099819121701503n);
  });

  it('test operator "min" overload (uint64, euint64) => euint64 test 1 (18445356693251014369, 18444361908116912137)', async function () {
    const res = await this.contract5.min_uint64_euint64(18445356693251014369n, 18444361908116912137n);
    expect(res).to.equal(18444361908116912137n);
  });

  it('test operator "min" overload (uint64, euint64) => euint64 test 2 (18439099819121701503, 18439099819121701507)', async function () {
    const res = await this.contract5.min_uint64_euint64(18439099819121701503n, 18439099819121701507n);
    expect(res).to.equal(18439099819121701503n);
  });

  it('test operator "min" overload (uint64, euint64) => euint64 test 3 (18439099819121701507, 18439099819121701507)', async function () {
    const res = await this.contract5.min_uint64_euint64(18439099819121701507n, 18439099819121701507n);
    expect(res).to.equal(18439099819121701507n);
  });

  it('test operator "min" overload (uint64, euint64) => euint64 test 4 (18439099819121701507, 18439099819121701503)', async function () {
    const res = await this.contract5.min_uint64_euint64(18439099819121701507n, 18439099819121701503n);
    expect(res).to.equal(18439099819121701503n);
  });

  it('test operator "max" overload (euint64, uint64) => euint64 test 1 (18438631683554897479, 18445384533883180417)', async function () {
    const res = await this.contract5.max_euint64_uint64(18438631683554897479n, 18445384533883180417n);
    expect(res).to.equal(18445384533883180417n);
  });

  it('test operator "max" overload (euint64, uint64) => euint64 test 2 (18438631683554897475, 18438631683554897479)', async function () {
    const res = await this.contract5.max_euint64_uint64(18438631683554897475n, 18438631683554897479n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "max" overload (euint64, uint64) => euint64 test 3 (18438631683554897479, 18438631683554897479)', async function () {
    const res = await this.contract5.max_euint64_uint64(18438631683554897479n, 18438631683554897479n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "max" overload (euint64, uint64) => euint64 test 4 (18438631683554897479, 18438631683554897475)', async function () {
    const res = await this.contract5.max_euint64_uint64(18438631683554897479n, 18438631683554897475n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "max" overload (uint64, euint64) => euint64 test 1 (18440833161069655121, 18445384533883180417)', async function () {
    const res = await this.contract5.max_uint64_euint64(18440833161069655121n, 18445384533883180417n);
    expect(res).to.equal(18445384533883180417n);
  });

  it('test operator "max" overload (uint64, euint64) => euint64 test 2 (18438631683554897475, 18438631683554897479)', async function () {
    const res = await this.contract5.max_uint64_euint64(18438631683554897475n, 18438631683554897479n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "max" overload (uint64, euint64) => euint64 test 3 (18438631683554897479, 18438631683554897479)', async function () {
    const res = await this.contract5.max_uint64_euint64(18438631683554897479n, 18438631683554897479n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "max" overload (uint64, euint64) => euint64 test 4 (18438631683554897479, 18438631683554897475)', async function () {
    const res = await this.contract5.max_uint64_euint64(18438631683554897479n, 18438631683554897475n);
    expect(res).to.equal(18438631683554897479n);
  });

  it('test operator "shl" overload (euint4, uint8) => euint4 test 1 (4, 1)', async function () {
    const res = await this.contract5.shl_euint4_uint8(4n, 1n);
    expect(res).to.equal(8n);
  });

  it('test operator "shl" overload (euint4, uint8) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint4_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "shl" overload (euint4, uint8) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint4_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "shl" overload (euint4, uint8) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint4_uint8(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "shr" overload (euint4, uint8) => euint4 test 1 (7, 7)', async function () {
    const res = await this.contract5.shr_euint4_uint8(7n, 7n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint4, uint8) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract5.shr_euint4_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "shr" overload (euint4, uint8) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract5.shr_euint4_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "shr" overload (euint4, uint8) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract5.shr_euint4_uint8(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "rotl" overload (euint4, uint8) => euint4 test 1 (14, 7)', async function () {
    const res = await this.contract5.rotl_euint4_uint8(14n, 7n);
    expect(res).to.equal(7n);
  });

  it('test operator "rotl" overload (euint4, uint8) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotl_euint4_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "rotl" overload (euint4, uint8) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotl_euint4_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "rotl" overload (euint4, uint8) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotl_euint4_uint8(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "rotr" overload (euint4, uint8) => euint4 test 1 (14, 7)', async function () {
    const res = await this.contract5.rotr_euint4_uint8(14n, 7n);
    expect(res).to.equal(13n);
  });

  it('test operator "rotr" overload (euint4, uint8) => euint4 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotr_euint4_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "rotr" overload (euint4, uint8) => euint4 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotr_euint4_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "rotr" overload (euint4, uint8) => euint4 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotr_euint4_uint8(8n, 4n);
    expect(res).to.equal(8n);
  });

  it('test operator "shl" overload (euint8, euint8) => euint8 test 1 (201, 7)', async function () {
    const res = await this.contract5.shl_euint8_euint8(201n, 7n);
    expect(res).to.equal(128n);
  });

  it('test operator "shl" overload (euint8, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint8_euint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "shl" overload (euint8, euint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint8_euint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "shl" overload (euint8, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint8_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shl" overload (euint8, uint8) => euint8 test 1 (201, 7)', async function () {
    const res = await this.contract5.shl_euint8_uint8(201n, 7n);
    expect(res).to.equal(128n);
  });

  it('test operator "shl" overload (euint8, uint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint8_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "shl" overload (euint8, uint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint8_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "shl" overload (euint8, uint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint8_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shr" overload (euint8, euint8) => euint8 test 1 (15, 4)', async function () {
    const res = await this.contract5.shr_euint8_euint8(15n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint8, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract5.shr_euint8_euint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "shr" overload (euint8, euint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract5.shr_euint8_euint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "shr" overload (euint8, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract5.shr_euint8_euint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint8, uint8) => euint8 test 1 (15, 4)', async function () {
    const res = await this.contract5.shr_euint8_uint8(15n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint8, uint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract5.shr_euint8_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "shr" overload (euint8, uint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract5.shr_euint8_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "shr" overload (euint8, uint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract5.shr_euint8_uint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "rotl" overload (euint8, euint8) => euint8 test 1 (52, 1)', async function () {
    const res = await this.contract5.rotl_euint8_euint8(52n, 1n);
    expect(res).to.equal(104n);
  });

  it('test operator "rotl" overload (euint8, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotl_euint8_euint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "rotl" overload (euint8, euint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotl_euint8_euint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "rotl" overload (euint8, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotl_euint8_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotl" overload (euint8, uint8) => euint8 test 1 (52, 1)', async function () {
    const res = await this.contract5.rotl_euint8_uint8(52n, 1n);
    expect(res).to.equal(104n);
  });

  it('test operator "rotl" overload (euint8, uint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotl_euint8_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "rotl" overload (euint8, uint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotl_euint8_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "rotl" overload (euint8, uint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotl_euint8_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotr" overload (euint8, euint8) => euint8 test 1 (50, 4)', async function () {
    const res = await this.contract5.rotr_euint8_euint8(50n, 4n);
    expect(res).to.equal(35n);
  });

  it('test operator "rotr" overload (euint8, euint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotr_euint8_euint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "rotr" overload (euint8, euint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotr_euint8_euint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "rotr" overload (euint8, euint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotr_euint8_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotr" overload (euint8, uint8) => euint8 test 1 (50, 4)', async function () {
    const res = await this.contract5.rotr_euint8_uint8(50n, 4n);
    expect(res).to.equal(35n);
  });

  it('test operator "rotr" overload (euint8, uint8) => euint8 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotr_euint8_uint8(4n, 8n);
    expect(res).to.equal(4n);
  });

  it('test operator "rotr" overload (euint8, uint8) => euint8 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotr_euint8_uint8(8n, 8n);
    expect(res).to.equal(8n);
  });

  it('test operator "rotr" overload (euint8, uint8) => euint8 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotr_euint8_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shl" overload (euint16, euint8) => euint16 test 1 (43733, 1)', async function () {
    const res = await this.contract5.shl_euint16_euint8(43733n, 1n);
    expect(res).to.equal(21930n);
  });

  it('test operator "shl" overload (euint16, euint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint16_euint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "shl" overload (euint16, euint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint16_euint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "shl" overload (euint16, euint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint16_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shl" overload (euint16, uint8) => euint16 test 1 (43733, 1)', async function () {
    const res = await this.contract5.shl_euint16_uint8(43733n, 1n);
    expect(res).to.equal(21930n);
  });

  it('test operator "shl" overload (euint16, uint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint16_uint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "shl" overload (euint16, uint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint16_uint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "shl" overload (euint16, uint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint16_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shr" overload (euint16, euint8) => euint16 test 1 (55114, 1)', async function () {
    const res = await this.contract5.shr_euint16_euint8(55114n, 1n);
    expect(res).to.equal(27557n);
  });

  it('test operator "shr" overload (euint16, euint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract5.shr_euint16_euint8(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint16, euint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract5.shr_euint16_euint8(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint16, euint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract5.shr_euint16_euint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint16, uint8) => euint16 test 1 (55114, 1)', async function () {
    const res = await this.contract5.shr_euint16_uint8(55114n, 1n);
    expect(res).to.equal(27557n);
  });

  it('test operator "shr" overload (euint16, uint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract5.shr_euint16_uint8(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint16, uint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract5.shr_euint16_uint8(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint16, uint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract5.shr_euint16_uint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "rotl" overload (euint16, euint8) => euint16 test 1 (12143, 3)', async function () {
    const res = await this.contract5.rotl_euint16_euint8(12143n, 3n);
    expect(res).to.equal(31609n);
  });

  it('test operator "rotl" overload (euint16, euint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotl_euint16_euint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "rotl" overload (euint16, euint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotl_euint16_euint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "rotl" overload (euint16, euint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotl_euint16_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotl" overload (euint16, uint8) => euint16 test 1 (12143, 3)', async function () {
    const res = await this.contract5.rotl_euint16_uint8(12143n, 3n);
    expect(res).to.equal(31609n);
  });

  it('test operator "rotl" overload (euint16, uint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotl_euint16_uint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "rotl" overload (euint16, uint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotl_euint16_uint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "rotl" overload (euint16, uint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotl_euint16_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotr" overload (euint16, euint8) => euint16 test 1 (63583, 1)', async function () {
    const res = await this.contract5.rotr_euint16_euint8(63583n, 1n);
    expect(res).to.equal(64559n);
  });

  it('test operator "rotr" overload (euint16, euint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotr_euint16_euint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "rotr" overload (euint16, euint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotr_euint16_euint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "rotr" overload (euint16, euint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotr_euint16_euint8(8n, 4n);
    expect(res).to.equal(32768n);
  });

  it('test operator "rotr" overload (euint16, uint8) => euint16 test 1 (63583, 1)', async function () {
    const res = await this.contract5.rotr_euint16_uint8(63583n, 1n);
    expect(res).to.equal(64559n);
  });

  it('test operator "rotr" overload (euint16, uint8) => euint16 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotr_euint16_uint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "rotr" overload (euint16, uint8) => euint16 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotr_euint16_uint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "rotr" overload (euint16, uint8) => euint16 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotr_euint16_uint8(8n, 4n);
    expect(res).to.equal(32768n);
  });

  it('test operator "shl" overload (euint32, euint8) => euint32 test 1 (1317463952, 4)', async function () {
    const res = await this.contract5.shl_euint32_euint8(1317463952n, 4n);
    expect(res).to.equal(3899554048n);
  });

  it('test operator "shl" overload (euint32, euint8) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint32_euint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "shl" overload (euint32, euint8) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint32_euint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "shl" overload (euint32, euint8) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint32_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shl" overload (euint32, uint8) => euint32 test 1 (1317463952, 4)', async function () {
    const res = await this.contract5.shl_euint32_uint8(1317463952n, 4n);
    expect(res).to.equal(3899554048n);
  });

  it('test operator "shl" overload (euint32, uint8) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint32_uint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "shl" overload (euint32, uint8) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint32_uint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "shl" overload (euint32, uint8) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint32_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shr" overload (euint32, euint8) => euint32 test 1 (3048369776, 1)', async function () {
    const res = await this.contract5.shr_euint32_euint8(3048369776n, 1n);
    expect(res).to.equal(1524184888n);
  });

  it('test operator "shr" overload (euint32, euint8) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract5.shr_euint32_euint8(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint32, euint8) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract5.shr_euint32_euint8(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint32, euint8) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract5.shr_euint32_euint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint32, uint8) => euint32 test 1 (3048369776, 1)', async function () {
    const res = await this.contract5.shr_euint32_uint8(3048369776n, 1n);
    expect(res).to.equal(1524184888n);
  });

  it('test operator "shr" overload (euint32, uint8) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract5.shr_euint32_uint8(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint32, uint8) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract5.shr_euint32_uint8(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint32, uint8) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract5.shr_euint32_uint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "rotl" overload (euint32, euint8) => euint32 test 1 (2219902125, 2)', async function () {
    const res = await this.contract5.rotl_euint32_euint8(2219902125n, 2n);
    expect(res).to.equal(289673910n);
  });

  it('test operator "rotl" overload (euint32, euint8) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotl_euint32_euint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "rotl" overload (euint32, euint8) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotl_euint32_euint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "rotl" overload (euint32, euint8) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotl_euint32_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotl" overload (euint32, uint8) => euint32 test 1 (2219902125, 2)', async function () {
    const res = await this.contract5.rotl_euint32_uint8(2219902125n, 2n);
    expect(res).to.equal(289673910n);
  });

  it('test operator "rotl" overload (euint32, uint8) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotl_euint32_uint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "rotl" overload (euint32, uint8) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotl_euint32_uint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "rotl" overload (euint32, uint8) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotl_euint32_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotr" overload (euint32, euint8) => euint32 test 1 (4127207673, 5)', async function () {
    const res = await this.contract5.rotr_euint32_euint8(4127207673n, 5n);
    expect(res).to.equal(3484418439n);
  });

  it('test operator "rotr" overload (euint32, euint8) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotr_euint32_euint8(4n, 8n);
    expect(res).to.equal(67108864n);
  });

  it('test operator "rotr" overload (euint32, euint8) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotr_euint32_euint8(8n, 8n);
    expect(res).to.equal(134217728n);
  });

  it('test operator "rotr" overload (euint32, euint8) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotr_euint32_euint8(8n, 4n);
    expect(res).to.equal(2147483648n);
  });

  it('test operator "rotr" overload (euint32, uint8) => euint32 test 1 (4127207673, 5)', async function () {
    const res = await this.contract5.rotr_euint32_uint8(4127207673n, 5n);
    expect(res).to.equal(3484418439n);
  });

  it('test operator "rotr" overload (euint32, uint8) => euint32 test 2 (4, 8)', async function () {
    const res = await this.contract5.rotr_euint32_uint8(4n, 8n);
    expect(res).to.equal(67108864n);
  });

  it('test operator "rotr" overload (euint32, uint8) => euint32 test 3 (8, 8)', async function () {
    const res = await this.contract5.rotr_euint32_uint8(8n, 8n);
    expect(res).to.equal(134217728n);
  });

  it('test operator "rotr" overload (euint32, uint8) => euint32 test 4 (8, 4)', async function () {
    const res = await this.contract5.rotr_euint32_uint8(8n, 4n);
    expect(res).to.equal(2147483648n);
  });

  it('test operator "shl" overload (euint64, euint8) => euint64 test 1 (18445637206389853441, 6)', async function () {
    const res = await this.contract5.shl_euint64_euint8(18445637206389853441n, 6n);
    expect(res).to.equal(18375904565248868416n);
  });

  it('test operator "shl" overload (euint64, euint8) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint64_euint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "shl" overload (euint64, euint8) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint64_euint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "shl" overload (euint64, euint8) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint64_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shl" overload (euint64, uint8) => euint64 test 1 (18445637206389853441, 6)', async function () {
    const res = await this.contract5.shl_euint64_uint8(18445637206389853441n, 6n);
    expect(res).to.equal(18375904565248868416n);
  });

  it('test operator "shl" overload (euint64, uint8) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract5.shl_euint64_uint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "shl" overload (euint64, uint8) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract5.shl_euint64_uint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "shl" overload (euint64, uint8) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract5.shl_euint64_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "shr" overload (euint64, euint8) => euint64 test 1 (18438869893773583255, 5)', async function () {
    const res = await this.contract6.shr_euint64_euint8(18438869893773583255n, 5n);
    expect(res).to.equal(576214684180424476n);
  });

  it('test operator "shr" overload (euint64, euint8) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract6.shr_euint64_euint8(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint64, euint8) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract6.shr_euint64_euint8(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint64, euint8) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract6.shr_euint64_euint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint64, uint8) => euint64 test 1 (18438869893773583255, 5)', async function () {
    const res = await this.contract6.shr_euint64_uint8(18438869893773583255n, 5n);
    expect(res).to.equal(576214684180424476n);
  });

  it('test operator "shr" overload (euint64, uint8) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract6.shr_euint64_uint8(4n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint64, uint8) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract6.shr_euint64_uint8(8n, 8n);
    expect(res).to.equal(0n);
  });

  it('test operator "shr" overload (euint64, uint8) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract6.shr_euint64_uint8(8n, 4n);
    expect(res).to.equal(0n);
  });

  it('test operator "rotl" overload (euint64, euint8) => euint64 test 1 (18442278686771288481, 1)', async function () {
    const res = await this.contract6.rotl_euint64_euint8(18442278686771288481n, 1n);
    expect(res).to.equal(18437813299833025347n);
  });

  it('test operator "rotl" overload (euint64, euint8) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract6.rotl_euint64_euint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "rotl" overload (euint64, euint8) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract6.rotl_euint64_euint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "rotl" overload (euint64, euint8) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract6.rotl_euint64_euint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotl" overload (euint64, uint8) => euint64 test 1 (18442278686771288481, 1)', async function () {
    const res = await this.contract6.rotl_euint64_uint8(18442278686771288481n, 1n);
    expect(res).to.equal(18437813299833025347n);
  });

  it('test operator "rotl" overload (euint64, uint8) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract6.rotl_euint64_uint8(4n, 8n);
    expect(res).to.equal(1024n);
  });

  it('test operator "rotl" overload (euint64, uint8) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract6.rotl_euint64_uint8(8n, 8n);
    expect(res).to.equal(2048n);
  });

  it('test operator "rotl" overload (euint64, uint8) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract6.rotl_euint64_uint8(8n, 4n);
    expect(res).to.equal(128n);
  });

  it('test operator "rotr" overload (euint64, euint8) => euint64 test 1 (18441051342909802901, 3)', async function () {
    const res = await this.contract6.rotr_euint64_euint8(18441051342909802901n, 3n);
    expect(res).to.equal(13834346463932195122n);
  });

  it('test operator "rotr" overload (euint64, euint8) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract6.rotr_euint64_euint8(4n, 8n);
    expect(res).to.equal(288230376151711744n);
  });

  it('test operator "rotr" overload (euint64, euint8) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract6.rotr_euint64_euint8(8n, 8n);
    expect(res).to.equal(576460752303423488n);
  });

  it('test operator "rotr" overload (euint64, euint8) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract6.rotr_euint64_euint8(8n, 4n);
    expect(res).to.equal(9223372036854775808n);
  });

  it('test operator "rotr" overload (euint64, uint8) => euint64 test 1 (18441051342909802901, 3)', async function () {
    const res = await this.contract6.rotr_euint64_uint8(18441051342909802901n, 3n);
    expect(res).to.equal(13834346463932195122n);
  });

  it('test operator "rotr" overload (euint64, uint8) => euint64 test 2 (4, 8)', async function () {
    const res = await this.contract6.rotr_euint64_uint8(4n, 8n);
    expect(res).to.equal(288230376151711744n);
  });

  it('test operator "rotr" overload (euint64, uint8) => euint64 test 3 (8, 8)', async function () {
    const res = await this.contract6.rotr_euint64_uint8(8n, 8n);
    expect(res).to.equal(576460752303423488n);
  });

  it('test operator "rotr" overload (euint64, uint8) => euint64 test 4 (8, 4)', async function () {
    const res = await this.contract6.rotr_euint64_uint8(8n, 4n);
    expect(res).to.equal(9223372036854775808n);
  });

  it('test operator "neg" overload (euint4) => euint4 test 1 (6)', async function () {
    const res = await this.contract6.neg_euint4(6n);
    expect(res).to.equal(10n);
  });

  it('test operator "not" overload (euint4) => euint4 test 1 (4)', async function () {
    const res = await this.contract6.not_euint4(4n);
    expect(res).to.equal(11n);
  });

  it('test operator "neg" overload (euint8) => euint8 test 1 (186)', async function () {
    const res = await this.contract6.neg_euint8(186n);
    expect(res).to.equal(70n);
  });

  it('test operator "not" overload (euint8) => euint8 test 1 (29)', async function () {
    const res = await this.contract6.not_euint8(29n);
    expect(res).to.equal(226n);
  });

  it('test operator "neg" overload (euint16) => euint16 test 1 (3993)', async function () {
    const res = await this.contract6.neg_euint16(3993n);
    expect(res).to.equal(61543n);
  });

  it('test operator "not" overload (euint16) => euint16 test 1 (47885)', async function () {
    const res = await this.contract6.not_euint16(47885n);
    expect(res).to.equal(17650n);
  });

  it('test operator "neg" overload (euint32) => euint32 test 1 (2747701293)', async function () {
    const res = await this.contract6.neg_euint32(2747701293n);
    expect(res).to.equal(1547266003n);
  });

  it('test operator "not" overload (euint32) => euint32 test 1 (3731607282)', async function () {
    const res = await this.contract6.not_euint32(3731607282n);
    expect(res).to.equal(563360013n);
  });

  it('test operator "neg" overload (euint64) => euint64 test 1 (18446646312005372999)', async function () {
    const res = await this.contract6.neg_euint64(18446646312005372999n);
    expect(res).to.equal(97761704178617n);
  });

  it('test operator "not" overload (euint64) => euint64 test 1 (18443812023863287611)', async function () {
    const res = await this.contract6.not_euint64(18443812023863287611n);
    expect(res).to.equal(2932049846264004n);
  });
});
