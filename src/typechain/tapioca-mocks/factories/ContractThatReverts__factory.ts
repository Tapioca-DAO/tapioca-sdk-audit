/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ContractThatReverts,
  ContractThatRevertsInterface,
} from "../ContractThatReverts";

const _abi = [
  {
    inputs: [],
    name: "count",
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
    inputs: [],
    name: "revertStr",
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
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "shouldNotRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "shouldRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100c157600180548181811c911680156100b7575b60208210146100a157601f8111610072575b50806043602160f81b92558060005260206000207f54686973206d6574686f642072657665727465642e20536f20617765736f6d658155015561026f90816100c78239f35b816000526002601f6020600020920160051c820191015b818110610096575061002d565b600081558201610089565b634e487b7160e01b600052602260045260246000fd5b90607f169061001b565b600080fdfe6080604090808252600436101561001557600080fd5b600091823560e01c91826306661abd146101495750816316b2da8214610110578163d58f64341461006c575063fa2880ca1461005057600080fd5b3461006957602036600319011261006957600435815580f35b80fd5b90503461010c578160031936011261010c578051601f199081601f8261009181610163565b03011681019381851067ffffffffffffffff8611176100f85791849192828552602090818452845191828186015281955b8387106100e05750508394508582601f949501015201168101030190f35b868101820151898801890152958101958895506100c2565b634e487b7160e01b81526041600452602490fd5b5080fd5b82346100695760203660031901126100695760043590555162461bcd60e51b8152602060048201528061014560248201610163565b0390fd5b83903461010c578160031936011261010c57602091548152f35b60018054600093928183169282811c92841561022f575b6020948585108114610219578484529081156101fc575060011461019f575b50505050565b80939495506000929192527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf692846000945b8386106101e8575050505001019038808080610199565b8054858701830152940193859082016101d1565b60ff191685840152505090151560051b0101915038808080610199565b634e487b7160e01b600052602260045260246000fd5b92607f169261017a56fea2646970667358221220e35c140bbbd34c7d77b95b4b5ede84eccf16ddde224a8c895ff23a5205a85b2664736f6c63430008120033";

type ContractThatRevertsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractThatRevertsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractThatReverts__factory extends ContractFactory {
  constructor(...args: ContractThatRevertsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ContractThatReverts";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractThatReverts> {
    return super.deploy(overrides || {}) as Promise<ContractThatReverts>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ContractThatReverts {
    return super.attach(address) as ContractThatReverts;
  }
  override connect(signer: Signer): ContractThatReverts__factory {
    return super.connect(signer) as ContractThatReverts__factory;
  }
  static readonly contractName: "ContractThatReverts";

  public readonly contractName: "ContractThatReverts";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractThatRevertsInterface {
    return new utils.Interface(_abi) as ContractThatRevertsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractThatReverts {
    return new Contract(address, _abi, signerOrProvider) as ContractThatReverts;
  }
}
