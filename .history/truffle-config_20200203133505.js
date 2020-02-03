require('dotenv').config();
//const HDWalletProvider = require("@truffle/hdwallet-provider");
const HDWalletProvider = require("truffle-hdwallet-provider");
//ropsten.infura.io/v3/bcfb544a33ec4e1f84fe66a4854f3b3a
const mnemonic = "energy hungry bulk insane slam lunar zebra pilot page age butter auto";

var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'YOUR WALLET KEY';

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        test: {
                  provider: function() {
                    return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
                  },
                  network_id: '*'
                },
        "ropsten-infura": {
            provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/04f838e39118400ab1ef5148836f2cb0"),
            network_id: 3,
            skipDryRun: true,
            confirmations: 2,
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

