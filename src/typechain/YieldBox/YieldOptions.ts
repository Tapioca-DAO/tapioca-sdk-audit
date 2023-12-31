/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface YieldOptionsInterface extends utils.Interface {
  contractName: "YieldOptions";
  functions: {
    "create(uint32,uint32,uint128,uint32)": FunctionFragment;
    "exercise(uint256,uint256)": FunctionFragment;
    "mint(uint256,uint256,address,address)": FunctionFragment;
    "options(uint256)": FunctionFragment;
    "swap(uint256,uint256,address)": FunctionFragment;
    "withdraw(uint256,uint256,address)": FunctionFragment;
    "withdrawEarly(uint256,uint256,address)": FunctionFragment;
    "yieldBox()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "create",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exercise",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "options",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEarly",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "yieldBox", values?: undefined): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exercise", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "options", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEarly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldBox", data: BytesLike): Result;

  events: {
    "Exercise(uint256,address,uint256)": EventFragment;
    "Mint(uint256,address,uint256)": EventFragment;
    "Swap(uint256,address,uint256)": EventFragment;
    "Withdraw(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Exercise"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type ExerciseEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { optionId: BigNumber; by: string; amount: BigNumber }
>;

export type ExerciseEventFilter = TypedEventFilter<ExerciseEvent>;

export type MintEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { optionId: BigNumber; by: string; amount: BigNumber }
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export type SwapEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { optionId: BigNumber; by: string; assetAmount: BigNumber }
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export type WithdrawEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { optionId: BigNumber; by: string; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface YieldOptions extends BaseContract {
  contractName: "YieldOptions";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: YieldOptionsInterface;

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
    create(
      asset: BigNumberish,
      currency: BigNumberish,
      price: BigNumberish,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exercise(
      optionId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mint(
      optionId: BigNumberish,
      amount: BigNumberish,
      optionTo: string,
      minterTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, BigNumber] & {
        asset: number;
        currency: number;
        expiry: number;
        optionAssetId: number;
        minterAssetId: number;
        price: BigNumber;
      }
    >;

    swap(
      optionId: BigNumberish,
      assetAmount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      optionId: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawEarly(
      optionId: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<[string]>;
  };

  create(
    asset: BigNumberish,
    currency: BigNumberish,
    price: BigNumberish,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exercise(
    optionId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mint(
    optionId: BigNumberish,
    amount: BigNumberish,
    optionTo: string,
    minterTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  options(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, BigNumber] & {
      asset: number;
      currency: number;
      expiry: number;
      optionAssetId: number;
      minterAssetId: number;
      price: BigNumber;
    }
  >;

  swap(
    optionId: BigNumberish,
    assetAmount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    optionId: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawEarly(
    optionId: BigNumberish,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  yieldBox(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    create(
      asset: BigNumberish,
      currency: BigNumberish,
      price: BigNumberish,
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exercise(
      optionId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      optionId: BigNumberish,
      amount: BigNumberish,
      optionTo: string,
      minterTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, BigNumber] & {
        asset: number;
        currency: number;
        expiry: number;
        optionAssetId: number;
        minterAssetId: number;
        price: BigNumber;
      }
    >;

    swap(
      optionId: BigNumberish,
      assetAmount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      optionId: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEarly(
      optionId: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    yieldBox(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Exercise(uint256,address,uint256)"(
      optionId?: null,
      by?: string | null,
      amount?: null
    ): ExerciseEventFilter;
    Exercise(
      optionId?: null,
      by?: string | null,
      amount?: null
    ): ExerciseEventFilter;

    "Mint(uint256,address,uint256)"(
      optionId?: null,
      by?: string | null,
      amount?: null
    ): MintEventFilter;
    Mint(optionId?: null, by?: string | null, amount?: null): MintEventFilter;

    "Swap(uint256,address,uint256)"(
      optionId?: null,
      by?: string | null,
      assetAmount?: null
    ): SwapEventFilter;
    Swap(
      optionId?: null,
      by?: string | null,
      assetAmount?: null
    ): SwapEventFilter;

    "Withdraw(uint256,address,uint256)"(
      optionId?: null,
      by?: string | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      optionId?: null,
      by?: string | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    create(
      asset: BigNumberish,
      currency: BigNumberish,
      price: BigNumberish,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exercise(
      optionId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mint(
      optionId: BigNumberish,
      amount: BigNumberish,
      optionTo: string,
      minterTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    options(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      optionId: BigNumberish,
      assetAmount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      optionId: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawEarly(
      optionId: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      asset: BigNumberish,
      currency: BigNumberish,
      price: BigNumberish,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exercise(
      optionId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      optionId: BigNumberish,
      amount: BigNumberish,
      optionTo: string,
      minterTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      optionId: BigNumberish,
      assetAmount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      optionId: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawEarly(
      optionId: BigNumberish,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
