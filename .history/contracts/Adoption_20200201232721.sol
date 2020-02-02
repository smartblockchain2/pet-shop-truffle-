pragma solidity >=0.5.0 <0.7.0;

import "./@openzeppelin/contracts/lifecycle/Pausable.sol";

//node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol


contract Adoption is Pausable {
    // Array of 16 for the potential adopters.
    // Every contract and account (for sender(buyer) and receiver (seller) has an address.
    address[16] public adopters;

    constructor() public {}

    // Adopting a pet
    function adopt(uint256 petId) public whenNotPaused returns (uint256) {
      require((petId >= 0 && petId <= 15), 'PetId out of range');

      adopters[petId] = msg.sender;

      return petId;
    }

    // Retrieving the adopters
    function getAdopters() public view returns (address[16] memory) {
      return adopters;
    }
}