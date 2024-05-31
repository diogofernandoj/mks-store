// ProductItem.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch } from "react-redux";
import ProductItem from "../app/_components/ProductItem";
import { IProduct } from "../app/_lib/types";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "../__mocks__/styleMock";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../app/store/cartSlice", () => ({
  addProduct: jest.fn(),
}));

jest.mock("next/image", () => {
  const MockImage = (props: any) => <img {...props} />;
  MockImage.displayName = "MockImage";
  return MockImage;
});

const mockProduct: IProduct = {
  id: 1,
  name: "Product 1",
  brand: "Brand",
  description: "This is a product description.",
  price: "100",
  photo: "ImageURL",
  createdAt: "01-01-2024",
  updatedAt: "02-01-2024",
};

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("ProductItem component", () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as any).mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render product details", () => {
    renderWithTheme(<ProductItem product={mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(
      screen.getByText(`R$${Number(mockProduct.price)}`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
  });
});
