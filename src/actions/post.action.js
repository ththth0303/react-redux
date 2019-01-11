import { FETCH_POSTS, DEL_POSTS } from './type';

export const fetchPosts = () => async dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json =>
            dispatch({
                type: FETCH_POSTS,
                payload: json.slice(0, 9),
            })
        );
};


export const delPost = (id) => dispatch => {
    dispatch({
        type: DEL_POSTS,
        payload: id
    })
};

