import { FETCH_PHOTOS } from "./type";

export const fetchPhotos = () => async dispatch => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
    .then(response => response.json())
    .then(json =>
      dispatch({
          type: FETCH_PHOTOS,
          payload: json.slice(0, 9),
      })
    );
};

