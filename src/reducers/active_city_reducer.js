const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case "SET_ACTIVE":
      return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;
