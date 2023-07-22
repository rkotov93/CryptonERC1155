# ECR1155 Token

Contract address is [0x9A2c1403893abBF8C92D076869259076623856Ce](https://mumbai.polygonscan.com/address/0x9A2c1403893abBF8C92D076869259076623856Ce)

Minted NFT at [OpenSea Testnet](https://testnets.opensea.io/assets/mumbai/0x9a2c1403893abbf8c92d076869259076623856ce/1)

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
