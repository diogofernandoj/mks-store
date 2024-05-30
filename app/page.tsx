"use client";

import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./_components/Products";
import { Provider } from "react-redux";
import store from "./store/store";

const Home = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <Products />
          <Footer />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Home;
