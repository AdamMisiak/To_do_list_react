import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterTasks, projects, setProjects }) => {
    return (
    <div className="task-container">
        <ul id="task-list" className="task-list">
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
};


export default TodoList;