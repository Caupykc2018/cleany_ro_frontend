import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';

ReactDOM.render(
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </StoreProvider>,
  document.getElementById('root')
);
