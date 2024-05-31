import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../app/_components/Logo";

describe("Logo component", () => {
  it("should render the Logo component with correct text", () => {
    render(<Logo />);

    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });
});
