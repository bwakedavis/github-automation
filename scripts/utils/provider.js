const ethers = require('ethers');

const provider = ethers.getDefaultProvider('ropsten', {
  infura: 'infura api'
});

module.exports = provider;