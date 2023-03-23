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
      name: "LiquidationQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidationQueue__factory>;
    getContractFactory(
      name: "MarketsHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketsHelper__factory>;
    getContractFactory(
      name: "MarketsProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketsProxy__factory>;
    getContractFactory(
      name: "Penrose",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Penrose__factory>;
    getContractFactory(
      name: "ProxyDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyDeployer__factory>;
    getContractFactory(
      name: "SGLLendingBorrowing",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLendingBorrowing__factory>;
    getContractFactory(
      name: "SGLLiquidation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLiquidation__factory>;
    getContractFactory(
      name: "Singularity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Singularity__factory>;
    getContractFactory(
      name: "MultiSwapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiSwapper__factory>;
    getContractFactory(
      name: "BigBang",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BigBang__factory>;
    getContractFactory(
      name: "USDO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USD0__factory>;
    getContractFactory(
      name: "YieldBox",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YieldBox__factory>;

    getContractAt(
      name: "LiquidationQueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidationQueue>;
    getContractAt(
      name: "MarketsHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketsHelper>;
    getContractAt(
      name: "MarketsProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketsProxy>;
    getContractAt(
      name: "Penrose",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Penrose>;
    getContractAt(
      name: "ProxyDeployer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyDeployer>;
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
      name: "Singularity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Singularity>;
    getContractAt(
      name: "MultiSwapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiSwapper>;
    getContractAt(
      name: "BigBang",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BigBang>;
    getContractAt(
      name: "USDO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDO>;
    getContractAt(
      name: "YieldBox",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YieldBox>;

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
