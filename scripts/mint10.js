const { ethers } = require("hardhat");
const hre = require("hardhat");
require('dotenv').config();
const winston = require('winston');

async function main() {
  //logging
  const logConfiguration = {
    'transports': [
      new winston.transports.Console(),
      new winston.transports.File({
          filename: 'logs/minting.log'
      })
  ]
  };
  const logger = winston.createLogger(logConfiguration);
  const [owner] = await ethers.getSigners();

  // We get the contract to deploy
  const NFT = await hre.ethers.getContractFactory("VariousVulpe");
  const nft = await NFT.attach(process.env.RINKEBY_NFT);
  logger.info(`NFT deployed to: ${nft.address}`);

  //Mint token
  for (i=0; i < 10; i++) {
    var nextTokenId = await nft.totalSupply();
    var tx = await nft.safeMint(owner.address);
    
    logger.info(`Next NFT Minted ID: ${nextTokenId.toString()}, Owner of NFT: ${owner.address}, Hash location of Minted NFT: ${tx.hash}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
