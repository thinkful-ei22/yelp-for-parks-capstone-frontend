import {
  AUTHOR_REQUEST,
  AUTHOR_REQUEST_SUCCESS,
  AUTHOR_REQUEST_ERROR
} from "../actions/author";

 const initialState = {
  currentAuthor: {},
  loading: false,
  error: "",
  redirecting: false
};
 export default function authorReducer(state = initialState, action) {
   if (action.type === AUTHOR_REQUEST) {
     return {
       ...state,
       loading: true
     };
   } else if (action.type === AUTHOR_REQUEST_SUCCESS) {
     return {
       ...state,
       loading: false,
       currentAuthor: action.payload
     };
   } else if (action.type === AUTHOR_REQUEST_ERROR) {
     return {
       ...state,
       loading: false,
       error: action.error
     }
   }
  return state;
}
