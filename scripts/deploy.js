// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

 
    const indigenaNFT = await hre.ethers.getContractFactory('IndigenaNFTMarketplace')
   
        const ContractAddress = await indigenaNFT.deploy()

    console.log("Oku Group Contract", ContractAddress.address);

    const ProxyContract= await hre.ethers.getContractFactory("IndigenaNFTMarketplace")
    const ProxyAddress =await ProxyContract.deploy()
    console.log("proxy Contract Address",ProxyAddress.address);

    const Trade =await hre.ethers.getContractFactory("Trade")
    const TradeAddress=await Trade.deploy(10,20);
    console.log("IndigenaTradeContract",TradeAddress.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });