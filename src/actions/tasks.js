import { ADD_TASK, GET_TASKS, CHANGE_PRIORITY, DELETE_TASK } from './types'

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

export const changePriority = (id, priority) => {
    return {
        type: CHANGE_PRIORITY,
        id: id,
        priority: priority
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id: id,
    }
}


