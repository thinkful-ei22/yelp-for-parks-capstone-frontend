import {
  AUTHOR_REQUEST,
  AUTHOR_REQUEST_SUCCESS,
  AUTHOR_REQUEST_ERROR,
  TOGGLE_REDIRECT_AUTHOR,
  AUTHOR_LOCATION_REQUEST,
  AUTHOR_LOCATION_REQUEST_SUCCESS,
  AUTHOR_LOCATION_REQUEST_ERROR
} from "../actions/author";

 const initialState = {
  currentAuthor: {},
  loading: false,
  error: "",
  redirectingAuthor: false,
  currentAuthorLocations: [],
  loadingLocation: false,
  errorLocation: false,
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
   } else if (action.type === TOGGLE_REDIRECT_AUTHOR) {
     return {...state, redirectingAuthor: !state.redirectingAuthor}
   } else if (action.type === AUTHOR_LOCATION_REQUEST) {
     return {
       ...state,
       loadingLocation: true
     }
   } else if (action.type === AUTHOR_LOCATION_REQUEST_SUCCESS) {
     return {
       ...state,
       loadingLocation: false,
       currentAuthorLocations: action.payload
     }
   } else if (action.type === AUTHOR_LOCATION_REQUEST_ERROR) {
     return {
       ...state,
       loadingLocation: false,
       errorLocation: action.err
     }
   }
  return state;
}
