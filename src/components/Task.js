import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    changePriority,
    changeGroup,
    completeTask,
    hideTask,
    deleteTask 
} from '../actions/tasks';
import '../styles/Task.css';
import * as Constants from '../constants';


const Task = ({ 
    task,
    text, 
}) => {
    const groups = useSelector(state => state.group.groups)
    const dispatch = useDispatch();

    const priorityHandler = () => {
        if (task.priority === Constants.LOW){
            dispatch(changePriority(task.id, Constants.MEDIUM))
        }
        else if (task.priority === Constants.MEDIUM){
            dispatch(changePriority(task.id, Constants.HIGH))
        }
        else if (task.priority === Constants.HIGH){
            dispatch(changePriority(task.id, Constants.LOW))
        }
    }

    const deleteHandler = () => dispatch(deleteTask(task.id))

    const completeHandler = () => dispatch(completeTask(task.id))

    const hiddenHandler = () => dispatch(hideTask(task.id))

    const groupHandler = (e) => dispatch(changeGroup(task.id, e.target.value))

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
            <div className={`task-details ${task.priority} ${task.completed ? "completed" : ""} ${task.details ? "hidden" : "unhidden"}`}>
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
