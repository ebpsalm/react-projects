import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Another from './context';
import './app.css';

ReactDOM.render(
  <React.StrictMode>
    <Another>
      <App />
    </Another>
  </React.StrictMode>,
  document.getElementById('root')
);
