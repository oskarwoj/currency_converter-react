import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  background-image: url("${background}");
    background-position: center;
    background-repeat: no-repeat;
    font-family: "Lato", sans-serif;
    padding: 0 0 125px 90px;
  }
  
  @media (max-width: 520px) {
    body {
      padding: 120px 10px 125px 10px;
      background-position: 59% 40%;
    }
    p {
      font-size:14px
    }
  }
  
`;
