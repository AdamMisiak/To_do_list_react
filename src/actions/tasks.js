import { ADD_TASK, GET_TASKS, CHANGE_PRIORITY } from './types'

export const addTask = (inputTask) => {
    return {
        type: ADD_TASK,
        payload: inputTask
    }
}

export const changePriority = (id, priority) => {
    return {
        type: CHANGE_PRIORITY,
        id: id,
        priority: priority
    }
}

export const getTasks = () => {
    return {
        type: GET_TASKS
    }
}
