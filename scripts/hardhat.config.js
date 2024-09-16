require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: ["0xYourPrivateKey"]
    }
  }
};
