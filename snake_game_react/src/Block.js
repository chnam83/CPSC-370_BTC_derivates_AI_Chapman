import React from 'react';

class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            timestamp: props.timestamp,
            data: props.data,
            previousHash: props.previousHash,
            hash: props.hash
        };
    }

    render() {
        return (
            <div>
                <h2>Block #{this.state.index}</h2>
                <div>Timestamp: {this.state.timestamp.toString()}</div>
                <div>Data: {this.state.data}</div>
                <div>Previous Hash: {this.state.previousHash}</div>
                <div>Hash: {this.state.hash}</div>
            </div>
        );
    }
}

export default Block;
