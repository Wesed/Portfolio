import React from 'react';
import styled from 'styled-components';
import Title from './../../Useful/Title';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper/core';
import { EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import UseMedia from './../../Hooks/UseMedia';

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

    @media (max-width: 30rem) {
      font-weight: 700;
      padding: .5rem 1rem;
      background: ${props => props.color};
      color: white;
      border-radius: 10px;    
    }

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
  const media = UseMedia('(max-width: 30rem)');
  let [slidesPerView, setSlides] = React.useState('auto');
  let [loop, setLoop] = React.useState(null);

  React.useEffect(() => {
    if(media) {
      setSlides(1);
      setLoop(false);

      
      const elPrev = document.querySelector('.swiper-button-prev');
      const elNext = document.querySelector('.swiper-button-next');
      
      elPrev.style.top = '30%';
      elPrev.style.transform = 'translateY(-30%)';

      elNext.style.top = "30%";
      elNext.style.transform = 'translateY(-30%)';
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