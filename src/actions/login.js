export const MAKE_LOGIN_REQUEST = "MAKE_LOGIN_REQUEST";
export const makeLoginRequest = () => ({
  type: MAKE_LOGIN_REQUEST
});
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const loginRequestSuccess = () => ({
  type: LOGIN_REQUEST_SUCCESS
});
export const LOGIN_REQUEST_ERROR = "LOGIN_REQUEST_ERROR";
export const loginRequestError = () => ({
  type: LOGIN_REQUEST_ERROR
});

export const fetchLogin = () => dispatch => {
  console.log("You've Logged In!");
};
