/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "CurveStableToUsdoBidder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurveStableToUsdoBidder__factory>;
    getContractFactory(
      name: "UniUsdoToWethBidder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniUsdoToWethBidder__factory>;
    getContractFactory(
      name: "LiquidationQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidationQueue__factory>;
    getContractFactory(
      name: "MagnetarV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MagnetarV2__factory>;
    getContractFactory(
      name: "MagnetarV2Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MagnetarV2Storage__factory>;
    getContractFactory(
      name: "MagnetarMarketModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MagnetarMarketModule__factory>;
    getContractFactory(
      name: "Multicall3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall3__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "ARBTriCryptoOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ARBTriCryptoOracle__factory>;
    getContractFactory(
      name: "GLPOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GLPOracle__factory>;
    getContractFactory(
      name: "SGOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGOracle__factory>;
    getContractFactory(
      name: "ModuleChainlinkMulti",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModuleChainlinkMulti__factory>;
    getContractFactory(
      name: "ModuleChainlinkSingle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModuleChainlinkSingle__factory>;
    getContractFactory(
      name: "ModuleUniswapMulti",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModuleUniswapMulti__factory>;
    getContractFactory(
      name: "OracleAbstract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleAbstract__factory>;
    getContractFactory(
      name: "OracleChainlinkMulti",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleChainlinkMulti__factory>;
    getContractFactory(
      name: "OracleChainlinkMultiEfficient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleChainlinkMultiEfficient__factory>;
    getContractFactory(
      name: "OracleChainlinkSingle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleChainlinkSingle__factory>;
    getContractFactory(
      name: "OracleDAI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleDAI__factory>;
    getContractFactory(
      name: "OracleMulti",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleMulti__factory>;
    getContractFactory(
      name: "Seer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Seer__factory>;
    getContractFactory(
      name: "ChainlinkUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkUtils__factory>;
    getContractFactory(
      name: "FunctionUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionUtils__factory>;
    getContractFactory(
      name: "PausableMapUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableMapUpgradeable__factory>;
    getContractFactory(
      name: "UniswapUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapUtils__factory>;
    getContractFactory(
      name: "BaseSwapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseSwapper__factory>;
    getContractFactory(
      name: "CurveSwapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurveSwapper__factory>;
    getContractFactory(
      name: "UniswapV2Swapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Swapper__factory>;
    getContractFactory(
      name: "UniswapV3Swapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3Swapper__factory>;
    getContractFactory(
      name: "TapiocaDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TapiocaDeployer__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "CurveStableToUsdoBidder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CurveStableToUsdoBidder>;
    getContractAt(
      name: "UniUsdoToWethBidder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniUsdoToWethBidder>;
    getContractAt(
      name: "LiquidationQueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidationQueue>;
    getContractAt(
      name: "MagnetarV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MagnetarV2>;
    getContractAt(
      name: "MagnetarV2Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MagnetarV2Storage>;
    getContractAt(
      name: "MagnetarMarketModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MagnetarMarketModule>;
    getContractAt(
      name: "Multicall3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall3>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "ARBTriCryptoOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ARBTriCryptoOracle>;
    getContractAt(
      name: "GLPOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GLPOracle>;
    getContractAt(
      name: "SGOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGOracle>;
    getContractAt(
      name: "ModuleChainlinkMulti",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModuleChainlinkMulti>;
    getContractAt(
      name: "ModuleChainlinkSingle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModuleChainlinkSingle>;
    getContractAt(
      name: "ModuleUniswapMulti",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModuleUniswapMulti>;
    getContractAt(
      name: "OracleAbstract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleAbstract>;
    getContractAt(
      name: "OracleChainlinkMulti",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleChainlinkMulti>;
    getContractAt(
      name: "OracleChainlinkMultiEfficient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleChainlinkMultiEfficient>;
    getContractAt(
      name: "OracleChainlinkSingle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleChainlinkSingle>;
    getContractAt(
      name: "OracleDAI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleDAI>;
    getContractAt(
      name: "OracleMulti",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleMulti>;
    getContractAt(
      name: "Seer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Seer>;
    getContractAt(
      name: "ChainlinkUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkUtils>;
    getContractAt(
      name: "FunctionUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionUtils>;
    getContractAt(
      name: "PausableMapUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableMapUpgradeable>;
    getContractAt(
      name: "UniswapUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapUtils>;
    getContractAt(
      name: "BaseSwapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseSwapper>;
    getContractAt(
      name: "CurveSwapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CurveSwapper>;
    getContractAt(
      name: "UniswapV2Swapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Swapper>;
    getContractAt(
      name: "UniswapV3Swapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV3Swapper>;
    getContractAt(
      name: "TapiocaDeployer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TapiocaDeployer>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
