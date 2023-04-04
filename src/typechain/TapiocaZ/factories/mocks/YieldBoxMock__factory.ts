/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  YieldBoxMock,
  YieldBoxMockInterface,
} from "../../mocks/YieldBoxMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "addAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "assets",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "depositAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576103f7908161001c8239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90816327e235e3146102fa5750806351c8c3f1146102b25780638d2e63b8146101b05780639a9af97a1461008d5763cf35bdd01461005a57600080fd5b3461008957602036600319011261008957816020936001600160a01b0392358152600185522054169051908152f35b8280fd5b508290346101ac5761009e3661032f565b5093928592919552602094600186526001600160a01b039186836064818b8820541693878c5195869485936323b872dd60e01b8552168b8401523060248401528b60448401525af19081156101a2578491610175575b5015610132571681528084528481209081549284840180941161011f57505055825191818352820152f35b634e487b7160e01b825260119052602490fd5b865162461bcd60e51b8152808501879052600f60248201527f6661696c6564207472616e7366657200000000000000000000000000000000006044820152606490fd5b6101959150873d891161019b575b61018d8183610371565b8101906103a9565b886100f4565b503d610183565b88513d86823e3d90fd5b5080fd5b508290346101ac576101c13661032f565b5093929491906001600160a01b038092169182845260209684885286898620541061026f5784526001875287842054885163a9059cbb60e01b815292821686840152602483018790528791839160449183918891165af1801561026557610248575b5081528084528481209081549284840393841161011f57505055825191818352820152f35b61025e90863d881161019b5761018d8183610371565b5086610223565b87513d85823e3d90fd5b885162461bcd60e51b8152808701899052600a60248201527f6e6f7420656e6f756768000000000000000000000000000000000000000000006044820152606490fd5b509034610089578060031936011261008957602435916001600160a01b0383168093036102f65735835260016020528220906001600160a01b031982541617905580f35b8380fd5b92919050346102f65760203660031901126102f657356001600160a01b0381168091036102f657835260208381529220548152f35b60a090600319011261036c57600435906001600160a01b0390602435828116810361036c5791604435908116810361036c57906064359060843590565b600080fd5b90601f8019910116810190811067ffffffffffffffff82111761039357604052565b634e487b7160e01b600052604160045260246000fd5b9081602091031261036c5751801515810361036c579056fea264697066735822122096471e7e55d6ec4d5b5fa14af708c60864bdea6145158a864aad053e4f48a45b64736f6c63430008120033";

type YieldBoxMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldBoxMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldBoxMock__factory extends ContractFactory {
  constructor(...args: YieldBoxMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YieldBoxMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YieldBoxMock> {
    return super.deploy(overrides || {}) as Promise<YieldBoxMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): YieldBoxMock {
    return super.attach(address) as YieldBoxMock;
  }
  override connect(signer: Signer): YieldBoxMock__factory {
    return super.connect(signer) as YieldBoxMock__factory;
  }
  static readonly contractName: "YieldBoxMock";

  public readonly contractName: "YieldBoxMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldBoxMockInterface {
    return new utils.Interface(_abi) as YieldBoxMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldBoxMock {
    return new Contract(address, _abi, signerOrProvider) as YieldBoxMock;
  }
}
