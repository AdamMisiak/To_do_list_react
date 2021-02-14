import { ADD_GROUP, GET_GROUPS } from './types'

export const addGroup = (inputGroup) => {
    return {
        type: ADD_GROUP,
        payload: inputGroup
    }
}

export const getGroups = () => {
    return {
        type: GET_GROUPS
    }
}
