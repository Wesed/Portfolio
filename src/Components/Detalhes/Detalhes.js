import React from 'react';
import styled from 'styled-components';
import Title from './../Useful/Title';

const Container = styled.section`
  /* border: 1px solid red; */
`;

const Detalhes = ({color}) => {

  // vai ter um return pra cada projeto, que vai ser escolhido atraves do switch

  //Dogs
  return (
    <Container className="container animeLeft">
      <Title color={color} label="Projeto"> Dogs </Title>

    </Container>
  )
}

export default Detalhes;