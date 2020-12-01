import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from './Pages/Base/Base';
import About from './Pages/About/About';
import reportWebVitals from './reportWebVitals';
import InfoContainer from './infoContainer';


ReactDOM.render(
  <React.StrictMode>
    <InfoContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();