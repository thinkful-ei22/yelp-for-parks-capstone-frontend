import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
  TOGGLE_REDIRECT
} from "../actions/user";
 const initialState = {
  currentUser: {},
  loading: false,
  error: "",
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
     }
   } else if (action.type === TOGGLE_REDIRECT) {
     return { ...state, redirecting: !state.redirecting };
   }
  return state;
}