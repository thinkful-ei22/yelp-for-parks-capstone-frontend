import {
  MAKE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  COMMENT_REQUEST_ERROR,
  GET_ALL_COMMENTS_ERROR,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_REQUEST,
  GET_ONE_COMMENT_ERROR,
  GET_ONE_COMMENT_SUCCESS
} from "../actions/comment";

const initialState = {
  currentComment: {},
  commentList: [],
  loading: false,
  error: null
};

export default function commentReducer(state = initialState, action) {
  if (action.type === MAKE_COMMENT_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === GET_ALL_COMMENTS_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === GET_ALL_COMMENTS_SUCCESS) {
    return {
      ...state,
      loading: false,
      commentList: action.payload
    };
  }
  if (action.type === GET_ALL_COMMENTS_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  if (action.type === GET_ONE_COMMENT_SUCCESS) {
    return { ...state, currentComment: action.payload, loading: false };
  }
  if (action.type === GET_ONE_COMMENT_ERROR) {
    return { ...state, loading: false, error: action.payload };
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
