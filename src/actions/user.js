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
export const createUser = () => {
  return fetch(`${BACKEND_URL}/users/${loadUser().id}`, {
    method: 'GET'
  })
  .then(res => res.json())
}
