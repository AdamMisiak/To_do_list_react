import React from 'react';


const Todo = ({ text, todo, todos, setTodos, projects, setProjects }) => {
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

    const hiddenHandler = () => {
        setTodos(todos.map((element) => {    
            if (element.id === todo.id){
                if (element.details === "hidden"){
                    return{
                        ...element, details: "unhidden"
                    };
                }
                else if (element.details === "unhidden"){
                    return{
                        ...element, details: "hidden"
                    };
                }
                }
                return element;
            }
        )
        );
    };

    const projectHandler = (e) => {
        setTodos(todos.map((element) => {  
            if (element.id === todo.id){
                return{
                    ...element, project: e.target.value
                };
            }  
            return element;
        }
        )
        );
    };
    
    return(
        <div className="task">
            <div className={`task-box ${todo.priority} ${todo.completed ? "completed" : ""}`}>
                <li className="task-item">
                    {text}
                </li>
                <button onClick={hiddenHandler} className="info-button"><i className="fas fa-info-circle"></i></button>
                <button onClick={priorityHandler} className="priority-button"><i className="fas fa-layer-group"></i></button>
                <button onClick={completeHandler} className="complete-button"><i className="fas fa-check-circle"></i></button>
                <button onClick={deleteHandler} className="delete-button"><i className="fas fa-minus-circle"></i></button>
            </div>
            <div className={`task-details ${todo.priority} ${todo.completed ? "completed" : ""} ${todo.details}`}>
                <div className="task-project">
                    Project:
                    <select onChange={projectHandler} id="select-project" className="select-project">
                        {projects.map((project) => (
                            <option key={project.id} value={project.text}>{project.text}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>

    )   
}

export default Todo;