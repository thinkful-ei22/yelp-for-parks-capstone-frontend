import {
  MAKE_REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_SUCCESS,
  REGISTRATION_REQUEST_ERROR
} from "../actions/registration";

const initialState = {
  loading: false
};

export default function registrationReducer(state = initialState, action) {
  return state;
}
