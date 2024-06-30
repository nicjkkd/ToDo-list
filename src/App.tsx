import React from "react";
import ToDo from "./container/ToDo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDo userName="Nick" id="0" />
        <ToDo userName="Bohdan" id="1" />
        <ToDo userName="Kevin" id="2" />
      </header>
    </div>
  );
}

export default App;
