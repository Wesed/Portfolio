import React from "react";
import styled from "styled-components";
import { ReactComponent as Home } from "../Assets/home.svg";
import { ReactComponent as User } from "../Assets/user.svg";
import { ReactComponent as Portfolio } from "../Assets/portfolio.svg";
import { ReactComponent as Message } from "../Assets/message.svg";

const Nav = styled.nav`
  position: fixed;
  bottom: 20px;
  width: 15.6rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.themeMode};
  fill: ${props => props.theme.colors.primary};
  padding: 7px;
  backdrop-filter: blur(4px);
`;

const NavMenus = styled.a`
  padding: 7px 12px;

  :hover {
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.color};
    fill: ${props => props.theme.colors.primary};
    transition: .1s;
  }
`

const Navbar = ({color, theme}) => {
  let themeMode = theme.title;

  if(themeMode === 'light') {
    themeMode = 'rgba(0, 0, 0, 0.6)';
  } else {
    themeMode = 'rgba(190, 190, 190, 0.6)';
  }
  
  return (
    <Nav theme={theme} themeMode={themeMode} className='navSvg'>
        <NavMenus color={color}><Home /></NavMenus>
        <NavMenus color={color}><User /></NavMenus>
        <NavMenus color={color}><Portfolio /></NavMenus>
        <NavMenus color={color}><Message /></NavMenus>
    </Nav>
  );
};

export default Navbar;
