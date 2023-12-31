/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MaliciousMasterContractMockInterface extends utils.Interface {
  contractName: "MaliciousMasterContractMock";
  functions: {
    "attack(address)": FunctionFragment;
    "init(bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "attack", values: [string]): string;
  encodeFunctionData(functionFragment: "init", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "attack", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;

  events: {};
}

export interface MaliciousMasterContractMock extends BaseContract {
  contractName: "MaliciousMasterContractMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MaliciousMasterContractMockInterface;

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
    attack(
      yieldBox: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    init(
      arg0: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  attack(
    yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  init(
    arg0: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    attack(yieldBox: string, overrides?: CallOverrides): Promise<void>;

    init(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    attack(
      yieldBox: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    init(
      arg0: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    attack(
      yieldBox: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    init(
      arg0: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
