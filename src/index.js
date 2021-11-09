import React from 'react';
import { render } from 'react-snapshot';
import './reset.css';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
