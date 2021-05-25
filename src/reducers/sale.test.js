import saleReducer from "./sale";

test("sale from false to true", () => {
  const currentState = false;
  const action = {
    type: "SALE",
  };
  expect(saleReducer(currentState, action)).toBe(true);
});
