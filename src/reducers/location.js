import {
  CREATE_LOCATION,
  UPDATE_LOCATION,
  DELETE_LOCATION
} from "../actions/location";

const initialState = {
  locations: []
};

export default function locationReducer(state = initialState, action) {
  if(action.type === CREATE_LOCATION) {
    return {
      ...state,
      locations: [...state.locations, {
        title: action.title,
        description: action.description,
        address: action.address,
        city: action.city,
        state: action.state,
        zipCode: action.zipCode,
        // amenities: action.amenities,
        // specialInstructions: action.specialInstructions
      }]
    }
  } else if(action.type === UPDATE_LOCATION) {
    return {
      const locationToUpdate = state.locations.find(location => location.id === action.id);
      ...state,
      locations: [...state.locations, Object.assign({}, locationToUpdate, {
        title: action.title,
        description: action.description,
        address: action.address,
        city: action.city,
        state: action.state,
        zipCode: action.zipCode,
        // amenities: action.amenities,
        // specialInstructions: action.specialInstructions
      })]
    }
  } else if(action.type === DELETE_LOCATION) {
    ...state,
    locations: [...state.locations.filter(location => location.id !== action.id)]
  }
  return state;
}
