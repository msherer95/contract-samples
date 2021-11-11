"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnotherTest__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        name: "addCount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610260806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806311b94fd51461003b578063a87d942c14610057575b600080fd5b61005560048036038101906100509190610128565b610075565b005b61005f6100cd565b60405161006c9190610164565b60405180910390f35b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546100c3919061017f565b9250508190555050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60008135905061012281610213565b92915050565b60006020828403121561013e5761013d61020e565b5b600061014c84828501610113565b91505092915050565b61015e816101d5565b82525050565b60006020820190506101796000830184610155565b92915050565b600061018a826101d5565b9150610195836101d5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156101ca576101c96101df565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b61021c816101d5565b811461022757600080fd5b5056fea264697066735822122011bc757f760e925e8803a3c341a5b2645b2c1280ae778aa03f80845fa78083ac64736f6c63430008050033";
const isSuperArgs = (xs) => xs.length > 1;
class AnotherTest__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AnotherTest__factory = AnotherTest__factory;
AnotherTest__factory.bytecode = _bytecode;
AnotherTest__factory.abi = _abi;
