import React from 'react';
import './styles.css';
import SearchEngine from './SearchEngine';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import ReactDOM from "react-dom";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="SearchEngine">
      <h1> Weather app </h1>
      <SearchEngine />
      <a href="https://github.com/amy-712/react-weather-app">Open Sourced</a> by Amy Walker
    </div>
  </StrictMode>,
  rootElement
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
