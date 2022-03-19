import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const UserContainer = styled.section`
    margin-top: 5rem;
    margin-bottom: 15rem;
`

const User = ({color}) => { 
  
  return (
    <UserContainer className='container'>
      <Title color={color} label='Conheça mais'>Sobre mim</Title>
    </UserContainer>
  )
}

export default User;