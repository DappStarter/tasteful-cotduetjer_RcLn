require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain hospital inner casual flock truly'; 
let testAccounts = [
"0x83a363f22eff7e70261faadf48b1cc7c63026ab87276781a28e6a73268aa3fe8",
"0x81ffa3f6968c6073544182aaf409bed614ff27cde2b51fda58657f37f4016852",
"0xa5cdce1371c6d8664922563bc11720e7d8988703ac295cede22150c4d1784725",
"0xdcd5829045beddd5b2ff2b6927af62929a943e2630f002c9ed39e1cf2798e7d0",
"0xae8ef6807a4e6143a663a270bb4e8016f5c2cff6ca1c68e5a43deb7a21d7feb1",
"0xb14afb912ef52afaa0f84708b0196623185bd38c8949e80c8623def0e47c02fa",
"0x0900b976df28d36d54736f6f4b317b9d256cc127d7bcfd0970d3eb2497b6a879",
"0x36e86351c202b776fccb0314d886494259cdcb9a1ae4028604fd77fc96cb13d5",
"0x1832dadbf228563a2dad980cfb3fee174527a5a7444e0c5a1b4e5252027fca13",
"0x35ba93c7578935b807a2722f0c732792daf71b7931eb3b784461cbc461ccee79"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

