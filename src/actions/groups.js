import { ADD_GROUP, WRITE_GROUPS } from './types'

export const addGroup = (inputGroup) => {
    return {
        type: ADD_GROUP,
        payload: inputGroup
    }
}

export const writeGroups = (groups) => {
    return {
        type: WRITE_GROUPS,
        payload: groups
    }
}
