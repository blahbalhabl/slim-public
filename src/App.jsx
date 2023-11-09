import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import App__container from './components/container';

function App() {
  const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3500/api';
  const [enacted, setEnacted] = useState([]);

  const sendRequest = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/public-ordinances`);
      console.log(res.data)
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
      
      <Header/>
      <div className='App__container'>
      <ul>
       { enacted.map((enacted, i) => (
          <>
          {console.log(enacted)}
          <li key={i}>{enacted.title}</li>
          </>
        ))}
      </ul>
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Tittle</th>
          <th>Date</th>
          <th>Size</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      </div>
      
      <Footer/>
    </div>
  );
  
}

export default App;
