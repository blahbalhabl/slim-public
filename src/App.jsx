import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3500/api';
  const [enacted, setEnacted] = useState([]);

  const sendRequest = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/public-ordinances`);
      setEnacted(res.data.municipalEnacted);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div className="App">
      <ul>
        {enacted.map((enacted, i) => (
          <li key={i}>{enacted.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
