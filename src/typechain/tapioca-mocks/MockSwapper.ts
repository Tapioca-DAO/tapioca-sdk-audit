/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace MockSwapper {
  export type SwapTokensDataStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenInId: PromiseOrValue<BigNumberish>;
    tokenOut: PromiseOrValue<string>;
    tokenOutId: PromiseOrValue<BigNumberish>;
  };

  export type SwapTokensDataStructOutput = [
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    tokenIn: string;
    tokenInId: BigNumber;
    tokenOut: string;
    tokenOutId: BigNumber;
  };

  export type SwapAmountDataStruct = {
    amountIn: PromiseOrValue<BigNumberish>;
    shareIn: PromiseOrValue<BigNumberish>;
    amountOut: PromiseOrValue<BigNumberish>;
    shareOut: PromiseOrValue<BigNumberish>;
  };

  export type SwapAmountDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    amountIn: BigNumber;
    shareIn: BigNumber;
    amountOut: BigNumber;
    shareOut: BigNumber;
  };

  export type YieldBoxDataStruct = {
    withdrawFromYb: PromiseOrValue<boolean>;
    depositToYb: PromiseOrValue<boolean>;
  };

  export type YieldBoxDataStructOutput = [boolean, boolean] & {
    withdrawFromYb: boolean;
    depositToYb: boolean;
  };

  export type SwapDataStruct = {
    tokensData: MockSwapper.SwapTokensDataStruct;
    amountData: MockSwapper.SwapAmountDataStruct;
    yieldBoxData: MockSwapper.YieldBoxDataStruct;
  };

  export type SwapDataStructOutput = [
    MockSwapper.SwapTokensDataStructOutput,
    MockSwapper.SwapAmountDataStructOutput,
    MockSwapper.YieldBoxDataStructOutput
  ] & {
    tokensData: MockSwapper.SwapTokensDataStructOutput;
    amountData: MockSwapper.SwapAmountDataStructOutput;
    yieldBoxData: MockSwapper.YieldBoxDataStructOutput;
  };
}

export interface MockSwapperInterface extends utils.Interface {
  functions: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)": FunctionFragment;
    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)": FunctionFragment;
    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)": FunctionFragment;
    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)": FunctionFragment;
    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buildSwapData(address,address,uint256,uint256,bool,bool)"
      | "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"
      | "getInputAmount"
      | "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"
      | "getOutputAmount"
      | "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"
      | "swap"
      | "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buildSwapData(address,address,uint256,uint256,bool,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getInputAmount",
    values: [MockSwapper.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    values: [MockSwapper.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutputAmount",
    values: [MockSwapper.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    values: [MockSwapper.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      MockSwapper.SwapDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)",
    values: [
      MockSwapper.SwapDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "buildSwapData(address,address,uint256,uint256,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockSwapper extends BaseContract {
  contractName: "MockSwapper";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockSwapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[MockSwapper.SwapDataStructOutput]>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[MockSwapper.SwapDataStructOutput]>;

    getInputAmount(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOutputAmount(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    swap(
      swapData: MockSwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: MockSwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  "buildSwapData(address,address,uint256,uint256,bool,bool)"(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    shareIn: PromiseOrValue<BigNumberish>,
    withdrawFromYb: PromiseOrValue<boolean>,
    depositToYb: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<MockSwapper.SwapDataStructOutput>;

  "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
    tokenInId: PromiseOrValue<BigNumberish>,
    tokenOutId: PromiseOrValue<BigNumberish>,
    amountIn: PromiseOrValue<BigNumberish>,
    shareIn: PromiseOrValue<BigNumberish>,
    withdrawFromYb: PromiseOrValue<boolean>,
    depositToYb: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<MockSwapper.SwapDataStructOutput>;

  getInputAmount(
    arg0: MockSwapper.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
    arg0: MockSwapper.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOutputAmount(
    arg0: MockSwapper.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
    arg0: MockSwapper.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swap(
    swapData: MockSwapper.SwapDataStruct,
    amountOutMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
    swapData: MockSwapper.SwapDataStruct,
    amountOutMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<MockSwapper.SwapDataStructOutput>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<MockSwapper.SwapDataStructOutput>;

    getInputAmount(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutputAmount(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      swapData: MockSwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountOut: BigNumber; shareOut: BigNumber }
    >;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: MockSwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountOut: BigNumber; shareOut: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInputAmount(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutputAmount(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      swapData: MockSwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: MockSwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInputAmount(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOutputAmount(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      arg0: MockSwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      swapData: MockSwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: MockSwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}