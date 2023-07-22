// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CryptonErc1155 is ERC1155URIStorage, Ownable {
  using Counters for Counters.Counter;

  uint8 public constant COIN = 0;
  Counters.Counter public certificateTokenIds;
  string public certificateMetadataUri;

  constructor(string memory _certificateMetadataUri) ERC1155("") {
    _mint(msg.sender, COIN, 10**18, "");
    certificateMetadataUri = _certificateMetadataUri;
  }

  // It's better use soulboud tokens here of course
  function issueCertificate(address to) external onlyOwner {
    uint tokenId = certificateTokenIds.current() + 1;
    _mint(to, tokenId, 1, "");
    _setURI(tokenId, certificateMetadataUri);
  }
}
