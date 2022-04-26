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

a:visited, 
a:link,
a:active {
    text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: 60rem;
  margin: 0 auto 10rem auto;

  @media(max-width: 30rem) {
    width: auto;
  }
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
  border-radius: 50%;
  padding: 7px;
}

.btnConfig svg:hover {
  background: ${props => props.theme.colors.text};
  fill: ${props => props.theme.colors.primary};
  transition: .1s;
  cursor: pointer;
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

/* Swiper carousel */

.swiper-slide {
  padding: 1rem;
  background-position: center;
  background-size: cover;
  width: 670px;
  height: 550px;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: ${props => props.color};
}

.swiper-pagination-bullet-active {
  background: ${props => props.color};
}

@keyframes arrowUp {
  to {
    bottom: 25px;
  }

  from {
    bottom: 35px;
  }
}

`