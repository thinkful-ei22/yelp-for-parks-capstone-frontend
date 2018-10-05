import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
  TOGGLE_REDIRECT,
  USER_LOCATION_REQUEST,
  USER_LOCATION_REQUEST_SUCCESS,
  USER_LOCATION_REQUEST_ERROR
} from "../actions/user";
 const initialState = {
  currentUser: {},
  currentUserLocations: {},
  loading: false,
  loadingLocation: false,
  error: "",
  errorLocation: false,
  redirecting: false
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
     };
   } else if (action.type === TOGGLE_REDIRECT) {
     return { ...state, redirecting: !state.redirecting };
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
