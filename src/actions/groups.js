import { ADD_GROUP, GET_GROUPS } from './types'

export const addGroup = () => {
    return {
        type: ADD_GROUP
    }
}

export const getGroups = () => {
    return {
        type: GET_GROUPS
    }
}
