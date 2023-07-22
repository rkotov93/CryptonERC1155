# ECR1155 Token
...

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
npx hardhat run scripts/deployTokens.ts --network <localhost|goerli>
npx hardhat run scripts/deployLiquidityManager.ts --network <localhost|goerli>
```

## Tasks
Running a task:
```bash
npx hardhat addLiquidity --amount-a 100000000000000000 --amount-b 100000000000000000 --network <localhost|goerli>
```
