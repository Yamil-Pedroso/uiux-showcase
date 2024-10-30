import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Syne:wght@400..800&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    font-family: "Inter", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Syne", sans-serif;
  }
`;
