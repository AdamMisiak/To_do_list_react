import React from 'react';


const Todo = ({ text, todo, todos, setTodos }) => {
    const priorityHandler = () => {
        setTodos(todos.map((element) => {
            if (element.id === todo.id){
                if (element.priority === 'low'){
                    return{
                        ...element, priority: "medium"
                    };
                }
                else if (element.priority === 'medium'){
                    return{
                        ...element, priority: "high"
                    };
                }
                else if (element.priority === 'high'){
                    return{
                        ...element, priority: "low"
                    };
                }
 
            }
            return element;
        })
        );
    }

    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((element) => {
            if (element.id === todo.id){
                return{
                    ...element, completed: !element.completed
                };
            }
            return element;
        })
        );
    }

    return(
        <div className={`task-box ${todo.priority} ${todo.completed ? "completed" : ""}`}>
            <li className="task-item">
                {text}
            </li>
            <button className="info-button"><i className="fas fa-info-circle"></i></button>
            <button onClick={priorityHandler} className="priority-button"><i className="fas fa-layer-group"></i></button>
            <button onClick={completeHandler} className="complete-button"><i className="fas fa-check-circle"></i></button>
            <button onClick={deleteHandler} className="delete-button"><i className="fas fa-minus-circle"></i></button>
        </div>
    )
}

export default Todo;