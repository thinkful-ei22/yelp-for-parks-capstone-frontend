import {
  MAKE_REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_SUCCESS,
  REGISTRATION_REQUEST_ERROR,
  TOGGLE_REDIRECTING
} from "../actions/registration";

const initialState = {
  loading: false,
  error: "",
  redirecting: false
};

export default function registrationReducer(state = initialState, action) {
  if (action.type === MAKE_REGISTRATION_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === REGISTRATION_REQUEST_SUCCESS) {
    return { ...state, loading: false };
  }
  if (action.type === REGISTRATION_REQUEST_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }
  if (action.type === TOGGLE_REDIRECTING) {
    return { ...state, redirecting: action.payload };
  }
  return state;
}
