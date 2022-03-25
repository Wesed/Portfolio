import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Arrow} from '../../Assets/arrow.svg';

const Item = styled.div`
  position: relative;
  /* grid-column: 1; */
  border-left: 3px solid ${(props) => props.color};
  padding: 15px 15px 15px 20px;
  margin: 0 0 -20px 0;

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
    height: 150px;
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

const UserItem = ({children, item, color, rgba, ...props}) => {

  React.useEffect(() => {
    const divItem = document.getElementsByClassName('divItem')[item];
    const pItem = divItem.querySelector('p');
    const setSvg = divItem.querySelector('svg');

    if(pItem.scrollHeight > 150) setSvg.style.display = 'flex';
    else setSvg.style.display = 'none';

    pItem.addEventListener('scroll', () => {
        setSvg.style.display = 'none';
    });

  });

  return (
    <Item color={color} rgba={rgba} className='divItem'>
      <h3>{props.title}</h3>
      <p data-date={props.currentJob} >{children}</p>
      <Arrow />
    </Item>
  )
}

export default UserItem;