import saleReducer from "./sale";
import priceReducer from "./price";
import lessThanTenReducer from "./lessThanTen";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  saleReducer,
  priceReducer,
  lessThanTenReducer,
});

export default allReducers;
