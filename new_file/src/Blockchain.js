import React, { Component } from 'react';
import Block from './Block';
import crypto from 'crypto-js';

class Blockchain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chain: [{
                index: 0,
                timestamp: new Date().getTime(),
                data: 'Genesis Block',
                previousHash: '0',
                hash: this.calculateHash(0, '0', new Date().getTime(), 'Genesis Block')
            }]
        };
    }

    calculateHash(index, previousHash, timestamp, data) {
        return crypto.SHA256(index + previousHash + timestamp + data).toString();
    }

    addBlock(data) {
        const index = this.state.chain.length;
        const timestamp = new Date().getTime();
        const previousHash = this.state.chain[this.state.chain.length - 1].hash;
        const hash = this.calculateHash(index, previousHash, timestamp, data);

        this.setState({
            chain: [...this.state.chain, {
                index,
                timestamp,
                data,
                previousHash,
                hash
            }]
        });
    }

    render() {
        return (
            <div>
                {this.state.chain.map((block, index) => (
                    <Block
                        key={index}
                        index={block.index}
                        timestamp={block.timestamp}
                        data={block.data}
                        hash={block.hash}
                        previousHash={block.previousHash}
                    />
                ))}
            </div>
        );
    }
}

export default Blockchain;
class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "0", 0, "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

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

export default Blockchain;
import sha256 from 'crypto-js/sha256';
import Block from './Block';

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "0", Date.now(), "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

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

export default Blockchain;
