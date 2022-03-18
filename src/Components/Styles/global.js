import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.primary};
    transition: .1s;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, p {
    color: ${props => props.theme.colors.text};
    transition: .1s;
  }

  h1, h2, h3, h4, p {
  margin: 0;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: 60rem;
  margin: 0 auto;
}

/* HEADER */

.themeColor {
  color: ${props => props.color};
  transition: .1s;
}

.btnConfig svg {
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.secondary};
  fill: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  padding: 7px;
}

.btnConfig svg:hover {
  background: ${props => props.theme.colors.text};
  fill: ${props => props.theme.colors.primary};
  transition: .1s;
}

.animeRight {
  opacity: 0;
  transform: transformeX(20px);
  animation: animeRight .3s forwards;
}

@keyframes animeRight {
  to {
    opacity: 1;
    transform: initial;
  }
}

.navSvg svg {
  width: 16px;
  height: 16px;
}

.active {
  background: currentColor;
}

`