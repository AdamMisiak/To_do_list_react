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
        <form className="task-form">
            <input value={inputText} onChange={inputTextHandler} type="text" className="task-input" placeholder="Add task..."></input>
            <button onClick={submitTodoHandler} className="task-button" type="submit">
                <span title="Add new task"><i className="fas fa-plus-circle"></i></span>
            </button>
        </form>
    );
};

export default Form;