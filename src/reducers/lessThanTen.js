const lessThanTenReducer = (state = false, action) => {
  switch (action.type) {
    case "LESSTHANTEN":
      return (state = !state);
    default:
      return state;
  }
};

export default lessThanTenReducer;
