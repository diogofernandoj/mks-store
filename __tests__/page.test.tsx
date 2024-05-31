import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../app/styles/theme";
import store from "../app/store/store";
import Home from "../app/page";

describe("Home component", () => {
  const queryClient = new QueryClient();

  const renderComponent = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Home />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    );

  it("should renders without crashing", () => {
    renderComponent();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("products")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
