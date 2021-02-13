import { combineReducers } from 'redux';
import taskReducer from '../reducers/tasks';
import groupReducer from '../reducers/groups';

const rootReducer = combineReducers({
    task: taskReducer,
    groups: groupReducer
})

export default rootReducer;