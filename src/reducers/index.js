import { combineReducers } from 'redux';
import postReducer from './post.reducer';
import photoReducer from './photo.reducer';

// console.log(postReducer);

export default combineReducers({
    posts: postReducer,
    photos: photoReducer,
});