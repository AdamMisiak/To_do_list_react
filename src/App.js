import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [priorityFilter, setPriorityFilter] = useState("all")

  return (
    <div>
      <header>
        <h1>To Do App</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;