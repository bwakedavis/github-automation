const ethers = require('ethers');

const wallet = ethers.Wallet.createRandom();

console.log(`Mnemonic : ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

//Mnemonic : write animal limit reunion ramp dumb join pudding eyebrow educate jealous chapter
//Address: 0x16637fFcd20157483Dc96e39B3F0f994DB360A48