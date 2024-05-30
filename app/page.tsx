"use client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>MKS Store</h1>
    </ThemeProvider>
  );
};

export default Home;
