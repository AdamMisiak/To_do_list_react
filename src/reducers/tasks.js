
import { ADD_TASK, GET_TASKS, CHANGE_PRIORITY } from '../actions/types.js';


const initialState = {
    tasks: [
        // {
        //     id: 1,
        //     text: 'TEST',
        //     group: 'None',
        //     priority: 'low',
        //     completed: false,
        //     deleted: false,
        //     details: 'hidden'
        // }
    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };
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
            }
        case CHANGE_PRIORITY:
                return {
                    ...state,
                    tasks: state.tasks.map(
                        task => task.id === action.id ?
                        {...task, priority: action.priority} :
                        task
                    )
                    // [...state.tasks,
                    //     {
                    //         id: Math.random() * 100,
                    //         text: action.payload,
                    //         group: 'None',
                    //         priority: 'low',
                    //         completed: false,
                    //         deleted: false,
                    //         details: 'hidden'
                    //     }]
                }
        default:
            return state
    }
}

export default taskReducer;
