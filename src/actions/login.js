import { normalizeResponseErrors, saveAuthToken, clearAuthToken} from "../utils";
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

//==================== Rachel added these
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(loginRequestSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

//========================
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
      return jwtDecode(parsedResponse.authToken);
    })
    .then(decodedToken => {
      console.log("this is the decoded token", decodedToken);
      dispatch(loginRequestSuccess(decodedToken));
      saveAuthToken(decodedToken);
    })
    .catch(err => {
      dispatch(loginRequestError(err.message));
    });
};


//======================= REFRESH AUTH TOKEN
export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(makeLoginRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${BACKEND_URL}/refresh`, {
      method: 'POST',
      headers: {
          // Provide our existing token as credentials to get a new one
          Authorization: `Bearer ${authToken}`
      }
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({authToken}) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
          // We couldn't get a refresh token because our current credentials
          // are invalid or expired, or something else went wrong, so clear
          // them and sign us out
          dispatch(loginRequestError(err));
          dispatch(clearAuth());
          clearAuthToken(authToken);
      });
};
