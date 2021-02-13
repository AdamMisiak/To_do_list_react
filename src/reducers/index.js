import { combineReducers } from 'redux';
import taskReducer from '../reducers/tasks';
import groupReducer from '../reducers/groups';

const rootReducer = combineReducers({
    task: taskReducer,
    group: groupReducer
})

export default rootReducer;