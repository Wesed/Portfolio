import React from "react";
import styled from "styled-components";
import Title from "../Useful/Title";
import { ReactComponent as Work } from "../../Assets/work.svg";
import { ReactComponent as Formacao } from "../../Assets/formacao.svg";
import UserWork from './UserWork';
import UserFormacao from './UserFormacao';

const ExperienceContainer = styled.section`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ButtonsDiv = styled.div`
  display: flex;
  grid-column: 1 / -1;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const ExpItem = styled.div`
  width: 40rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / -1;
  margin: 0 auto;
  column-gap: 2rem;
`;

const Btn = styled.button`
  position: relative;
  display: flex;
  gap: 10px;
  background: transparent;
  border: none;
  color: ${(props) => props.status ? props.color : props.theme.colors.textOpacity};
  font-size: 1rem;
  padding: 1rem 2rem;
  font-weight: 700;

  :first-child:after {
    position: absolute;
    content: '';
    top: .5rem;
    left: 11.72rem;
    width: .125rem;
    height: 2rem;
    background: ${(props) => props.theme.colors.textOpacity};
  }

  :hover {
    cursor: pointer;
    color: ${(props) => props.color};

    svg {
      fill: ${(props) => props.color};
    }
  }

  svg {
    fill: ${(props) => props.status ? props.color : props.theme.colors.textOpacity};
    width: 16px;
  }
`;

const UserExperience = ({ color }) => {
  const [work, setWork] = React.useState(true);
  const [formacao, setFormacao] = React.useState(false);
  // const rgba = UseHex(color, 0.8);
  // const timeJob = "Marc 2022 : Em andamento".replace(":", "\n");

  React.useEffect( () => {  
    const work = document.getElementById('workBtn');
    const formacao = document.getElementById('FormacaoBtn');

    work.addEventListener('mouseover', () => {
      setWork(true); 
      setFormacao(false);
    });

    formacao.addEventListener('mouseover', () => {
      setWork(false); 
      setFormacao(true);
    });
  }, []);

  return (
    <ExperienceContainer color={color}>
      <Title color={color} label="As minhas experiências e formação">
        Minha experiência
      </Title>

      <ButtonsDiv>
        <Btn
        status = {work}
        id='workBtn'
        color={color}> Experiências <Work />
       </Btn>

        <Btn
          status = {formacao}
          id='FormacaoBtn'
          color={color}> Formação <Formacao />
        </Btn>
      </ButtonsDiv>

      <ExpItem>

        {work && <UserWork color={color}/>}
        {formacao && <UserFormacao color={color}  />}

      </ExpItem>

      {/* 
      <UserItem color={color} rgba={rgba} 
      title="Animaly Petshop" 
      timeJob={timeJob} 
      item={0} 
      react={true}
      styledComponents={true}
      html={true}
      css={true}>
            Fui contratado para desenvolver um site para uma rede de pet shops, onde o cliente gostaria de exibir seus produtos. Disse ainda que gostaria de controlar o pet shop de forma remota, uma vez que as unidades se encontram em cidades diferentes. Sugeri, portanto, que fosse desenvolvido uma aplicação web, onde seria capaz de cadastrar produtos, estoque, ter um controle sobre as entradas e saídas e relatórios.
            Por fim, o cliente solicitou também que fosse possível o cadastro de clientes e seus pets, afim de manter um controle sobre os serviços utilizados no pet shops, produtos adquiridos, etc. 
        </UserItem>

        <UserItem color={color} rgba={rgba} title="Dogs" timeJob='Março 2022' item={1}>
            O projeto Dogs é uma rede social fictícia para cachorros, foi
            desenvolvido durante os estudos de ReactJs. Algumas funcionalidades
            gerais do React usadas foram:
            <u>React Hooks,</u>
            <u>Styled Components,</u>
            <u>React Router Dom,</u>
            <u>Lazy & Suspense,</u>
            <u>Protected Route.</u>
            <br />
            Também utilizei a biblioteca 
            <u>Victory</u> para gerar gráficos, além de consumir uma API externa de teste para cadastro e busca de fotos, comentários, usuários, etc.
        </UserItem>

        <UserItem color={color} rgba={rgba} title="Lalakids & Teen" timeJob='Jun 2021 - Ago 2021' item={2}>
        Por conta da pandemia, o cliente se queixou da queda de rendimentos da loja. Sugeri portanto que exibisse seus produtos em um site, numa especie de <u>vitrine virtual</u>, onde os clientes poderiam ver e comprar sem sair de casa. Após a conclusão do site, sugeri ao cliente um sistema web, afim de gerenciar as publicações, estoque, caixa (entrada e saída), funcionários, dados dos clientes, relatórios, etc. 
        </UserItem> */}
    </ExperienceContainer>
  );
};

export default UserExperience;
