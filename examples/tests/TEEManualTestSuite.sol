// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.20;

import "../../abstracts/Reencrypt.sol";
import "../../lib/TEE.sol";

contract TEEManualTestSuite is Reencrypt {
    function test_select(bool control, uint32 ifTrue, uint32 ifFalse) public view returns (uint32) {
        ebool controlProc = TEE.asEbool(control);
        euint32 ifTrueProc = TEE.asEuint32(ifTrue);
        euint32 ifFalseProc = TEE.asEuint32(ifFalse);
        return TEE.decrypt(TEE.select(controlProc, ifTrueProc, ifFalseProc));
    }

    // function test_select_eaddress(bool control, uint32 ifTrue, uint32 ifFalse) public view returns (address) {
    //     ebool controlProc = TEE.asEbool(control);
    //     eaddress ifTrueProc = TEE.asEaddress(ifTrue);
    //     eaddress ifFalseProc = TEE.asEaddress(ifFalse);
    //     return TEE.decrypt(TEE.select(controlProc, ifTrueProc, ifFalseProc));
    // }

    // function test_eq_eaddress_eaddress(bytes calldata a, bytes calldata b) public view returns (bool) {
    //     eaddress aProc = TEE.asEaddress(a);
    //     eaddress bProc = TEE.asEaddress(b);
    //     ebool result = TEE.eq(aProc, bProc);
    //     return TEE.decrypt(result);
    // }

    // function test_ne_eaddress_eaddress(bytes calldata a, bytes calldata b) public view returns (bool) {
    //     eaddress aProc = TEE.asEaddress(a);
    //     eaddress bProc = TEE.asEaddress(b);
    //     ebool result = TEE.ne(aProc, bProc);
    //     return TEE.decrypt(result);
    // }

    // function test_eq_eaddress_address(bytes calldata a, address b) public view returns (bool) {
    //     eaddress aProc = TEE.asEaddress(a);
    //     address bProc = b;
    //     ebool result = TEE.eq(aProc, bProc);
    //     return TEE.decrypt(result);
    // }

    // function test_eq_address_eaddress(address b, bytes calldata a) public view returns (bool) {
    //     eaddress aProc = TEE.asEaddress(a);
    //     address bProc = b;
    //     ebool result = TEE.eq(aProc, bProc);
    //     return TEE.decrypt(result);
    // }

    // function test_ne_eaddress_address(bytes calldata a, address b) public view returns (bool) {
    //     eaddress aProc = TEE.asEaddress(a);
    //     address bProc = b;
    //     ebool result = TEE.ne(aProc, bProc);
    //     return TEE.decrypt(result);
    // }

    // function test_ne_address_eaddress(address b, bytes calldata a) public view returns (bool) {
    //     eaddress aProc = TEE.asEaddress(a);
    //     address bProc = b;
    //     ebool result = TEE.ne(aProc, bProc);
    //     return TEE.decrypt(result);
    // }

    // function test_eaddress_decrypt(bytes calldata addr) public view returns (address) {
    //     eaddress addProc = TEE.asEaddress(addr);
    //     return TEE.decrypt(addProc);
    // }

    // function test_reencrypt_eaddress(
    //     bytes calldata addr,
    //     bytes32 publicKey,
    //     bytes calldata signature
    // ) public view virtual onlySignedPublicKey(publicKey, signature) returns (bytes memory) {
    //     eaddress addProc = TEE.asEaddress(addr);
    //     return TEE.reencrypt(addProc, publicKey);
    // }

    function test_ebool_to_euint4_cast(bool input) public view returns (uint16) {
        return TEE.decrypt(TEE.asEuint4(TEE.asEbool(input)));
    }

    function test_ebool_to_euint8_cast(bool input) public view returns (uint16) {
        return TEE.decrypt(TEE.asEuint8(TEE.asEbool(input)));
    }

    function test_ebool_to_euint16_cast(bool input) public view returns (uint16) {
        return TEE.decrypt(TEE.asEuint16(TEE.asEbool(input)));
    }

    function test_ebool_to_euint32_cast(bool input) public view returns (uint32) {
        return TEE.decrypt(TEE.asEuint32(TEE.asEbool(input)));
    }

    function test_ebool_to_euint64_cast(bool input) public view returns (uint64) {
        return TEE.decrypt(TEE.asEuint64(TEE.asEbool(input)));
    }

    function test_ebool_not(bool input) public view returns (bool) {
        return TEE.decrypt(TEE.not(TEE.asEbool(input)));
    }

    function test_ebool_and(bool a, bool b) public view returns (bool) {
        return TEE.decrypt(TEE.and(TEE.asEbool(a), TEE.asEbool(b)));
    }

    function test_ebool_or(bool a, bool b) public view returns (bool) {
        return TEE.decrypt(TEE.or(TEE.asEbool(a), TEE.asEbool(b)));
    }

    function test_ebool_xor(bool a, bool b) public view returns (bool) {
        return TEE.decrypt(TEE.xor(TEE.asEbool(a), TEE.asEbool(b)));
    }
}
