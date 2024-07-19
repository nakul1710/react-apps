import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './app'

const root = ReactDOM.createRoot(
  document.getElementById('nakul') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

