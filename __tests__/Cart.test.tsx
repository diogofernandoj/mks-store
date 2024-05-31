import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector } from "react-redux";
import Cart from "../app/_components/Cart";
import { RootState } from "../app/store/store";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "../__mocks__/styleMock";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../app/_components/CartItem", () => {
  const MockCartItem = ({ item }: { item: any }) => (
    <div data-testid="cart-item">{item.name}</div>
  );
  MockCartItem.displayName = MockCartItem;
  return MockCartItem;
});

const mockItems = [
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
];

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("Cart component", () => {
  beforeEach(() => {
    (useSelector as any).mockImplementation((selectorFn: any) =>
      selectorFn({
        cart: {
          items: mockItems,
        },
      } as RootState)
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the Cart component when isOpen is true", () => {
    renderWithTheme(<Cart isOpen={true} setOpen={jest.fn()} />);

    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
    expect(screen.getByText("X")).toBeInTheDocument();

    expect(screen.getAllByTestId("cart-item").length).toBe(2);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();

    expect(screen.getByText("R$40")).toBeInTheDocument();
  });

  it("should call setOpen with false when CloseCartButton is clicked", () => {
    const setOpen = jest.fn();
    renderWithTheme(<Cart isOpen={true} setOpen={setOpen} />);

    fireEvent.click(screen.getByText("X"));
    expect(setOpen).toHaveBeenCalledWith(false);
  });
});
