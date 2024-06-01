import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/NomadWheels">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
