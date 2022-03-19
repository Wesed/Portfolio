import React from 'react';
import styled from 'styled-components';
import SkillsShortcuts from './SkillsShortcuts';
import UseHex from './../Hooks/UseHex';

const ProfileContainer = styled.section`
  position: relative;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);
  margin-bottom: 10rem;
  border: 1px solid red;
`

const ProfileText = styled.div`
  /* line-height: 2rem; */
  /* margin: 30px; */
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
`

const ProfileImg = styled.div`
  width: 350px;
  height: 450px;
  padding: 0 40px 40px 40px;
  position: relative;

  ::before {
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

  ::after {
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
`

const Header = ({color}) => {
  const rgba = UseHex(color);

  return <>
    <header className='container'>
        <ProfileContainer>
          <SkillsShortcuts />
          <ProfileText>
            <HeaderTitle color={rgba}>Weslley Eduardo</HeaderTitle>
            {/* efeito digitacao (web / react / js) */}
            <HeaderSubtitle color={rgba}> Desenvolvedor Web </HeaderSubtitle>
            {/* <p style={{fontSize: '.9rem'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p> */}
          </ProfileText>

        </ProfileContainer>

        {/* <ProfileImg color={color}>
              <img src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg" alt="profile" />
          </ProfileImg> */}

    </header>
    </>
}

export default Header;