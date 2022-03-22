import { ethers } from "hardhat";
const deployedNFTContract = "0xC4daEdA4dedCc49DD3a1aD103B6785f5EaF09790";

async function Mint() {
  const URL = "ipfs://QmfYGtYrAMatyMgxv4tfGuYNw6GCTMempXYDjEFSVAD5Qt";
  const MintOwner = "0xC02cc6235f43D9e51143B5ec1Bb12f2Fa7BB6B7a";
  // getting the already deployed NFT  contract so we can interact with it
  const deployNft = await ethers.getContractAt(
    "ExampleNFT",
    deployedNFTContract
  );
  // interaction with already deployed NFT contract
  const NFTDeployed = await deployNft.deployed();
  await NFTDeployed.mintNFT(MintOwner, URL);
  console.log(await NFTDeployed.balanceOf(MintOwner));
  console.log(await NFTDeployed.ownerOf(1));
}

Mint().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
