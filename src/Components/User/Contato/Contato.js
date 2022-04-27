import React from 'react';
import styled from "styled-components";
import Title from './../../Useful/Title';
import {ReactComponent as Email} from '../../../Assets/email.svg';
import {ReactComponent as Messenger} from '../../../Assets/messenger2.svg';
import {ReactComponent as Whatsapp} from '../../../Assets/whatsapp.svg';
import Button from './../../Useful/Button';
import UseMedia from './../../Hooks/UseMedia';
import emailjs from 'emailjs-com';

const ContatoContainer = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 5rem;
  justify-content: center;
  padding: 0 5rem;

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactField = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 30rem) {
    flex-direction: row;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    width: 12rem;
    gap: .5rem;
    border-radius: 10px;
    background: ${props => props.theme.colors.secondary};
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 30%); 

    :hover {
      /* cursor: pointer; */
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
    
    a {
      color: ${props => props.color};
      font-size: .8rem;
      font-weight: 900;
    }

    @media (max-width: 30rem) {
      padding: 1rem;
      width: auto;

      svg {
        fill: ${props => props.color};
      }
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

  input, textarea {
    background: transparent;
    border-style: none;
    border-radius: 4px;
    border: 1px solid ${props => props.color};
    transition: .1s;

    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    padding: 1rem;
    width: 100%;
    background: transparent;
    resize: none;
    outline: none;

    :hover,
    :focus {
      border: 1px solid ${props => props.theme.colors.text};
    }
  }
`;

const Contato = ({color}) => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_az79ssb', form.current, 'aZspqX-pSkW7_ToJu')
        .then((result) => {
            alert('Email enviado com sucesso! Entrarei em contato logo ;)');
        }, (error) => {
          alert('Ops! Algo deu errado :(', error.text);
        });
    e.target.reset();
  };
  
  const media = UseMedia('(max-width: 30rem)');
  return (
    <ContatoContainer id="contato" className='container'>
      <Title color={color} label="Olá">Contato</Title>
      <ContactField color={color}>
        <div>
          <Email />
          {media ? <></>
          : 
          <>
          <p>Email</p>
          <p>dev.wfeduardo@gmail.com</p>
          <a href="mailto:dev.wfeduardo@gmail.com">Enviar Mensagem</a>
          </>}
        </div>

        <div>
          <Messenger />
          {media ? <></>
          : 
          <>
          <p>Messenger</p>
          <p>@weslleyfillipee</p>
          <a target="_blank" rel="noreferrer" href="https://m.me/weslleyfillipee">Enviar mensagem</a>
          </>}
        </div>

        <div>
          <Whatsapp />
          {media ? <></>
          : 
          <>
          <p>WhatsApp</p>
          <p>+55 19 993844103</p>
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?1=pt_BR&phone=5519993844103&text=Ola! Me interessei pelo seu portfolio!">Enviar mensagem</a>
          </>}
        </div>
      </ContactField>

      <FormField ref={form} onSubmit={sendEmail} color={color}>
        <input type="text" name="name" color={color} placeholder="Nome completo / Empresa" required/>
        <input type="email" name="email" color={color} placeholder="E-mail" required/>
        <input type="text" name="subject" color={color} placeholder="Assunto"/>
        <textarea name="message" rows="5" required></textarea>
        <Button color={color}>Enviar mensagem</Button>
      </FormField>
    </ContatoContainer>
  )
}

export default Contato;