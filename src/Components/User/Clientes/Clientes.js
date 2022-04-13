import React from 'react';
import styled from 'styled-components';
import Title from './../../Useful/Title';
// Slider
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper/core';
import { EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([EffectCreative, Pagination]);


const ClientesContainer = styled.section`
  margin-top: 10rem;
  grid-column: 1 / -1;
  /* border: 1px solid red; */
  /* padding: 0 4rem; */
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: .1rem;
  /* border: 1px solid blue; */
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 30%); 
  border-radius: 10px;
  padding: .5rem 1rem;
  width: 20rem;
  /* height: 12rem; */
  margin: 0 auto 1rem auto;
  /* cursor: pointer; */

  h2 {
    font-size: 1rem;
  }

  p:first-of-type {
    font-size: .7rem;
    font-weight: 500;
    color: ${props => props.color};
  }

  p {
    font-size: .8rem;
  }

  div {
    /* border: 1px solid red; */
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: .5rem;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

`;


const Clientes = ({color}) => {
  return (
    <ClientesContainer className="container">
      <Title color={color} label="Feedback">
        Clientes
      </Title>

      <Swiper 
        initialSlide={0}
        slidesPerView={2}
        centeredSlides={false}
        // loop={true}
        pagination={{ clickable: true }}
        spaceBetween={-60}
        autoHeight={true}
        lazyLoading={true}
        >

        <SwiperSlide>
          <Slider color={color}>
            <div>
              <img src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg" alt="Foto do cliente" />
              </div>
            <h2>1 Jhon Doe</h2>
            <p>Animaly Petshop</p>
            <p>A really good job, all aspects of the roject were followed step by step and with good results.</p>
          </Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider color={color}>
            <div>
              <img src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg" alt="Foto do cliente" />
              </div>
            <h2>1 Jhon Doe</h2>
            <p>Animaly Petshop</p>
            <p>A really good job, all aspects of the roject were followed step by step and with good results.</p>
          </Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider color={color}>
            <div>
              <img src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg" alt="Foto do cliente" />
              </div>
            <h2>1 Jhon Doe</h2>
            <p>Animaly Petshop</p>
            <p>A really good job, all aspects of the roject were followed step by step and with good results.</p>
          </Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider color={color}>
            <div>
              <img src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg" alt="Foto do cliente" />
              </div>
            <h2>1 Jhon Doe</h2>
            <p>Animaly Petshop</p>
            <p>A really good job, all aspects of the roject were followed step by step and with good results.</p>
          </Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider color={color}>
            <div>
              <img src="https://user-images.githubusercontent.com/52588477/158433544-e869ce81-06fb-4792-9895-819b388d4377.jpg" alt="Foto do cliente" />
              </div>
            <h2>1 Jhon Doe</h2>
            <p>Animaly Petshop</p>
            <p>A really good job, all aspects of the roject were followed step by step and with good results.</p>
          </Slider>
        </SwiperSlide>
      </Swiper>
    </ClientesContainer>
  )
}

export default Clientes;