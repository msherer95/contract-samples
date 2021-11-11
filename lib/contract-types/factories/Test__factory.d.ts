import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Test, TestInterface } from "../Test";
declare type TestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Test__factory extends ContractFactory {
    constructor(...args: TestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Test>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Test;
    connect(signer: Signer): Test__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610260806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806311b94fd51461003b578063a87d942c14610057575b600080fd5b61005560048036038101906100509190610128565b610075565b005b61005f6100cd565b60405161006c9190610164565b60405180910390f35b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546100c3919061017f565b9250508190555050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60008135905061012281610213565b92915050565b60006020828403121561013e5761013d61020e565b5b600061014c84828501610113565b91505092915050565b61015e816101d5565b82525050565b60006020820190506101796000830184610155565b92915050565b600061018a826101d5565b9150610195836101d5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156101ca576101c96101df565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b61021c816101d5565b811461022757600080fd5b5056fea2646970667358221220f1ae78ac62c3efa282f4ddc8e4349cb149223fb5a12d11f3d1faa766feee26a564736f6c63430008050033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Test;
}
export {};
