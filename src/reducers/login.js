import {
  MAKE_LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR
} from "../actions/login";

const initialState = {
  user: null,
  loading: false
};

export default function loginReducer(state = initialState, action) {
  return state;
}
