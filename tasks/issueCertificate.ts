import fs from "fs";
import { task } from "hardhat/config";
import { BigNumber, Contract, ContractReceipt, ContractTransaction } from "ethers";
import { Address } from "cluster";

function loadAddress() {
  const json = JSON.parse(fs.readFileSync("./.addresses", "utf-8"));
  const network = hre.network.name;
  const address = json[network];
  if (!address) throw `Contracts not yet deployed to ${network}`;

  return address;
}

task("issueCertificate", "Issues certificate NFT for provided student address")
  .addParam("student", "Recipient of Certificate")
  .setAction(async ({ student }, { ethers }) => {
    const address = loadAddress();

    const CryptonErc1155 = await ethers.getContractFactory("CryptonErc1155");
    const cryptonErc1155: Contract = CryptonErc1155.attach(address);

    const transaction = await cryptonErc1155.issueCertificate(student);
    const receipt: ContractReceipt = await transaction.wait();

    const event = receipt.events?.find((event) => event.event === "CertificateIssued");
    if (!receipt.status) throw "issueCertificate was reverted";
    if (!event) throw "CertificateIssued event was not found";

    const eStudent: Address = event.args!["student"];
    const eCertificateId: Address = event.args!["certificateId"];

    console.log(`Student: ${eStudent}`);
    console.log(`Certificate ID: ${eCertificateId}`);
  });
