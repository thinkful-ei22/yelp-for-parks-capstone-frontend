import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from "../actions/comment";

const initialState = {
  comments: []
};

export default function commentReducer(state = initialState, action) {
  if(action.type === CREATE_COMMENT) {
    return {
      ...state,
      comments: [...state.comments, {
        text: action.text,
        rating: action.rating
      }]
    }
  } else if(action.type === UPDATE_COMMENT) {
    return {
      const commentToUpdate = state.comments.find(comment => comment.id === action.id);
      ...state,
      comments: [...state.comments, Object.assign({}, commentToUpdate, {
        text: action.text,
        rating: action.rating
      })]
    }
  } else if(action.type === DELETE_COMMENT) {
    ...state,
    comments: [...state.comments.filter(comment => comment.id !== action.id)]
  }
  return state;
}
