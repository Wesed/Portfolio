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
.container .profileContainer {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 50px;
  height: 30rem;
}

.container .profileContainer .profileText {
  line-height: 2rem;
  margin-top: 30px;
}

.container .profileContainer .profileText h3 {
  margin: 20px 0 20px 0;
}

.container .profileContainer .profileText p {
  font-size: .9rem;
}
.container .profileContainer .profileImg {
  width: 350px;
  height: 450px;
  padding: 0 40px 40px 40px;
  position: relative;
}

.container .profileContainer .profileImg::before {
  content: '';
  position: absolute;
  height: 80px;
  width: 80px;
  border-top: 10px solid ${props => props.color};
  border-left: 10px solid ${props => props.color};
  left: -15px;
  top: -35px;
  transition: .1s;
}

.container .profileContainer .profileImg::after {
  content: '';
  position: absolute;
  height: 80px;
  width: 80px;
  border-bottom: 10px solid ${props => props.color};
  border-right: 10px solid ${props => props.color};
  right: -5px;
  bottom: 65px;
  transition: .1s;
}

.themeColor {
  color: ${props => props.color};
  transition: .1s;
}

/* CONFIG */
.config {
  position: absolute;
  display: flex;
  top: 100px;
  right: 15px;
  /* width: 250px; */
  gap: 20px;
}

.btnConfig {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
}

.colorsConfig {
  text-align: center;
  background: ${props => props.theme.colors.secondary};
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  transition: .1s;
  /* display: none; */
}

.colorsConfig p {
  font-size: .9rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.colorContainer {
  display: flex;
  justify-content: space-between;
  /* padding: 5px; */
}

.colorItem {
  width: 25px; 
  height: 25px;
  border-radius: 50%;
  border: 1px solid transparent;
  margin-right: 5px;
}

.colorItem:hover {
  transform: scale(1.2);
  cursor: pointer;
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

`