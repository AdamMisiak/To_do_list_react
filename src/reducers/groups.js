
import { ADD_GROUP, GET_GROUPS } from '../actions/types.js';


const initialState = {
    groups: [
        {
            text:"None",
            id:0.0
        }
    ]
}

const groupReducer =  (state = initialState, action) => {
    switch (action.type) {
        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload,
            };
        default:
            return state
    }
}

export default groupReducer;
