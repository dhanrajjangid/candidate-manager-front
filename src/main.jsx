import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer as well
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer /> {/* Add ToastContainer component here */}
  </React.StrictMode>,
  document.getElementById('root')
);