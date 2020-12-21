import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [priority, setPriority] = useState("all")
  const [filterPriority, setFilterPriority] = useState([])

  const filterPriorityHandler = () => {
    switch(priority){
      case "low":
        setFilterPriority(todos.filter(todo => todo.priority === "low"));
        break;
      case "medium":
        setFilterPriority(todos.filter(todo => todo.priority === "medium"));
        break;
      case "high":
        setFilterPriority(todos.filter(todo => todo.priority === "high"));
        break;
      default:
        setFilterPriority(todos);
        break;
    }
  }

  return (
    <div>
      <header>
        <h1>To Do App</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setPriority={setPriority}
      />
      <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;