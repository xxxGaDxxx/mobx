import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Todo} from "./Todo";

function App() {
  return (
    <div className="App">
      <Counter/>
      <Todo/>
      <Todo/>
    </div>
  );
}

export default App;
