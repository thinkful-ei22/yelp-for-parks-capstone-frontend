import { saveAuthToken, normalizeResponseErrors } from "../utils";
import jwtDecode from "jwt-decode";
import { BACKEND_URL } from "../config";

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

const storeAuthInfo = authToken => {
  const decodedToken = jwtDecode(authToken);
};

export const fetchLogin = credentials => dispatch => {
  console.log("You've Logged In!");
  dispatch(makeLoginRequest);
  fetch(`${BACKEND_URL}/api/auth/login`, {
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
      // dispatch(loginRequestSuccess(parsedResponse))
      // dispatch(saveAuthToken(parsedResponse))
      return jwtDecode(parsedResponse.authToken);
    })
    .then(decodedToken => {
      console.log("this is the decoded token", decodedToken);
      dispatch(loginRequestSuccess(decodedToken));
    })
    .catch(err => {
      dispatch(loginRequestError(err.message));
    });
};
