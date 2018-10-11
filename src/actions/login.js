import {
  saveAuthToken,
  normalizeResponseErrors,
  loadAuthToken,
  loadUser
} from '../utils';
import jwtDecode from 'jwt-decode';
import { BACKEND_URL } from '../config';
import { getAllLocations } from './location';

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const MAKE_LOGIN_REQUEST = 'MAKE_LOGIN_REQUEST';
export const makeLoginRequest = () => ({
  type: MAKE_LOGIN_REQUEST
});
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const loginRequestSuccess = user => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: user
});
export const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR';
export const loginRequestError = err => ({
  type: LOGIN_REQUEST_ERROR,
  payload: err
});

export const TOGGLE_REDIRECT = 'TOGGLE_REDIRECT';
export const toggleRedirect = bool => ({
  type: TOGGLE_REDIRECT,
  payload: bool
});

export const fetchLogin = credentials => dispatch => {
  dispatch(makeLoginRequest);
  return fetch(`${BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
    .then(res => {
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      saveAuthToken(parsedResponse.authToken);
      return jwtDecode(parsedResponse.authToken);
    })
    .then(decodedToken => {
      return dispatch(loginRequestSuccess(decodedToken.user));
    })
    .then(() => dispatch(getAllLocations()))
    .catch(err => {
      dispatch(loginRequestError(err.message));
    });
};

export const refreshAuthToken = () => dispatch => {
  const token = loadAuthToken();
  fetch(`${BACKEND_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      saveAuthToken(parsedResponse.authToken);
      return jwtDecode(parsedResponse.authToken);
    })
    .then(decodedToken => {
      dispatch(loginRequestSuccess(decodedToken.user));
    })
    .then(() => dispatch(getAllLocations()))
    .catch(err => {
      dispatch(loginRequestError(err.message));
    });
};

export const CREATE_USER = 'CREATE_USER';
export const createUser = userObject => dispatch => {
  dispatch(makeLoginRequest());
  return fetch(`${BACKEND_URL}/users/${loadUser().id}`, {
    method: 'GET'
  })
    .then(res => {
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      dispatch(loginRequestSuccess(parsedResponse));
      dispatch(toggleRedirect(true));
    })
    .catch(err => {
      dispatch(loginRequestError(err.message));
    });
};

export const USER_LOCATION_REQUEST = 'USER_LOCATION_REQUEST';
export const userLocationRequest = () => ({
  type: USER_LOCATION_REQUEST
});

export const USER_LOCATION_REQUEST_SUCCESS = 'USER_LOCATION_REQUEST_SUCCESS';
export const userLocationRequestSuccess = userLocationObject => ({
  type: USER_LOCATION_REQUEST_SUCCESS,
  payload: userLocationObject
});

export const USER_LOCATION_REQUEST_ERROR = 'USER_LOCATION_REQUEST_ERROR';
export const userLocationRequestError = err => ({
  type: USER_LOCATION_REQUEST_ERROR,
  payload: err
});

export const CREATE_USER_LOCATION = 'CREATE_USER_LOCATION';
export const createUserLocation = userId => dispatch => {
  let id = userId;
  dispatch(userLocationRequest());
  return fetch(`${BACKEND_URL}/locations/?ownerId=${id}`, {
    method: 'GET'
  })
    .then(res => {
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      dispatch(userLocationRequestSuccess(parsedResponse));
      dispatch(toggleRedirect(true));
    })
    .catch(err => {
      dispatch(userLocationRequestError(err.message));
    });
};
