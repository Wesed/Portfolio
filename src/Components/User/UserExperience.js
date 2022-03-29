import React from "react";
import styled from "styled-components";
import Title from "../Useful/Title";
import UseHex from "./../Hooks/UseHex";
import UserItem from "./UserItem";

const ExperienceContainer = styled.section`
  margin-top: 5rem;
  position: relative;
  margin-bottom: 800px;
  /* border: 1px solid white; */

  :before {
    position: absolute;
    content: "";
    left: 27.8rem;
    bottom: -20px;
    display: block;
    background: ${(props) => props.color};
    width: 30px;
    height: 3px;
  }

  /* :after {
    position: absolute;
    content: "";
    left: 20.18rem;
    bottom: 15.8rem;
    display: block;
    background: ${(props) => props.color};
    width: 22rem;
    height: 3.48px;
    transform: rotate(90deg);
  } */

  span {
    position: absolute;
    left: 472px;
    top: 80px; 
    display: block;
    background: transparent;
    border: 3px solid ${(props) => props.color};
    border-bottom: none;
    /* border-radius: 50% 50% 0 0; */
    width: 16px;
    height: 23px;
  }
`;

const ExpItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(50% - 80px), auto));
  gap: 20px 10px;
  /* column-gap: 60px; */

  div:nth-child(even) {
    p {
      :before {
        position: absolute;
        content: attr(data-date);
        display: inline-block;
        left: 200px;
        text-align: center;
      }
    }
  }
`;

const UserExperience = ({ color }) => {
  const rgba = UseHex(color, 0.8);
  const timeJob = "Marc 2022 : Em andamento".replace(":", "\n");


  return (
    <ExperienceContainer color={color} className="container">
      <Title color={color} label="Os meus últimos projetos">
        Minha experiência
      </Title>
      
      <span></span>

      <ExpItem>

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
        </UserItem>

      </ExpItem>
    </ExperienceContainer>
  );
};

export default UserExperience;
