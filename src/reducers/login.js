import {
  MAKE_LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR
} from "../actions/login";

const initialState = {
  user: null,
  loading: false,
  error: null
};

export default function loginReducer(state = initialState, action) {
  if (action.type === MAKE_LOGIN_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === LOGIN_REQUEST_SUCCESS) {
    return { ...state, loading: false, user: action.payload };
  }
  if (action.type === LOGIN_REQUEST_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }
  return state;
}
