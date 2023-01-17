import React from 'react';
import './App.css';
import {controllerMapping, layoutMapping, AccessCheck} from "./conf/ApplicationConfig";
import {ReactRorApp} from "react-ror";

function App() {
  return (
      <ReactRorApp controllerMapping={controllerMapping} layoutMapping={layoutMapping} accessCheck={AccessCheck} />
  );
}

export default App;
