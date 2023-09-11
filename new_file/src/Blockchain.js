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
