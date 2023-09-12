import React from 'react';
import Blockchain from './Blockchain';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blockchain: [],
            snake: [{ x: 10, y: 10 }],
            direction: 'right'
        };
    }

    // Add methods to add a new block and validate the blockchain here

    moveSnake = () => {
        const newSnake = [...this.state.snake];
        const head = Object.assign({}, newSnake[0]); // copy head

        // update the position of the head based on the direction
        switch (this.state.direction) {
            case 'right':
                head.x++;
                break;
            case 'left':
                head.x--;
                break;
            case 'up':
                head.y--;
                break;
            case 'down':
                head.y++;
                break;
            default:
                break;
        }

        newSnake.unshift(head); // add new head to snake
        newSnake.pop(); // remove tail

        this.setState({ snake: newSnake });

        // add a new block to the blockchain with the new position and direction
        this.refs.blockchain.addBlock('Snake moved', head, this.state.direction);
    }

    render() {
        return (
            <div>
                <h1>Blockchain</h1>
                <Blockchain ref="blockchain" chain={this.state.blockchain} />
                <button onClick={this.moveSnake}>Move Snake</button>
            </div>
        );
    }
}

export default App;
import React from 'react';
import Snake from './components/Snake';
import Food from './components/Food';

function App() {
  return (
    <div className="App">
      <Snake />
      <Food />
    </div>
  );
}

export default App;
