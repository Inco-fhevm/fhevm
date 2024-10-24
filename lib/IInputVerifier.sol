// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IInputVerifier {
    struct ContextUserInputs {
        address aclAddress;
        address userAddress;
        address contractAddress;
    }

    function verifyCiphertext(
        ContextUserInputs memory context,
        bytes32 inputHandle,
        bytes memory inputProof
    ) external returns (uint256);
}
