import {
  CREATE_LOCATION_SUCCESS,
  LOCATION_REQUEST_ERROR,
  MAKE_LOCATION_REQUEST,
  UPDATE_LOCATION,
  DELETE_LOCATION,
  TOGGLE_REDIRECT
} from "../actions/location";

const initialState = {
  currentLocation: {},
  loading: false,
  error: "",
  redirecting: false
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
  return state;
}
