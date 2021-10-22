require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remember minor hockey process sun gate'; 
let testAccounts = [
"0x6e4c6a78f9d5be77bf49d59af8153f48eff27b6273eaad49b65cc08af3a82fa2",
"0x5dce0bd3f1aed09ebb42cbf32c4d680afcb331b43a86dba1d7899e48952f4543",
"0xd94acbbff0a3658a6a265dfccd327cd2a4036c281408014e944efbc117124713",
"0x8fda919d22fc9333d461efacfbb2406a100522358f6e1cfd04085f1f74d5b393",
"0xbafc99b2c0a44e24da3e67c72f6a54078250238125f3af47306c8e28ef4fda66",
"0x77a1cd9929e34af33dbdb3ce60b5c2f3776fc57cece3de92238ef919b29764e4",
"0x84556a1ced2b562b8eaf70a99271e11d2bf5dd2d6789446aa0faabac0bd678b2",
"0x4c5808ec7119e627448481b0918df5bb9467f80c5d5a3fbf4aaf3dbe1f3902de",
"0x0212d4f7af580675892ada64b9c60e92024c2a9923b4f7a24a1ba1723358c7e2",
"0x93907ae076cc760b6f768a4f8901f8a68095258fb23a9dc664073479ae41ade5"
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

