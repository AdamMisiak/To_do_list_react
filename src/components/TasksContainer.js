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
      {filteredTasks.map((todo) => (
        <Task
          tasks={tasks}
          setTasks={setTasks}
          todo={todo}
          key={todo.id}
          text={todo.text}
          projects={projects}
          setProjects={setProjects}
        />
      ))}
    </ul>
  </div>
);

export default TasksContainer;
