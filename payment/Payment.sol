// SPDX-License-Identifier: BSD-3-Clause-Clear

pragma solidity ^0.8.24;

import "../lib/FHEVMConfig.sol";
import "../lib/Impl.sol";
import "../lib/IFHEPayment.sol";

library Payment {
    function depositForAccount(address account, uint256 amount) internal {
        FHEVMConfig.FHEVMConfigStruct storage $ = Impl.getFHEVMConfig();
        IFHEPayment($.FHEPaymentAddress).depositETH{value: amount}(account);
    }

    function depositForThis(uint256 amount) internal {
        FHEVMConfig.FHEVMConfigStruct storage $ = Impl.getFHEVMConfig();
        IFHEPayment($.FHEPaymentAddress).depositETH{value: amount}(address(this));
    }

    function withdrawToAccount(address account, uint256 amount) internal {
        FHEVMConfig.FHEVMConfigStruct storage $ = Impl.getFHEVMConfig();
        IFHEPayment($.FHEPaymentAddress).withdrawETH(amount, account);
    }

    function withdrawToThis(uint256 amount) internal {
        FHEVMConfig.FHEVMConfigStruct storage $ = Impl.getFHEVMConfig();
        IFHEPayment($.FHEPaymentAddress).withdrawETH(amount, address(this));
    }

    function getDepositedBalanceOfAccount(address account) internal view returns (uint256) {
        FHEVMConfig.FHEVMConfigStruct storage $ = Impl.getFHEVMConfig();
        return IFHEPayment($.FHEPaymentAddress).getAvailableDepositsETH(account);
    }

    function getDepositedBalanceOfThis() internal view returns (uint256) {
        FHEVMConfig.FHEVMConfigStruct storage $ = Impl.getFHEVMConfig();
        return IFHEPayment($.FHEPaymentAddress).getAvailableDepositsETH(address(this));
    }
}
