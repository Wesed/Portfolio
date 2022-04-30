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
  display: grid;
  grid-template-columns: auto 1fr;
  /* flex-direction: column; */
  gap: .1rem;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 30%); 
  border-radius: 10px;
  padding: .5rem 1rem;
  width: 20rem;
  height: 12rem;
  margin: 0 auto 1rem auto;

  div:first-child {
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

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-top: 1.1rem;
    align-items: center;
  }

  h2 {
    grid-column: 2;
    grid-row: 1;
    font-size: 1rem;
  }

  a {
    grid-column: 2;
    grid-row: 1;
    font-size: .8rem;
    font-weight: 500;
    color: ${props => props.color};

    :hover {
      font-size: .8rem;
      font-weight: 900;
    }
  }

  p {
    grid-column: 1 / -1;
    padding: 0 .2rem 0 0;
    letter-spacing: .020rem;
    margin-top: .5rem;
    height: 3.3rem;
    overflow-y: scroll;
    font-size: .8rem;
    font-style: italic;
    opacity: .9;

    ::-webkit-scrollbar {
      background: ${props => props.theme.colors.text};
      width: .2rem;
      border-radius: .5rem;
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.color};
      border-radius: .5rem;
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
        autoHeight={true}
        >

        <SwiperSlide>
          <Slider color={color}>

            <div>
              <img src="https://user-images.githubusercontent.com/52588477/165647874-556339f1-22a6-4021-b2f1-bf52015bc6ee.jpg" alt="Foto do cliente" />
            </div>

            <div>
              <h2>Juliana Landini</h2>
              <a target="_blank" href="https://www.instagram.com/lalakidseteensjrp/" rel="noreferrer">Lalakids & Teen</a>
            </div>
            <p>Vou deixar meu Feedback dessa pessoa incrível,que tem uma inteligência de outro mundo,o meu site ficou mais do que esperado,ele superou minhas expectativas,tem um atendimento nota Mil,super indico o trabalho dele!</p>
          </Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider color={color}>
            <div>
              <img src="https://user-images.githubusercontent.com/52588477/165647876-07e0ceba-8eb3-43e1-a060-44d20b3e449b.jpg" alt="Foto do cliente" />
              </div>
            <h2>Aline Dias</h2>
            <a target="_blank" href="instagram.com" rel="noreferrer">Animaly Petshop</a>
            <p>Superou minhas expectativas! Permitiu meus clientes verem os meus produtos sem saírem de casa</p>
          </Slider>
        </SwiperSlide>

      </Swiper>
    </ClientesContainer>
  )
}

export default Clientes;