import { FETCH_POSTS, DEL_POSTS } from  '../actions/type';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, items: action.payload};
        case DEL_POSTS:
            return {
                ...state,
                items: state.items.filter(c => c.id !== action.payload)
            };
        default:
        return state;
    }
}
