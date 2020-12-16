import React, { useState } from 'react';
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
      case 'completed':
        // NEED TO BE CHANGE TO PRIOIRTY NOT STATUS
        setFilterPriority(todos.filter(todo => todo.completed === true))
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