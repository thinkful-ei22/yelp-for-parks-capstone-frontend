import { combineReducers } from "redux";
import loginReducer from "./login";
import registrationReducer from "./registration";
import locationReducer from "./location";

const rootReducer = combineReducers({
  user: loginReducer,
  registration: registrationReducer,
  location: locationReducer
});

export default rootReducer;
