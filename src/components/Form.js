import React from 'react';


const Form = ({ setInputText, inputText, setInputProject, inputProject, setTodos, todos, setProjects, projects, setPriority }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const inputProjectHandler = (e) => {
        setInputProject(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== ""){
            setTodos([
                ...todos, {text: inputText, priority: 'low' , completed: false, deleted: false, details: "hidden", project: "None", id: Math.random() * 100}
            ]);
            setInputText("")
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

    return (
        <div>
            <form className="task-form">
                <input value={inputText} onChange={inputTextHandler} type="text" className="task-input" placeholder="Add task..."></input>
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
                <select name="filter-project" className="filter-project">
                    <option value="all">All</option>
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