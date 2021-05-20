const priceReducer = (state = false, action) => {
  switch (action.type) {
    case "PRICE":
      return !state;
    case "RESET":
      return false;
    default:
      return state;
  }
};

export default priceReducer;
