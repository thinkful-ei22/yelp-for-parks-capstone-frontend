import {
  CREATE_LOCATION_SUCCESS,
  GET_ONE_LOCATION_SUCCESS,
  GET_ALL_LOCATIONS_SUCCESS,
  UPDATE_IMAGE_REQUEST,
  UPDATE_IMAGE_SUCCESS,
  UPDATE_IMAGE_ERROR,
  SET_PAGE,
  LOCATION_REQUEST_ERROR,
  MAKE_LOCATION_REQUEST,
  UPDATE_LOCATION,
  DELETE_LOCATION,
  TOGGLE_REDIRECT,
  GEOCODE_SUCCESS
} from "../actions/location";

import {
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS
} from "../actions/comment";

const initialState = {
  currentLocation: {},
  loading: false,
  error: "",
  redirecting: false,
  locationList: null,
  page: 0,
  currentLatLng: {
    lat: 51.505,
    lng: -0.09
  }
};

export default function locationReducer(state = initialState, action) {
  if (action.type === MAKE_LOCATION_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === CREATE_LOCATION_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentLocation: action.payload
    };
  }

  if (action.type === UPDATE_IMAGE_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === UPDATE_IMAGE_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentLocation: action.payload
    };
  }
  if (action.type === UPDATE_IMAGE_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  if (action.type === GET_ONE_LOCATION_SUCCESS) {
    return { ...state, currentLocation: action.payload, loading: false };
  }

  if (action.type === GET_ALL_LOCATIONS_SUCCESS) {
    return { ...state, loading: false, locationList: action.payload };
  }

  if (action.type === TOGGLE_REDIRECT) {
    return { ...state, redirecting: action.payload };
  }

  if (action.type === UPDATE_LOCATION) {
    const locationToUpdate = state.locations.find(
      location => location.id === action.id
    );
    return {
      ...state,
      locations: [...state.locations, locationToUpdate]
    };
  }
  if (action.type === DELETE_LOCATION) {
    return {
      ...state,
      locations: [
        ...state.locations.filter(location => location.id !== action.id)
      ]
    };
  }

  if (action.type === LOCATION_REQUEST_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

<<<<<<< HEAD
  //COMMENT ACTION HANDLERS//====================================================

  if (action.type === CREATE_COMMENT_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentLocation: {
        ...state.currentLocation,
        comments: state.currentLocation.comments.concat([action.payload])
      }
    };
  }

  if (action.type === DELETE_COMMENT_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentLocation: {
        ...state.currentLocation,
        comments: state.currentLocation.comments.filter(
          comment => comment.id !== action.payload
        )
      }
    };
  }
=======
  if (action.type === SET_PAGE) {
    return Object.assign({}, state, { page: action.page });
  }

>>>>>>> 5e84f0cdea002a1d8c2f628c4f7a57184d04fcc3
  if(action.type === GEOCODE_SUCCESS) {
    return { ...state, loading: false, currentLatLng: action.payload };
  }
  return state;
}
