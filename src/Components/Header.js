import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.section`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 50px;
  height: 30rem;
`

const ProfileText = styled.div`
  line-height: 2rem;
  margin: 30px;
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

  return <>
    <header className='container'>
        <ProfileContainer>

          <ProfileText>
            <h2>Olá, meu nome é <span className='themeColor'>Weslley Eduardo</span></h2>
            {/* efeito digitacao (web / react / js) */}
            <h3 style={{margin: '20px 0 20px 0'}}>Eu sou <span className='themeColor'>Desenvolvedor Web</span></h3>
            <p style={{fontSize: '.9rem'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
          </ProfileText>

          <ProfileImg color={color}>
              <img src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg" alt="profile" />
          </ProfileImg>

        </ProfileContainer>
    </header>
    </>
}

export default Header;