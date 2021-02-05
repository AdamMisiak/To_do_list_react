import React from "react";
import Task from "./Task";
import '../styles/TasksContainer.css'

const TasksContainer = ({
  tasks,
  groups,
  setTasks,
  filteredTasks,
}) => (
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

export default TasksContainer;
