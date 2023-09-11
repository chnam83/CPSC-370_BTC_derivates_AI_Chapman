import React from 'react';

class Block extends React.Component {
    render() {
        return (
            <div>
                <h2>Block #{this.props.index}</h2>
                <h3>Data: {this.props.data}</h3>
                <h3>Timestamp: {this.props.timestamp}</h3>
                <h3>Hash: {this.props.hash}</h3>
                <h3>Previous Hash: {this.props.previous_hash}</h3>
            </div>
        );
    }
}

export default Block;
import React from 'react';

class Block extends React.Component {
    render() {
        return (
            <div>
                <h2>Block #{this.props.index}</h2>
                <h3>Data: {this.props.data}</h3>
                <h3>Timestamp: {this.props.timestamp}</h3>
                <h3>Hash: {this.props.hash}</h3>
                <h3>Previous Hash: {this.props.previousHash}</h3>
            </div>
        );
    }
}

export default Block;
import sha256 from 'crypto-js/sha256';

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

export default Block;
import sha256 from 'crypto-js/sha256';

class Block {
    constructor(index, previousHash, timestamp, data, hash, position, direction) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
        this.position = position;
        this.direction = direction;
    }

    calculateHash() {
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + JSON.stringify(this.position) + this.direction).toString();
    }
}

export default Block;
