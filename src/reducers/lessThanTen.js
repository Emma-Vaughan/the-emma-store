const lessThanTenReducer = (state = false, action) => {
  switch (action.type) {
    case "LESSTHANTEN":
      return !state;
    case "RESET":
      return false;
    default:
      return state;
  }
};

export default lessThanTenReducer;
