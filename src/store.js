import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import locationReducer from "./reducers/location";
// import commentReducer from "./reducers/comment";
import loginReducer from "./reducers/login";
import registrationReducer from "./reducers/registration";
import authorReducer from "./reducers/author";
import userReducer from "./reducers/user";
import { refreshAuthToken } from "./actions/login";
import { loadAuthToken, setAuthToken } from "./utils";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    user: loginReducer,
    registration: registrationReducer,
    location: locationReducer,
    userProfile: userReducer,
    authorProfile: authorReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  // store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
