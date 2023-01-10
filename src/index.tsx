import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {RootStateProvider} from "./store/RootStateContext";
import {BrowserRouter} from "react-router-dom";
import {App} from "./app/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <RootStateProvider>
      <App/>
    </RootStateProvider>
  </BrowserRouter>
);

reportWebVitals();
