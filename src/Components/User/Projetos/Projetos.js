import React from 'react';
import styled from 'styled-components';
import Title from './../../Useful/Title';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper/core';
import { EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([EffectCreative, Navigation]);

const ProjetoContainer = styled.section`
  margin-bottom: 10rem;
`;

const Slider = styled.div`
  margin: 0 .5rem;
  height: 100%;
  transform: scale(${props => props.scale});
  opacity: ${props => props.opacity};
  border-radius: 4px;
  text-align: center;
  transition: .5s;

  h2 {
    font-size: 1.2rem;
    margin: .5rem 0;
  }

  p {
    font-size: .8rem;
    margin: .5rem 0;
  }


  img {
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 30%);
    border-radius: 4px;
  }

  a {
    position: relative;
    color: ${props => props.color};
    font-weight: 700;
    display: inline-block;
    transition: .2s;

    /* :before {
      position: absolute;
      content: '';
      bottom: 0;
      left: -.2rem;
      height: .1rem;
      width: 3.5rem;
      background: ${props => props.color};
    } */

    :hover {
      font-weight: 700;
      padding: .5rem 1rem;
      background: ${props => props.color};
      color: white;
      border-radius: 10px;
    }
  }
`;

const Projetos = ({color}) => {
  
  return (
    <ProjetoContainer id="portfolio">
      <Title color={color} label="Os meus principais trabalhos">
        Projetos
      </Title>

      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        navigation={true}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive ? (
                <Slider color={color} opacity={1} scale={1}>
                  <img
                    src="https://user-images.githubusercontent.com/52588477/161609153-e3839cd3-f22f-4033-aa33-ea997cbde014.jpg"
                    alt="Slide 1"
                  />
                  <h2>Dogs</h2>
                  <p> O projeto Dogs é uma rede social fictícia para cachorros, foi
                  desenvolvido durante os estudos de ReactJs. </p>
                  
                  <a href="https://dogs-git-master-wesed.vercel.app/login" target="_blank" rel="noreferrer">Demo</a>
                </Slider>
              ) : (
                <Slider opacity={.5} scale={.8}>
                  <img
                    src="https://user-images.githubusercontent.com/52588477/161609153-e3839cd3-f22f-4033-aa33-ea997cbde014.jpg"
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
                  <img
                    src="https://user-images.githubusercontent.com/52588477/161609153-e3839cd3-f22f-4033-aa33-ea997cbde014.jpg"
                    alt="Slide 1"
                  />
                  <h2>Dogs</h2>
                  <p> O projeto Dogs é uma rede social fictícia para cachorros, foi
                  desenvolvido durante os estudos de ReactJs. </p>
                  <a href="https://dogs-git-master-wesed.vercel.app/login" target="_blank" rel="noreferrer">Demo</a>
                </Slider>
              ) : (
                <Slider opacity={.5} scale={.8}>
                  <img
                    src="https://user-images.githubusercontent.com/52588477/161609153-e3839cd3-f22f-4033-aa33-ea997cbde014.jpg"
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
                  <img
                    src="https://user-images.githubusercontent.com/52588477/161609153-e3839cd3-f22f-4033-aa33-ea997cbde014.jpg"
                    alt="Slide 1"
                  />
                  <h2>Dogs</h2>
                  <p> O projeto Dogs é uma rede social fictícia para cachorros, foi
                  desenvolvido durante os estudos de ReactJs. </p>
                  <a href="https://dogs-git-master-wesed.vercel.app/login" target="_blank" rel="noreferrer">Demo</a>
                </Slider>
              ) : (
                <Slider opacity={.5} scale={.8}>
                  <img
                    src="https://user-images.githubusercontent.com/52588477/161609153-e3839cd3-f22f-4033-aa33-ea997cbde014.jpg"
                    alt="Slide 1"
                  />
                </Slider>
              )}
            </>
          )}
        </SwiperSlide>
      </Swiper>
    </ProjetoContainer>
  );
}

export default Projetos;