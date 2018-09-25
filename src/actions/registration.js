export const MAKE_REGISTRATION_REQUEST
export const makeRegistrationRequest = () => ({
  type: MAKE_REGISTRATION_REQUEST
})
export const REGISTRATION_REQUEST_SUCCESS
export const makeRegistrationSuccess = () => ({
  type: REGISTRATION_REQUEST_SUCCESS
})
export const REGISTRATION_REQUEST_ERROR
export const makeRegistrationRequest = () => ({
  type: REGISTRATION_REQUEST_ERROR
})

export const fetchRegistration = () => (dispatch) => {
  console.log("You've Registered!")
}