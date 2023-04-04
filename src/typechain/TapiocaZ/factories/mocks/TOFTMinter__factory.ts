/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TOFTMinter, TOFTMinterInterface } from "../../mocks/TOFTMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILegacyOFT",
        name: "_oft",
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
    name: "OFT",
    outputs: [
      {
        internalType: "contract ILegacyOFT",
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
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintLimit",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintWindow",
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
        name: "",
        type: "address",
      },
    ],
    name: "mintedAt",
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
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20WithDecimal",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newVal",
        type: "uint256",
      },
    ],
    name: "updateMintLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newVal",
        type: "uint256",
      },
    ],
    name: "updateMintWindow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604090808252346101cf57806108df803803809161001f82856101d4565b83396020928391810103126101cf57516001600160a01b039190828116908190036101cf576000928354918360018060a01b031993338582161787556004885180948193873391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08c80a362015180835560018054891682179055633c2f4f4360e11b82525afa9081156101c557859161018a575b509183929160049492168091600254161760025585519384809263313ce56760e01b82525afa908115610180578391610143575b5060ff915016604d811161012f57600a0a906103e8918083029283040361011b5750600555516106d1908161020e8239f35b634e487b7160e01b81526011600452602490fd5b634e487b7160e01b82526011600452602482fd5b905081813d8311610179575b61015981836101d4565b81010312610175575160ff811681036101755760ff90386100e9565b5080fd5b503d61014f565b84513d85823e3d90fd5b90508381813d83116101be575b6101a181836101d4565b810103126101ba575181811681036101ba5760046100b5565b8480fd5b503d610197565b86513d87823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176101f757604052565b634e487b7160e01b600052604160045260246000fdfe6040608081526004908136101561001557600080fd5b600091823560e01c9081631072cbea1461042a5781631ed0993d1461040257816321442ec9146103cb578163449a52f81461039e5781636404f0351461037c578163715018a6146103275781637c928fe9146102355781638da5cb5b1461020f578163996517cf146101f05781639ce93edf146101d2578163e01d55c5146101b0578163f2fde38b146100dc575063fc0c546a146100b257600080fd5b346100d857816003193601126100d8576020906001600160a01b03600254169051908152f35b5080fd5b9050346101ac5760203660031901126101ac576100f76104dc565b906101006104f7565b6001600160a01b0380921692831561015a575050825473ffffffffffffffffffffffffffffffffffffffff19811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b8390346100d85760203660031901126100d8576101cb6104f7565b8035905580f35b9050346101ac57826003193601126101ac5760209250549051908152f35b5050346100d857816003193601126100d8576020906005549051908152f35b5050346100d857816003193601126100d8576001600160a01b0360209254169051908152f35b839150346100d85760203660031901126100d85780359060055482116102e457338352600360205283832054815481018091116102d157421061028e575061028b9192338452600360205242908420553361059f565b80f35b606490602085519162461bcd60e51b8352820152601560248201527f544f46544d696e7465723a20746f6f206561726c7900000000000000000000006044820152fd5b634e487b7160e01b845260118252602484fd5b606490602085519162461bcd60e51b8352820152601a60248201527f544f46544d696e7465723a20616d6f756e7420746f6f206269670000000000006044820152fd5b83346103795780600319360112610379576103406104f7565b806001600160a01b038154811981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b8390346100d85760203660031901126100d8576103976104f7565b3560055580f35b5050346100d8573660031901126103795761028b6103ba6104dc565b6103c26104f7565b6024359061059f565b5050346100d85760203660031901126100d857806020926001600160a01b036103f26104dc565b1681526003845220549051908152f35b5050346100d857816003193601126100d8576020906001600160a01b03600154169051908152f35b919050346101ac57806003193601126101ac5760206104949261044b6104dc565b6104536104f7565b6001600160a01b03600254169086855180978195829463a9059cbb60e01b8452602435918401602090939291936001600160a01b0360408201951681520152565b03925af19081156104d357506104a8575080f35b6104c89060203d81116104cc575b6104c0818361054f565b810190610587565b5080f35b503d6104b6565b513d84823e3d90fd5b600435906001600160a01b03821682036104f257565b600080fd5b6001600160a01b0360005416330361050b57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff82111761057157604052565b634e487b7160e01b600052604160045260246000fd5b908160209103126104f2575180151581036104f25790565b60025460015460405163095ea7b360e01b81526001600160a01b039182166004820152602481018590529394936000939260209082906044908290889087165af1801561069057610672575b506001541690813b156101ac57604051635f9bb63d60e11b81526001600160a01b03919091166004820152602481019490945291929181908390604490829084905af180156106655761063c575050565b67ffffffffffffffff82116106515750604052565b634e487b7160e01b81526041600452602490fd5b50604051903d90823e3d90fd5b6106899060203d81116104cc576104c0818361054f565b50386105eb565b6040513d86823e3d90fdfea2646970667358221220bb6f1360d5934ba8bd63cbf23ccaa193797792993b6fa20824b6be2e376d8aad64736f6c63430008120033";

type TOFTMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TOFTMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TOFTMinter__factory extends ContractFactory {
  constructor(...args: TOFTMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TOFTMinter";
  }

  override deploy(
    _oft: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TOFTMinter> {
    return super.deploy(_oft, overrides || {}) as Promise<TOFTMinter>;
  }
  override getDeployTransaction(
    _oft: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_oft, overrides || {});
  }
  override attach(address: string): TOFTMinter {
    return super.attach(address) as TOFTMinter;
  }
  override connect(signer: Signer): TOFTMinter__factory {
    return super.connect(signer) as TOFTMinter__factory;
  }
  static readonly contractName: "TOFTMinter";

  public readonly contractName: "TOFTMinter";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TOFTMinterInterface {
    return new utils.Interface(_abi) as TOFTMinterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TOFTMinter {
    return new Contract(address, _abi, signerOrProvider) as TOFTMinter;
  }
}
