import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/tasks';
import { addGroup } from '../actions/groups';
import '../styles/Form.css'


const Form = ({ 
    tasks,
    groups, 
    inputTask, 
    setInputTask,
    inputGroup,
    setInputGroup, 
    setTasks, 
    setGroups, 
    setPriorityFilter, 
    setGroupFilter 
}) => {
    const dispatch = useDispatch();

    const inputTaskHandler = (e) => {
        setInputTask(e.target.value)
    };

    const inputGroupHandler = (e) => {
        setInputGroup(e.target.value)
    };

    const submitTaskHandler = (e) => {
        e.preventDefault();
        if (inputTask !== "") {
            dispatch(addTask(inputTask))
            // setTasks([
            //     ...tasks, { text: inputTask, priority: 'low', group: "None", details: "hidden", completed: false, deleted: false, id: Math.random() * 100 }
            // ]);
            setInputTask("")
        }
    };

    const submitGroupHandler = (e) => {
        e.preventDefault();
        dispatch(addGroup(inputGroup))
        // setGroups([
        //     ...groups, { text: inputGroup, id: Math.random() * 100 }
        // ]);
        setInputGroup("")
    };
    
    const priorityHandler = (e) => {
        setPriorityFilter(e.target.value)
    };

    const groupHandler = (e) => {
        setGroupFilter(e.target.value)
    };

    return (
        <div>
            <form className="task-form">
                <input value={inputTask} onChange={inputTaskHandler} type="text" className="task-input" placeholder="Add task..."></input>
                <button onClick={submitTaskHandler} className="task-button" type="submit">
                {/* <button onClick={} className="task-button" type="submit"> */}
                    <span title="Add new task"><i className="fas fa-plus-circle"></i></span>
                </button>
            </form>

            <form className="group-form">
                <input value={inputGroup} onChange={inputGroupHandler} type="text" className="group-input" placeholder="Add group..."></input>
                <button onClick={submitGroupHandler} className="group-button" type="submit">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </form>

            <form className="filters">
                <h3>Priority filter:</h3>
                <div className="select priority">
                    <select onChange={priorityHandler} name="filter-priority" className="filter-priority" placeholder="Add group...">
                        <option value="all">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <h3>Group filter:</h3>
                <div className="select group">
                    <select onChange={groupHandler} name="filter-group" className="filter-group">
                        <option value="All">All</option>
                        {groups.map((group) => (
                            <option key={group.id} value={group.text}>{group.text}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;