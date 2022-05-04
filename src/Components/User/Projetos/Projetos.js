import React from "react";
import styled from "styled-components";
import Title from "./../../Useful/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import UseMedia from "./../../Hooks/UseMedia";
import {ReactComponent as Search} from '../../../Assets/search.svg';
import { Link } from 'react-router-dom';

SwiperCore.use([EffectCreative, Navigation]);

const ProjetoContainer = styled.section`
  margin-bottom: 10rem;
`;

const Slider = styled.div`
  margin: 0 0.5rem;
  height: 100%;
  transform: scale(${(props) => props.scale});
  opacity: ${(props) => props.opacity};
  border-radius: 4px;
  text-align: center;
  transition: 0.5s;

  h2 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }

  img {
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 30%);
    border-radius: 4px;
  }

  a:not(:first-child) {
    position: relative;
    color: ${(props) => props.color};
    font-weight: 700;
    display: inline-block;
    transition: 0.2s;

    @media (max-width: 30rem) {
      font-weight: 700;
      padding: 0.5rem 1rem;
      background: ${(props) => props.color};
      color: white;
      border-radius: 10px;
    }

    :hover {
      font-weight: 700;
      padding: 0.5rem 1rem;
      background: ${(props) => props.color};
      color: white;
      border-radius: 10px;
    }
  }
`;

const Overlay = styled.div`
  position: relative;
  transition: .1s;


  div {
    display: none;
  }

  :hover {
    div {
      display: flex;
      cursor: pointer;
    }
  }

  a {
    transition: 10s;
  }
`;

const OverlayInformations = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  transition: .1s;

  h3 {
    color: white;
  }

  button {
    border: none;
    background: transparent;

    svg {
      cursor: pointer;
      width: 24px;
      fill: white;
    }
  }
`;

const Projetos = ({ color }) => {

  const media = UseMedia("(max-width: 30rem)");
  let [slidesPerView, setSlides] = React.useState("auto");
  let [loop, setLoop] = React.useState(null);

  React.useEffect(() => {
    if (media) {
      setSlides(1);
      setLoop(false);

      const elPrev = document.querySelector(".swiper-button-prev");
      const elNext = document.querySelector(".swiper-button-next");

      elPrev.style.top = "30%";
      elPrev.style.transform = "translateY(-30%)";

      elNext.style.top = "30%";
      elNext.style.transform = "translateY(-30%)";
    }
  }, [media]);

  return (
    <ProjetoContainer id="portfolio">
      <Title color={color} label="Os meus principais trabalhos">
        Projetos
      </Title>

      <Swiper
        initialSlide={0}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop={loop}
        navigation={true}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive ? (
                <Slider color={color} opacity={1} scale={1}>

                  <Overlay>
                    <OverlayInformations>
                      <Link to="projeto/dogs"> 
                        <button> <Search/> </button>
                        <h3>Clique para mais informações</h3>
                      </Link>
                        </OverlayInformations>
                    <img
                      src="https://user-images.githubusercontent.com/52588477/161609153-e3839cd3-f22f-4033-aa33-ea997cbde014.jpg"
                      alt="Slide 1"
                    />
                  </Overlay>

                  <h2>Dogs</h2>
                  <p> O projeto Dogs é uma rede social fictícia para cachorros,
                    foi desenvolvido durante os estudos de ReactJs. </p>

                  <a href="https://dogs-git-master-wesed.vercel.app/login" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </Slider>
              ) : (
                <Slider opacity={0.5} scale={0.8}>
                  <img
                    src="https://user-images.githubusercontent.com/52588477/161609153-e3839cd3-f22f-4033-aa33-ea997cbde014.jpg"
                    alt="Slide 2"
                  />
                </Slider>
              )}
            </>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive ? (
                <Slider color={color} opacity={1} scale={1}>

                  <Overlay>

                    <OverlayInformations>
                        <button> <Search/> </button>
                        <h3>Clique para mais informações</h3>
                      </OverlayInformations>

                    <img
                      src="https://user-images.githubusercontent.com/52588477/166173390-f12aa151-17fc-420a-809d-a297c4bcbfea.jpg"
                      alt="Slide 2"
                    />
                  </Overlay>
                  <h2>Portfólio</h2>
                  <p>
                    {" "}
                    Projeto criado para exibir os meus trabalhos, experiências e
                    conhecimentos.{" "}
                  </p>
                  <a
                    href="https://portfolio-wesed.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </Slider>
              ) : (
                <Slider opacity={0.5} scale={0.8}>
                  <img
                    src="https://user-images.githubusercontent.com/52588477/166173390-f12aa151-17fc-420a-809d-a297c4bcbfea.jpg"
                    alt="Slide 1"
                  />
                </Slider>
              )}
            </>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive ? (
                <Slider color={color} opacity={1} scale={1}>
                  
                  <Overlay>

                    <OverlayInformations>
                      <button> <Search/> </button>
                      <h3>Clique para mais informações</h3>
                    </OverlayInformations>

                    <img
                      src="https://user-images.githubusercontent.com/52588477/166174039-7a9a372b-e655-462a-a54a-c116a9f6d71e.jpg"
                      alt="Slide 3"
                    />
                  </Overlay>
                  <h2>Animaly Petshop</h2>
                  <p>
                    {" "}
                    Projeto em desenvolvimento para uma rede de pet shops. O
                    cliente deseja, além de gerenciá-los de forma remota, exibir
                    para seus usuários os produtos e serviços à disposição.
                  </p>
                  <a
                    href="https://portfolio-wesed.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </Slider>
              ) : (
                <Slider opacity={0.5} scale={0.8}>
                  <img
                    src="https://user-images.githubusercontent.com/52588477/166174039-7a9a372b-e655-462a-a54a-c116a9f6d71e.jpg"
                    alt="Slide 3"
                  />
                </Slider>
              )}
            </>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive ? (
                <Slider color={color} opacity={1} scale={1}>

                  <Overlay>

                   <OverlayInformations>
                      <button> <Search/> </button>
                      <h3>Clique para mais informações</h3>
                    </OverlayInformations>

                    <img
                      src="https://user-images.githubusercontent.com/52588477/166174325-37c69d6d-9c01-428b-80fb-3c93fec0f5c2.jpg"
                      alt="Slide 3"
                    />
                  </Overlay>
                  <h2>Lalakids & Teen</h2>
                  <p>
                    {" "}
                    Website desenvolvido durante a pandemia, afim de permitir
                    aos usuários ver os produtos sem o risco de ir até a loja.
                  </p>
                  <a
                    href="https://portfolio-wesed.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </Slider>
              ) : (
                <Slider opacity={0.5} scale={0.8}>
                  <img
                    src="https://user-images.githubusercontent.com/52588477/166174325-37c69d6d-9c01-428b-80fb-3c93fec0f5c2.jpg"
                    alt="Slide 3"
                  />
                </Slider>
              )}
            </>
          )}
        </SwiperSlide>
        
      </Swiper>
    </ProjetoContainer>
  );
};

export default Projetos;
