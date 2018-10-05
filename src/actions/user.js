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

export const USER_LOCATION_REQUEST = "USER_LOCATION_REQUEST";
export const userLocationRequest = () => ({
  type: USER_LOCATION_REQUEST
});

export const USER_LOCATION_REQUEST_SUCCESS = "USER_LOCATION_REQUEST_SUCCESS";
export const userLocationRequestSuccess = userLocationObject => ({
  type: USER_LOCATION_REQUEST_SUCCESS,
  payload: userLocationObject
});

export const USER_LOCATION_REQUEST_ERROR = "USER_LOCATION_REQUEST_ERROR";
export const userLocationRequestError = err => ({
  type: USER_LOCATION_REQUEST_ERROR,
  payload: err
});

export const CREATE_USER_LOCATION = "CREATE_USER_LOCATION";
export const createUserLocation = userId => dispatch => {
  const id = userId;
  console.log("user profile locations request initiated");
  dispatch(userLocationRequest());
    return fetch(`${BACKEND_URL}/locations/?ownerId=${id}`, {
      method: 'GET'
    })
    .then(res => {
      console.log('Raw Response', res)
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      console.log('Parsed User Locations Response', parsedResponse)
      dispatch(userRequestSuccess(parsedResponse));
      //dispatch(toggleRedirect());
    })
    .catch(err => {
      dispatch(userRequestError(err.message));
    });
}
