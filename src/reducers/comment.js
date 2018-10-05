import {
  MAKE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  COMMENT_REQUEST_ERROR
} from "../actions/comment";

const initialState = {
  currentComment: null,
  commentList: null,
  loading: false,
  error: null
};

export default function commentReducer(state = initialState, action) {
  if (action.type === MAKE_COMMENT_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === CREATE_COMMENT_SUCCESS) {
    return { ...state, loading: false, currentComment: action.payload };
  }
  if (action.type === UPDATE_COMMENT_SUCCESS) {
    return { ...state, loading: false, currentComment: action.payload };
  }
  if (action.type === DELETE_COMMENT_SUCCESS) {
    return { ...state, loading: false, currentComment: null };
  }
  if (action.type === COMMENT_REQUEST_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }
  return state;
}
