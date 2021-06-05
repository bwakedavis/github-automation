

const ethers = require('ethers');

const mnemonic = 'write animal limit reunion ramp dumb join pudding eyebrow educate jealous chapter';
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;