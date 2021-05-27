import lessThanTenReducer from "./lessThanTen";

describe("testing the lessThanTen reducers", () => {
  const currentState = false;

  test("lessThanTen state switches from false to true", () => {
    const action = { type: "LESSTHANTEN" };

    expect(lessThanTenReducer(currentState, action)).toBe(true);
  });

  test("lessThanTen state set to false", () => {
    const action = { type: "RESET" };

    expect(lessThanTenReducer(currentState, action)).toBe(false);
  });

  test("lessThanTen state set to current state", () => {
    const action = { type: "default" };

    expect(lessThanTenReducer(currentState, action)).toBe(false);
  });

  test("sets lessThanTen initial state when undefined", () => {
    const initialState = undefined;
    const action = { type: "init" };

    expect(lessThanTenReducer(initialState, action)).toBe(false);
  });
});
