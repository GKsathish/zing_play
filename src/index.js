import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <Router> {/* Wrap your App component with Router */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
);


reportWebVitals();
