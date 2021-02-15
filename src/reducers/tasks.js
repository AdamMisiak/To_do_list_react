
import { ADD_TASK, GET_TASKS, CHANGE_PRIORITY, DELETE_TASK } from '../actions/types.js';


const initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks,
                    {
                        id: Math.random() * 100,
                        text: action.payload,
                        group: 'None',
                        priority: 'low',
                        completed: false,
                        deleted: false,
                        details: 'hidden'
                    }]
            };

        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };

        case CHANGE_PRIORITY:
            return {
                ...state,
                tasks: state.tasks.map(
                    task => task.id === action.id ?
                    {...task, priority: action.priority} :
                    task
                )
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    task => task.id !== action.id
                )
            };
        default:
            return state
    }
}

export default taskReducer;
