// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const commentContract = await hre.ethers.getContractFactory("Comments");
  const contract = await commentContract.deploy();
  await contract.deployed();
  console.log("Contract deployed to", contract.address);

  const tx1 = await contract.addComment("My-first-comment", "first comment");
  await tx1.wait();

  const tx2 = await contract.addComment("Second-comment", "second comment");
  await tx2.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
