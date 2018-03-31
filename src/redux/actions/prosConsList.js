export const GET_LIST = 'GET_LIST';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export const getList = (listType) => {
    return {
        type: GET_LIST
    }
}

export const addItem = (item, listType) => {
    return {
        type: ADD_ITEM,
        item,
        listType
    }
}

export const editItem = (item, listType) => {
    return {
        type: EDIT_ITEM,
        item,
        listType
    }
}

export const deleteItem = (itemId, listType) => {
    return {
        type: DELETE_ITEM,
        itemId,
        listType
    }
}