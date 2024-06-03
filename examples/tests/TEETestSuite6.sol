// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.20;

import "../../lib/TEE.sol";

contract TEETestSuite6 {
    function shr_euint64_euint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint8 bProc = TEE.asEuint8(b);
        euint64 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function shr_euint64_uint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint8 bProc = b;
        euint64 result = TEE.shr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint64_euint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint8 bProc = TEE.asEuint8(b);
        euint64 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotl_euint64_uint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint8 bProc = b;
        euint64 result = TEE.rotl(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint64_euint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint8 bProc = TEE.asEuint8(b);
        euint64 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function rotr_euint64_uint8(uint64 a, uint8 b) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        uint8 bProc = b;
        euint64 result = TEE.rotr(aProc, bProc);
        return TEE.decrypt(result);
    }

    function neg_euint4(uint8 a) public view returns (uint8) {
        euint4 aProc = TEE.asEuint4(a);
        euint4 result = TEE.neg(aProc);
        return TEE.decrypt(result);
    }

    function not_euint4(uint8 a) public view returns (uint8) {
        euint4 aProc = TEE.asEuint4(a);
        euint4 result = TEE.not(aProc);
        return TEE.decrypt(result);
    }

    function neg_euint8(uint8 a) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 result = TEE.neg(aProc);
        return TEE.decrypt(result);
    }

    function not_euint8(uint8 a) public view returns (uint8) {
        euint8 aProc = TEE.asEuint8(a);
        euint8 result = TEE.not(aProc);
        return TEE.decrypt(result);
    }

    function neg_euint16(uint16 a) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 result = TEE.neg(aProc);
        return TEE.decrypt(result);
    }

    function not_euint16(uint16 a) public view returns (uint16) {
        euint16 aProc = TEE.asEuint16(a);
        euint16 result = TEE.not(aProc);
        return TEE.decrypt(result);
    }

    function neg_euint32(uint32 a) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint32 result = TEE.neg(aProc);
        return TEE.decrypt(result);
    }

    function not_euint32(uint32 a) public view returns (uint32) {
        euint32 aProc = TEE.asEuint32(a);
        euint32 result = TEE.not(aProc);
        return TEE.decrypt(result);
    }

    function neg_euint64(uint64 a) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 result = TEE.neg(aProc);
        return TEE.decrypt(result);
    }

    function not_euint64(uint64 a) public view returns (uint64) {
        euint64 aProc = TEE.asEuint64(a);
        euint64 result = TEE.not(aProc);
        return TEE.decrypt(result);
    }
}
