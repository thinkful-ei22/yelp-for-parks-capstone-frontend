import { clearAuthToken } from "../utils";
import {
  MAKE_LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
  LOGOUT,
  TOGGLE_REDIRECT,
  USER_LOCATION_REQUEST,
  USER_LOCATION_REQUEST_SUCCESS,
  USER_LOCATION_REQUEST_ERROR
} from "../actions/login";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
  redirecting: false,
  currentUserLocations: [],
  loadingLocation: false,
  errorLocation: false,
  redirectingLocation: false
};

export default function loginReducer(state = initialState, action) {
  if (action.type === MAKE_LOGIN_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === LOGIN_REQUEST_SUCCESS) {
    return { ...state, loading: false, currentUser: action.payload };
  }
  if (action.type === LOGIN_REQUEST_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }
  if (action.type === LOGOUT) {
    clearAuthToken();
    return { ...state, currentUser: null };
  } else if (action.type === TOGGLE_REDIRECT) {
    return { ...state, redirecting: action.payload };
  } else if (action.type === USER_LOCATION_REQUEST) {
    return {
      ...state,
      loadingLocation: true
    };
  } else if (action.type === USER_LOCATION_REQUEST_SUCCESS) {
    return {
      ...state,
      loadingLocation: false,
      currentUserLocations: action.payload
    };
  } else if (action.type === USER_LOCATION_REQUEST_ERROR) {
    return {
      ...state,
      loadingLocation: false,
      errorLocation: action.error
    };
  }
  return state;
}
