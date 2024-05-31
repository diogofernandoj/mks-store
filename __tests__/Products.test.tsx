// Products.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useQuery } from "@tanstack/react-query";
import Products from "../app/_components/Products";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("../app/_components/ProductItem", () => {
  const MockProductItem = ({ product }: { product: any }) => (
    <div>{product.name}</div>
  );
  MockProductItem.displayName = "ProductItem";
  return MockProductItem;
});

jest.mock("../app/_components/ProductSkeleton", () => {
  const MockProductSkeleton = () => <div>Loading...</div>;
  MockProductSkeleton.displayName = "ProductSkeleton";
  return MockProductSkeleton;
});

describe("Products component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render loading state initially", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(<Products />);

    expect(screen.getByTestId("products")).toBeInTheDocument();
    expect(screen.getAllByText("Loading...").length).toBe(8);
  });

  it("should render error message on error", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: { message: "Failed to fetch" },
      isLoading: false,
    });

    render(<Products />);

    expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument();
  });

  it("should render product items on successful fetch", async () => {
    const products = [
      {
        id: 1,
        name: "Product 1",
        brand: "Brand 1",
        description: "Description 1",
        price: "1",
        photo: "ImageURL",
      },
      {
        id: 2,
        name: "Product 2",
        brand: "Brand 2",
        description: "Description 2",
        price: "1",
        photo: "ImageURL",
      },
    ];

    (useQuery as jest.Mock).mockReturnValue({
      data: { products },
      error: null,
      isLoading: false,
    });

    render(<Products />);

    await waitFor(() => {
      expect(screen.getByTestId("products")).toBeInTheDocument();
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });
});
