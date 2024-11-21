// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Define interface based on FHEPayment contract
interface IFHEPayment {
    function depositETH(address account) external payable;

    function withdrawETH(uint256 amount, address receiver) external;

    function getAvailableDepositsETH(address account) external view returns (uint256);

    function payForFheAnd(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheOr(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheXor(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheNot(address payer, uint8 resultType) external;

    function payForFheNand(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheNor(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheXnor(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMux(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMux16(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMux32(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMux64(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMux128(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMux256(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMux512(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMux1024(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheAdd(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheSub(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMul(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheDiv(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMod(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheLt(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheLe(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheGt(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheGe(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheEq(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheNe(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheShl(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheShr(address payer, uint8 result, bytes1 scalarByte) external;

    function payForFheRand(address payer, uint8 resultType) external;

    function payForFheRandBounded(address payer, uint8 resultType) external;

    function payForFheRem(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheBitAnd(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheBitOr(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheBitXor(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheRotl(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheRotr(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMin(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheMax(address payer, uint8 resultType, bytes1 scalarByte) external;

    function payForFheNeg(address payer, uint8 resultType) external;

    function payForCast(address payer, uint8 resultType) external;

    function payForTrivialEncrypt(address payer, uint8 resultType) external;

    function payForIfThenElse(address payer, uint8 resultType) external;
}
