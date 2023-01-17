import React from 'react';
import './App.css';
import {controllerMapping, layoutMapping, OnCheck} from "./conf/ApplicationConfig";
import {ReactRorApp} from "react-ror";

function App() {
  return (
      <ReactRorApp controllerMapping={controllerMapping} layoutMapping={layoutMapping} onCheck={OnCheck} />
  );
}

export default App;
