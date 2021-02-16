import { ADD_TASK, GET_TASKS, CHANGE_PRIORITY, COMPLETE_TASK, HIDE_TASK, DELETE_TASK } from './types'

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

export const completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        id: id
    }
}

export const hideTask = (id, details) => {
    return {
        type: HIDE_TASK,
        id: id,
        details: details
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id: id,
    }
}


