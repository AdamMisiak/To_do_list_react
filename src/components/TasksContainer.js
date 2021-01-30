import React from "react";
import Task from "./Task";

const TasksContainer = ({
  tasks,
  setTasks,
  filteredTasks,
  projects,
  setProjects,
}) => (
  <div className="tasks-container">
    <ul className="tasks-list">
      {filteredTasks.map((task) => (
        <Task
          tasks={tasks}
          setTasks={setTasks}
          task={task}
          key={task.id}
          text={task.text}
          projects={projects}
          setProjects={setProjects}
        />
      ))}
    </ul>
  </div>
);

export default TasksContainer;
