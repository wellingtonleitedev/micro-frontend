import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import './index.css';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
  background: #fff;
  -webkit-font-smoothing: antialised;
  }
  
  body, button, input {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;