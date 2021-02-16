import React from "react";

import Task from "./Task";
import '../styles/TasksContainer.css'

const TasksContainer = ({
  filteredTasks,
}) => {

  return(
    <div className="tasks-container">
      <ul className="tasks-list">
        {filteredTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            text={task.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TasksContainer;
