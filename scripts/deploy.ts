/* eslint-disable no-console */
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Registry } from '../contract-types/Registry';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config({ path: `${process.env.NODE_ENV}.env` });

interface ContractAddress {
	name: string;
	address: string;
}

export const ALL_CONTRACTS = ['Test', 'AnotherTest'];
const CONTRACTS_TO_DEPLOY = ['Test', 'AnotherTest'];

const deployContract = async (contractName: string) => {
	const factory = await ethers.getContractFactory(contractName);
	const contract = await factory.deploy();
	await contract.deployed();
	console.log((contract.provider as any).connection);
	return { name: contractName, address: contract.address };
};

const main = async () => {
	console.log(process.env.NODE_ENV);
	const addressPromises: Promise<ContractAddress>[] = [];
	CONTRACTS_TO_DEPLOY.forEach((contractName) => {
		addressPromises.push(deployContract(contractName));
	});

	const addresses = await Promise.all(addressPromises);
	console.log(addresses);

	// Remove the call below if Registry is already deployed,
	// and update the address in ethers.getContractAt('Registry', address)
	let registryAddress = process.env.REGISTRY_ADDRESS;
	if (registryAddress == null) {
		const { address } = await deployContract('Registry');
		registryAddress = address;
	}

	const registry = (await ethers.getContractAt('Registry', registryAddress)) as Registry;
	const registerPromises: Promise<any>[] = [];
	addresses.forEach(({ name, address: addrToRegister }) => {
		registerPromises.push(registry.register(name, addrToRegister));
	});

	await Promise.all(registerPromises);
	fs.writeFileSync('contractAddresses.json', JSON.stringify(addresses));
	console.log('wrote addresses to contractAddresses.json');
	console.log('Registry address: ', registry.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error: Error) => {
		console.error(error);
		process.exit(1);
	});
