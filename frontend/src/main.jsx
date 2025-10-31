import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistor } from './redux/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ToastContainer
      position="bottom-center"
      autoClose={500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
      <App />
    </PersistGate>
  </Provider>,
  </React.StrictMode>
);

