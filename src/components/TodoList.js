import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
    <div className="task-container">
        <ul id="task-list" className="task-list">
            {todos.map(todo => (
                <Todo text={todo.text} />
            ))}
        </ul>
    </div>
    );
};


export default TodoList;