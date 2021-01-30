import React from "react";
import Task from "./Task";

const TasksContainer = ({
  tasks,
  projects,
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
          projects={projects}
          setTasks={setTasks}
        />
      ))}
    </ul>
  </div>
);

export default TasksContainer;
