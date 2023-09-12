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
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Add your components here */}
    </div>
  );
}

export default App;
