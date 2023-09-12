pragma solidity ^0.6.0;

contract SimpleStorage {
  uint public data;

  function set(uint x) public {
    data = x;
  }

  function get() public view returns (uint) {
    return data;
  }
}
