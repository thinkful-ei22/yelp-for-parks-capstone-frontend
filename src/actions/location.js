import { loadAuthToken, normalizeResponseErrors } from "../utils";
import { BACKEND_URL } from "../config";
// import { browserHistory } from "react-router";

export const MAKE_LOCATION_REQUEST = "MAKE_LOCATION_REQUEST";
export const makeLocationRequest = () => ({
  type: MAKE_LOCATION_REQUEST
});

export const TOGGLE_REDIRECT = "TOGGLE_REDIRECT";
export const toggleRedirect = bool => ({
  type: TOGGLE_REDIRECT,
  payload: bool
});

export const CREATE_LOCATION_SUCCESS = "CREATE_LOCATION_SUCCESS";
export const createLocationSuccess = locationObject => ({
  type: CREATE_LOCATION_SUCCESS,
  payload: locationObject
});

export const LOCATION_REQUEST_ERROR = "LOCATION_REQUEST_ERROR";
export const locationRequestError = err => ({
  type: LOCATION_REQUEST_ERROR,
  payload: err
});

export const CREATE_LOCATION = "CREATE_LOCATION";
export const createLocation = locationObject => dispatch => {
  console.log("request initiated");
  //grab the token from localstorage
  const token = loadAuthToken();
  //start loading screen
  dispatch(makeLocationRequest());
  //dispatch a fetch request
  fetch(`${BACKEND_URL}/locations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(locationObject)
  })
    .then(res => {
      console.log("obtained response");
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      console.log("parsed response");
      // browserHistory.push(`${parsedResponse.location}`);
      console.log(parsedResponse);
      dispatch(createLocationSuccess(parsedResponse));
      dispatch(toggleRedirect(true));
    })
    .catch(err => {
      dispatch(locationRequestError(err.message));
    });
};

export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const updateLocation = (id, locationObject) => dispatch => {
  console.log("Updating location");
  dispatch(makeLocationRequest());
  const token = loadAuthToken();
  console.log(id);
  fetch(`${BACKEND_URL}/locations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(locationObject)
  })
    .then(res => {
      console.log("obtained response");
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      console.log("parsed response");
      console.log(parsedResponse);
      dispatch(createLocationSuccess(parsedResponse));
      dispatch(toggleRedirect());
    })
    .catch(err => {
      dispatch(locationRequestError(err.message));
    });
};

export const DELETE_LOCATION = "DELETE_LOCATION";
export const deleteLocation = id => dispatch => {
  console.log("Deleted a location");
};
