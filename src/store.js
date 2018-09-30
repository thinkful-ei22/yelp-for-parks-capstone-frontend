import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root-reducer";
import locationReducer from "./reducers/location";
import userReducer from "./reducers/user";
import commentReducer from "./reducers/comment";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  locationReducer,
  composeEnhancers(applyMiddleware(thunk)),
  userReducer,
  commentReducer,
);

export default store;
