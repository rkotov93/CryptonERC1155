import { ethers } from "hardhat";

async function main() {
  const certificateMetadataUri = "ipfs://QmfLU62hMPLgXrfGtcQZkqDQ6RwAt6ex9MRxV6VJrK4WUH";
  const CryptonErc1155 = await ethers.getContractFactory("CryptonErc1155");
  const cryptonErc1155 = await CryptonErc1155.deploy(certificateMetadataUri);
  await cryptonErc1155.deployed();

  console.log(`CryptonErc1155 deployed to ${cryptonErc1155.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
