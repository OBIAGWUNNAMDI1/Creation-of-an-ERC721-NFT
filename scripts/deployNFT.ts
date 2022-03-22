import { ethers } from "hardhat";

async function deployNFT() {
  const owner = "0xC02cc6235f43D9e51143B5ec1Bb12f2Fa7BB6B7a";

  const ownerSigner = await ethers.getSigner(owner);
  const deployNft = await ethers.getContractFactory("ExampleNFT", ownerSigner);
  const NFTDeployed = await deployNft.deploy();

  await NFTDeployed.deployed();

  console.log("NFT deployed to:", NFTDeployed.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployNFT().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
