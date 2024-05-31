// ProductSkeleton.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductSkeleton from "../app/_components/ProductSkeleton"; // Adjust the import path as necessary

describe("ProductSkeleton component", () => {
  it("should render all skeleton elements", () => {
    render(<ProductSkeleton />);

    expect(screen.getByTestId("skeleton-image")).toBeInTheDocument();
    expect(screen.getAllByTestId("skeleton-text")).toHaveLength(2); // There are two SkeletonText elements
    expect(screen.getByTestId("skeleton-button")).toBeInTheDocument();
  });
});
