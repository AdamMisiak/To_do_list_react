import { createStore } from 'redux'
import taskReducer from './reducers/tasks'

const store = createStore(
    taskReducer
)

export default store;