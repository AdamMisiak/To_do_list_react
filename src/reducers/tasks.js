
import { ADD_TASK, GET_TASKS } from '../actions/types.js';


const initialState = {
    tasks:[]
}

const taskReducer =  (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };
        default:
            return state
    }
}

export default taskReducer;
