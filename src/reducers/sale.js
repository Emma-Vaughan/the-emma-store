const saleReducer = (state = false, action) => {
  switch (action.type) {
    case "SALE":
      return !state;
    case "RESET":
      return false;
    default:
      return state;
  }
};

export default saleReducer;
