import { ADD_TASK, GET_TASKS } from './types'

export const addTask = () => {
    return {
        type: ADD_TASK
    }
}

export const getTasks = () => {
    return {
        type: GET_TASKS
    }
}
