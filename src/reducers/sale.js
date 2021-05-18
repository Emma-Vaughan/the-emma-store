const saleReducer = (state = false, action) => {
  switch (action.type) {
    case "SALE":
      return (state = !state);
    default:
      return state;
  }
};

export default saleReducer;
