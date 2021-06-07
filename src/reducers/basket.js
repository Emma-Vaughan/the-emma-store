const basketReducer = (state = [], action) => {
  const prevBasket = [...state];
  switch (action.type) {
    case "BASKET":
      return [action.data, ...prevBasket];
    default:
      return state;
  }
};

export default basketReducer;
