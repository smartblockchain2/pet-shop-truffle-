require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        "ropsten-infura": {
            provider: () => new HDWalletProvider(process.env.TEST_MNEMONIC, "https://ropsten.infura.io/"+process.env.INFURA_KEY, "bcfb544a33ec4e1f84fe66a4854f3b3a"),
            network_id: 3,
            gas: 4700000,
            gasPrice: 100000000000
        },
        develop: {
                   port: 8545
                 },
    }
};


//  provider: () => new HDWalletProvider(process.env.TEST_MNEMONIC, "https://ropsten.infura.io/"+process.env.INFURA_KEY, "bcfb544a33ec4e1f84fe66a4854f3b3a"),


// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // for more about customizing your Truffle configuration!
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545,
//       network_id: "*" // Match any network id
//     },
//     develop: {
//       port: 8545
//     },
//     test: {
//       provider: function() {
//         return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
//       },
//       network_id: '*',
//     }
//   }
// };

