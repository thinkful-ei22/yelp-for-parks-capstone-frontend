import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
  TOGGLE_REDIRECT,
  USER_OTHER_REQUEST,
  USER_OTHER_REQUEST_SUCCESS,
  USER_OTHER_REQUEST_ERROR,
  TOGGLE_REDIRECT_OTHER
} from "../actions/user";

const initialState = {
  currentUser: {},
  loading: false,
  error: "",
  redirecting: false,
  otherUser: {},
  loadingOther: false,
  errorOther: "",
  redirectingOther: false
};

export default function userReducer(state = initialState, action) {
  if (action.type === USER_REQUEST) {
    return {
      ...state,
      loading: true
    };
  } else if (action.type === USER_REQUEST_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentUser: action.payload
    };
  } else if (action.type === USER_REQUEST_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  } else if (action.type === TOGGLE_REDIRECT) {
    return { ...state, redirecting: !state.redirecting };
  } else if (action.type === USER_OTHER_REQUEST) {
    return {
      ...state,
      loadingOther: true
    };
  } else if (action.type === USER_OTHER_REQUEST_SUCCESS) {
    return {
      ...state,
      loadingOther: false,
      otherUser: action.payload
    };
  } else if (action.type === USER_OTHER_REQUEST_ERROR) {
    return {
      ...state,
      loadingOther: false,
      errorOther: action.error
    }
  } else if (action.type === TOGGLE_REDIRECT_OTHER) {
    return { ...state, redirectingOther: !state.redirectingOther };
  }
  return state;
}
