// SPDX-License-Identifier: BSD-3-Clause-Clear

pragma solidity ^0.8.24;

import "./ACLAddress.sol";
import "./FHEPaymentAddress.sol";
import "./KMSVerifierAddress.sol";
import "./TFHEExecutorAddress.sol";
import "./InputVerifierAddress.sol";

interface IFHEVMConfigProvider {
    function getFHEVMConfig() external view returns (FHEVMConfig.FHEVMConfigStruct memory fhevmConfig);
}

interface IFHEVMConfigReceiver {
    function setFHEVMConfig(FHEVMConfig.FHEVMConfigStruct memory fhevmConfig) external;
}

interface IFHEVMProviderReceiver {
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
