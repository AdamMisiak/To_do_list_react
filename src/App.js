import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [inputProject, setInputProject] = useState("");
  const [todos, setTodos] = useState([])
  const [projects, setProjects] = useState([{text:"None", id:0.0}])
  const [priority, setPriority] = useState("All")
  const [project, setProject] = useState("All")
  const [filterPriority, setFilterPriority] = useState([])
  const [filterProject, setFilterProject] = useState([])

  useEffect(() => {
    filterPriorityHandler();
  }, [todos, priority, project]);

  const filterPriorityHandler = () => {
    switch(priority){
      case "low":
        setFilterPriority(todos.filter(todo => todo.priority === "low"));
        // if (project !== "All"){
        //   setFilterPriority(filterPriority.filter(todo => todo.project === project));
        // }
        break;
      case "medium":
        setFilterPriority(todos.filter(todo => todo.priority === "medium"));
        // if (project !== "All"){
        //   setFilterPriority(filterPriority.filter(todo => todo.project === project));
        // }
        break;
      case "high":
        setFilterPriority(todos.filter(todo => todo.priority === "high"));
        // if (project !== "All"){
        //   setFilterPriority(filterPriority.filter(todo => todo.project === project));
        // }
        break;
      default:
        setFilterPriority(todos);
        // if (project !== "All"){
        //   setFilterPriority(filterPriority.filter(todo => todo.project === project));
        // }
        break;
    }
  }

  // useEffect(() => {
  //   filterProjectHandler();
  // }, [todos, project]);

  // const filterProjectHandler = () => {
  //   setFilterProject(todos.filter(todo => todo.project === project));
  // }

  return (
    <div>
      <header>
        <h1>To Do App</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        projects={projects}
        setProjects={setProjects}
        setProject={setProject}
        inputText={inputText}
        inputProject={inputProject}
        setInputText={setInputText}
        setInputProject={setInputProject}
        setPriority={setPriority}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filterPriority={filterPriority}
        projects={projects}
        setProjects={setProjects}
      />
      
    </div>
  );
}

export default App;