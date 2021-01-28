import React from 'react';


const Form = ({ setInputTask, inputTask, setInputProject, inputProject, setTasks, tasks, setProjects, projects, setPriority, setProject }) => {
    const inputTaskHandler = (e) => {
        setInputTask(e.target.value)
    };
    const inputProjectHandler = (e) => {
        setInputProject(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputTask !== ""){
            setTasks([
                ...tasks, {text: inputTask, priority: 'low' , completed: false, deleted: false, details: "hidden", project: "None", id: Math.random() * 100}
            ]);
            setInputTask("")
        }


    };
    const submitProjectHandler = (e) => {
        e.preventDefault();
        setProjects([
            ...projects, {text: inputProject, id: Math.random() * 100}
        ]);
        setInputProject("")
    };
    const priorityHandler = (e) => {
        setPriority(e.target.value)
    };

    const projectHandler = (e) => {
        setProject(e.target.value)
    };

    return (
        <div>
            <form className="task-form">
                <input value={inputTask} onChange={inputTaskHandler} type="text" className="task-input" placeholder="Add task..."></input>
                <button onClick={submitTodoHandler} className="task-button" type="submit">
                    <span title="Add new task"><i className="fas fa-plus-circle"></i></span>
                </button>
            </form>

            <form className="project-form">
                <input value={inputProject} onChange={inputProjectHandler} type="text" className="project-input" placeholder="Add project..."></input>
                <button onClick={submitProjectHandler} className="project-button" type="submit">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </form>

            <form className="filters">
            <h3>Priority filter:</h3>

            <div className="select priority">
                <select onChange={priorityHandler} name="filter-priority" className="filter-priority"  placeholder="Add project...">
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <h3>Project filter:</h3>
            <div className="select project">
                <select onChange={projectHandler} name="filter-project" className="filter-project">
                    <option value="All">All</option>
                    {projects.map((project) => (
                        <option key={project.id} value={project.text}>{project.text}</option>
                    ))}
                </select>
            </div>
            </form>
        </div>
    );
};

export default Form;