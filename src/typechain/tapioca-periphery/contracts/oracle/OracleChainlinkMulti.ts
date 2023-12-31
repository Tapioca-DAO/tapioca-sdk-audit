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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface OracleChainlinkMultiInterface extends utils.Interface {
  functions: {
    "BASE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "GUARDIAN_ROLE_CHAINLINK()": FunctionFragment;
    "chainlinkDecimals(uint256)": FunctionFragment;
    "changeStalePeriod(uint32)": FunctionFragment;
    "circuitChainIsMultiplied(uint256)": FunctionFragment;
    "circuitChainlink(uint256)": FunctionFragment;
    "description()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "inBase()": FunctionFragment;
    "read()": FunctionFragment;
    "readAll()": FunctionFragment;
    "readLower()": FunctionFragment;
    "readQuote(uint256)": FunctionFragment;
    "readQuoteLower(uint256)": FunctionFragment;
    "readUpper()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "stalePeriod()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASE"
      | "BASE()"
      | "DEFAULT_ADMIN_ROLE"
      | "DEFAULT_ADMIN_ROLE()"
      | "GUARDIAN_ROLE_CHAINLINK"
      | "GUARDIAN_ROLE_CHAINLINK()"
      | "chainlinkDecimals"
      | "chainlinkDecimals(uint256)"
      | "changeStalePeriod"
      | "changeStalePeriod(uint32)"
      | "circuitChainIsMultiplied"
      | "circuitChainIsMultiplied(uint256)"
      | "circuitChainlink"
      | "circuitChainlink(uint256)"
      | "description"
      | "description()"
      | "getRoleAdmin"
      | "getRoleAdmin(bytes32)"
      | "grantRole"
      | "grantRole(bytes32,address)"
      | "hasRole"
      | "hasRole(bytes32,address)"
      | "inBase"
      | "inBase()"
      | "read"
      | "read()"
      | "readAll"
      | "readAll()"
      | "readLower"
      | "readLower()"
      | "readQuote"
      | "readQuote(uint256)"
      | "readQuoteLower"
      | "readQuoteLower(uint256)"
      | "readUpper"
      | "readUpper()"
      | "renounceRole"
      | "renounceRole(bytes32,address)"
      | "revokeRole"
      | "revokeRole(bytes32,address)"
      | "stalePeriod"
      | "stalePeriod()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BASE", values?: undefined): string;
  encodeFunctionData(functionFragment: "BASE()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GUARDIAN_ROLE_CHAINLINK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GUARDIAN_ROLE_CHAINLINK()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "chainlinkDecimals",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "chainlinkDecimals(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeStalePeriod",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeStalePeriod(uint32)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "circuitChainIsMultiplied",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "circuitChainIsMultiplied(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "circuitChainlink",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "circuitChainlink(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole(bytes32,address)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole(bytes32,address)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "inBase", values?: undefined): string;
  encodeFunctionData(functionFragment: "inBase()", values?: undefined): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(functionFragment: "read()", values?: undefined): string;
  encodeFunctionData(functionFragment: "readAll", values?: undefined): string;
  encodeFunctionData(functionFragment: "readAll()", values?: undefined): string;
  encodeFunctionData(functionFragment: "readLower", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "readLower()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "readQuote",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readQuote(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readQuoteLower",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readQuoteLower(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "readUpper", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "readUpper()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole(bytes32,address)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole(bytes32,address)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stalePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stalePeriod()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "BASE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "BASE()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GUARDIAN_ROLE_CHAINLINK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GUARDIAN_ROLE_CHAINLINK()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chainlinkDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chainlinkDecimals(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeStalePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeStalePeriod(uint32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "circuitChainIsMultiplied",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "circuitChainIsMultiplied(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "circuitChainlink",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "circuitChainlink(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "grantRole(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasRole(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inBase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inBase()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readAll()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readLower", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readLower()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "readQuote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readQuote(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readQuoteLower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readQuoteLower(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "readUpper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readUpper()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeRole(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stalePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stalePeriod()",
    data: BytesLike
  ): Result;

  events: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RoleAdminChanged(bytes32,bytes32,bytes32)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RoleGranted(bytes32,address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RoleRevoked(bytes32,address,address)"
  ): EventFragment;
}

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface OracleChainlinkMulti extends BaseContract {
  contractName: "OracleChainlinkMulti";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleChainlinkMultiInterface;

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
    BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    "BASE()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    GUARDIAN_ROLE_CHAINLINK(overrides?: CallOverrides): Promise<[string]>;

    "GUARDIAN_ROLE_CHAINLINK()"(overrides?: CallOverrides): Promise<[string]>;

    chainlinkDecimals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "chainlinkDecimals(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    changeStalePeriod(
      _stalePeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "changeStalePeriod(uint32)"(
      _stalePeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    circuitChainIsMultiplied(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "circuitChainIsMultiplied(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    circuitChainlink(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "circuitChainlink(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    description(overrides?: CallOverrides): Promise<[string]>;

    "description()"(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getRoleAdmin(bytes32)"(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "grantRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    inBase(overrides?: CallOverrides): Promise<[BigNumber]>;

    "inBase()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    read(overrides?: CallOverrides): Promise<[BigNumber] & { rate: BigNumber }>;

    "read()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    readAll(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    "readAll()"(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    readLower(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    "readLower()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    readQuote(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "readQuote(uint256)"(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    readQuoteLower(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "readQuoteLower(uint256)"(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    readUpper(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    "readUpper()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "revokeRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stalePeriod(overrides?: CallOverrides): Promise<[number]>;

    "stalePeriod()"(overrides?: CallOverrides): Promise<[number]>;
  };

  BASE(overrides?: CallOverrides): Promise<BigNumber>;

  "BASE()"(overrides?: CallOverrides): Promise<BigNumber>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

  GUARDIAN_ROLE_CHAINLINK(overrides?: CallOverrides): Promise<string>;

  "GUARDIAN_ROLE_CHAINLINK()"(overrides?: CallOverrides): Promise<string>;

  chainlinkDecimals(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  "chainlinkDecimals(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  changeStalePeriod(
    _stalePeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "changeStalePeriod(uint32)"(
    _stalePeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  circuitChainIsMultiplied(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  "circuitChainIsMultiplied(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  circuitChainlink(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "circuitChainlink(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  description(overrides?: CallOverrides): Promise<string>;

  "description()"(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRoleAdmin(bytes32)"(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "grantRole(bytes32,address)"(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasRole(bytes32,address)"(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  inBase(overrides?: CallOverrides): Promise<BigNumber>;

  "inBase()"(overrides?: CallOverrides): Promise<BigNumber>;

  read(overrides?: CallOverrides): Promise<BigNumber>;

  "read()"(overrides?: CallOverrides): Promise<BigNumber>;

  readAll(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  "readAll()"(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  readLower(overrides?: CallOverrides): Promise<BigNumber>;

  "readLower()"(overrides?: CallOverrides): Promise<BigNumber>;

  readQuote(
    quoteAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "readQuote(uint256)"(
    quoteAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  readQuoteLower(
    quoteAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "readQuoteLower(uint256)"(
    quoteAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  readUpper(overrides?: CallOverrides): Promise<BigNumber>;

  "readUpper()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceRole(bytes32,address)"(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "revokeRole(bytes32,address)"(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stalePeriod(overrides?: CallOverrides): Promise<number>;

  "stalePeriod()"(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    BASE(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE()"(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

    GUARDIAN_ROLE_CHAINLINK(overrides?: CallOverrides): Promise<string>;

    "GUARDIAN_ROLE_CHAINLINK()"(overrides?: CallOverrides): Promise<string>;

    chainlinkDecimals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    "chainlinkDecimals(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    changeStalePeriod(
      _stalePeriod: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeStalePeriod(uint32)"(
      _stalePeriod: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    circuitChainIsMultiplied(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    "circuitChainIsMultiplied(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    circuitChainlink(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "circuitChainlink(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    description(overrides?: CallOverrides): Promise<string>;

    "description()"(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRoleAdmin(bytes32)"(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "grantRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    inBase(overrides?: CallOverrides): Promise<BigNumber>;

    "inBase()"(overrides?: CallOverrides): Promise<BigNumber>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    "read()"(overrides?: CallOverrides): Promise<BigNumber>;

    readAll(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    "readAll()"(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    readLower(overrides?: CallOverrides): Promise<BigNumber>;

    "readLower()"(overrides?: CallOverrides): Promise<BigNumber>;

    readQuote(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readQuote(uint256)"(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readQuoteLower(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readQuoteLower(uint256)"(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readUpper(overrides?: CallOverrides): Promise<BigNumber>;

    "readUpper()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "revokeRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stalePeriod(overrides?: CallOverrides): Promise<number>;

    "stalePeriod()"(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    BASE(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE()"(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    GUARDIAN_ROLE_CHAINLINK(overrides?: CallOverrides): Promise<BigNumber>;

    "GUARDIAN_ROLE_CHAINLINK()"(overrides?: CallOverrides): Promise<BigNumber>;

    chainlinkDecimals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "chainlinkDecimals(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeStalePeriod(
      _stalePeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "changeStalePeriod(uint32)"(
      _stalePeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    circuitChainIsMultiplied(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "circuitChainIsMultiplied(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    circuitChainlink(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "circuitChainlink(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    "description()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleAdmin(bytes32)"(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "grantRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inBase(overrides?: CallOverrides): Promise<BigNumber>;

    "inBase()"(overrides?: CallOverrides): Promise<BigNumber>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    "read()"(overrides?: CallOverrides): Promise<BigNumber>;

    readAll(overrides?: CallOverrides): Promise<BigNumber>;

    "readAll()"(overrides?: CallOverrides): Promise<BigNumber>;

    readLower(overrides?: CallOverrides): Promise<BigNumber>;

    "readLower()"(overrides?: CallOverrides): Promise<BigNumber>;

    readQuote(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readQuote(uint256)"(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readQuoteLower(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readQuoteLower(uint256)"(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readUpper(overrides?: CallOverrides): Promise<BigNumber>;

    "readUpper()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "revokeRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "stalePeriod()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BASE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DEFAULT_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GUARDIAN_ROLE_CHAINLINK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "GUARDIAN_ROLE_CHAINLINK()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainlinkDecimals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "chainlinkDecimals(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeStalePeriod(
      _stalePeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "changeStalePeriod(uint32)"(
      _stalePeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    circuitChainIsMultiplied(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "circuitChainIsMultiplied(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    circuitChainlink(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "circuitChainlink(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "description()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleAdmin(bytes32)"(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "grantRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    inBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "inBase()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    read(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "read()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "readAll()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readLower(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "readLower()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readQuote(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readQuote(uint256)"(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readQuoteLower(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readQuoteLower(uint256)"(
      quoteAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readUpper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "readUpper()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "revokeRole(bytes32,address)"(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stalePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stalePeriod()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
