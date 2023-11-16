import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3500/api';
  const [ordinances, setOrdinances] = useState([]);

  const sendRequest = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/public-ordinances`);

      const enacted = res.data.municipalEnacted;
      const approved = res.data.municipalApproved;
      const ordinances = enacted.concat(approved);

      // Custom comparator function to sort ordinances by date
      ordinances.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

      setOrdinances(ordinances);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = {
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const formattedDate = newDate.toLocaleString(undefined, options);
    return formattedDate;
  };

  const handleDownload = async (e, filename, series) => {
    // download logic here
    e.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}/public-download/${filename}?type=ordinances&series=${series}`, {
        responseType: 'blob', // Set the response type to 'blob' to handle binary data
      });
      // Create a blob object from the binary data
      const blob = new Blob([response.data]);
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      // Create a link element to trigger the download
      const fileLink = document.createElement('a');
      fileLink.href = url;
      fileLink.download = filename;
      fileLink.click();
      // Clean up the URL created for the blob
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className='App__container'>
        <table className='App__Table'>
          <thead className='App__Table__Header'>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Size</th>
            <th></th>
          </tr>
          </thead>
          <tbody className='App__Table__Body'>
            {ordinances.map((ordinance, i) => (
              <tr className='App__Table__Row' key={i}>
                <td>{ordinance.title}</td>
                <td>{formatDate(ordinance.createdAt)}</td>
                <td>{ordinance.size}</td>
                <td>
                  <button
                    className='App__Download__Button'
                    onClick={(e) => handleDownload(e, ordinance.file, ordinance.series)}>
                      Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
