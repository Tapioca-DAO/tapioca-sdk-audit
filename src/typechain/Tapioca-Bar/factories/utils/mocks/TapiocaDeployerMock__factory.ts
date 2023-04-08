/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TapiocaDeployerMock,
  TapiocaDeployerMockInterface,
} from "../../../utils/mocks/TapiocaDeployerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
    ],
    name: "computeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "computeAddress",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "contractName",
        type: "string",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610373908161001c8239f35b600080fdfe60406080815260048036101561001457600080fd5b600091823560e01c8063481286e614610249578063780653061461020657638f3b65931461004157600080fd5b60803660031901126102025760443591803567ffffffffffffffff8085116101fe57366023860112156101fe576100826024953690878187013591016102ae565b956064359182116101fb57366023830112156101fb57506100ab903690868186013591016102ae565b908047106101b95785511561017757856001600160a01b03916020975190888835930190f51693835161012e604382898101957f437265617465323a204661696c6564206465706c6f79696e6720636f6e747261875262031ba160ed1b8983015261011e815180928d86860191016102fa565b8101036023810184520182610276565b851561013e575050505051908152f35b604495506101699293945196879562461bcd60e51b87528601525192838092860152858501906102fa565b601f01601f19168101030190fd5b835162461bcd60e51b81526020818501819052818701527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606490fd5b835162461bcd60e51b8152602081850152601d818701527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606490fd5b80fd5b8580fd5b8280fd5b5082346101fb5760603660031901126101fb57604435926001600160a01b039182851685036101fb575060209361024191602435903561031d565b915191168152f35b5082346101fb57816003193601126101fb57506001600160a01b036102416020933090602435903561031d565b90601f8019910116810190811067ffffffffffffffff82111761029857604052565b634e487b7160e01b600052604160045260246000fd5b92919267ffffffffffffffff821161029857604051916102d8601f8201601f191660200184610276565b8294818452818301116102f5578281602093846000960137010152565b600080fd5b60005b83811061030d5750506000910152565b81810151838201526020016102fd565b90605592600b92604051926040840152602083015281520160ff8153209056fea264697066735822122067f30811fb4a33e3143aa24d71905233026e8225f3a1416ac0a219842df8267a64736f6c63430008120033";

type TapiocaDeployerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaDeployerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaDeployerMock__factory extends ContractFactory {
  constructor(...args: TapiocaDeployerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaDeployerMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaDeployerMock> {
    return super.deploy(overrides || {}) as Promise<TapiocaDeployerMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaDeployerMock {
    return super.attach(address) as TapiocaDeployerMock;
  }
  override connect(signer: Signer): TapiocaDeployerMock__factory {
    return super.connect(signer) as TapiocaDeployerMock__factory;
  }
  static readonly contractName: "TapiocaDeployerMock";

  public readonly contractName: "TapiocaDeployerMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaDeployerMockInterface {
    return new utils.Interface(_abi) as TapiocaDeployerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaDeployerMock {
    return new Contract(address, _abi, signerOrProvider) as TapiocaDeployerMock;
  }
}