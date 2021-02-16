
import { 
    ADD_GROUP,
    WRITE_GROUPS
} from '../actions/types.js';


const initialState = {
    groups: [
        {
            id:0.0,
            text:"None"
        }
    ]
}

const groupReducer =  (state = initialState, action) => {
    switch (action.type) {
        case ADD_GROUP:
            return {
                ...state,
                groups: [...state.groups, 
                    {
                        id: Math.random() * 100,
                        text: action.payload,
                    }]
            };

        case WRITE_GROUPS:
            return {
                ...state, 
                groups: action.payload,
            };

        default:
            return state
    }
}

export default groupReducer;
