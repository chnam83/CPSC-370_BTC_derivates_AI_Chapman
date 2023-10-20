import React, { useState } from 'react';
import axios from 'axios';
import MainUI from './MainUI';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://blockchain.info/rawaddr/${inputValue}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainUI />
  );
}

export default App;
