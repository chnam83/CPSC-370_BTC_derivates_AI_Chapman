import React from 'react';
import Snake from './snake_game_react/src/components/Snake';
import Blockchain from './Blockchain';

class App extends React.Component {
    render() {
        return (
            <div>
                <Snake />
                <Blockchain />
            </div>
        );
    }
}

export default App;
