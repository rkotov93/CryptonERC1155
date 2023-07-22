# ECR1155 Token

Contract address if [0x4fAc5CD9b4c7e8278Bcb5040fA1CA466be026f0b](https://mumbai.polygonscan.com/address/0x4fAc5CD9b4c7e8278Bcb5040fA1CA466be026f0b)

Minted NFT at [OpenSea Testnet](https://testnets.opensea.io/assets/mumbai/0x4fac5cd9b4c7e8278bcb5040fa1ca466be026f0b/1)

<img width="353" alt="Screenshot 2023-07-23 at 01 09 19" src="https://github.com/rkotov93/CryptonERC1155/assets/640137/8d758ff8-fe13-42cf-aef7-9c2d1b2c3580">

## Installation

Clone the repository using the following command:
Install the dependencies using the following command:

```bash
yarn install
```

## Deployment

Fill in all the required environment variables(copy .env-example to .env and fill it).

Deploy contract to the chain (mumbai testnet):

```bash
npx hardhat run scripts/deploy.ts --network <localhost|mumbai>
```

## Tasks

Running a task:

```bash
npx hardhat issueCertificate --student <address> --network <localhost|mumbai>
```
