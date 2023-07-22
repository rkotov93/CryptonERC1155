import { ethers } from "hardhat";
import { Contract } from "ethers";
import path from "path";

async function deployCryptonErc1155(certificateMetadataUri: string) {
  const CryptonErc1155 = await ethers.getContractFactory("CryptonErc1155");
  const cryptonErc1155: Contract = await CryptonErc1155.deploy(certificateMetadataUri);
  await cryptonErc1155.deployed();
  return cryptonErc1155;
}

async function cryptonErc1155DeploymentFixture() {
  const certificateMetadataUri = path.resolve("test", "fixtures", "certificateMetadata.json");
  const cryptonErc1155 = await deployCryptonErc1155(certificateMetadataUri);

  return { cryptonErc1155 };
}

export { cryptonErc1155DeploymentFixture };
