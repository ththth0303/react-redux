import { FETCH_PHOTOS } from '../actions/type';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PHOTOS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}
