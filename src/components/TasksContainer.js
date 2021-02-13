import React from "react";
import { useSelector } from 'react-redux';

import Task from "./Task";

import { getTasks } from '../actions/tasks';
import '../styles/TasksContainer.css'

const TasksContainer = ({
  // tasks,
  groups,
  setTasks,
  filteredTasks,
}) => {
  const tasks = useSelector(state => state.task.tasks)

  return(
    <div className="tasks-container">
      <ul className="tasks-list">
        {filteredTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            text={task.text}
            tasks={tasks}
            groups={groups}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
}

export default TasksContainer;
