import { combineReducers } from "redux";
import loginReducer from "./login";
import registrationReducer from "./registration";
import locationReducer from "./location";
import commentReducer from "./comment";
import authorReducer from "./author";

const rootReducer = combineReducers({
  user: loginReducer,
  registration: registrationReducer,
  location: locationReducer,
  comments: commentReducer,
  userProfile: userReducer,
  authorProfile: authorReducer
});

export default rootReducer;
