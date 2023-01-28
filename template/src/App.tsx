import React from 'react';
import './App.css';
import {controllerMapping, layoutMapping, AccessCheck, skipAccessCheck} from "./conf/ApplicationConfig";
import {ReactRorApp} from "react-ror";

function App() {
  return (
      <ReactRorApp controllerMapping={controllerMapping} layoutMapping={layoutMapping} accessCheck={AccessCheck} skipAccessCheck={skipAccessCheck} />
  );
}

export default App;
