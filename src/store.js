import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './reducers/location';
// import commentReducer from "./reducers/comment";
import loginReducer from './reducers/login';
import registrationReducer from './reducers/registration';
import authorReducer from './reducers/author';
import userReducer from './reducers/user';

const store = createStore(
  combineReducers({
    user: loginReducer,
    registration: registrationReducer,
    location: locationReducer,
    userProfile: userReducer,
    authorProfile: authorReducer,
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
