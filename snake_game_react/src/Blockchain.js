import React, { Component } from 'react';
import crypto from 'crypto-js';
import Block from './Block';

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

    calculateHash(index, previousHash, timestamp, data, position, direction) {
        return crypto.SHA256(index + previousHash + timestamp + data + JSON.stringify(position) + direction).toString();
    }

    addBlock(data, position, direction) {
        let chain = this.state.chain;
        let index = chain.length;
        let timestamp = Date.now();
        let previousHash = chain[chain.length - 1].hash;
        let hash = this.calculateHash(index, previousHash, timestamp, data, position, direction);
        let newBlock = new Block(index, previousHash, timestamp, data, hash, position, direction);
        chain.push(newBlock);
        this.setState({ chain: chain });
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
                        previousHash={block.previousHash}
                        hash={block.hash}
                        position={block.position}
                        direction={block.direction}
                    />
                ))}
            </div>
        );
    }
}

export default Blockchain;
