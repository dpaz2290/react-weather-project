import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Pasto"/>
    <footer>
      This project was coded by Matt Delac and is {" "}
      <a href= "https://github.com/dpaz2290/react-weather-project" target="_blank">
        open sourced on GitHub
        </a>
    </footer>
    </div>
    </div>
  );
}


