const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "BASKET":
      return action.data;
    default:
      return state;
  }
};

export default basketReducer;
