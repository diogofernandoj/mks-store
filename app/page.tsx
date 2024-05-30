"use client";

import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./_components/Products";

const Home = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Products />
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Home;
