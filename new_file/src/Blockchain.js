import React, { Component } from 'react';
import crypto from 'crypto-js';

class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
    }
}

class Blockchain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chain: [this.createGenesisBlock()]
        };
    }

    createGenesisBlock() {
        let index = 0;
        let timestamp = Date.now();
        let data = 'Genesis Block';
        let previousHash = '0';
        let hash = this.calculateHash(index, previousHash, timestamp, data);
        return new Block(index, previousHash, timestamp, data, hash);
    }

    calculateHash(index, previousHash, timestamp, data) {
        return crypto.SHA256(index + previousHash + timestamp + data).toString();
    }

    addBlock(data) {
        let chain = this.state.chain;
        let index = chain.length;
        let timestamp = Date.now();
        let previousHash = chain[chain.length - 1].hash;
        let hash = this.calculateHash(index, previousHash, timestamp, data);
        let newBlock = new Block(index, previousHash, timestamp, data, hash);
        chain.push(newBlock);
        this.setState({ chain: chain });
    }

    render() {
        return (
            <div>
                {this.state.chain.map((block, index) => (
                    <div key={index}>
                        <h2>Block #{block.index}</h2>
                        <h3>Data: {block.data}</h3>
                        <h4>Hash: {block.hash}</h4>
                        <h4>Previous Hash: {block.previousHash}</h4>
                    </div>
                ))}
            </div>
        );
    }
}

export default Blockchain;
