// cartSlice.test.ts
import { IProduct } from "../app/_lib/types";
import cartReducer, { addProduct, ICartItem } from "../app/store/cartSlice";

describe("cartSlice", () => {
  const initialState = {
    items: [] as ICartItem[],
  };

  const product: IProduct = {
    id: 1,
    name: "Product 1",
    brand: "Sample Brand",
    price: "100",
    photo: "Image URL",
    description: "Product description",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addProduct", () => {
    const actual = cartReducer(initialState, addProduct(product));
    expect(actual.items.length).toEqual(1);
    expect(actual.items[0]).toEqual({ ...product, quantity: 1 });
  });
});
