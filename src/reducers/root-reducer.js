import { combineReducers } from "redux";
import loginReducer from "./login";
import registrationReducer from "./registration";
import locationReducer from "./location";
import authorReducer from "./author";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: loginReducer,
  registration: registrationReducer,
  location: locationReducer,
  userProfile: userReducer,
  authorProfile: authorReducer
});

export default rootReducer;
