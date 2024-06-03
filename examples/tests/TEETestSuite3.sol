// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.20;

import "../../lib/TEE.sol";

contract TEETestSuite3 {
    function min_euint16_euint4(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        euint16 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint16_euint4(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        euint16 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint16_euint8(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint16_euint8(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint16_euint8(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint16_euint8(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint16_euint8(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint16_euint8(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint16_euint32(uint16 a, uint32 b) public view returns (uint32) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint16_euint32(uint16 a, uint32 b) public view returns (uint32) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint16_euint32(uint16 a, uint32 b) public view returns (uint32) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint16_euint32(uint16 a, uint32 b) public view returns (uint32) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint16_euint32(uint16 a, uint32 b) public view returns (uint32) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint16_euint32(uint16 a, uint32 b) public view returns (uint32) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint16_euint32(uint16 a, uint32 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint16_euint32(uint16 a, uint32 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint16_euint32(uint16 a, uint32 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint16_euint32(uint16 a, uint32 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint16_euint32(uint16 a, uint32 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint16_euint32(uint16 a, uint32 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint16_euint32(uint16 a, uint32 b) public view returns (uint32) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint16_euint32(uint16 a, uint32 b) public view returns (uint32) {
        euint16 aProc = TEE.asEuint16(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint16_euint64(uint16 a, uint64 b) public view returns (uint64) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint16_euint64(uint16 a, uint64 b) public view returns (uint64) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint16_euint64(uint16 a, uint64 b) public view returns (uint64) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint16_euint64(uint16 a, uint64 b) public view returns (uint64) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint16_euint64(uint16 a, uint64 b) public view returns (uint64) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint16_euint64(uint16 a, uint64 b) public view returns (uint64) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint16_euint64(uint16 a, uint64 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint16_euint64(uint16 a, uint64 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint16_euint64(uint16 a, uint64 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint16_euint64(uint16 a, uint64 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint16_euint64(uint16 a, uint64 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint16_euint64(uint16 a, uint64 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint16_euint64(uint16 a, uint64 b) public view returns (uint64) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint16_euint64(uint16 a, uint64 b) public view returns (uint64) {
        euint16 aProc = TEE.asEuint16(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint16_uint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        euint16 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_uint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint16_uint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        euint16 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_uint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint16_uint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        euint16 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_uint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function div_euint16_uint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        euint16 result = TEE.div(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rem_euint16_uint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        euint16 result = TEE.rem(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint16_uint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_uint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint16_uint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_uint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint16_uint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_uint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint16_uint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_uint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint16_uint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_uint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint16_uint16(uint16 a, uint16 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_uint16_euint16(uint16 a, uint16 b) public view returns (bool) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint16_uint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        euint16 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_uint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint16_uint16(uint16 a, uint16 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint16 bProc = b;
        euint16 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_uint16_euint16(uint16 a, uint16 b) public view returns (uint16) {
        uint16 aProc = a;
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint32_euint4(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        euint32 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint32_euint4(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        euint32 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint32_euint4(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        euint32 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint32_euint4(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        euint32 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint32_euint4(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        euint32 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint32_euint4(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        euint32 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint32_euint4(uint32 a, uint8 b) public view returns (bool) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint32_euint4(uint32 a, uint8 b) public view returns (bool) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint32_euint4(uint32 a, uint8 b) public view returns (bool) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint32_euint4(uint32 a, uint8 b) public view returns (bool) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint32_euint4(uint32 a, uint8 b) public view returns (bool) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint32_euint4(uint32 a, uint8 b) public view returns (bool) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint32_euint4(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        euint32 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint32_euint4(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint4 bProc = TEE.asEuint4(b);
        euint32 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint32_euint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint8 bProc = TEE.asEuint8(b);
        euint32 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint32_euint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint8 bProc = TEE.asEuint8(b);
        euint32 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint32_euint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint8 bProc = TEE.asEuint8(b);
        euint32 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint32_euint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint8 bProc = TEE.asEuint8(b);
        euint32 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }
}
