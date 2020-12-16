import React from 'react';


const Form = ({ setInputText, inputText, setTodos, todos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 100}
        ]);
        setInputText("")
    }
    return (
        <div>
            <form className="task-form">
                <input value={inputText} onChange={inputTextHandler} type="text" className="task-input" placeholder="Add task..."></input>
                <button onClick={submitTodoHandler} className="task-button" type="submit">
                    <span title="Add new task"><i className="fas fa-plus-circle"></i></span>
                </button>
            </form>

            <form class="project-form">
                <input type="text" class="project-input" placeholder="Add project..."></input>
                <button class="project-button" type="submit">
                    <i class="fas fa-plus-circle"></i>
                </button>
            </form>

            <form class="filters">
            <h3>Priority filter:</h3>

            <div class="select priority">
                <select name="filter-priority" class="filter-priority"  placeholder="Add project...">
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <h3>Project filter:</h3>
            <div class="select project">
                <select name="filter-project" class="filter-project">
                    <option value="all">All</option>
                    <option value="none">None</option>
                </select>
            </div>
            </form>
        </div>
    );
};

export default Form;