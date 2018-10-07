import { combineReducers } from "redux";
import loginReducer from "./login";
import registrationReducer from "./registration";
import locationReducer from "./location";
import authorReducer from "./author";

const rootReducer = combineReducers({
  user: loginReducer,
  registration: registrationReducer,
  location: locationReducer,
  authorProfile: authorReducer
});

export default rootReducer;
