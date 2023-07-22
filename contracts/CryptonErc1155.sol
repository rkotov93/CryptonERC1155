// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CryptonErc1155 is ERC1155URIStorage, Ownable {
  using Counters for Counters.Counter;

  event CertificateIssued(address student, uint256 certificateId);

  uint8 public constant COIN = 0;
  Counters.Counter public certificateTokenIds;
  string public certificateMetadataUri;

  constructor(string memory _certificateMetadataUri) ERC1155("") {
    _mint(msg.sender, COIN, 10**19, "");
    certificateMetadataUri = _certificateMetadataUri;
    certificateTokenIds.increment();
  }

  // It's better use soulboud tokens here of course
  function issueCertificate(address to) external onlyOwner {
    uint tokenId = certificateTokenIds.current();
    _mint(to, tokenId, 1, "");
    _setURI(tokenId, certificateMetadataUri);
    certificateTokenIds.increment();
    emit CertificateIssued(to, tokenId);
  }
}
