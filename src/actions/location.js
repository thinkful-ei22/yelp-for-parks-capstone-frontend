export const CREATE_LOCATION = "CREATE_LOCATION";
export const createLocation = () => ({
  type: CREATE_LOCATION
  title
  description
  address
  city
  state
  zipCode
  //amenities
  //specialInstructions
});

export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const updateLocation = (id) => ({
  type: UPDATE_LOCATION
  title
  description
  address
  city
  state
  zipCode
  //amenities
  //specialInstructions
  id
});

export const DELETE_LOCATION = "DELETE_LOCATION";
export const deleteLocation = (id) => ({
  type: DELETE_LOCATION
  id
});
