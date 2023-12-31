/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Multicall3,
  Multicall3Interface,
} from "../../../contracts/Multicall/Multicall3";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.CallValue[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicallValue",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461005b5760008054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a361091590816100618239f35b600080fdfe604060808152600436101561001357600080fd5b600090813560e01c9182636e5a9cbb1461006d5750508063715018a6146100685780638da5cb5b14610063578063e8bbf5d71461005e5763f2fde38b1461005957600080fd5b6103a0565b6102da565b6102b3565b610248565b61007636610137565b829161008182610571565b9361008a61070f565b50805b8381106100b2576100ae86886100a48834146107b6565b51918291826101d1565b0390f35b6100bc81876105f0565b516101246101206100d66100d1858989610732565b610754565b9261011a86808d870151809c019b60606100f789516001600160a01b031690565b980151978851916020809a01915af161010e6106e9565b95830195865215158252565b51151590565b1590565b610131575060010161008d565b51610816565b9060206003198301126101845760043567ffffffffffffffff9283821161018457806023830112156101845781600401359384116101845760248460051b83010111610184576024019190565b600080fd5b60005b83811061019c5750506000910152565b818101518382015260200161018c565b906020916101c581518092818552858086019101610189565b601f01601f1916010190565b602080820190808352835180925260409283810182858560051b8401019601946000925b858410610206575050505050505090565b909192939495968580610237600193603f1986820301885286838d51805115158452015191818582015201906101ac565b9901940194019295949391906101f5565b34610184576000806003193601126102b057610262610431565b805473ffffffffffffffffffffffffffffffffffffffff198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b346101845760003660031901126101845760206001600160a01b0360005416604051908152f35b6102e336610137565b6102ec81610571565b906102f56104ee565b9060009384835260209480868501526060604080950152805b838110610322578451806100ae88826101d1565b61032c81876105f0565b5161037f61012084808b610349610344888c8c610609565b610691565b828c61035c83516001600160a01b031690565b92015180519301915af19261011a6103726106e9565b828d019081529415158252565b610131575060010161030e565b35906001600160a01b038216820361018457565b34610184576020366003190112610184576004356001600160a01b038116808203610184576103cd610431565b156103dd576103db90610489565b005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6001600160a01b0360005416330361044557565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b600054906001600160a01b0380911691826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b634e487b7160e01b600052604160045260246000fd5b604051906060820182811067ffffffffffffffff82111761050e57604052565b6104d8565b604051906080820182811067ffffffffffffffff82111761050e57604052565b6040519190601f01601f1916820167ffffffffffffffff81118382101761050e57604052565b67ffffffffffffffff811161050e5760051b60200190565b9061058361057e83610559565b610533565b8281528092610594601f1991610559565b016000805b8281106105a65750505050565b604090815182810181811067ffffffffffffffff82111761050e576020935283815282606081830152828701015201610599565b634e487b7160e01b600052603260045260246000fd5b80518210156106045760209160051b010190565b6105da565b91908110156106045760051b81013590605e1981360301821215610184570190565b3590811515820361018457565b67ffffffffffffffff811161050e57601f01601f191660200190565b81601f820112156101845780359061066e61057e83610638565b928284526020838301011161018457816000926020809301838601378301015290565b606081360312610184576106a36104ee565b906106ad8161038c565b82526106bb6020820161062b565b602083015260408101359067ffffffffffffffff8211610184576106e191369101610654565b604082015290565b3d1561070a573d906106fd61057e83610638565b9182523d6000602084013e565b606090565b610717610513565b90600082526000602083015260006040830152606080830152565b91908110156106045760051b81013590607e1981360301821215610184570190565b60808136031261018457610766610513565b906107708161038c565b825261077e6020820161062b565b60208301526040810135604083015260608101359067ffffffffffffffff8211610184576107ae91369101610654565b606082015290565b156107bd57565b60405162461bcd60e51b815260206004820152601a60248201527f4d756c746963616c6c333a2076616c7565206d69736d617463680000000000006044820152606490fd5b9060206108139281815201906101ac565b90565b60448151106108a9576004810151810190602081602484019303126101845760248101519067ffffffffffffffff8211610184570190806043830112156101845760248201519161086961057e84610638565b9183835260448483010111610184576108a59261088d916044602085019101610189565b60405162461bcd60e51b815291829160048301610802565b0390fd5b60405162461bcd60e51b815260206004820152600e60248201526d2932b0b9b7b7103ab735b737bbb760911b6044820152606490fdfea2646970667358221220c5066dae96cc55fe3ae3cebc8cacff5885a96fb6bf8fbe3effd8066d28c5137564736f6c63430008120033";

type Multicall3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Multicall3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall3__factory extends ContractFactory {
  constructor(...args: Multicall3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Multicall3";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multicall3> {
    return super.deploy(overrides || {}) as Promise<Multicall3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Multicall3 {
    return super.attach(address) as Multicall3;
  }
  override connect(signer: Signer): Multicall3__factory {
    return super.connect(signer) as Multicall3__factory;
  }
  static readonly contractName: "Multicall3";

  public readonly contractName: "Multicall3";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Multicall3Interface {
    return new utils.Interface(_abi) as Multicall3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall3 {
    return new Contract(address, _abi, signerOrProvider) as Multicall3;
  }
}
