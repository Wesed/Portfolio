import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Experience} from '../../Assets/experience.svg';
import {ReactComponent as Clients} from '../../Assets/clients.svg';
import {ReactComponent as Projects} from '../../Assets/project.svg';
import UseHex from '..//Hooks/UseHex';
import Title from '../Useful/Title';
import Button from './../Useful/Button';

const UserContainer = styled.section`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 35% 60%;
  column-gap: 50px;
  `

const ProfileImg = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  grid-row: 2;
  display: grid;
  place-items: center;
  border-radius: 2rem;
  background-image: linear-gradient(-45deg, transparent, 
    ${props => props.color});

  div {
    max-height: 100%;
    position: relative;
    border-radius: 2rem;
    border: 1px solid transparent;
    /* transform: rotate(10deg); */
    overflow: hidden;

    :hover {
      transform: rotate(0);
      transition: .5s;
    }

  img {
    object-fit: cover;
  }
}

  /* ::before {
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
  } */
`

const ProfileContainer = styled.div`
  grid-row: 2;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: 15px;
`
const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-image: linear-gradient(-125deg, transparent, 
    ${props => props.color});
  text-align: center;

  span svg{
    width: 24px;
    height: 24px;
    fill: white;
    fill: ${props => props.theme.colors.text};
  }

  p {
    margin-top: .5rem;
  }

  p:first-of-type {
    font-weight: 700;
    color: white;
    color: ${props => props.theme.colors.text};
  }

  p:nth-child(3) {
    font-size: .8rem;
    opacity: .8;
  }

  :hover {
    background: transparent;
    cursor: pointer;
    transition: .1s;
    /* border: 1px solid white; */
    box-shadow: 1px 1px 5px 1px ${props => props.color};

    p {
      color: ${props => props.theme.colors.text};
    }

    svg {
      fill: ${props => props.theme.colors.text};;
    }
  }
` 

const ProfileText = styled.p`
  flex-wrap: wrap;
  width: 84%;
  text-align: start;
  font-size: .9rem;
  font-weight: 300;
`

const User = ({color}) => { 
  const rgba = UseHex(color, 1);
  
  return (
    <UserContainer className="container">
      <Title color={color} label="Conheça mais">
        Sobre mim
      </Title>

      <ProfileImg color={rgba}>
        <div>
          <img
            src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg"
            alt="profile"
          />
        </div>
      </ProfileImg>

      <ProfileContainer>
        <ProfileMenu color={color}>
          <span>
            <Experience />
          </span>
          <p> Experiência </p>
          <p> 3 anos </p>
        </ProfileMenu>

        <ProfileMenu color={color}>
          <span>
            <Projects />
          </span>
          <p> Projetos </p>
          <p> Finalizados e em andamento</p>
        </ProfileMenu>

        <ProfileMenu color={color}>
          <span>
            <Clients />
          </span>
          <p> Clientes </p>
          <p> 2 Avaliações</p>
        </ProfileMenu>

        <ProfileText>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia
        </ProfileText>

        <Button color={color} 
        href="https://github.com/Wesed/dogs/files/8459976/curriculo.pdf"
        download="Curriculo - Weslley Eduardo"> Download CV</Button>
      </ProfileContainer>
    </UserContainer>
  );
}

export default User;