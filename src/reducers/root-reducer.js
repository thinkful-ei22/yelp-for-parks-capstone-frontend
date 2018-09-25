import { combineReducers } from "redux";
import loginReducer from "./login";
import registrationReducer from "./registration";

const rootReducer = combineReducers({
  user: loginReducer,
  registration: registrationReducer
});

export default rootReducer;
