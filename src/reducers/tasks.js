
import { ADD_TASK, GET_TASKS } from '../actions/types.js';


const initialState = {
    tasks: [
        {
            id: 10,
            text: 'TEST',
            group: 'None',
            priority: 'low',
            completed: false,
            deleted: false,
            details: 'hidden'
        }
    ]
}

const taskReducer =  (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: {
                    id: Math.random() * 100,
                    text: action.payload,
                    group: 'None',
                    priority: 'low',
                    completed: false,
                    deleted: false,
                    details: 'hidden'
                },
            };
        default:
            return state
    }
}

export default taskReducer;
