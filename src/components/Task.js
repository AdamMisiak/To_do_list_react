import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Task.css'


const Task = ({ 
    task,
    text, 
    tasks, 
    // groups,
    setTasks, 
}) => {
    const groups = useSelector(state => state.group.groups)
    console.log(groups)

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

    const groupHandler = (e) => {
        setTasks(tasks.map((element) => {  
            if (element.id === task.id){
                return{
                    ...element, group: e.target.value
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
                <div className="task-group">
                    Group:
                    <select value={task.group} onChange={groupHandler} className="select-group">
                        {groups.map((group) => (
                            <option key={group.id} value={group.text}>{group.text}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>

    )   
}

export default Task;
