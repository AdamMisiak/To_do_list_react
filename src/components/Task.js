import React from 'react';
import '../styles/Task.css'


const Task = ({ 
    task,
    text, 
    tasks, 
    projects,
    setTasks, 
}) => {
    const priorityHandler = () => {
        setTasks(tasks.map((element) => {
            if (element.id === task.id){
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

    const deleteHandler = () => setTasks(tasks.filter((element) => element.id !== task.id));

    const completeHandler = () => {
        setTasks(tasks.map((element) => {
            if (element.id === task.id){
                return {
                    ...element, completed: !element.completed
                };
            }
            return element;
        })
        );
    }

    const hiddenHandler = () => {
        setTasks(tasks.map((element) => {    
            if (element.id === task.id){
                    return {
                        ...element,
                        details: element.details === 'hidden' ? 'unhidden': 'hidden'
                    };
                }
                return element;
            }
        )
        );
    };

    const projectHandler = (e) => {
        setTasks(tasks.map((element) => {  
            if (element.id === task.id){
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
            <div className={`task-box ${task.priority} ${task.completed ? "completed" : ""}`}>
                <li className="task-item">
                    {text}
                </li>
                <button onClick={hiddenHandler} className="info-button"><i className="fas fa-info-circle"></i></button>
                <button onClick={priorityHandler} className="priority-button"><i className="fas fa-layer-group"></i></button>
                <button onClick={completeHandler} className="complete-button"><i className="fas fa-check-circle"></i></button>
                <button onClick={deleteHandler} className="delete-button"><i className="fas fa-minus-circle"></i></button>
            </div>
            <div className={`task-details ${task.priority} ${task.completed ? "completed" : ""} ${task.details}`}>
                <div className="task-project">
                    Project:
                    <select value={task.project} onChange={projectHandler} className="select-project">
                        {projects.map((project) => (
                            <option key={project.id} value={project.text}>{project.text}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>

    )   
}

export default Task;