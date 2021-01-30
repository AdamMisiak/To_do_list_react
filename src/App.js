import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import TasksContainer from './components/TasksContainer'

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
          setFilteredTasks(tasks.filter(task => task.priority === "low" && task.project === projectFilter));
        } else if (projectFilter === "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "low"));
        }
        break;
      case "medium":
        if (projectFilter !== "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "medium" && task.project === projectFilter));
        } else if (projectFilter === "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "medium"));
        }
        break;
      case "high":
        if (projectFilter !== "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "high" && task.project === projectFilter));
        } else if (projectFilter === "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "high"));
        }
        break;
      default:
        if (projectFilter !== "All"){
          setFilteredTasks(tasks.filter(task => task.project === projectFilter));
        } else if (projectFilter === "All"){
          setFilteredTasks(tasks);
        }
        break;
    }
  };

  const saveLocalTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem('tasks') === null){
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      let tasksLocal = JSON.parse(localStorage.getItem('tasks'));
      setTasks(tasksLocal)
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
        projects={projects}
        inputTask={inputTask}
        setInputTask={setInputTask}
        inputProject={inputProject}
        setInputProject={setInputProject}
        setTasks={setTasks}
        setProjects={setProjects}
        setPriorityFilter={setPriorityFilter}
        setProjectFilter={setProjectFilter}
      />
      <TasksContainer 
        tasks={tasks} 
        projects={projects}
        setTasks={setTasks} 
        filteredTasks={filteredTasks}
      />    
    </div>
  );
}

export default App;