import React, { Fragment } from "react";
import './App.css';

// components

import InputElements from "./components/InputElements"
import ListElements from "./components/ListElements"

function App() {
  return (
   <Fragment>
    <div className="container">
      <InputElements />
      <ListElements />
    </div>
    
   </Fragment>
  );
}

export default App;
