/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TapiocaDeployer,
  TapiocaDeployerInterface,
} from "../TapiocaDeployer";

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
  "0x60808060405234610016576102c5908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b6000803560e01c8063481286e61461023a57806366cfa057146100925763780653061461004157600080fd5b3461008f57606036600319011261008f576044359273ffffffffffffffffffffffffffffffffffffffff91828516850361008f575060209361008791602435903561026f565b915191168152f35b80fd5b509190606036600319011261020c576044359167ffffffffffffffff81358185116102365736602386011215610236578483013582811161022357845192601f8201601f19908116603f0116840190811184821017610210578552808352602096878401916024973689838301011161020c579080898b93018537850101528147106101cb5782511561018b57915173ffffffffffffffffffffffffffffffffffffffff92863592f51692831561014b57505051908152f35b60199085606494519362461bcd60e51b85528401528201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152fd5b60648488888189519362461bcd60e51b85528401528201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152fd5b606484601d888a89519362461bcd60e51b85528401528201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152fd5b8280fd5b602488604187634e487b7160e01b835252fd5b602487604186634e487b7160e01b835252fd5b8580fd5b503461008f578160031936011261008f575073ffffffffffffffffffffffffffffffffffffffff610087602093309060243590355b90605592600b92604051926040840152602083015281520160ff8153209056fea2646970667358221220e572b076f80ff5300c9f5b9882b8fe9429dcda2ce27dca210e311811a5d23c8a64736f6c63430008120033";

type TapiocaDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaDeployer__factory extends ContractFactory {
  constructor(...args: TapiocaDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaDeployer";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaDeployer> {
    return super.deploy(overrides || {}) as Promise<TapiocaDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaDeployer {
    return super.attach(address) as TapiocaDeployer;
  }
  override connect(signer: Signer): TapiocaDeployer__factory {
    return super.connect(signer) as TapiocaDeployer__factory;
  }
  static readonly contractName: "TapiocaDeployer";

  public readonly contractName: "TapiocaDeployer";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaDeployerInterface {
    return new utils.Interface(_abi) as TapiocaDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaDeployer {
    return new Contract(address, _abi, signerOrProvider) as TapiocaDeployer;
  }
}