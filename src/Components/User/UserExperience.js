import React from "react";
import styled from "styled-components";
import Title from "../Useful/Title";
import UseHex from "./../Hooks/UseHex";
import UserItem from "./UserItem";

const ExperienceContainer = styled.section`
  margin-top: 5rem;
  position: relative;
  margin-bottom: 800px;

  :before {
    position: absolute;
    content: "";
    left: 29.36rem;
    bottom: 4.8rem;
    display: block;
    background: ${(props) => props.color};
    width: 30px;
    height: 3px;
  }

  :after {
    position: absolute;
    content: "";
    left: 13.18rem;
    bottom: 22.8rem;
    display: block;
    background: ${(props) => props.color};
    width: 36rem;
    height: 3.48px;
    transform: rotate(90deg);
  }

  span {
    position: absolute;
    left: 497px;
    top: 50px; 
    display: block;
    background: transparent;
    border: 3px solid ${(props) => props.color};
    border-bottom: none;
    /* border-left: none; */
    border-radius: 50% 50% 0 0;
    /* transform: rotate(-5deg); */
    width: 16px;
    height: 23px;
  }
`;

const ExpItem = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(50% - 80px), auto));
  gap: 20px;
  column-gap: 60px;

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
  const currentJob = "Marc 2022 : Em andamento".replace(":", "\n");

  // React.useEffect(() => {
    // const divItem = document.getElementsByClassName('divItem')[2];
    // const pItem = divItem.querySelector('p');
    // const setSvg = divItem.querySelector('svg');
    // console.log(pItem);

      // if(pItem.scrollHeight > 150) setSvg.style.display = 'flex';
      // else setSvg.style.display = 'none';

      // pItem.addEventListener('scroll', () => {
      //   setSvg.style.display = 'none';
      // });
  // }, []);



  return (
    <ExperienceContainer color={color} className="container">
      <Title color={color} label="Os meus últimos projetos">
        Minha experiência
      </Title>
      <span></span>

      <ExpItem>
        <UserItem color={color} rgba={rgba} title="Dogs" currentJob={currentJob} item={0}>
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

        <UserItem color={color} rgba={rgba} title="Dogs" currentJob='Jun 2021 - Ago 2021' item={1}>
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

        <UserItem color={color} rgba={rgba} title="Dogs" currentJob='Jun 2021 - Ago 2021' item={2}>
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

        <UserItem color={color} rgba={rgba} title="Dogs" currentJob='Jun 2021 - Ago 2021' item={3}>
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

        <UserItem color={color} rgba={rgba} title="Dogs" currentJob='Jun 2021 - Ago 2021' item={4}>
            O projeto Dogs é uma rede social fictícia para cachorros, foi
            desenvolvido durante os estudos de ReactJs. 
        </UserItem>

      </ExpItem>
    </ExperienceContainer>
  );
};

export default UserExperience;
