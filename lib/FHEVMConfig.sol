// SPDX-License-Identifier: BSD-3-Clause-Clear

pragma solidity ^0.8.24;

import "./ACLAddress.sol";
import "./FHEPaymentAddress.sol";
import "./KMSVerifierAddress.sol";
import "./TFHEExecutorAddress.sol";
import "./InputVerifierAddress.sol";

interface IFHEVMProvider {
    function getFHEPaymentAddress() external view returns (address);
    function getInputVerifierAddress() external view returns (address);
    function getTFHEExecutorAddress() external view returns (address);
    function getKMSVerifierAddress() external view returns (address);
    function getACLAddress() external view returns (address);
}

interface IFHEVMConfigurable {
    function setFHEVMProvider(address fhevmProviderAddress) external;
}

library FHEVMConfig {
    struct FHEVMConfigStruct {
        address ACLAddress;
        address TFHEExecutorAddress;
        address FHEPaymentAddress;
        address KMSVerifierAddress;
        address InputVerifierAddress;
    }

    /// @dev Function to return an immutable struct
    function defaultConfig() internal pure returns (FHEVMConfigStruct memory) {
        return
            FHEVMConfigStruct({
                ACLAddress: aclAdd,
                TFHEExecutorAddress: tfheExecutorAdd,
                FHEPaymentAddress: fhePaymentAdd,
                KMSVerifierAddress: kmsVerifierAdd,
                InputVerifierAddress: inputVerifierAdd
            });
    }
}
