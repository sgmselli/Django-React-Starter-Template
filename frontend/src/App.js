import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {

    const fetchMessage = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/message/');
      setMessage(response.data.message)
    }
    fetchMessage();

  }, [])

  return (
    <div className="App">
      <h1>
        {message}
      </h1>
    </div>
  );
}

export default App;
