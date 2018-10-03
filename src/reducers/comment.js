import {
  CREATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS
} from "../actions/comment";

const initialState = {
  comments: []
};

export default function commentReducer(state = initialState, action) {
  if (action.type === CREATE_COMMENT_SUCCESS) {
    return {
      ...state,
      comments: [
        ...state.comments,
        {
          text: action.text,
          rating: action.rating
        }
      ]
    };
  } else if (action.type === UPDATE_COMMENT_SUCCESS) {
    const commentToUpdate = state.comments.find(
      comment => comment.id === action.id
    );
    return {
      ...state,
      comments: [
        ...state.comments,
        Object.assign({}, commentToUpdate, {
          text: action.text,
          rating: action.rating
        })
      ]
    };
  } else if (action.type === DELETE_COMMENT_SUCCESS) {
    return {
      ...state,
      comments: [...state.comments.filter(comment => comment.id !== action.id)]
    };
  }
  return state;
}
