import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../app/_components/Footer";

describe("Footer component", () => {
  it("should render the Footer component with correct text", () => {
    render(<Footer />);

    expect(
      screen.getByText("Frontend Challenge © Todos os direitos reservados")
    ).toBeInTheDocument();
  });
});
