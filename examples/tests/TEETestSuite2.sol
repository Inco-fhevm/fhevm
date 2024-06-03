// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.20;

import "../../lib/TEE.sol";

contract TEETestSuite2 {
    function eq_euint8_euint4(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint8_euint4(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint8_euint4(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint8_euint4(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint8_euint4(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint8_euint4(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint8_euint4(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint4 bProc = TEE.asEuint4(b);
        euint8 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint8_euint4(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint4 bProc = TEE.asEuint4(b);
        euint8 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint8_euint16(uint8 a, uint16 b) public view returns (uint16) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint8_euint16(uint8 a, uint16 b) public view returns (uint16) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint8_euint16(uint8 a, uint16 b) public view returns (uint16) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint8_euint16(uint8 a, uint16 b) public view returns (uint16) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint8_euint16(uint8 a, uint16 b) public view returns (uint16) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint8_euint16(uint8 a, uint16 b) public view returns (uint16) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint8_euint16(uint8 a, uint16 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint8_euint16(uint8 a, uint16 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint8_euint16(uint8 a, uint16 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint8_euint16(uint8 a, uint16 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint8_euint16(uint8 a, uint16 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint8_euint16(uint8 a, uint16 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint8_euint16(uint8 a, uint16 b) public view returns (uint16) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint8_euint16(uint8 a, uint16 b) public view returns (uint16) {
        euint8 aProc = TEE.asEuint8(a);
        euint16 bProc = TEE.asEuint16(b);
        euint16 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint8_euint32(uint8 a, uint32 b) public view returns (uint32) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint8_euint32(uint8 a, uint32 b) public view returns (uint32) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint8_euint32(uint8 a, uint32 b) public view returns (uint32) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint8_euint32(uint8 a, uint32 b) public view returns (uint32) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint8_euint32(uint8 a, uint32 b) public view returns (uint32) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint8_euint32(uint8 a, uint32 b) public view returns (uint32) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint8_euint32(uint8 a, uint32 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint8_euint32(uint8 a, uint32 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint8_euint32(uint8 a, uint32 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint8_euint32(uint8 a, uint32 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint8_euint32(uint8 a, uint32 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint8_euint32(uint8 a, uint32 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint8_euint32(uint8 a, uint32 b) public view returns (uint32) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint8_euint32(uint8 a, uint32 b) public view returns (uint32) {
        euint8 aProc = TEE.asEuint8(a);
        euint32 bProc = TEE.asEuint32(b);
        euint32 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint8_euint64(uint8 a, uint64 b) public view returns (uint64) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint8_euint64(uint8 a, uint64 b) public view returns (uint64) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint8_euint64(uint8 a, uint64 b) public view returns (uint64) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint8_euint64(uint8 a, uint64 b) public view returns (uint64) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint8_euint64(uint8 a, uint64 b) public view returns (uint64) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint8_euint64(uint8 a, uint64 b) public view returns (uint64) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint8_euint64(uint8 a, uint64 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint8_euint64(uint8 a, uint64 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint8_euint64(uint8 a, uint64 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint8_euint64(uint8 a, uint64 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint8_euint64(uint8 a, uint64 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint8_euint64(uint8 a, uint64 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint8_euint64(uint8 a, uint64 b) public view returns (uint64) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint8_euint64(uint8 a, uint64 b) public view returns (uint64) {
        euint8 aProc = TEE.asEuint8(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_uint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_uint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_uint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function div_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.div(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rem_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.rem(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint8_uint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_uint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint8_uint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_uint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint8_uint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_uint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint8_uint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_uint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint8_uint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_uint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint8_uint8(uint8 a, uint8 b) public view returns (bool) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_uint8_euint8(uint8 a, uint8 b) public view returns (bool) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_uint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_uint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        uint8 aProc = a;
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint16_euint4(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        euint16 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint16_euint4(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        euint16 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint16_euint4(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        euint16 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint16_euint4(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        euint16 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint16_euint4(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        euint16 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint16_euint4(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        euint16 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint16_euint4(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint16_euint4(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint16_euint4(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint16_euint4(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint16_euint4(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint16_euint4(uint16 a, uint8 b) public view returns (bool) {
        euint16 aProc = TEE.asEuint16(a);
        euint4 bProc = TEE.asEuint4(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }
}
