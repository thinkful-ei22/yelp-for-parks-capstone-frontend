export const MAKE_LOGIN_REQUEST
export const makeLoginRequest = () => ({
  type: MAKE_LOGIN_REQUEST
})
export const LOGIN_REQUEST_SUCCESS
export const makeLoginSuccess = () => ({
  type: LOGIN_REQUEST_SUCCESS
})
export const LOGIN_REQUEST_ERROR
export const makeLoginRequest = () => ({
  type: LOGIN_REQUEST_ERROR
})

export const fetchLogin = () => (dispatch) => {
  console.log("You've Logged In!")
}