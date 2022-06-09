const hre = require("hardhat");

async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();

  // We get the contract to deploy
  const NFT = await hre.ethers.getContractFactory("VariousVulpe");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  await nft.safeMint(deployer.address);
  await nft.safeMint(addr1.address);
  await nft.safeMint(addr1.address);
  console.log("Deployer NFT Count: ", (await nft.balanceOf(deployer.address)).toString());
  console.log("Deployer NFT Count: ", await nft.balanceOf(deployer.address));
  console.log("Addr1 NFT Count: ", (await nft.balanceOf(addr1.address)).toString());
  console.log("Addr1 NFT Count: ", await nft.balanceOf(addr1.address));
  console.log("Addr2 NFT Count: ", (await nft.balanceOf(addr2.address)).toString());
  console.log("Addr2 NFT Count: ", await nft.balanceOf(addr2.address));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
