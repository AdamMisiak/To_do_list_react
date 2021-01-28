import React from "react";
import Todo from "./Todo";

const TaskContainer = ({
  tasks,
  setTasks,
  filterTasks,
  projects,
  setProjects,
}) => (
  <div className="task-container">
    <ul className="task-list">
      {filterTasks.map((todo) => (
        <Todo
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

export default TaskContainer;
