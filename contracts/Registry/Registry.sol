// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract Registry {
	mapping(string => address) addressByName;

	function register(string memory name, address addr) external {
		addressByName[name] = addr;
	}

	function getAddr(string memory name) external view returns (address) {
		return addressByName[name];
	}
}
