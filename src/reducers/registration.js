import {
  MAKE_REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_SUCCESS,
  REGISTRATION_REQUEST_ERROR
} from "../actions/registration";

const initialState = {
  loading: false,
  error: null
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
  return state;
}
