import saleReducer from "./sale";

describe("testing the sale reducer", () => {
  const currentState = false;

  test("sets sale state from false to true", () => {
    const action = { type: "SALE" };
    expect(saleReducer(currentState, action)).toBe(true);
  });

  test("sets sale state to false", () => {
    const action = { type: "RESET" };
    expect(saleReducer(currentState, action)).toBe(false);
  });

  test("sets sale state to the current state", () => {
    const action = { type: "default" };
    expect(saleReducer(currentState, action)).toBe(false);
  });

  test("sets initial sale state when undefined", () => {
    const initialState = undefined;
    const action = { type: "init" };
    expect(saleReducer(initialState, action)).toBe(false);
  });
});
