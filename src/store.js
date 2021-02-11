import { createStore } from 'redux'
import taskReducre from './reducers/tasks'

const store = createStore(
    taskReducre
)

export default store;