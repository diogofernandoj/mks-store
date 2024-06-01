import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector } from "react-redux";
import CartButton from "../app/_components/CartButton";
import { RootState } from "../app/store/store";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("next/image", () => {
  const MockImage = (props: any) => <img {...props} />;
  MockImage.displayName = "MockImage";
  return MockImage;
});

const mockState = {
  cart: {
    items: [
      {
        id: 1,
        name: "Item 1",
        brand: "Brand 1",
        description: "Description 1",
        photo: "ImageURL",
        price: "10",
        quantity: 2,
      },
      {
        id: 2,
        name: "Item 2",
        brand: "Brand 2",
        description: "Description 2",
        photo: "ImageURL",
        price: "20",
        quantity: 1,
      },
    ],
  },
} as RootState;

describe("CartButton component", () => {
  beforeEach(() => {
    (useSelector as any).mockImplementation((selectorFn: any) =>
      selectorFn(mockState)
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the CartButton component with correct item count", () => {
    render(<CartButton />);

    expect(screen.getByAltText("Cart Icon")).toBeInTheDocument();

    const totalQuantity = mockState.cart.items.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    expect(screen.getByText(totalQuantity.toString())).toBeInTheDocument();
  });
});
