import React from "react";
import Todo from "./Todo";

const TaskContainer = ({
  todos,
  setTodos,
  filterTasks,
  projects,
  setProjects,
}) => (
  <div className="task-container">
    <ul className="task-list">
      {filterTasks.map((todo) => (
        <Todo
          todos={todos}
          setTodos={setTodos}
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
