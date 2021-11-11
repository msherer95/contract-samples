// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract AnotherTest {
	mapping(address => uint256) counts;

	function addCount(uint256 count) external {
		counts[msg.sender] += count;
	}

	function getCount() external view returns (uint256) {
		return counts[msg.sender];
	}
}
