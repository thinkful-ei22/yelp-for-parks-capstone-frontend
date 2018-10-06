import {
  CREATE_LOCATION_SUCCESS,
  GET_ONE_LOCATION_SUCCESS,
  GET_ALL_LOCATIONS_SUCCESS,
  LOCATION_REQUEST_ERROR,
  MAKE_LOCATION_REQUEST,
  UPDATE_LOCATION,
  DELETE_LOCATION,
  TOGGLE_REDIRECT
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
  locationList: null
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
    return state;
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

  return state;
}
