// SPDX-License-Identifier: BSD-3-Clause-Clear

pragma solidity ^0.8.20;

import "./TEE.sol";

interface FhevmLib {
    function teeAdd(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeSub(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeMul(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeDiv(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeRem(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeBitAnd(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeBitOr(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeBitXor(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeShl(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeShr(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeRotl(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeRotr(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeEq(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeNe(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeGe(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeGt(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeLe(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeLt(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeMin(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeMax(uint256 lhs, uint256 rhs, bytes1 scalarByte) external pure returns (uint256 result);

    function teeNeg(uint256 ct) external pure returns (uint256 result);

    function teeNot(uint256 ct) external pure returns (uint256 result);

    function teeEncrypt(uint256 ct, bytes1 toType) external pure returns (uint256 result);

    function teeVerifyCiphertext(bytes memory input) external pure returns (uint256 result);

    function teeDecrypt(uint256 ct) external view returns (uint256 result);

    function teeCast(uint256 ct, bytes1 toType) external pure returns (uint256 result);

    function teeSelect(uint256 control, uint256 ifTrue, uint256 ifFalse) external pure returns (uint256 result);

    function teeReencrypt(uint256 ct, uint256 publicKey) external view returns (bytes memory);
}

address constant EXT_TFHE_LIBRARY = address(0x000000000000000000000000000000000000005E);

library Impl {
    // 32 bytes for the 'byte' type header + 48 bytes for the NaCl anonymous
    // box overhead + 4 bytes for the plaintext value.
    uint256 constant reencryptedSize = 32 + 48 + 4;

    // 32 bytes for the 'byte' header + 16553 bytes of key data.
    uint256 constant fhePubKeySize = 32 + 16553;

    function add(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeAdd(lhs, rhs, scalarByte);
    }

    function sub(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeSub(lhs, rhs, scalarByte);
    }

    function mul(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeMul(lhs, rhs, scalarByte);
    }

    function div(uint256 lhs, uint256 rhs) internal pure returns (uint256 result) {
        bytes1 scalarByte = 0x01;
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeDiv(lhs, rhs, scalarByte);
    }

    function rem(uint256 lhs, uint256 rhs) internal pure returns (uint256 result) {
        bytes1 scalarByte = 0x01;
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeRem(lhs, rhs, scalarByte);
    }

    function and(uint256 lhs, uint256 rhs) internal pure returns (uint256 result) {
        bytes1 scalarByte = 0x00;
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeBitAnd(lhs, rhs, scalarByte);
    }

    function or(uint256 lhs, uint256 rhs) internal pure returns (uint256 result) {
        bytes1 scalarByte = 0x00;
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeBitOr(lhs, rhs, scalarByte);
    }

    function xor(uint256 lhs, uint256 rhs) internal pure returns (uint256 result) {
        bytes1 scalarByte = 0x00;
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeBitXor(lhs, rhs, scalarByte);
    }

    function shl(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeShl(lhs, rhs, scalarByte);
    }

    function shr(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeShr(lhs, rhs, scalarByte);
    }

    function rotl(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeRotl(lhs, rhs, scalarByte);
    }

    function rotr(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeRotr(lhs, rhs, scalarByte);
    }

    function eq(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeEq(lhs, rhs, scalarByte);
    }

    function ne(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeNe(lhs, rhs, scalarByte);
    }

    function ge(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeGe(lhs, rhs, scalarByte);
    }

    function gt(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeGt(lhs, rhs, scalarByte);
    }

    function le(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeLe(lhs, rhs, scalarByte);
    }

    function lt(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeLt(lhs, rhs, scalarByte);
    }

    function min(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeMin(lhs, rhs, scalarByte);
    }

    function max(uint256 lhs, uint256 rhs, bool scalar) internal pure returns (uint256 result) {
        bytes1 scalarByte;
        if (scalar) {
            scalarByte = 0x01;
        } else {
            scalarByte = 0x00;
        }
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeMax(lhs, rhs, scalarByte);
    }

    function neg(uint256 ct) internal pure returns (uint256 result) {
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeNeg(ct);
    }

    function not(uint256 ct) internal pure returns (uint256 result) {
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeNot(ct);
    }

    function cast(uint256 ciphertext, uint8 toType) internal pure returns (uint256 result) {
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeCast(ciphertext, bytes1(toType));
    }

    function decrypt(uint256 ciphertext) internal view returns (uint256 result) {
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeDecrypt(ciphertext);
    }

    function trivialEncrypt(uint256 value, uint8 toType) internal pure returns (uint256 result) {
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeEncrypt(value, bytes1(toType));
    }

    function select(uint256 control, uint256 ifTrue, uint256 ifFalse) internal pure returns (uint256 result) {
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeSelect(control, ifTrue, ifFalse);
    }

    function verify(bytes memory _ciphertextBytes, uint8 _toType) internal pure returns (uint256 result) {
        bytes memory input = bytes.concat(_ciphertextBytes, bytes1(_toType));
        result = FhevmLib(address(EXT_TFHE_LIBRARY)).teeVerifyCiphertext(input);
    }

    function reencrypt(uint256 ciphertext, bytes32 publicKey) internal view returns (bytes memory reencrypted) {
        return FhevmLib(address(EXT_TFHE_LIBRARY)).teeReencrypt(ciphertext, uint256(publicKey));
    }
}
