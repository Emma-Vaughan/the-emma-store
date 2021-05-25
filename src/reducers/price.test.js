import priceReducer from "./price";

test("price switches from false to true", () => {
  const currentState = false;
  const action = {
    type: "PRICE",
  };
  expect(priceReducer(currentState, action)).toBe(true);
});
