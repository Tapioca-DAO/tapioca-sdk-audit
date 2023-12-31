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
      name: "Balancer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Balancer__factory>;
    getContractFactory(
      name: "TapiocaWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TapiocaWrapper__factory>;
    getContractFactory(
      name: "BaseTOFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseTOFT__factory>;
    getContractFactory(
      name: "BaseTOFTStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseTOFTStorage__factory>;
    getContractFactory(
      name: "BaseTOFTLeverageModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseTOFTLeverageModule__factory>;
    getContractFactory(
      name: "BaseTOFTMarketModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseTOFTMarketModule__factory>;
    getContractFactory(
      name: "BaseTOFTOptionsModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseTOFTOptionsModule__factory>;
    getContractFactory(
      name: "BaseTOFTStrategyModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseTOFTStrategyModule__factory>;
    getContractFactory(
      name: "MTapiocaOFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MTapiocaOFT__factory>;
    getContractFactory(
      name: "TapiocaOFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TapiocaOFT__factory>;

    getContractAt(
      name: "Balancer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Balancer>;
    getContractAt(
      name: "TapiocaWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TapiocaWrapper>;
    getContractAt(
      name: "BaseTOFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseTOFT>;
    getContractAt(
      name: "BaseTOFTStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseTOFTStorage>;
    getContractAt(
      name: "BaseTOFTLeverageModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseTOFTLeverageModule>;
    getContractAt(
      name: "BaseTOFTMarketModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseTOFTMarketModule>;
    getContractAt(
      name: "BaseTOFTOptionsModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseTOFTOptionsModule>;
    getContractAt(
      name: "BaseTOFTStrategyModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseTOFTStrategyModule>;
    getContractAt(
      name: "MTapiocaOFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MTapiocaOFT>;
    getContractAt(
      name: "TapiocaOFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TapiocaOFT>;

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
