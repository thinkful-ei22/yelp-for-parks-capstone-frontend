import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import locationReducer from "./reducers/location";
// import commentReducer from "./reducers/comment";
import loginReducer from "./reducers/login";
import registrationReducer from "./reducers/registration";
import authorReducer from "./reducers/author";
import userReducer from "./reducers/user";

//function that saves state to localstorage

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

//function that loads state from localStorage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    //we check if it exists, if not we give react redux undefined not null
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

//we call the load function
const persistedState = loadFromLocalStorage();

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

//the store's subscribe method runs each time the state changes
// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
