import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';

// Function to set up Axios with the base URL from the environment variable
const setupAxios = () => {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

  axios.defaults.headers = {
    'Cache-Control': 'no-cache,no-store',
    Pragma: 'no-cache',
    Expires: '0',
  };
};

// Set up Axios
setupAxios();

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
