import React from 'react';


const Form = ({ 
    tasks,
    projects, 
    inputTask, 
    setInputTask,
    inputProject,
    setInputProject, 
    setTasks, 
    setProjects, 
    setPriorityFilter, 
    setProjectFilter 
}) => {
    const inputTaskHandler = (e) => {
        setInputTask(e.target.value)
    };
    const inputProjectHandler = (e) => {
        setInputProject(e.target.value)
    };
    const submitTaskHandler = (e) => {
        e.preventDefault();
        if (inputTask !== "") {
            setTasks([
                ...tasks, { text: inputTask, priority: 'low', project: "None", details: "hidden", completed: false, deleted: false, id: Math.random() * 100 }
            ]);
            setInputTask("")
        }


    };
    const submitProjectHandler = (e) => {
        e.preventDefault();
        setProjects([
            ...projects, { text: inputProject, id: Math.random() * 100 }
        ]);
        setInputProject("")
    };
    const priorityHandler = (e) => {
        setPriorityFilter(e.target.value)
    };

    const projectHandler = (e) => {
        setProjectFilter(e.target.value)
    };

    return (
        <div>
            <form className="task-form">
                <input value={inputTask} onChange={inputTaskHandler} type="text" className="task-input" placeholder="Add task..."></input>
                <button onClick={submitTaskHandler} className="task-button" type="submit">
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
                    <select onChange={priorityHandler} name="filter-priority" className="filter-priority" placeholder="Add project...">
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