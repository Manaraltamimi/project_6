const HDWalletProvider = require('truffle-hdwallet-provider');

// const fs = require('fs');
const mnemonic = "worth firm whale alley federal door canoe arch item crunch fatal muffin";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
  rinkeby: {
    provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/9535af6163e24f0fb94211db246b17ca`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
  }
}

};