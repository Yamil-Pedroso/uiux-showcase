import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Syne:wght@400..800&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    font-family: "Krona One", sans-serif;
    font-weight: 400;
    overflow-x: hidden !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Krona One", sans-serif;
  }
`;
