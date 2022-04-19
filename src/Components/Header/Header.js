import React from 'react';
import styled from 'styled-components';
import SkillsShortcuts from './SkillsShortcuts';
import UseHex from './../Hooks/UseHex';

const HeaderContainer = styled.section`
  position: relative;
  display: grid;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);

  @media (max-width: 40rem) {
    margin-top: initial;
    width: 40rem;
    height: 100vh;
  }
`

const TextContainer = styled.div`
  text-align: center;
  font-weight: 300;
`

const HeaderTitle = styled.h2`
  font-family: 'Love Light', cursive;
  font-size: 5rem;
  letter-spacing: .1rem;
  font-weight: 300;
  background-image: linear-gradient(90deg, ${props => props.color} 0%, ${props => props.theme.colors.text} 100%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  color: black;
  transition: .1s;
`

const HeaderSubtitle = styled.p`
  position: relative;
  font-size: 1rem;
  margin-top: 1rem;
  z-index: 999;
  background: ${props => props.theme.colors.primary};

  @media(max-width: 40rem) {
    font-size: 1.2rem;
  }
`

const Header = ({color}) => {
  const rgba = UseHex(color, 1);

  return <>
    <header id="home" className='container'>
        <HeaderContainer>
          <SkillsShortcuts color={color}/>
          <TextContainer>
            <HeaderTitle color={rgba}>Weslley Eduardo</HeaderTitle>
            {/* efeito digitacao (web / react / js) */}
            <HeaderSubtitle color={rgba}> Desenvolvedor Web </HeaderSubtitle>
          </TextContainer>

        </HeaderContainer>

    </header>
    </>
}

export default Header;