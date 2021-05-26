import priceReducer from "./price";

describe("price testing", () => {
  const currentState = false;

  test("price switches from false to true", () => {
    const action = {
      type: "PRICE",
    };
    expect(priceReducer(currentState, action)).toBe(true);
  });

  test("price switches to false", () => {
    const action = { type: "RESET" };
    expect(priceReducer(currentState, action)).toBe(false);
  });

  test("price switches to the current state", () => {
    const action = { type: "default" };
    expect(priceReducer(currentState, action)).toBe(false);
  });

  test("setting the state from undefined", () => {
    const initialState = undefined;
    const action = { type: "init" };
    expect(priceReducer(initialState, action)).toBe(false);
  });
});
