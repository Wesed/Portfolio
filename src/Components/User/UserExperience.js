import React from "react";
import styled from "styled-components";
import Title from "../Useful/Title";
import UseHex from "./../Hooks/UseHex";
import {ReactComponent as Arrow} from '../../Assets/arrow.svg';

const ExperienceContainer = styled.section`
  margin-top: 5rem;
  position: relative;
  margin-bottom: 800px;

  :before {
    position: absolute;
    content: "";
    left: 29.36rem;
    bottom: 4.7rem;
    display: block;
    background: ${(props) => props.color};
    width: 30px;
    height: 3px;
  }

  :after {
    position: absolute;
    content: "";
    left: 14.93rem;
    bottom: 21rem;
    display: block;
    background: ${(props) => props.color};
    width: 32.5rem;
    height: 3.3px;
    transform: rotate(90deg);
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

const Item = styled.div`
  position: relative;
  /* grid-column: 1; */
  border-left: 3px solid ${(props) => props.color};
  padding: 15px 15px 15px 20px;
  margin: 0 0 -20px 0;

  span {
    position: absolute;
    left: 494px;
    top: -12px; /* -17 */
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

  h3 {
    :before {
      position: absolute;
      left: -7px;
      top: 25px;
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      z-index: 999;
      background: ${(props) => props.theme.colors.text};
    }
  }

  p {
    max-height: 150px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    // chrome, safaria & Opera
    ::-webkit-scrollbar {
      display: none;
    }

    text-align: justify;
    font-weight: 300;
    font-size: 0.9rem;
    margin-top: 15px;
    opacity: 0.9;

    :before {
      position: absolute;
      content: attr(data-date);
      width: 25%;
      padding-bottom: 2px;
      text-align: center;
      white-space: pre-wrap;
      font-weight: 700;
      left: -132px;
      top: 22px;
      color: ${(props) => props.theme.colors.text};
      border-bottom: 1px solid ${(props) => props.color};
      font-size: 0.7rem;
    }

    u {
      text-decoration: none;
      border-bottom: 1px solid ${(props) => props.rgba};
      margin-left: 10px;
    }
  }

  svg {
    position: absolute;
    right: -25px;
    bottom: 25px;
    width: 16px;
    height: 16px;
    opacity: .8;
    fill: ${props => props.color};
    animation: arrowUp 1s infinite;
    display: none;
  }
`;

const UserExperience = ({ color }) => {
  const rgba = UseHex(color, 0.8);
  const currentJob = "Marc 2022 : Em andamento".replace(":", "\n");

  React.useEffect(() => {
    // const divItem = document.getElementsByClassName('divItem')[2];
    // const pItem = divItem.querySelector('p');
    // const setSvg = divItem.querySelector('svg');
    // console.log(pItem);

      // if(pItem.scrollHeight > 150) setSvg.style.display = 'flex';
      // else setSvg.style.display = 'none';

      // pItem.addEventListener('scroll', () => {
      //   setSvg.style.display = 'none';
      // });
  }, []);

  function handleFocus({target}) {
    alert(target);
    // if(pItem.scrollHeight > 150) setSvg.style.display = 'flex';
    // else setSvg.style.display = 'none';
  }



  return (
    <ExperienceContainer color={color} className="container">
      <Title color={color} label="Os meus últimos projetos">
        Minha experiência
      </Title>

      <ExpItem>
        <Item color={color} rgba={rgba} className="divItem" >
          <span></span>
          <h3> Dogs</h3>
          <p data-date={currentJob} className="pItem">
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
          </p>
          <Arrow />
        </Item>

        <Item color={color}>
          <h3> Dogs </h3>
          <p data-date={"Fev 2022 - Mar 2022"}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <Arrow />
        </Item>

        <Item color={color}>
          <h3> Lalakids&Teen </h3>
          <p data-date="Jun 2021 - Jul 2021">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </Item>

        <Item color={color}>
          <h3> Lalakids&Teen </h3>
          <p data-date="Jun 2021 - Jul 2021">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </Item>

        <Item color={color}>
          <h3> Lalakids&Teen </h3>
          <p data-date="Jun 2021 - Jul 2021">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </Item>

        <Item color={color}>
          <h3> Lalakids&Teen </h3>
          <p data-date="Jun 2021 - Jul 2021">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </Item>
      </ExpItem>
    </ExperienceContainer>
  );
};

export default UserExperience;
