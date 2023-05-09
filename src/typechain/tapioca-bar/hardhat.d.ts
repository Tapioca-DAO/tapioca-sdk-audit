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
      name: "BigBang",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BigBang__factory>;
    getContractFactory(
      name: "Market",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Market__factory>;
    getContractFactory(
      name: "MarketERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketERC20__factory>;
    getContractFactory(
      name: "SGLCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLCommon__factory>;
    getContractFactory(
      name: "SGLLendingBorrowing",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLendingBorrowing__factory>;
    getContractFactory(
      name: "SGLLiquidation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLiquidation__factory>;
    getContractFactory(
      name: "SGLStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLStorage__factory>;
    getContractFactory(
      name: "Singularity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Singularity__factory>;
    getContractFactory(
      name: "Penrose",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Penrose__factory>;
    getContractFactory(
      name: "Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Test__factory>;
    getContractFactory(
      name: "BaseOFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseOFT__factory>;
    getContractFactory(
      name: "USDO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDO__factory>;
    getContractFactory(
      name: "USDOMocks",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOMocks__factory>;

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
      name: "BigBang",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BigBang>;
    getContractAt(
      name: "Market",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Market>;
    getContractAt(
      name: "MarketERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketERC20>;
    getContractAt(
      name: "SGLCommon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLCommon>;
    getContractAt(
      name: "SGLLendingBorrowing",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLLendingBorrowing>;
    getContractAt(
      name: "SGLLiquidation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLLiquidation>;
    getContractAt(
      name: "SGLStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLStorage>;
    getContractAt(
      name: "Singularity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Singularity>;
    getContractAt(
      name: "Penrose",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Penrose>;
    getContractAt(
      name: "Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Test>;
    getContractAt(
      name: "BaseOFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseOFT>;
    getContractAt(
      name: "USDO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDO>;
    getContractAt(
      name: "USDOMocks",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOMocks>;

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
