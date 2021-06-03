const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "BASKET":
      return action.data;
    case "RESET":
      return state;
    default:
      return state;
  }
};

export default basketReducer;
