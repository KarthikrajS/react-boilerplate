import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProviders from './context/ContextProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </React.StrictMode>
);
