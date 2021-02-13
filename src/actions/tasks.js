import { ADD_TASK, GET_TASKS } from './types'

export const addTask = (inputTask) => {
    return {
        type: ADD_TASK,
        payload: inputTask
    }
}

export const getTasks = () => {
    return {
        type: GET_TASKS
    }
}
