import React from 'react';
import styled from 'styled-components';
import Title from './../../Useful/Title';

const ClientesContainer = styled.section`
  margin-top: 10rem;
  margin-bottom: 800px;
`;

const Clientes = ({color}) => {
  return (
    <ClientesContainer>
      <Title color={color} label="Feedback">
        Clientes
      </Title>
    </ClientesContainer>
  )
}

export default Clientes;