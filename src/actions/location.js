import { loadAuthToken, normalizeResponseErrors } from "../utils";
import { BACKEND_URL } from "../config";
import axios from 'axios';
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

export const GET_ONE_LOCATION_SUCCESS = "GET_ONE_LOCATION_SUCCESS";
export const getOneLocationSuccess = locationObject => ({
  type: GET_ONE_LOCATION_SUCCESS,
  payload: locationObject
});

export const GET_ALL_LOCATIONS_SUCCESS = "GET_ALL_LOCATIONS_SUCCESS";
export const getAllLocationsSuccess = locationList => ({
  type: GET_ALL_LOCATIONS_SUCCESS,
  payload: locationList
});

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

export const getOneLocation = id => dispatch => {
  const token = loadAuthToken();
  console.log(`getting location ${id}`);
  dispatch(makeLocationRequest());
  return fetch(`${BACKEND_URL}/locations/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      console.log("stored new location");
      console.log(parsedResponse);
      dispatch(getOneLocationSuccess(parsedResponse));
    });
};

export const getAllLocations = () => dispatch => {
  const token = loadAuthToken();
  console.log("getting all locations");
  dispatch(makeLocationRequest());
  fetch(`${BACKEND_URL}/locations`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      normalizeResponseErrors(res);
      return res.json();
    })
    .then(parsedResponse => {
      console.log("parsed response");
      console.log(parsedResponse);
      dispatch(getAllLocationsSuccess(parsedResponse));
    })
    .catch(err => {
      dispatch(locationRequestError(err.message));
    });
};

export const GEOCODE_SUCCESS = 'GEOCODE_SUCCESS'
export const geocodeSuccess = (latlng) => ({
  type: GEOCODE_SUCCESS,
  payload: latlng
})

export const geocode = locationObject => dispatch => {
  //console.log('This is the locationObject as it enters geocode function!', locationObject.currentLocation)
  var location = {
    adminDistrict: locationObject.currentLocation.state,
    postalCode: locationObject.currentLocation.zipCode,
    locality: locationObject.currentLocation.city,
    addressLine: locationObject.currentLocation.address,
    key: 'Av25hukp36GNb2z84eLlEqTM89_Ac6TK04lIvT6yraWADNTKr8YJFQ1DpR3Dac6g'
  }
  //console.log("This is the location object after it's been pieced apart in geocode function!", location)

  let latitude;
  let longitude;
  let coordinates;

  axios.get(`http://dev.virtualearth.net/REST/v1/Locations/US/${location.adminDistrict}/${location.postalCode}/${location.locality}/${location.addressLine}?o=json&key=${location.key}`)
  .then(res => {
    console.log("Latitude within axios", res.data.resourceSets[0].resources[0].point.coordinates[0])
    console.log("Longitude within axios", res.data.resourceSets[0].resources[0].point.coordinates[1])
    latitude = res.data.resourceSets[0].resources[0].point.coordinates[0];
    longitude = res.data.resourceSets[0].resources[0].point.coordinates[1];
    coordinates = {
      lat: latitude,
      lng: longitude
    }
    console.log("Right before coordinates return statement in axios", coordinates);
    return coordinates;
  })
  .then(latlng => {
    console.log("Right before dispatching geocodeSuccess function", latlng);
    dispatch(geocodeSuccess(latlng))
  })
  .catch(err => console.log(err))
}

export const DELETE_LOCATION = "DELETE_LOCATION";
export const deleteLocation = id => dispatch => {
  console.log("Deleted a location");
  // dispatch(makeLocationRequest())
  // fetch(`${BACKEND_URL}/${id}`, {

  // })
};
