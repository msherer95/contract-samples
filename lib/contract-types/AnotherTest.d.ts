import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AnotherTestInterface extends ethers.utils.Interface {
    functions: {
        "addCount(uint256)": FunctionFragment;
        "getCount()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCount", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result;
    events: {};
}
export interface AnotherTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AnotherTestInterface;
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
        addCount(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCount(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addCount(count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCount(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addCount(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        addCount(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addCount(count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
