import { GET_LIST, ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from '../actions/prosConsList';
const initialState = {
    pros: [],
    cons: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_LIST:
            return state;
        case ADD_ITEM:
            return {
                ...state,
                [action.listType]: [...state[action.listType], action.item]
            }
        case EDIT_ITEM:
            let editedListItem = state[action.listType];
            return {
                ...state,
                [action.listType]: editedListItem.map(item => {
                        if(item.id === action.item.id) {
                            return action.item;
                        }
                        return item;
                    }
                )
            }
        case DELETE_ITEM:
            let deletedListItem = state[action.listType];
            let index = deletedListItem.findIndex(liistItem => 
                liistItem.id === action.itemId
            );
            return {
                ...state,
                [action.listType]: [...deletedListItem.slice(0,index), ...deletedListItem.slice(index + 1)]
            }
        default:
            return state;
    } 
}