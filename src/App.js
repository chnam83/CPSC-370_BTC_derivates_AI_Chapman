import React from 'react';
import Block from './Block';

class App extends React.Component {
    state = {
        blockchain: []
    };

    componentDidMount() {
        // Here you should fetch the blockchain data from your server
        // and update the state. For now, we'll just use a static blockchain.
        this.setState({
            blockchain: [
                {
                    index: 0,
                    timestamp: '2021-01-01T00:00:00Z',
                    data: 'Genesis Block',
                    hash: '000000',
                    previous_hash: '000000'
                },
                {
                    index: 1,
                    timestamp: '2021-01-01T00:01:00Z',
                    data: 'Block #1',
                    hash: '123456',
                    previous_hash: '000000'
                }
            ]
        });
    }

    render() {
        return (
            <div>
                {this.state.blockchain.map((block, index) => (
                    <Block
                        key={index}
                        index={block.index}
                        timestamp={block.timestamp}
                        data={block.data}
                        hash={block.hash}
                        previous_hash={block.previous_hash}
                    />
                ))}
            </div>
        );
    }
}

export default App;
