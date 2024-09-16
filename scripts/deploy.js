const { ethers } = require("hardhat");

async function main() {
  const wrappedNativeAddress = "0xYourWrappedNativeAddress";
  const dexFactoryAddress = "0xYourDexFactoryAddress";

  const DexERC20Wrapper = await ethers.getContractFactory("DexERC20Wrapper");
  const dexERC20Wrapper = await DexERC20Wrapper.deploy(wrappedNativeAddress, dexFactoryAddress);

  console.log("DexERC20Wrapper deployed to:", dexERC20Wrapper.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
