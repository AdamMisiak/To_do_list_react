import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import TaskContainer from './components/TaskContainer'

function App() {
  const [inputText, setInputText] = useState("");
  const [inputProject, setInputProject] = useState("");

  const [todos, setTodos] = useState([])
  const [projects, setProjects] = useState([{text:"None", id:0.0}])
  const [priority, setPriority] = useState("All")
  const [project, setProject] = useState("All")
  const [filterTasks, setFilterTasks] = useState([])


  useEffect(() => {
    getLocalTasks();
    getLocalProjects();
  }, []);

  useEffect(() => {
    filterTasksHandler();
    saveLocalTasks();
    saveLocalProjects();
  }, [todos, priority, project]);

  const filterTasksHandler = () => {
    switch(priority){
      case "low":
        if (project !== "All"){
          setFilterTasks(todos.filter(todo => todo.priority === "low" && todo.project === project));
        } else if (project === "All"){
          setFilterTasks(todos.filter(todo => todo.priority === "low"));
        }
        break;
      case "medium":
        if (project !== "All"){
          setFilterTasks(todos.filter(todo => todo.priority === "medium" && todo.project === project));
        } else if (project === "All"){
          setFilterTasks(todos.filter(todo => todo.priority === "medium"));
        }
        break;
      case "high":
        if (project !== "All"){
          setFilterTasks(todos.filter(todo => todo.priority === "high" && todo.project === project));
        } else if (project === "All"){
          setFilterTasks(todos.filter(todo => todo.priority === "high"));
        }
        break;
      default:
        if (project !== "All"){
          setFilterTasks(todos.filter(todo => todo.project === project));
        } else if (project === "All"){
          setFilterTasks(todos);
        }
        break;
    }
  };

  const saveLocalTasks = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todosLocal)
    }
  };

  const saveLocalProjects = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const getLocalProjects = () => {
    if (localStorage.getItem('projects') === null){
      localStorage.setItem('projects', JSON.stringify([]));
    } else {
      let projectsLocal = JSON.parse(localStorage.getItem('projects'));
      setProjects(projectsLocal)
    }
  };

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
      <TaskContainer 
        todos={todos} 
        setTodos={setTodos} 
        filterTasks={filterTasks}
        projects={projects}
        setProjects={setProjects}
      />
      
    </div>
  );
}

export default App;