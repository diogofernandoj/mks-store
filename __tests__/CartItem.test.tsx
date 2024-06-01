import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch } from "react-redux";
import CartItem from "../app/_components/CartItem";
import {
  ICartItem,
  removeProductFromCart,
  decrementQuantity,
  incrementQuantity,
} from "../app/store/cartSlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../app/store/cartSlice", () => ({
  removeProductFromCart: jest.fn(),
  decrementQuantity: jest.fn(),
  incrementQuantity: jest.fn(),
}));

jest.mock("next/image", () => {
  const MockImage = (props: any) => <img {...props} />;
  MockImage.displayName = "MockImage";
  return MockImage;
});

const mockItem: ICartItem = {
  id: 1,
  name: "Item 1",
  brand: "Sample Brand",
  description: "Sample Description",
  price: "10",
  quantity: 2,
  photo: "Image URL",
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
};

describe("CartItem component", () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as any).mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the CartItem component with correct item details", () => {
    render(<CartItem item={mockItem} />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Qtd:")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("R$20")).toBeInTheDocument();
    expect(screen.getByAltText("Item 1")).toBeInTheDocument();
  });

  it("should dispatch removeProductFromCart when remove button is clicked", () => {
    render(<CartItem item={mockItem} />);

    fireEvent.click(screen.getByText("X"));
    expect(dispatch).toHaveBeenCalledWith(removeProductFromCart(mockItem.id));
  });
});
