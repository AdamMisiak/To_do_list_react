import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import TaskContainer from './components/TaskContainer'

function App() {
  const [inputTask, setInputTask] = useState("");
  const [inputProject, setInputProject] = useState("");

  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([{text:"None", id:0.0}])

  const [priorityFilter, setPriorityFilter] = useState("All")
  const [projectFilter, setProjectFilter] = useState("All")
  const [filteredTasks, setFilteredTasks] = useState([])


  useEffect(() => {
    getLocalTasks();
    getLocalProjects();
  }, []);

  useEffect(() => {
    filteredTasksHandler();
    saveLocalTasks();
    saveLocalProjects();
  }, [tasks, priorityFilter, projectFilter]);

  const filteredTasksHandler = () => {
    switch(priorityFilter){
      case "low":
        if (projectFilter !== "All"){
          setFilteredTasks(tasks.filter(todo => todo.priority === "low" && todo.project === projectFilter));
        } else if (projectFilter === "All"){
          setFilteredTasks(tasks.filter(todo => todo.priority === "low"));
        }
        break;
      case "medium":
        if (projectFilter !== "All"){
          setFilteredTasks(tasks.filter(todo => todo.priority === "medium" && todo.project === projectFilter));
        } else if (projectFilter === "All"){
          setFilteredTasks(tasks.filter(todo => todo.priority === "medium"));
        }
        break;
      case "high":
        if (projectFilter !== "All"){
          setFilteredTasks(tasks.filter(todo => todo.priority === "high" && todo.project === projectFilter));
        } else if (projectFilter === "All"){
          setFilteredTasks(tasks.filter(todo => todo.priority === "high"));
        }
        break;
      default:
        if (projectFilter !== "All"){
          setFilteredTasks(tasks.filter(todo => todo.project === projectFilter));
        } else if (projectFilter === "All"){
          setFilteredTasks(tasks);
        }
        break;
    }
  };

  const saveLocalTasks = () => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
      setTasks(todosLocal)
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
        tasks={tasks}
        setTasks={setTasks}
        projects={projects}
        setProjects={setProjects}
        setProjectFilter={setProjectFilter}
        inputTask={inputTask}
        inputProject={inputProject}
        setInputTask={setInputTask}
        setInputProject={setInputProject}
        setPriorityFilter={setPriorityFilter}
      />
      <TaskContainer 
        tasks={tasks} 
        setTasks={setTasks} 
        filteredTasks={filteredTasks}
        projects={projects}
        setProjects={setProjects}
      />
      
    </div>
  );
}

export default App;