import {
  saveAuthToken,
  normalizeResponseErrors,
  loadAuthToken,
  clearAuthToken
} from "../utils";
import jwtDecode from "jwt-decode";
import { BACKEND_URL } from "../config";

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const MAKE_LOGIN_REQUEST = "MAKE_LOGIN_REQUEST";
export const makeLoginRequest = () => ({
  type: MAKE_LOGIN_REQUEST
});
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const loginRequestSuccess = user => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: user
});
export const LOGIN_REQUEST_ERROR = "LOGIN_REQUEST_ERROR";
export const loginRequestError = err => ({
  type: LOGIN_REQUEST_ERROR,
  payload: err
});

export const fetchLogin = credentials => dispatch => {
  console.log("You've Logged In!");
  dispatch(makeLoginRequest);
  fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  })
    .then(res => {
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      console.log(parsedResponse);
      saveAuthToken(parsedResponse.authToken);
      return jwtDecode(parsedResponse.authToken);
    })
    .then(decodedToken => {
      console.log("this is the decoded token", decodedToken);
      dispatch(loginRequestSuccess(decodedToken.user));
    })
    .catch(err => {
      dispatch(loginRequestError(err.message));
    });
};

export const refreshAuthToken = () => dispatch => {
  const token = loadAuthToken();
  fetch(`${BACKEND_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      console.log("parsed token is:", parsedResponse);
      saveAuthToken(parsedResponse.authToken);
      return jwtDecode(parsedResponse.authToken);
    })
    .then(decodedToken => {
      console.log("this is the decoded token", decodedToken);
      dispatch(loginRequestSuccess(decodedToken.user));
    })
    .catch(err => {
      dispatch(loginRequestError(err.message));
    });
};
