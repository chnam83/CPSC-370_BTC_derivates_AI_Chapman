import React from 'react';
import Blockchain from './Blockchain';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blockchain: []
        };
    }

    // Add methods to add a new block and validate the blockchain here

    render() {
        return (
            <div>
                <h1>Blockchain</h1>
                <Blockchain chain={this.state.blockchain} />
            </div>
        );
    }
}

export default App;
