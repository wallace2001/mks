import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
    --blue: #0F52BA;
    --text-product: #2C2C2C;
    --price: #373737;
    --background: #E5E5E5;
    --footer: #DCDCDC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif !important;
    -ewbkit-font-smoothing: antialiased;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`