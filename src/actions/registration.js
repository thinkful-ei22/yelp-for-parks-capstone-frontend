export const MAKE_REGISTRATION_REQUEST = "MAKE_REGISTRATION_REQUEST";
export const makeRegistrationRequest = () => ({
  type: MAKE_REGISTRATION_REQUEST
});
export const REGISTRATION_REQUEST_SUCCESS = "REGISTRATION_REQUEST_SUCCESS";
export const registrationRequestSuccess = () => ({
  type: REGISTRATION_REQUEST_SUCCESS
});
export const REGISTRATION_REQUEST_ERROR = "REGISTRATION_REQUEST_ERROR";
export const registrationRequestError = () => ({
  type: REGISTRATION_REQUEST_ERROR
});

export const fetchRegistration = () => dispatch => {
  console.log("You've Registered!");
};
