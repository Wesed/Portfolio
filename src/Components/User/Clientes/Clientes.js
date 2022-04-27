import React from 'react';
import styled from 'styled-components';
import Title from './../../Useful/Title';
// Slider
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper/core';
import { EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import UseMedia from './../../Hooks/UseMedia';

SwiperCore.use([EffectCreative, Pagination]);


const ClientesContainer = styled.section`
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
  height: 12rem;
  margin: 0 auto 1rem auto;
  /* cursor: pointer; */

  h2 {
    font-size: 1rem;
  }

  a {
    font-size: .7rem;
    font-weight: 500;
    color: ${props => props.color};

    :hover {
      font-size: .8rem;
      font-weight: 900;
    }
  }

  p {
    height: 2.4rem;
    overflow: scroll;
    font-size: .8rem;
    font-style: italic;
    opacity: .9;

    ::-webkit-scrollbar {
      display: none;
    }
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
  const media = UseMedia('(max-width: 30rem)');
  let slidesPerView = 2;
  if(media === true) slidesPerView = 1;
  return (
    <ClientesContainer id="clients" className="container">
      <Title color={color} label="Feedback">
        Clientes
      </Title>

      <Swiper 
        initialSlide={0}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        // loop={true}
        pagination={{ clickable: true }}
        spaceBetween={-60}
        autoHeight={true}
        >

        <SwiperSlide>
          <Slider color={color}>
            <div>
              <img src="https://user-images.githubusercontent.com/52588477/165647874-556339f1-22a6-4021-b2f1-bf52015bc6ee.jpg" alt="Foto do cliente" />
              </div>
            <h2>Juliana Landini</h2>
            <a target="_blank" href="https://www.instagram.com/lalakidseteensjrp/" rel="noreferrer">Lalakids & Teen</a>
            <p>Superou minhas expectativas! Permitiu meus clientes verem os meus produtos sem saírem de casa</p>
          </Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider color={color}>
            <div>
              <img src="https://user-images.githubusercontent.com/52588477/165647876-07e0ceba-8eb3-43e1-a060-44d20b3e449b.jpg" alt="Foto do cliente" />
              </div>
            <h2>Aline Dias</h2>
            <a target="_blank" href="instagram.com" rel="noreferrer">Animaly Petshop | Restaurante Seu Ailton</a>
            <p>A really good job, all aspects of the roject were followed step by step and with good results.</p>
          </Slider>
        </SwiperSlide>

      </Swiper>
    </ClientesContainer>
  )
}

export default Clientes;