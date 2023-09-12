import React from 'react';
import Block from './Block';

class Blockchain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chain: props.chain
        };
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
                    />
                ))}
            </div>
        );
    }
}

export default Blockchain;
