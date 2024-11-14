const Block = require('./block');

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0,'Genesis Block','0')
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(data) {
        let idx = this.chain.length;
        let previousHash = this.getLastBlock().hash;
        let newBlock = new Block(idx, data, previousHash)
        this.chain.push(newBlock); 
    }
    isValid(){
        for (let i = 1; i < this.chain.length; i++) {
            let currentBlock = this.chain[i];
            let previousBlock = this.chain[i-1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

module.exports = BlockChain;