import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../app/_components/Logo";

describe("Logo component", () => {
  it("should render the Logo component with correct text", () => {
    render(<Logo />);

    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Challenge")).toBeInTheDocument();
  });

  it("should render the LogoContainer", () => {
    const { container } = render(<Logo />);
    const logoContainer = container.firstChild;

    expect(logoContainer).toBeInTheDocument();
    expect(logoContainer).toHaveStyle("display: flex");
  });
});
