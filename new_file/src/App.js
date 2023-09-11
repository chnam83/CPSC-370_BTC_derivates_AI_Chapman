import React, { Component } from 'react';
import Blockchain from './Blockchain';
import Block from './Block';

class App extends Component {
    constructor(props) {
        super(props);

        this.blockchain = new Blockchain();
        this.blockchain.addBlock(new Block(1, Date.now(), { amount: 4 }));
        this.blockchain.addBlock(new Block(2, Date.now(), { amount: 8 }));
    }

    render() {
        return (
            <div>
                <h1>Blockchain Demo</h1>
                <div>
                    {this.blockchain.chain.map((block, index) => (
                        <div key={index}>
                            <h2>Block #{block.index}</h2>
                            <h3>Data: {JSON.stringify(block.data)}</h3>
                            <h3>Hash: {block.hash}</h3>
                            <h3>Previous Hash: {block.previousHash}</h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Blockchain from './Blockchain';
import Block from './Block';

class App extends Component {
    constructor(props) {
        super(props);

        this.blockchain = new Blockchain();
        this.blockchain.addBlock(new Block(1, Date.now(), { amount: 4 }));
        this.blockchain.addBlock(new Block(2, Date.now(), { amount: 8 }));
    }

    render() {
        return (
            <div>
                <h1>Blockchain Demo</h1>
                <div>
                    {this.blockchain.chain.map((block, index) => (
                        <div key={index}>
                            <h2>Block #{block.index}</h2>
                            <h3>Data: {JSON.stringify(block.data)}</h3>
                            <h3>Hash: {block.hash}</h3>
                            <h3>Previous Hash: {block.previousHash}</h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
