import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RegistryInterface extends ethers.utils.Interface {
    functions: {
        "getAddr(string)": FunctionFragment;
        "register(string,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getAddr", values: [string]): string;
    encodeFunctionData(functionFragment: "register", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "getAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
    events: {};
}
export interface Registry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RegistryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getAddr(name: string, overrides?: CallOverrides): Promise<[string]>;
        register(name: string, addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getAddr(name: string, overrides?: CallOverrides): Promise<string>;
    register(name: string, addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAddr(name: string, overrides?: CallOverrides): Promise<string>;
        register(name: string, addr: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getAddr(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        register(name: string, addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAddr(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        register(name: string, addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
