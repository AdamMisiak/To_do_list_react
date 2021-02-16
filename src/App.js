import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles/App.css';
import Form from './components/Form'
import TasksContainer from './components/TasksContainer'

function App() {
  const [inputTask, setInputTask] = useState("");
  const [inputGroup, setInputGroup] = useState("");

  // const [tasks, setTasks] = useState([])
  // const [groups, setGroups] = useState([{text:"None", id:0.0}])

  const [priorityFilter, setPriorityFilter] = useState("All")
  const [groupFilter, setGroupFilter] = useState("All")
  const [filteredTasks, setFilteredTasks] = useState([])

  const tasks = useSelector(state => state.task.tasks)
  const groups = useSelector(state => state.group.groups)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getLocalTasks();
  //   getLocalGroups();
  // }, []);

  useEffect(() => {
    filteredTasksHandler();
    saveLocalTasks();
    saveLocalGroups();
  }, [tasks, groups, priorityFilter, groupFilter]);

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

  // const getLocalTasks = () => {
  //   if (localStorage.getItem('tasks') === null){
  //     localStorage.setItem('tasks', JSON.stringify([]));
  //   } else {
  //     let tasksLocal = JSON.parse(localStorage.getItem('tasks'));
  //     dispatch(addTask(tasksLocal))
  //     // setTasks(tasksLocal)
  //   }
  // };

  const saveLocalGroups = () => {
    localStorage.setItem('groups', JSON.stringify(groups));
  };

  // const getLocalGroups = () => {
  //   if (localStorage.getItem('groups') === null){
  //     localStorage.setItem('groups', JSON.stringify([]));
  //   } else {
  //     let groupsLocal = JSON.parse(localStorage.getItem('groups'));
  //     setGroups(groupsLocal)
  //   }
  // };

  return (
      <div>
            <header>
              <h1>To Do App</h1>
            </header>
            <Form
              inputTask={inputTask}
              setInputTask={setInputTask}
              inputGroup={inputGroup}
              setInputGroup={setInputGroup}
              setPriorityFilter={setPriorityFilter}
              setGroupFilter={setGroupFilter}
            />
            <TasksContainer 
              filteredTasks={filteredTasks}
            />    
          </div>
  );
}

export default App;