const { ethers } = require("hardhat");
const hre = require("hardhat");
require('dotenv').config();

async function main() {
  const [owner] = await ethers.getSigners();

  // We get the contract to deploy
  const NFT = await hre.ethers.getContractFactory("VariousVulpe");
  const nft = await NFT.attach(process.env.RINKEBY_NFT);

  console.log("NFT deployed to:", nft.address);

  //Mint token
  nextTokenId = await nft.totalSupply();
  tx = await nft.safeMint(owner.address);
  
  console.log("Next NFT Minted ID: ", nextTokenId.toString());
  console.log("Owner of NFT: ", owner.address);
  console.log("Hash location of Minted NFT: ", tx.hash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
