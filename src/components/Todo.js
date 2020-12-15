import React from 'react';


const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        console.log(todo.id)
        setTodos(todos.filter((element) => element.id !== todo.id));
    };

    return(
        <div className="task-box">
            <li className="task-item">
                {text}
            </li>
            <button className="info-button"><i className="fas fa-info-circle"></i></button>
            <button className="priority-button"><i className="fas fa-layer-group"></i></button>
            <button className="complete-button"><i className="fas fa-check-circle"></i></button>
            <button onClick={deleteHandler} className="delete-button"><i className="fas fa-minus-circle"></i></button>
        </div>
    )
}

export default Todo;