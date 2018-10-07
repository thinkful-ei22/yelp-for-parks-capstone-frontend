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
   })
   .catch(err => {
     dispatch(authorRequestError(err.message));
   });
}
