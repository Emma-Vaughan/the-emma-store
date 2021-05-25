import lessThanTenReducer from "./lessThanTen";

test("false to true", () => {
  const currentState = false;
  const action = { type: "LESSTHANTEN" };

  expect(lessThanTenReducer(currentState, action)).toBe(true);
});
