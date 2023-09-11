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
