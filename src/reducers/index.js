import saleReducer from "./sale";
import priceReducer from "./price";
import lessThanTenReducer from "./lessThanTen";
import searchTermReducer from "./searchTerm";
import basketReducer from "./basket";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  saleReducer,
  priceReducer,
  lessThanTenReducer,
  searchTermReducer,
  basketReducer,
});

export default allReducers;
