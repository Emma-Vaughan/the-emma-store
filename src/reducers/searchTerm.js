const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCHTERM":
      return action.data;
    case "RESET":
      return "";
    default:
      return state;
  }
};

export default searchTermReducer;
