import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
  TOGGLE_REDIRECT
} from "../actions/user";

const initialState = {
  currentUser: {},
  loading: false,
  error: "",
  redirecting: false
};

export default function userReducer(state = initialState, action) {
  return state;
}
