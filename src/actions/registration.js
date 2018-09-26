import { BACKEND_URL } from "../config";

export const MAKE_REGISTRATION_REQUEST = "MAKE_REGISTRATION_REQUEST";
export const makeRegistrationRequest = () => ({
  type: MAKE_REGISTRATION_REQUEST
});
export const REGISTRATION_REQUEST_SUCCESS = "REGISTRATION_REQUEST_SUCCESS";
export const registrationRequestSuccess = username => ({
  type: REGISTRATION_REQUEST_SUCCESS,
  payload: username
});
export const REGISTRATION_REQUEST_ERROR = "REGISTRATION_REQUEST_ERROR";
export const registrationRequestError = err => ({
  type: REGISTRATION_REQUEST_ERROR,
  payload: err
});

export const fetchRegistration = credentials => dispatch => {
  if (credentials.password !== credentials.confirmPassword) {
    dispatch(registrationRequestError("Passwords do not match."));
    return;
  } else {
    console.log(credentials);
    dispatch(makeRegistrationRequest());
    fetch(`${BACKEND_URL}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    })
      .then(res => {
        if (res.status !== 200) {
          return Promise.reject(res);
        }
        return res.json();
      })
      .then(parsedResponse => {
        dispatch(registrationRequestSuccess(parsedResponse.username));
        console.log("request succeeded");
        console.log(parsedResponse);
      })
      .catch(err => {
        console.log("Request failed,", err);
        if (err) {
          dispatch(registrationRequestError(err.message));
        }
      });
  }
};
