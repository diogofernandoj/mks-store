"use client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./_components/Navbar";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <h1>MKS Store</h1>
    </ThemeProvider>
  );
};

export default Home;
