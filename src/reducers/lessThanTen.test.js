import lessThanTenReducer from "./lessThanTen";

test("lessThanTen filter switches from false to true", () => {
  const currentState = false;
  const action = { type: "LESSTHANTEN" };

  expect(lessThanTenReducer(currentState, action)).toBe(true);
});
