import { getChainIDs } from './api/utils';

// Helper type of the supported chain IDs
export type HLP_TChain = ReturnType<typeof getChainIDs>[number];

// The project caller is the name of the project that is calling the SDK
export type TProjectCaller = 'TapiocaZ' | 'Tap-Token' | 'Tapioca-Bar';

// A contract is a deployed contract
export type TContract = {
    name: string;
    address: string;
    meta: { deploymentArgs: { arg: string; description: string }[] } & any;
};

// A local deployment is a deployment of a single project, contracts are deployed per chain
export type TLocalDeployment = {
    [chainID in HLP_TChain]?: TContract[];
} & {
    [chainId: string]: TContract[];
};

// A local database is a local deployment per tag
export type TLocalDatabase = {
    [tag: string]: TLocalDeployment;
};

// A global deployment is the aggregation of all project deployments, exported to the SDK
export type TGlobalDeployment = {
    [project in TProjectCaller]?: TLocalDeployment;
};
// A global database is a global deployment per tag
export type TGlobalDatabase = {
    [tag: string]: TGlobalDeployment;
};
