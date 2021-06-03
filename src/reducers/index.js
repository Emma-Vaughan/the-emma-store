import saleReducer from "./sale";
import priceReducer from "./price";
import lessThanTenReducer from "./lessThanTen";
import searchTermReducer from "./searchTerm";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  saleReducer,
  priceReducer,
  lessThanTenReducer,
  searchTermReducer,
});

export default allReducers;
