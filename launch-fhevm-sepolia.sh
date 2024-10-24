#!/usr/bin/env bash
set -e
# This script should be launched after precomputing the addresses via `precompute-addresses.sh`, and preferably after setting up the different services - KMS, Geth node, Gateway
npx hardhat clean

PRIVATE_KEY_FHEVM_DEPLOYER=$(grep PRIVATE_KEY_FHEVM_DEPLOYER .env | cut -d '"' -f 2)
NUM_KMS_SIGNERS=$(grep NUM_KMS_SIGNERS .env | cut -d '"' -f 2)

npx hardhat compile:specific --contract lib
npx hardhat compile:specific --contract gateway

npx hardhat task:deployACL --private-key "$PRIVATE_KEY_FHEVM_DEPLOYER" --network sepolia
npx hardhat task:deployTFHEExecutor --private-key "$PRIVATE_KEY_FHEVM_DEPLOYER" --network sepolia
npx hardhat task:deployKMSVerifier --private-key "$PRIVATE_KEY_FHEVM_DEPLOYER" --network sepolia
npx hardhat task:deployInputVerifier --private-key "$PRIVATE_KEY_FHEVM_DEPLOYER" --network sepolia
npx hardhat task:deployFHEPayment --private-key "$PRIVATE_KEY_FHEVM_DEPLOYER" --network sepolia

npx hardhat task:addSigners --num-signers "$NUM_KMS_SIGNERS" --private-key "$PRIVATE_KEY_FHEVM_DEPLOYER" --use-address true --network sepolia

npx hardhat task:launchFhevm --skip-get-coin true --use-address true --network sepolia

echo "Waiting 2 minutes before contract verification... Please wait..."
sleep 120 # makes sure that contracts bytescode propagates on Etherscan, otherwise contracts verification might fail in next step
npx hardhat task:verifyContracts --network sepolia
