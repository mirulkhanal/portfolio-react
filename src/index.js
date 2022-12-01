import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import RepoProvider from './context/RepoContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RepoProvider>
      <App />
    </RepoProvider>
  </BrowserRouter>
);
