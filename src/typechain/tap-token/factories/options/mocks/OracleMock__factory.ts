/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OracleMock,
  OracleMockInterface,
} from "../../../options/mocks/OracleMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "__name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mockValue",
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peekSpot",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
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
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052346101ec576105a380380380610019816101f1565b92833981019060209081818403126101ec5780516001600160401b03918282116101ec570191601f908482850112156101ec5783518381116101c257601f1994610068828501871684016101f1565b968288528383830101116101ec57829060005b8381106101d85750506000918701015284519283116101c25760019384548581811c911680156101b8575b838210146101a25783811161015c575b50819284116001146100fd5750508192936000926100f2575b5050600019600383901b1c191690821b1790555b60405161038c90816102178239f35b0151905038806100cf565b6000858152828120918516969193925b8782106101455750508385961061012c575b505050811b0190556100e3565b015160001960f88460031b161c1916905538808061011f565b80878596829496860151815501950193019061010d565b85600052826000208480870160051c820192858810610199575b0160051c019086905b82811061018d5750506100b6565b6000815501869061017f565b92508192610176565b634e487b7160e01b600052602260045260246000fd5b90607f16906100a6565b634e487b7160e01b600052604160045260246000fd5b81810183015189820184015284920161007b565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176101c25760405256fe60806040818152600436101561001457600080fd5b600090813560e01c92836327fd7ef61461017c5750826334fcf4371461015f578263c699c4d6146100e7578263d28d8852146100cb578263d39bbef0146100b0578263d568866c146100815750508063d6d7d5251461007c5763eeb8a8d31461007c57600080fd5b610333565b346100ac576100a89061009336610196565b505061009d61022e565b9051918291826101e5565b0390f35b5080fd5b346100ac576020916100c136610196565b5050549051908152f35b346100ac57816003193601126100ac576100a89061009d61022e565b346100ac576100f536610196565b505080519080820182811067ffffffffffffffff82111761014b576100a893508152600482527f4f52434d00000000000000000000000000000000000000000000000000000000602083015251918291826101e5565b602484634e487b7160e01b81526041600452fd5b503461017957602036600319011261017957600435815580f35b80fd5b9050346100ac57816003193601126100ac57602091548152f35b9060206003198301126101e05760043567ffffffffffffffff928382116101e057806023830112156101e05781600401359384116101e057602484830101116101e0576024019190565b600080fd5b6020808252825181830181905290939260005b82811061021a57505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016101f8565b604051906000600180549081811c90808316928315610329575b6020938484108114610315578388529081156102f957506001146102a4575b505050829003601f01601f1916820167ffffffffffffffff81118382101761028e57604052565b634e487b7160e01b600052604160045260246000fd5b6000818152929350837fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8385106102e55750505050830101388080610267565b8054888601830152930192849082016102cf565b60ff1916878501525050151560051b8401019050388080610267565b602486634e487b7160e01b81526022600452fd5b91607f1691610248565b346101e05761034136610196565b50506040600054815190600182526020820152f3fea2646970667358221220c3ee62489e7c60606c3072a59de75e7ae551f2e6936ab7b211bd77f0dbda90b064736f6c63430008120033";

type OracleMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleMock__factory extends ContractFactory {
  constructor(...args: OracleMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OracleMock";
  }

  override deploy(
    __name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleMock> {
    return super.deploy(__name, overrides || {}) as Promise<OracleMock>;
  }
  override getDeployTransaction(
    __name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(__name, overrides || {});
  }
  override attach(address: string): OracleMock {
    return super.attach(address) as OracleMock;
  }
  override connect(signer: Signer): OracleMock__factory {
    return super.connect(signer) as OracleMock__factory;
  }
  static readonly contractName: "OracleMock";

  public readonly contractName: "OracleMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleMockInterface {
    return new utils.Interface(_abi) as OracleMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleMock {
    return new Contract(address, _abi, signerOrProvider) as OracleMock;
  }
}
