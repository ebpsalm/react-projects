import React from 'react';
import ReactDOM from 'react-dom';
import { Context } from './components/context';
import './dist/css/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
