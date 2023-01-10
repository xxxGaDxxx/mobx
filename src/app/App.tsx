import React from 'react';
import './App.css';
import {Todo} from "../features/todo/Todo";
import {Counter} from "../features/counter/Counter";


function App() {
  return (
    <div className="App">
      <Counter/>
      <Todo/>
    </div>
  );
}

export default App;
