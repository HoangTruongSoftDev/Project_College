const Block = require('./block');
const BlockChain = require('./blockChain');

let bitCoin = new BlockChain();

bitCoin.addBlock({'amount': 200})
bitCoin.addBlock({'amount': 300})
bitCoin.addBlock({'amount': 100})
console.log(JSON.stringify(bitCoin, null, 4));
console.log('is chain valid: ' + bitCoin.isValid());

bitCoin.chain[1].data = {'from': 'Truong', 'to': 'Bank', 'amount': '1000'};
bitCoin.chain[1].hash = bitCoin.chain[1].calculateHash();
console.log('After change Is chain valid: ' + bitCoin.isValid());
console.log(JSON.stringify(bitCoin, null, 4));

