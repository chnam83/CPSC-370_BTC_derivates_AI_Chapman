import React, { useEffect } from 'react';
import { Blockchain1 } from './Blockchain1';
import { Blockchain2 } from './Blockchain2';

function App() {
  useEffect(() => {
    const blockchain1 = new Blockchain1();
    const blockchain2 = new Blockchain2(blockchain1);

    blockchain2.updateState('test', 'value');

    console.log(blockchain1.getState()); // { test: 'value' }
    console.log(blockchain2.getState()); // { test: 'value' }
  }, []);

  return (
    <div className="App">
      Check the console for blockchain states.
    </div>
  );
}

export default App;
