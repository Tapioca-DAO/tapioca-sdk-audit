/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MultisigMock,
  MultisigMockInterface,
} from "../../mocks/MultisigMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numConfirmationsRequired",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "addOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "confirmTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_txIndex",
        type: "uint256",
      },
    ],
    name: "getTransaction",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "numConfirmations",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionCount",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isConfirmed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numConfirmationsRequired",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "owners",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "submitTransaction",
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
    name: "transactions",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "numConfirmations",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346100cc57601f610ec338819003918201601f19168301916001600160401b038311848410176100d1578084926020946040528339810103126100cc57516000338152600160205260408120600160ff19825416179055805490680100000000000000008210156100b857600182018082558210156100a457808052602090200180546001600160a01b03191633179055600255604051610ddb90816100e88239f35b634e487b7160e01b81526032600452602490fd5b634e487b7160e01b81526041600452602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b60003560e01c8063025e7c27146100d75780632e7700f0146100d25780632f54bf6e146100cd57806333ea3dc8146100c85780637065cb48146100c357806380f59a65146100be5780639ace38c2146100b9578063a0e67e2b146100b4578063c01a8c84146100af578063c6427474146100aa578063d0549b85146100a55763ee22610b146100a057600080fd5b610821565b610803565b610780565b610634565b61056c565b610509565b61033b565b61029f565b610245565b610184565b610150565b6100f2565b634e487b7160e01b600052603260045260246000fd5b3461014b57602036600319011261014b5760043560005481101561014b576001600160a01b03602091600080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563015416604051908152f35b600080fd5b3461014b57600036600319011261014b576020600454604051908152f35b600435906001600160a01b038216820361014b57565b3461014b57602036600319011261014b576001600160a01b036101a561016e565b166000526001602052602060ff604060002054166040519015158152f35b60005b8381106101d65750506000910152565b81810151838201526020016101c6565b906020916101ff815180928185528580860191016101c3565b601f01601f1916010190565b91926080936001600160a01b036102399398979698168452602084015260a0604084015260a08301906101e6565b94151560608201520152565b3461014b57602036600319011261014b5761026160043561039a565b506001600160a01b0381541661029b60018301549260ff60038201541661028f600260048401549301610463565b6040519586958661020b565b0390f35b3461014b57602036600319011261014b576001600160a01b036102c061016e565b16600090808252600160205260408220600160ff198254161790558154680100000000000000008110156103365760018101808455811015610331577f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301906001600160a01b031982541617905580f35b6100dc565b61040f565b3461014b57604036600319011261014b576024356001600160a01b038116810361014b5760ff61038e602092600435600052600384526040600020906001600160a01b0316600052602052604060002090565b54166040519015158152f35b600454811015610331576005906004600052027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0190600090565b90600182811c92168015610405575b60208310146103ef57565b634e487b7160e01b600052602260045260246000fd5b91607f16916103e4565b634e487b7160e01b600052604160045260246000fd5b60a0810190811067ffffffffffffffff82111761033657604052565b90601f8019910116810190811067ffffffffffffffff82111761033657604052565b9060405191826000825492610477846103d5565b9081845260019485811690816000146104e657506001146104a3575b50506104a192500383610441565b565b9093915060005260209081600020936000915b8183106104ce5750506104a193508201013880610493565b855488840185015294850194879450918301916104b6565b9150506104a194506020925060ff191682840152151560051b8201013880610493565b3461014b57602036600319011261014b5760043560045481101561014b576105309061039a565b506001600160a01b0381541661029b60018301549261055160028201610463565b90600460ff600383015416910154916040519586958661020b565b3461014b57600080600319360112610631576040518091805490818352602080930180928280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390835b81811061061457505050846105cd910385610441565b60405193838594850191818652518092526040850193925b8281106105f457505050500390f35b83516001600160a01b0316855286955093810193928101926001016105e5565b82546001600160a01b0316845292860192600192830192016105b7565b80fd5b3461014b57602036600319011261014b57600435600090338252600160205261066360ff604084205416610924565b6106706004548210610b64565b61068a60ff60036106808461039a565b5001541615610bb0565b808252600360205260ff6106b43360408520906001600160a01b0316600052602052604060002090565b541661071f5760046106c58261039a565b50018054906001820180921161070b5755815260036020526106fd3360408320906001600160a01b0316600052602052604060002090565b805460ff1916600117905580f35b634e487b7160e01b84526011600452602484fd5b60405162461bcd60e51b815260206004820152601460248201527f747820616c726561647920636f6e6669726d65640000000000000000000000006044820152606490fd5b67ffffffffffffffff811161033657601f01601f191660200190565b3461014b57606036600319011261014b5761079961016e565b6044359067ffffffffffffffff821161014b573660238301121561014b578160040135906107c682610764565b916107d46040519384610441565b808352366024828601011161014b576020816000926024610801970183870137840101526024359061095c565b005b3461014b57600036600319011261014b576020600254604051908152f35b3461014b57602036600319011261014b57600435610875600091338352600160205261085360ff604085205416610924565b6108606004548210610b64565b61087060ff60036106808461039a565b61039a565b506004810154600254116108df57818161089a6003839401600160ff19825416179055565b60026108ad82546001600160a01b031690565b916001810154906108c46040518094819301610bfc565b03925af16108d0610c7f565b90156108da575080f35b610cc3565b60405162461bcd60e51b815260206004820152601160248201527f63616e6e6f7420657865637574652074780000000000000000000000000000006044820152606490fd5b1561092b57565b60405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b6044820152606490fd5b600091338352600193602085815261097a60ff604087205416610924565b6040519561098787610425565b6001600160a01b0380951687528187019384526040870192835260608701938685526080880195878752600454680100000000000000008110156103365780846109d4920160045561039a565b999099610afc5751166001600160a01b031989541617885551818801556002870192519182519267ffffffffffffffff841161033657610a1e84610a1887546103d5565b87610b10565b81601f8511600114610a8057509280610a5a95938193610a6f989660049b94610a75575b50501b916000199060031b1c19161790555b51151590565b600385019060ff801983541691151516179055565b51910155565b015192503880610a42565b601f98939596979819851690610a9b88600052602060002090565b94905b828210610ae557505092610a5a9592859260049a9996610a6f999610610acc575b505050811b019055610a54565b015160001960f88460031b161c19169055388080610abf565b808886978294978701518155019601940190610a9e565b634e487b7160e01b89526004899052602489fd5b90601f8111610b1e57505050565b600091825260208220906020601f850160051c83019410610b5a575b601f0160051c01915b828110610b4f57505050565b818155600101610b43565b9092508290610b3a565b15610b6b57565b60405162461bcd60e51b815260206004820152601160248201527f747820646f6573206e6f742065786973740000000000000000000000000000006044820152606490fd5b15610bb757565b60405162461bcd60e51b815260206004820152601360248201527f747820616c7265616479206578656375746564000000000000000000000000006044820152606490fd5b600092918154610c0b816103d5565b92600191808316908115610c645750600114610c28575b50505050565b90919293945060005260209081600020906000915b858310610c535750505050019038808080610c22565b805485840152918301918101610c3d565b60ff1916845250505081151590910201915038808080610c22565b3d15610caa573d90610c9082610764565b91610c9e6040519384610441565b82523d6000602084013e565b606090565b906020610cc09281815201906101e6565b90565b6044815110610d605760048101518101906020816024840193031261014b5760248101519067ffffffffffffffff821161014b5701908060438301121561014b57602482015191610d1383610764565b91610d216040519384610441565b8383526044848301011161014b57610d5c92610d449160446020850191016101c3565b60405162461bcd60e51b815291829160048301610caf565b0390fd5b60405162461bcd60e51b815260206004820152600e60248201527f526561736f6e20756e6b6e6f776e0000000000000000000000000000000000006044820152606490fdfea26469706673582212205ef8303e3a882bef3a06d20a1966aa21843adc27209eab92030a34cb042be06a64736f6c63430008120033";

type MultisigMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultisigMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultisigMock__factory extends ContractFactory {
  constructor(...args: MultisigMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MultisigMock";
  }

  override deploy(
    _numConfirmationsRequired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultisigMock> {
    return super.deploy(
      _numConfirmationsRequired,
      overrides || {}
    ) as Promise<MultisigMock>;
  }
  override getDeployTransaction(
    _numConfirmationsRequired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _numConfirmationsRequired,
      overrides || {}
    );
  }
  override attach(address: string): MultisigMock {
    return super.attach(address) as MultisigMock;
  }
  override connect(signer: Signer): MultisigMock__factory {
    return super.connect(signer) as MultisigMock__factory;
  }
  static readonly contractName: "MultisigMock";

  public readonly contractName: "MultisigMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultisigMockInterface {
    return new utils.Interface(_abi) as MultisigMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultisigMock {
    return new Contract(address, _abi, signerOrProvider) as MultisigMock;
  }
}