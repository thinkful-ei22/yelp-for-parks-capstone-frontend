import { normalizeResponseErrors } from "../utils";
import { BACKEND_URL } from "../config";

export const AUTHOR_REQUEST = "AUTHOR_REQUEST";
export const authorRequest = () => ({
  type: AUTHOR_REQUEST
});

export const AUTHOR_REQUEST_SUCCESS = "AUTHOR_REQUEST_SUCCESS";
export const authorRequestSuccess = authorObject => ({
  type: AUTHOR_REQUEST_SUCCESS,
  payload: authorObject
});

export const AUTHOR_REQUEST_ERROR = "AUTHOR_REQUEST_ERROR";
export const authorRequestError = err => ({
  type: AUTHOR_REQUEST_ERROR,
  payload: err
});

export const TOGGLE_REDIRECT_AUTHOR = "TOGGLE_REDIRECT_AUTHOR";
export const toggleRedirectAuthor = () => ({
  type: TOGGLE_REDIRECT_AUTHOR
});

 export const CREATE_AUTHOR = "CREATE_AUTHOR";
 export const createAuthor = authorId => dispatch => {
  let id = authorId;
  console.log("The ID is inside the createAuthor function!", id)
  console.log("Author profile request initiated");
  dispatch(authorRequest());
    return fetch(`${BACKEND_URL}/users/${id}`, {
      method: 'GET'
    })
   .then(res => {
     console.log('Raw Response', res)
     normalizeResponseErrors(res);
     return res.json();
   })
   .then(parsedResponse => {
     console.log('Parsed Response', parsedResponse)
     dispatch(authorRequestSuccess(parsedResponse));
     dispatch(toggleRedirectAuthor());
   })
   .catch(err => {
     dispatch(authorRequestError(err.message));
   });
}

export const AUTHOR_LOCATION_REQUEST = "AUTHOR_LOCATION_REQUEST";
export const authorLocationRequest = () => ({
  type: AUTHOR_LOCATION_REQUEST
});

export const AUTHOR_LOCATION_REQUEST_SUCCESS = "AUTHOR_LOCATION_REQUEST_SUCCESS";
export const authorLocationRequestSuccess = authorLocationObject => ({
  type: AUTHOR_LOCATION_REQUEST_SUCCESS,
  payload: authorLocationObject
});

export const AUTHOR_LOCATION_REQUEST_ERROR = "AUTHOR_LOCATION_REQUEST_ERROR";
export const authorLocationRequestError = err => ({
  type: AUTHOR_LOCATION_REQUEST_ERROR,
  payload: err
});

export const CREATE_AUTHOR_LOCATION = "CREATE_AUTHOR_LOCATION";
export const createAuthorLocation = authorId => dispatch => {
  let id = authorId;
  console.log("author profile locations request initiated and this is the id", id);
  dispatch(authorLocationRequest());
    return fetch(`${BACKEND_URL}/locations/?ownerId=${id}`, {
      method: 'GET'
    })
    .then(res => {
      console.log('Raw Response', res)
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      console.log('Parsed Author Locations Response', parsedResponse)
      dispatch(authorLocationRequestSuccess(parsedResponse));
    })
    .catch(err => {
      dispatch(authorLocationRequestError(err.message));
    });
}
