export const CREATE_COMMENT = "CREATE_COMMENT";
export const createComment = () => ({
  type: CREATE_COMMENT
  // text,
  // rating,
});

export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const updateComment = id => ({
  type: UPDATE_COMMENT
  // text,
  // rating
  // id
});

export const DELETE_COMMENT = "DELETE_COMMENT";
export const deleteComment = id => ({
  // type: DELETE_COMMENT
  // id
});
