const searchTermReducer = (state = "", action) => {
  console.log(action);
  switch (action.type) {
    case "SEARCHTERM":
      return action.data;
    case "RESET":
      return false;
    default:
      return state;
  }
};

export default searchTermReducer;
