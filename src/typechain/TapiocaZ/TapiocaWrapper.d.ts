/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TapiocaWrapperInterface extends ethers.utils.Interface {
  functions: {
    "createTOFT(address,bytes)": FunctionFragment;
    "executeTOFT(address,bytes)": FunctionFragment;
    "lastTOFT()": FunctionFragment;
    "owner()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "tapiocaOFTLength()": FunctionFragment;
    "tapiocaOFTs(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createTOFT",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTOFT",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "lastTOFT", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "tapiocaOFTLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tapiocaOFTs",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "createTOFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeTOFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastTOFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tapiocaOFTLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tapiocaOFTs",
    data: BytesLike
  ): Result;

  events: {
    "OwnerUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
}

export type OwnerUpdatedEvent = TypedEvent<
  [string, string] & { user: string; newOwner: string }
>;

export class TapiocaWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TapiocaWrapperInterface;

  functions: {
    createTOFT(
      erc20: string,
      bytecode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createTOFT(address,bytes)"(
      erc20: string,
      bytecode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeTOFT(
      toft: string,
      bytecode: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "executeTOFT(address,bytes)"(
      toft: string,
      bytecode: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastTOFT(overrides?: CallOverrides): Promise<[string]>;

    "lastTOFT()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tapiocaOFTLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "tapiocaOFTLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    tapiocaOFTs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "tapiocaOFTs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createTOFT(
    erc20: string,
    bytecode: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createTOFT(address,bytes)"(
    erc20: string,
    bytecode: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeTOFT(
    toft: string,
    bytecode: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "executeTOFT(address,bytes)"(
    toft: string,
    bytecode: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastTOFT(overrides?: CallOverrides): Promise<string>;

  "lastTOFT()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tapiocaOFTLength(overrides?: CallOverrides): Promise<BigNumber>;

  "tapiocaOFTLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  tapiocaOFTs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "tapiocaOFTs(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createTOFT(
      erc20: string,
      bytecode: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "createTOFT(address,bytes)"(
      erc20: string,
      bytecode: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTOFT(
      toft: string,
      bytecode: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "executeTOFT(address,bytes)"(
      toft: string,
      bytecode: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastTOFT(overrides?: CallOverrides): Promise<string>;

    "lastTOFT()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tapiocaOFTLength(overrides?: CallOverrides): Promise<BigNumber>;

    "tapiocaOFTLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    tapiocaOFTs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "tapiocaOFTs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "OwnerUpdated(address,address)"(
      user?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { user: string; newOwner: string }>;

    OwnerUpdated(
      user?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<[string, string], { user: string; newOwner: string }>;
  };

  estimateGas: {
    createTOFT(
      erc20: string,
      bytecode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createTOFT(address,bytes)"(
      erc20: string,
      bytecode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeTOFT(
      toft: string,
      bytecode: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "executeTOFT(address,bytes)"(
      toft: string,
      bytecode: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastTOFT(overrides?: CallOverrides): Promise<BigNumber>;

    "lastTOFT()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tapiocaOFTLength(overrides?: CallOverrides): Promise<BigNumber>;

    "tapiocaOFTLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    tapiocaOFTs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tapiocaOFTs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createTOFT(
      erc20: string,
      bytecode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createTOFT(address,bytes)"(
      erc20: string,
      bytecode: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeTOFT(
      toft: string,
      bytecode: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "executeTOFT(address,bytes)"(
      toft: string,
      bytecode: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastTOFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastTOFT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tapiocaOFTLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tapiocaOFTLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tapiocaOFTs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tapiocaOFTs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}