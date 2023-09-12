import React from 'react';
import web3 from './web3';

class Blockchain extends React.Component {
  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
  }

  render() {
    return (
      <div>
        <h1>Blockchain Component</h1>
      </div>
    );
  }
}

export default Blockchain;
