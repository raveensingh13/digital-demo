import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { Layout } from './utils/Layout/Layout'

import './App.css';

// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="">
        </div>
        <div>
          <Router>
            <Layout />
        </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;

