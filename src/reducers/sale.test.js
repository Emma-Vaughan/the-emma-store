import saleReducer from "./sale";

describe("testing the sale reducer", () => {
  const currentState = false;

  test("sale from false to true", () => {
    const action = {
      type: "SALE",
    };
    expect(saleReducer(currentState, action)).toBe(true);
  });

  test("sale from false to set to false", () => {
    const action = { type: "RESET" };
    expect(saleReducer(currentState, action)).toBe(false);
  });

  test("sale set to the current state", () => {
    const action = { type: "default" };
    expect(saleReducer(currentState, action)).toBe(false);
  });

  test("setting the state if undefined", () => {
    const initialState = undefined;
    const action = { type: "init" };
    expect(saleReducer(initialState, action)).toBe(false);
  });
});
