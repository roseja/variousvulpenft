# VariousVulpe NFT Project


This NFT project was created as part of the NFT14 course offered by https://nft14.xyz/

The art work is a collection of images offered by [Canva Pro](https://www.canva.com/) featuring multiple colors of foxes in different locations and having different accessories.

---
## How to install the project locally

This project requires hardhat to be installed. Once hardhat is install and our logging library `winston` we can run the scripts.

Commands can be run such as:
`npx hardhat mintOwner`

The default network is set to `rinkeby` in the `hardhat.config.js` file

---

## How to use the project

The images and metadata need to be generated prior to running these scripts. We used an external program ([NFT Art Generator](https://github.com/NotLuksus/nft-art-generator)) to auto-generate the images after we created them all. 

The solidity contract in this repository (`VariousVulpe.sol`) names the NFT and contains a link to the IPFS location where the images and metadata are stored. 

In `scripts` folder, we have scripts that do the following:
 - Allow us to deploy the contract (`deploy.js`)
 - Mint a single NFT (`mint.js`)
 - Mint a few NFTs at once (`mint10.js`)
 - Test the minting and deploy process. (`test_nft.js`)


Here are some of the tasks that can be run:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat mintOwner
npx hardhat mintAddress <account>
npx hardhat help
```