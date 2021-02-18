import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles/App.css';
import * as Constants from './constants';
import { writeTasks } from './actions/tasks';
import { writeGroups } from './actions/groups';
import Form from './components/Form'
import TasksContainer from './components/TasksContainer'

function App() {
  const [inputTask, setInputTask] = useState("");
  const [inputGroup, setInputGroup] = useState("");

  const [priorityFilter, setPriorityFilter] = useState("All")
  const [groupFilter, setGroupFilter] = useState("All")
  const [filteredTasks, setFilteredTasks] = useState([])

  const tasks = useSelector(state => state.task.tasks)
  const groups = useSelector(state => state.group.groups)
  const dispatch = useDispatch();

  useEffect(() => {
    getLocalTasks();
    getLocalGroups();
  }, []);

  useEffect(() => {
    filteredTasksHandler();
    saveLocalTasks();
    saveLocalGroups();
  }, [tasks, groups, priorityFilter, groupFilter]);


  const filteredTasksHandler = () => {
    if (groupFilter === Constants.ALL) {
      if (priorityFilter === Constants.ALL){
        setFilteredTasks(tasks);
      } else {
        setFilteredTasks(tasks.filter(task => task.priority === priorityFilter));
      }
    } else {
      if (priorityFilter === Constants.ALL){
        setFilteredTasks(tasks.filter(task => task.group === groupFilter));
      } else {
        setFilteredTasks(tasks.filter(task => task.priority === priorityFilter && task.group === groupFilter));
      }
    }
  };

  const saveLocalTasks = () => {
    localStorage.setItem(Constants.TASKS, JSON.stringify(tasks));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem(Constants.TASKS) === null){
      localStorage.setItem(Constants.TASKS, JSON.stringify([]));
    } else {
      let tasksLocal = JSON.parse(localStorage.getItem(Constants.TASKS));
      dispatch(writeTasks(tasksLocal))
    }
  };

  const saveLocalGroups = () => {
    localStorage.setItem(Constants.GROUPS, JSON.stringify(groups));
  };

  const getLocalGroups = () => {
    if (localStorage.getItem(Constants.GROUPS) === null){
      localStorage.setItem(Constants.GROUPS, JSON.stringify([]));
    } else {
      let groupsLocal = JSON.parse(localStorage.getItem(Constants.GROUPS));
      dispatch(writeGroups(groupsLocal))
    }
  };

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