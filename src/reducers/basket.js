const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "BASKET":
      return [action.data, ...state];
    default:
      return state;
  }
};

export default basketReducer;
