/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TOFTStrategyMock,
  TOFTStrategyMockInterface,
} from "../TOFTStrategyMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
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
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
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
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    name: "pendingOwner",
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
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
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
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultAmount",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c03461010e57601f610e5c38819003918201601f19168301916001600160401b038311848410176101135780849260609460405283398101031261010e578051906001600160a01b0390818316830361010e5761006b604061006460208401610129565b9201610129565b9260805260a05260018060a01b03199033826000541617600055604051923360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3600160025516906003541617600355610d1e908161013e823960805181818161019b015281816103b30152610521015260a0518181816101480152818161021c0152818161042901528181610673015281816107620152610bfc0152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361010e5756fe6040608081526004908136101561001557600080fd5b600091823560e01c90816306fdde0314610967578163078dfbe71461085157816317d70f7c1461083657816320f07d931461081857816322a58c5d146106e757816330fa738c146106cb57816348dcb0511461064e5781634e71e0c81461059157816350188301146103665781637284e4161461058c5781638da5cb5b14610566578163afa91cc614610501578163ce845d1d14610366578163db2e21bc146103d7578163de40657714610393578163e30c39781461036b578163e3575f0514610366578163f3fef3a31461016c57508063f6b4dfb4146101295763f7c618c1146100ff57600080fd5b346101255781600319360112610125576020906001600160a01b03600354169051908152f35b5080fd5b5034610125578160031936011261012557602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b839150346101255782600319360112610125576101876109ff565b60248035916001600160a01b03906101c2827f0000000000000000000000000000000000000000000000000000000000000000163314610c48565b6101ca610c94565b836101d3610be1565b1061032457865182602082019263a9059cbb60e01b84521684820152846044820152604481526080810181811067ffffffffffffffff82111761031057885251869283929083907f0000000000000000000000000000000000000000000000000000000000000000165af1610246610b2b565b816102d4575b50156102925783945082549182811160001461026f57505050555b600160025580f35b82039350908311610281575055610267565b634e487b7160e01b84526011825283fd5b82601c606492602088519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b80518015925082156102e9575b50508661024c565b819250906020918101031261030c5760200151801515810361030c5786806102e1565b8480fd5b84604188634e487b7160e01b600052526000fd5b865162461bcd60e51b81526020818701526010818501527f616d6f756e74206e6f742076616c6964000000000000000000000000000000006044820152606490fd5b610a99565b5050346101255781600319360112610125576020906001600160a01b03600154169051908152f35b505034610125578160031936011261012557602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b919050346104fd57826003193601126104fd576001600160a01b0392610401848254163314610abc565b81516020810181811067ffffffffffffffff8211176104e857835281905261045560ff61044f7f00000000000000000000000000000000000000000000000000000000000000008716610b5b565b16610b07565b938460011b946001600160ff1b038116036104d55760035416803b15610125578180916024855180948193637c928fe960e01b83528a8a8401525af180156104cb576104b4575b50506104ab6020938354610bd4565b80925551908152f35b6104be8291610a15565b6104c8578061049c565b80fd5b83513d84823e3d90fd5b634e487b7160e01b825260118452602482fd5b604185634e487b7160e01b6000525260246000fd5b8280fd5b839034610125576020366003190112610125576105486001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163314610c48565b610550610c94565b61055c81358254610bd4565b9055600160025580f35b5050346101255781600319360112610125576001600160a01b0360209254169051908152f35b610967565b919050346104fd57826003193601126104fd57600154906001600160a01b03928383169182330361060b5750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a373ffffffffffffffffffffffffffffffffffffffff199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b8284346104c857806003193601126104c8575061069860ff61044f6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610b5b565b906001600160ff1b03821682036106b65760209250519060011b8152f35b601183634e487b7160e01b6000525260246000fd5b5050346101255781600319360112610125576020905160018152f35b919050346104fd5760203660031901126104fd5782823567ffffffffffffffff81116101255736602382011215610125578084013561072581610a7d565b61073185519182610a5b565b81815236602483850101116108145781602460209401848301370101526001600160a01b039061078760ff61044f847f000000000000000000000000000000000000000000000000000000000000000016610b5b565b918260011b926001600160ff1b038116036108015790849160035416803b156104fd5782906024835180958193637c928fe960e01b8352888a8401525af19081156107f857506107e3575b506107de908254610bd4565b905580f35b926107f16107de9294610a15565b92906107d2565b513d86823e3d90fd5b634e487b7160e01b855260118452602485fd5b8380fd5b9050346104fd57826003193601126104fd5760209250549051908152f35b50503461012557816003193601126101255751908152602090f35b919050346104fd5760603660031901126104fd5761086d6109ff565b9160243591821515830361030c57604435928315158403610963576001600160a01b039485916108a1838954163314610abc565b15610949571692831590811591610941575b50156108fe5750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03198092161782556001541660015580f35b906020606492519162461bcd60e51b8352820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152fd5b9050386108b3565b9350505050166001600160a01b0319600154161760015580f35b8580fd5b346109fa5760003660031901126109fa57604080519061098682610a3f565b6010825260207f544f465453747261746567794d6f636b00000000000000000000000000000000818401528151928184928352815191828285015260005b8381106109e4575050600083830185015250601f01601f19168101030190f35b81810183015187820187015286945082016109c4565b600080fd5b600435906001600160a01b03821682036109fa57565b67ffffffffffffffff8111610a2957604052565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff821117610a2957604052565b90601f8019910116810190811067ffffffffffffffff821117610a2957604052565b67ffffffffffffffff8111610a2957601f01601f191660200190565b346109fa5760003660031901126109fa576020610ab4610be1565b604051908152f35b15610ac357565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b604d8111610b1557600a0a90565b634e487b7160e01b600052601160045260246000fd5b3d15610b56573d90610b3c82610a7d565b91610b4a6040519384610a5b565b82523d6000602084013e565b606090565b6001600160a01b03604051602081019263313ce56760e01b845260048252610b8282610a3f565b600093849384935192165afa610b96610b2b565b9080610bc9575b15610bc25760208180518101031261012557602001519060ff821682036104c8575090565b5050601290565b506020815114610b9d565b91908201809211610b1557565b6004548015610c4257610c2160ff61044f6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610b5b565b906001600160ff1b0382168203610b1557610c3f9160011b90610bd4565b90565b50600090565b15610c4f57565b60405162461bcd60e51b815260206004820152600c60248201527f4e6f74205969656c64426f7800000000000000000000000000000000000000006044820152606490fd5b6002805414610ca35760028055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fdfea2646970667358221220dd83bee125d61ee6ce9baf1bcbff8e1841ddd58804411362b21513145c4ee01864736f6c63430008120033";

type TOFTStrategyMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TOFTStrategyMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TOFTStrategyMock__factory extends ContractFactory {
  constructor(...args: TOFTStrategyMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TOFTStrategyMock";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _toft: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TOFTStrategyMock> {
    return super.deploy(
      _yieldBox,
      _toft,
      _rewardToken,
      overrides || {}
    ) as Promise<TOFTStrategyMock>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _toft: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _toft,
      _rewardToken,
      overrides || {}
    );
  }
  override attach(address: string): TOFTStrategyMock {
    return super.attach(address) as TOFTStrategyMock;
  }
  override connect(signer: Signer): TOFTStrategyMock__factory {
    return super.connect(signer) as TOFTStrategyMock__factory;
  }
  static readonly contractName: "TOFTStrategyMock";

  public readonly contractName: "TOFTStrategyMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TOFTStrategyMockInterface {
    return new utils.Interface(_abi) as TOFTStrategyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TOFTStrategyMock {
    return new Contract(address, _abi, signerOrProvider) as TOFTStrategyMock;
  }
}
