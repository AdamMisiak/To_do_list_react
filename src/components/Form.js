import React from 'react';


const Form = () => {
    return (
        <form className="task-form">
            <input type="text" className="task-input" placeholder="Add task..."></input>
            <button className="task-button" type="submit">
                <span title="Add new task"><i className="fas fa-plus-circle"></i></span>
            </button>
        </form>
    );
};

export default Form;