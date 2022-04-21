import React from 'react';
import styled from "styled-components";
import Title from './../../Useful/Title';
import {ReactComponent as Email} from '../../../Assets/email.svg';
import {ReactComponent as Messenger} from '../../../Assets/messenger2.svg';
import {ReactComponent as Whatsapp} from '../../../Assets/whatsapp.svg';
import Input from './../../Useful/Input';
import Button from './../../Useful/Button';

const ContatoContainer = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 5rem;
  justify-content: center;
  padding: 0 5rem;
  /* border: 1px solid green; */
`;

const ContactField = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    gap: .5rem;
    border-radius: 10px;
    background: ${props => props.theme.colors.secondary};
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 30%); 

    :hover {
      cursor: pointer;
      background: transparent;
      box-shadow: 1px 1px 5px 1px ${props => props.color}; 
    }

    svg {
      fill: ${props => props.theme.colors.text};
      width: 24px;
    }

    p:nth-child(2) {
      font-weight: 700;
    }

    p:nth-child(3) {
      font-size: .8rem;
      font-weight: 300;
      opacity: .8;
    }
    
    p:nth-child(4) {
      color: ${props => props.color};
      font-size: .8rem;
      font-weight: 900;
    }
  }
`;

const FormField = styled.form`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    align-self: start;
  }
`;

const Contato = ({color}) => {
  console.log(color);
  return (
    <ContatoContainer id="contato" className='container'>
      <Title color={color} label="Olá">Contato</Title>
      <ContactField color={color}>
        <div>
          <Email />
          <p>Email</p>
          <p>support@gmail.com</p>
          <p>Send a message</p>
        </div>

        <div>
          <Messenger />
          <p>Messenger</p>
          <p>@user</p>
          <p>Send a message</p>
        </div>

        <div>
          <Whatsapp />
          <p>WhatsApp</p>
          <p>+55 19 993844103</p>
          <p>Send a message</p>
        </div>
      </ContactField>

      <FormField>
        <Input color={color} type="text" placeholder="Nome completo / Empresa"/>
        <Input color={color} type="email" placeholder="E-mail"/>
        <Input color={color} type="textarea" rows={5}/>
        <Button color={color}>Enviar mensagem</Button>
      </FormField>
    </ContatoContainer>
  )
}

export default Contato;