import React from 'react';
import './App.css';
import Counter from "./components/Count";
import UserName from "./components/UserName";
import TodoList from "./components/TodoList/index.js";

function App() {
  return (
    <div className="App">
      <Counter/>
      <UserName/>
      <TodoList/>
    </div>
  );
}

export default App;
