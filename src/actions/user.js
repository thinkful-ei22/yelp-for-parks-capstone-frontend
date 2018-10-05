import { loadAuthToken, loadUser, normalizeResponseErrors } from "../utils";
import { BACKEND_URL } from "../config";
 export const USER_REQUEST = "USER_REQUEST";
export const userRequest = () => ({
  type: USER_REQUEST
});
 export const USER_REQUEST_SUCCESS = "USER_REQUEST_SUCCESS";
export const userRequestSuccess = userObject => ({
  type: USER_REQUEST_SUCCESS,
  payload: userObject
});
 export const USER_REQUEST_ERROR = "USER_REQUEST_ERROR";
export const userRequestError = err => ({
  type: USER_REQUEST_ERROR,
  payload: err
});
 export const TOGGLE_REDIRECT = "TOGGLE_REDIRECT";
export const toggleRedirect = () => ({
  type: TOGGLE_REDIRECT
});
 export const CREATE_USER = "CREATE_USER";
 export const createUser = userObject => dispatch => {
  console.log("user profile request initiated");
  dispatch(userRequest());
    return fetch(`${BACKEND_URL}/users/${loadUser().id}`, {
      method: 'GET'
    })
   .then(res => {
     console.log('Raw Response', res)
     normalizeResponseErrors(res);
     return res.json();
   })
   .then(parsedResponse => {
     console.log('Parsed Response', parsedResponse)
     dispatch(userRequestSuccess(parsedResponse));
     dispatch(toggleRedirect());
   })
   .catch(err => {
     dispatch(userRequestError(err.message));
   });
}
