/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CurveSwapper,
  CurveSwapperInterface,
} from "../../Swapper/CurveSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurvePool",
        name: "_curvePool",
        type: "address",
      },
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "Undefined",
    type: "error",
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
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "curvePool",
    outputs: [
      {
        internalType: "contract ICurvePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultDexOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "dexOptions",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
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
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
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
  "0x60a03461011a57601f61175f38819003918201601f19168301916001600160401b0383118484101761011f57808492604094855283398101031261011a5780516001600160a01b03918282169182900361011a57602001519180831680840361011a576000549160018060a01b0319923384821617600055604051913391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360018055831561010b5750156100f957600254161760025560805260405161162990816101368239608051818181610306015281816105040152818161084f0152818161090801528181610a230152610c750152f35b60405163d23f952160e01b8152600490fd5b63d23f952160e01b8152600490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c9081631a16321014610fa257508063218751b214610f7b5780633fa2ef5e14610ee85780635bf66e4814610be3578063715018a614610b7c5780637b2a8bd214610a6d5780638da5cb5b14610a47578063de40657714610a03578063e3c711a0146109df578063efa84c6d146101675763f2fde38b1461009a57600080fd5b34610164576020366003190112610164576100b3610fc3565b6100bb6110a1565b6001600160a01b0380911690811561011057600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b80fd5b50346101645736600319016101a081126109db5761014013610164576001600160a01b0361016435166101643503610164576101843567ffffffffffffffff81116109db57366023820112156109db57806004013590826101c783611085565b916101d5604051938461104d565b838352602083019336602482840101116109d757806024602093018637830101528290805181019260208281860195031261070757519067ffffffffffffffff821161070757019180603f840112156106d55760208301516102368161119e565b93610244604051958661104d565b8185526040602086019260051b8201019283116108ac57604001905b8282106109c7575050506001600160a01b036002541690610280836111b6565b516040519063c661065760e01b82526004820152602081602481865afa9081156106925785916109a8575b5060206102b7856111d9565b5160246040518096819363c661065760e01b835260048301525afa928315610692578593610987575b508490608435801580158161097c575b156107f6575061032a92505b60a43591602435907f0000000000000000000000000000000000000000000000000000000000000000611507565b61033d610336856111b6565b51946111d9565b51906001600160a01b0360025416916040519063c661065760e01b82526fffffffffffffffffffffffffffffffff968781166004840152602083602481885afa9283156107ca5789936107d5575b5060405163c661065760e01b81529782166004890152602088602481885afa9788156107ca578998610799575b50604051635e0d443f60e01b8152600f82810b600483015283900b602482015260448101859052602081606481895afa90811561078e578a91610758575b506101443511610713576040516370a0823160e01b81523060048201529489936020876024816001600160a01b038e165afa9687156106925785976106d9575b50610442918691611426565b6001600160a01b036002541690813b156106d557836084926040519687958694630f7c084960e21b8652600f0b6004860152600f0b602485015260448401526101443560648401525af180156106ca5761069d575b5060206001600160a01b03946024604051809781936370a0823160e01b8352306004840152165afa93841561069257859461065e575b508084111561062b5783039283116106175761012435801515810361061257156105c357506040839161052b846001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168093611426565b60a4825180948193634d4d7cbd60e11b835260643560048401523060248401526001600160a01b03610164351660448401528760648401528160848401525af19081156105b85760409391610589575b505b82519182526020820152f35b6105a99150833d85116105b1575b6105a1818361104d565b810190611208565b90503861057b565b503d610597565b6040513d85823e3d90fd5b6040805163a9059cbb60e01b60208201526001600160a01b03610164358116602483015260448083018790528252919550919261060d92919061060760648461104d565b16611236565b61057d565b600080fd5b634e487b7160e01b84526011600452602484fd5b60405162461bcd60e51b815260206004820152600b60248201526a1cddd85c0819985a5b195960aa1b6044820152606490fd5b9093506020813d60201161068a575b8161067a6020938361104d565b81010312610612575192386104cd565b3d915061066d565b6040513d87823e3d90fd5b67ffffffffffffffff81116106b6576040526020610497565b634e487b7160e01b86526041600452602486fd5b6040513d88823e3d90fd5b8380fd5b9096506020813d60201161070b575b816106f56020938361104d565b81010312610707575195610442610436565b8480fd5b3d91506106e8565b60405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742d616d6f756e742d6f75740000000000000000006044820152606490fd5b90506020813d602011610786575b816107736020938361104d565b810103126107825751386103f6565b8980fd5b3d9150610766565b6040513d8c823e3d90fd5b6107bc91985060203d6020116107c3575b6107b4818361104d565b8101906111e9565b96386103b8565b503d6107aa565b6040513d8b823e3d90fd5b6107ef91935060203d6020116107c3576107b4818361104d565b913861038b565b9060243591826108cc575b50505060643580610817575b5061032a916102fc565b60c4356108c2576040519063442c159960e01b8252600482015260e43560248201528660448201526020816064816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa80156108b757610888575b5061032a915b9161080d565b602090813d83116108b0575b61089e818361104d565b810103126108ac573861087c565b8580fd5b503d610894565b6040513d89823e3d90fd5b5061032a91610882565b92935090911561097557506040519063442c159960e01b8252600482015260a43560248201528560448201526020816064816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156106ca578691610943575b505b90388080610801565b90506020813d60201161096d575b8161095e6020938361104d565b810103126108ac575138610938565b3d9150610951565b905061093a565b5060c43515156102f0565b6109a191935060203d6020116107c3576107b4818361104d565b91386102e0565b6109c1915060203d6020116107c3576107b4818361104d565b386102ab565b8151815260209182019101610260565b8280fd5b5080fd5b5034610164576109ee36610ff7565b505060405163d623472560e01b815260049150fd5b503461016457806003193601126101645760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101645780600319360112610164576001600160a01b036020915416604051908152f35b50346101645760c036600319011261016457610b7890610a8b610fd9565b610a93610fe8565b610a9b611159565b50610aa4611159565b92610aad6110f9565b9160443583526064356020840152610ac36110f9565b91808352604083015260043560208301526024356060830152610ae461112f565b9315158452151560208401528352602083015260408201526040519182918291909161012060206040610140840195606081516001600160a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b5034610164578060031936011261016457610b956110a1565b805473ffffffffffffffffffffffffffffffffffffffff198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b503461016457610bf236610ff7565b819392910160209384818303126106d55780359067ffffffffffffffff821161070757019080601f830112156106d5578135610c2d8161119e565b92610c3b604051948561104d565b818452868085019260051b8201019283116108ac579086808095949301915b838310610ed8575060608601359560808101359350879250907f0000000000000000000000000000000000000000000000000000000000000000908201358415801581610ecb575b15610d62575050505050610d0a9350905b6001600160a01b036002541690610cd3610ccc826111b6565b51916111d9565b51604051635e0d443f60e01b8152600f92830b6004820152910b602482015260448101929092529092839190829081906064820190565b03915afa918215610d56578092610d26575b5050604051908152f35b9091508282813d8311610d4f575b610d3e818361104d565b810103126101645750513880610d1c565b503d610d34565b604051903d90823e3d90fd5b81929394969591610e26575b50505085610d83575b5050610d0a9350610cb3565b9293919260c0820135610e185760e0956001600160a01b03606492604051988995869463442c1599831b8652600486015201356024840152896044840152165afa8015610e0d5790859291610de0575b610d0a93505b3880610d77565b919092813d8311610e06575b610df6818361104d565b810103126109d757818491610dd3565b503d610dec565b6040513d86823e3d90fd5b50509190610d0a9350610dd9565b929694955092939092909115610ec05750506040519063442c159960e01b8252600482015260a0820135602482015285604482015286816064816001600160a01b0388165afa9081156106ca579087949392918791610e8b575b505b92388080610d6e565b85819394959692503d8311610eb9575b610ea5818361104d565b810103126108ac5790869392915138610e80565b503d610e9b565b909493929150610e82565b5060c08401351515610ca2565b8235815291810191859101610c5a565b50346101645760c036600319011261016457610f02610fc3565b90602435906001600160a01b038083168093036109db57610b7893610f25610fd9565b92610f2e610fe8565b90610f37611159565b50610f40611159565b95610f496110f9565b9460443586526064356020870152610f5f6110f9565b9416845260408401528060208401526060830152610ae461112f565b503461016457806003193601126101645760206001600160a01b0360025416604051908152f35b9050346109db57816003193601126109db57633937a73d60e01b8152600490fd5b600435906001600160a01b038216820361061257565b60843590811515820361061257565b60a43590811515820361061257565b600319810161016081126106125761014013610612576004916101443567ffffffffffffffff92838211610612578060238301121561061257818501359384116106125760248483010111610612576024019190565b90601f8019910116810190811067ffffffffffffffff82111761106f57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161106f57601f01601f191660200190565b6001600160a01b036000541633036110b557565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b604051906080820182811067ffffffffffffffff82111761106f5760405260006060838281528260208201528260408201520152565b604051906040820182811067ffffffffffffffff82111761106f5760405260006020838281520152565b604051906060820182811067ffffffffffffffff82111761106f57604052816111806110f9565b815261118a6110f9565b6020820152604061119961112f565b910152565b67ffffffffffffffff811161106f5760051b60200190565b8051156111c35760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156111c35760400190565b9081602091031261061257516001600160a01b03811681036106125790565b9190826040910312610612576020825192015190565b90816020910312610612575180151581036106125790565b6001600160a01b0316604051604081019181831067ffffffffffffffff84111761106f576112a6926040526000806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af16112a0611322565b91611352565b805190816112b357505050565b82806112c393830101910161121e565b156112cb5750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b3d1561134d573d9061133382611085565b91611341604051938461104d565b82523d6000602084013e565b606090565b919290156113b45750815115611366575090565b3b1561136f5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156113c75750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b82851061140d575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506113ea565b60405163095ea7b360e01b602082019081526001600160a01b03939093166024820152604480820194909452928352600092839290839061146860648261104d565b51925af1611474611322565b816114d8575b501561148257565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b80518015925082156114ed575b50503861147a565b611500925060208091830101910161121e565b38806114e5565b939190929361010435801515810361061257611575575050506040516323b872dd60e01b60208201523360248201523060448201528260648201526064815260a0810181811067ffffffffffffffff82111761106f57604052611572916001600160a01b0316611236565b90565b604093509060006001600160a01b0360a493869795975197889687956311a5cc7760e31b8752600487015230602487015230604487015260648601526084850152165af19081156115e7576000916115cb575090565b6115e3915060403d81116105b1576105a1818361104d565b5090565b6040513d6000823e3d90fdfea2646970667358221220fa2b99ef5dfdc448ebfda74b91405b6156a37be74d419852696d5e439d0ae9a264736f6c63430008120033";

type CurveSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveSwapper__factory extends ContractFactory {
  constructor(...args: CurveSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveSwapper";
  }

  override deploy(
    _curvePool: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveSwapper> {
    return super.deploy(
      _curvePool,
      _yieldBox,
      overrides || {}
    ) as Promise<CurveSwapper>;
  }
  override getDeployTransaction(
    _curvePool: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_curvePool, _yieldBox, overrides || {});
  }
  override attach(address: string): CurveSwapper {
    return super.attach(address) as CurveSwapper;
  }
  override connect(signer: Signer): CurveSwapper__factory {
    return super.connect(signer) as CurveSwapper__factory;
  }
  static readonly contractName: "CurveSwapper";

  public readonly contractName: "CurveSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveSwapperInterface {
    return new utils.Interface(_abi) as CurveSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveSwapper {
    return new Contract(address, _abi, signerOrProvider) as CurveSwapper;
  }
}
