// cartSlice.test.ts
import cartReducer, { ICartItem } from "../app/store/cartSlice";

describe("cartSlice", () => {
  const initialState = {
    items: [] as ICartItem[],
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });
});
