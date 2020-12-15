import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    return (
    <div className="task-container">
        <ul id="task-list" className="task-list">
            {todos.map((todo) => (
                <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} text={todo.text} />
            ))}
        </ul>
    </div>
    );
};


export default TodoList;