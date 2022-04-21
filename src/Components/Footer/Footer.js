import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import { ReactComponent as Github } from "../../Assets/github.svg";

const FooterContainer = styled.footer`
  position: relative;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 30%);
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
  z-index: 998;

  div {
    margin:  auto;
    display: flex;
    justify-content: center;
    gap: 1rem;

    svg {
      width: 24px;
      fill: ${props => props.theme.colors.text};
      cursor: pointer;
      margin-top: .5rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      Obrigado pela visita.
      <div>
        <Linkedin />
        <Github />
      </div>
    </FooterContainer>
  )
}

export default Footer;