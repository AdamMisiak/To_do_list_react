import React, { useState, useEffect } from 'react';
import './styles/App.css';

import Form from './components/Form'
import TasksContainer from './components/TasksContainer'

function App() {
  const [inputTask, setInputTask] = useState("");
  const [inputGroup, setInputGroup] = useState("");

  const [tasks, setTasks] = useState([])
  const [groups, setGroups] = useState([{text:"None", id:0.0}])

  const [priorityFilter, setPriorityFilter] = useState("All")
  const [groupFilter, setGroupFilter] = useState("All")
  const [filteredTasks, setFilteredTasks] = useState([])


  useEffect(() => {
    getLocalTasks();
    getLocalGroups();
  }, []);

  useEffect(() => {
    filteredTasksHandler();
    saveLocalTasks();
    saveLocalGroups();
  }, [tasks, priorityFilter, groupFilter]);

  const filteredTasksHandler = () => {
    switch(priorityFilter){
      case "low":
        if (groupFilter !== "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "low" && task.group === groupFilter));
        } else if (groupFilter === "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "low"));
        }
        break;
      case "medium":
        if (groupFilter !== "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "medium" && task.group === groupFilter));
        } else if (groupFilter === "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "medium"));
        }
        break;
      case "high":
        if (groupFilter !== "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "high" && task.group === groupFilter));
        } else if (groupFilter === "All"){
          setFilteredTasks(tasks.filter(task => task.priority === "high"));
        }
        break;
      default:
        if (groupFilter !== "All"){
          setFilteredTasks(tasks.filter(task => task.group === groupFilter));
        } else if (groupFilter === "All"){
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

  const saveLocalGroups = () => {
    localStorage.setItem('groups', JSON.stringify(groups));
  };

  const getLocalGroups = () => {
    if (localStorage.getItem('groups') === null){
      localStorage.setItem('groups', JSON.stringify([]));
    } else {
      let projectsLocal = JSON.parse(localStorage.getItem('groups'));
      setGroups(projectsLocal)
    }
  };

  return (
    <div>
      <header>
        <h1>To Do App</h1>
      </header>
      <Form
        tasks={tasks}
        groups={groups}
        inputTask={inputTask}
        setInputTask={setInputTask}
        inputGroup={inputGroup}
        setInputGroup={setInputGroup}
        setTasks={setTasks}
        setGroups={setGroups}
        setPriorityFilter={setPriorityFilter}
        setGroupFilter={setGroupFilter}
      />
      <TasksContainer 
        tasks={tasks} 
        groups={groups}
        setTasks={setTasks} 
        filteredTasks={filteredTasks}
      />    
    </div>
  );
}

export default App;