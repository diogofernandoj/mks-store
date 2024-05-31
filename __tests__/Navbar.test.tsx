// Navbar.test.tsx
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../app/_components/Navbar";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "../__mocks__/styleMock";

jest.mock("../app/_components/Logo", () => {
  const MockLogo = () => <div>Logo</div>;
  MockLogo.displayName = "Logo";
  return MockLogo;
});

jest.mock("../app/_components/CartButton", () => {
  const MockCartButton = () => <button>CartButton</button>;
  MockCartButton.displayName = "CartButton";
  return MockCartButton;
});

jest.mock("../app/_components/Cart", () => {
  const MockCart = ({
    isOpen,
    setOpen,
  }: {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
  }) => (isOpen ? <div>Cart</div> : null);
  MockCart.displayName = "Cart";
  return MockCart;
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("Navbar component", () => {
  it("should render the Navbar component", () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("should display Cart when CartButton is clicked", () => {
    renderWithTheme(<Navbar />);

    const cartButton = screen.getByText("CartButton");
    fireEvent.click(cartButton);

    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("should hide Cart initially", () => {
    renderWithTheme(<Navbar />);
    expect(screen.queryByText("Cart")).not.toBeInTheDocument();
  });
});
