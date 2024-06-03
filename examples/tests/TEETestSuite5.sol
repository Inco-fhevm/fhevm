// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.20;

import "../../lib/TEE.sol";

contract TEETestSuite5 {
    function le_euint64_euint8(uint64 a, uint8 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint64_euint8(uint64 a, uint8 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint8 bProc = TEE.asEuint8(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint64_euint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint8 bProc = TEE.asEuint8(b);
        euint64 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint64_euint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint8 bProc = TEE.asEuint8(b);
        euint64 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint64_euint16(uint64 a, uint16 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        euint64 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint64_euint16(uint64 a, uint16 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        euint64 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint64_euint16(uint64 a, uint16 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        euint64 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint64_euint16(uint64 a, uint16 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        euint64 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint64_euint16(uint64 a, uint16 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        euint64 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint64_euint16(uint64 a, uint16 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        euint64 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint64_euint16(uint64 a, uint16 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint64_euint16(uint64 a, uint16 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint64_euint16(uint64 a, uint16 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint64_euint16(uint64 a, uint16 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint64_euint16(uint64 a, uint16 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint64_euint16(uint64 a, uint16 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint64_euint16(uint64 a, uint16 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        euint64 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint64_euint16(uint64 a, uint16 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint16 bProc = TEE.asEuint16(b);
        euint64 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint64_euint32(uint64 a, uint32 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        euint64 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint64_euint32(uint64 a, uint32 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        euint64 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint64_euint32(uint64 a, uint32 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        euint64 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint64_euint32(uint64 a, uint32 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        euint64 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint64_euint32(uint64 a, uint32 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        euint64 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint64_euint32(uint64 a, uint32 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        euint64 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint64_euint32(uint64 a, uint32 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint64_euint32(uint64 a, uint32 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint64_euint32(uint64 a, uint32 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint64_euint32(uint64 a, uint32 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint64_euint32(uint64 a, uint32 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint64_euint32(uint64 a, uint32 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint64_euint32(uint64 a, uint32 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        euint64 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint64_euint32(uint64 a, uint32 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint32 bProc = TEE.asEuint32(b);
        euint64 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function and_euint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.and(aProc, bProc);
        return TEE.decrypt(result);
    }

    function or_euint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.or(aProc, bProc);
        return TEE.decrypt(result);
    }

    function xor_euint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.xor(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_euint64_uint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        euint64 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function add_uint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.add(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_euint64_uint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        euint64 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function sub_uint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.sub(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_euint64_uint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        euint64 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function mul_uint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.mul(aProc, bProc);
        return TEE.decrypt(result);
    }

    function div_euint64_uint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        euint64 result = TEE.div(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rem_euint64_uint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        euint64 result = TEE.rem(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_euint64_uint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function eq_uint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.eq(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_euint64_uint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ne_uint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.ne(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_euint64_uint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function ge_uint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.ge(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_euint64_uint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function gt_uint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.gt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_euint64_uint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function le_uint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.le(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_euint64_uint64(uint64 a, uint64 b) public view returns (bool) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function lt_uint64_euint64(uint64 a, uint64 b) public view returns (bool) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        ebool result = TEE.lt(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_euint64_uint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        euint64 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function min_uint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.min(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_euint64_uint64(uint64 a, uint64 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint64 bProc = b;
        euint64 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function max_uint64_euint64(uint64 a, uint64 b) public view returns (uint64) {
        uint64 aProc = a;
        euint64 bProc = TEE.asEuint64(b);
        euint64 result = TEE.max(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint4_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint4 aProc = TEE.asEuint4(a);
        uint8 bProc = b;
        euint4 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shr_euint4_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint4 aProc = TEE.asEuint4(a);
        uint8 bProc = b;
        euint4 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint4_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint4 aProc = TEE.asEuint4(a);
        uint8 bProc = b;
        euint4 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint4_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint4 aProc = TEE.asEuint4(a);
        uint8 bProc = b;
        euint4 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shr_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shr_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint8_euint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 bProc = TEE.asEuint8(b);
        euint8 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint8_uint8(uint8 a, uint8 b) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        uint8 bProc = b;
        euint8 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint16_uint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint8 bProc = b;
        euint16 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shr_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shr_euint16_uint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint8 bProc = b;
        euint16 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint16_uint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint8 bProc = b;
        euint16 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint16_euint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint8 bProc = TEE.asEuint8(b);
        euint16 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint16_uint8(uint16 a, uint8 b) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        uint8 bProc = b;
        euint16 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint32_euint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint8 bProc = TEE.asEuint8(b);
        euint32 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint32_uint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        uint8 bProc = b;
        euint32 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shr_euint32_euint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint8 bProc = TEE.asEuint8(b);
        euint32 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shr_euint32_uint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        uint8 bProc = b;
        euint32 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint32_euint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint8 bProc = TEE.asEuint8(b);
        euint32 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint32_uint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        uint8 bProc = b;
        euint32 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint32_euint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint8 bProc = TEE.asEuint8(b);
        euint32 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint32_uint8(uint32 a, uint8 b) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        uint8 bProc = b;
        euint32 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint64_euint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint8 bProc = TEE.asEuint8(b);
        euint64 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shl_euint64_uint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint8 bProc = b;
        euint64 result = TEE.shl(aProc, bProc);
        return TEE.decrypt(result);
    }
}
