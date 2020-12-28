const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }
  // TODO: handle some actions
  switch (action.type) {
    case "SET_ACTIVE":
      return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;
