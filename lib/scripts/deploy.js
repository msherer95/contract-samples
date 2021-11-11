"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_CONTRACTS = void 0;
const hardhat_1 = require("hardhat");
const dotenv = __importStar(require("dotenv"));
const fs = __importStar(require("fs"));
dotenv.config({ path: `${process.env.NODE_ENV}.env` });
exports.ALL_CONTRACTS = ['Test', 'AnotherTest'];
const CONTRACTS_TO_DEPLOY = ['Test', 'AnotherTest'];
const deployContract = async (contractName) => {
    const factory = await hardhat_1.ethers.getContractFactory(contractName);
    const contract = await factory.deploy();
    await contract.deployed();
    return { name: contractName, address: contract.address };
};
const main = async () => {
    console.log(process.env.NODE_ENV);
    const addressPromises = [];
    CONTRACTS_TO_DEPLOY.forEach((contractName) => {
        addressPromises.push(deployContract(contractName));
    });
    const addresses = await Promise.all(addressPromises);
    console.log(addresses);
    let registryAddress = process.env.REGISTRY_ADDRESS;
    if (registryAddress == null) {
        const { address } = await deployContract('Registry');
        registryAddress = address;
    }
    const registry = (await hardhat_1.ethers.getContractAt('Registry', registryAddress));
    const registerPromises = [];
    addresses.forEach(({ name, address: addrToRegister }) => {
        registerPromises.push(registry.register(name, addrToRegister));
    });
    await Promise.all(registerPromises);
    fs.writeFileSync('contractAddresses.json', JSON.stringify(addresses));
    console.log('wrote addresses to contractAddresses.json');
    console.log('Registry address: ', registry.address);
};
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
