import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {RootStateProvider} from "./store/RootStateContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RootStateProvider>
    <App/>
  </RootStateProvider>
);

reportWebVitals();
