import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AuthContextProvider } from './context/AuthProvider';

// Importação do servidor MirageJS
import './server';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthContextProvider>:
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
