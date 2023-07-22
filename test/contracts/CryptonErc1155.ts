import path from "path";
import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { cryptonErc1155DeploymentFixture } from "../fixtures/cryptonErc1155";

describe("CryptonErc1155", () => {
  let owner: SignerWithAddress;
  let accounts: SignerWithAddress[];
  let cryptonErc1155: Contract;

  const COIN_ID = 0;
  const expectedCertificateMetadataUri = path.resolve("test", "fixtures", "certificateMetadata.json");

  before(async () => {
    [owner, ...accounts] = await ethers.getSigners();
    ({ cryptonErc1155 } = await loadFixture(cryptonErc1155DeploymentFixture));
  });

  describe("deployment", () => {
    it("mints 10**19 COIN tokens to deployer and sets certificateMetadataUri", async () => {
      let balance = await cryptonErc1155.balanceOf(owner.address, COIN_ID);
      let certificateMetadataUri = await cryptonErc1155.certificateMetadataUri();
      expect(balance).to.be.eq(ethers.utils.parseUnits("10", "ether"));
      expect(certificateMetadataUri).to.be.eq(expectedCertificateMetadataUri);
    });
  });

  describe("#issueCertificate", () => {
    let recipient1: SignerWithAddress;
    let recipient2: SignerWithAddress;

    before(async () => {
      recipient1 = accounts[1];
      recipient2 = accounts[2];
    });

    it("issues a certificate for a provided address", async () => {
      await expect(cryptonErc1155.issueCertificate(recipient1.address))
        .to.emit(cryptonErc1155, "CertificateIssued")
        .withArgs(recipient1.address, 1);
      const recipient1Balance = await cryptonErc1155.balanceOf(recipient1.address, 1);
      const certificate1Uri = await cryptonErc1155.uri(1);
      expect(recipient1Balance).to.be.eq(1);
      expect(certificate1Uri).to.be.eq(expectedCertificateMetadataUri);

      await expect(cryptonErc1155.issueCertificate(recipient2.address))
        .to.emit(cryptonErc1155, "CertificateIssued")
        .withArgs(recipient2.address, 2);
      let recipient2Balance = await cryptonErc1155.balanceOf(recipient2.address, 2);
      const certificate2Uri = await cryptonErc1155.uri(1);
      expect(recipient2Balance).to.be.eq(1);
      expect(certificate2Uri).to.be.eq(expectedCertificateMetadataUri);
    });
  });
});
