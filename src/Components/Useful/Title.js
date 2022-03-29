import React from 'react';
import  styled  from 'styled-components';

const Titulo = styled.h1`
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  text-transform: capitalize;
  position: relative;
  text-align: center;
  grid-column: 1 / -1;
  margin-bottom: 50px;

  ::before {
    position: absolute;
    content: '';
    height: 40px;
    width: 5px;
    bottom: -15px;
    transform: rotate(90deg);
    z-index: -1;
    display: inline-block;
    background: ${props => props.color};
    /* opacity: 0.8; */
  }
`

const SubTitulo = styled.p`
  position: relative;
  bottom: 55px;
  font-size: 0.8rem;
  font-weight: 300;
  opacity: 0.8;
  text-align: center;
`

const Title = ({color, label, children}) => {
  return <>
    <Titulo color={color}>{children}
      <SubTitulo>{label}</SubTitulo>
    </Titulo>
  </>
}

export default Title;