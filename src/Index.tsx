import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'; // Include this if you have global styles

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline /> {/* This is a Material-UI component for baseline styles */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
