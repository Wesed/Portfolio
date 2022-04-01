import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Arrow} from '../../Assets/arrow.svg';
import {ReactComponent as ReactIcon} from '../../Assets/react.svg';
import {ReactComponent as Html} from '../../Assets/html5.svg';
import {ReactComponent as Css} from '../../Assets/css3.svg';
import {ReactComponent as Calendar} from '../../Assets/calendar.svg';

const Item = styled.div`
  position: relative;
  width: 15rem;
  grid-column: 1 / -1;
  margin-left: 3.4rem;

  :not(:last-child):after {
    position: absolute;
    content: '';
    top: .6rem;
    right: -2.4rem;
    width: 2px;
    height: 100%;
    background: ${props => props.theme.colors.text};

  }
  
  :nth-child(even) {
    grid-column: 2;
    margin-left: 3rem;
    
    :after
     {
      right: initial;
      left: -3.35rem;
    }

    p:first-of-type {
      
      :before {
        left: -3.65rem;
      }
    }
  }

  p {
    padding: .2rem 0;
  }
`;

// const Skills = styled.div`
// `;

const Title = styled.p`
  font-weight: 700;

  :before {
    position: absolute;
    content: '';
    top: 10px;
    right: -2.7rem;
    z-index: 999;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.color};
  }
`;

const Description = styled.p`
  font-size: .8rem;
`; 

const Date = styled.p`
  font-weight: 300;
  font-size: .7rem;
  opacity: .8;
  margin-top: 1rem;

  svg {
    width: 10px;
    fill: ${props => props.theme.colors.text};
  }
`;


const UserItem = ({item, title, description, date, color, rgba, ...props}) => {

  return (
    <Item color={color} rgba={rgba}>
      <Title color={color}>{title}</Title>
      <Description>{description}</Description>
      <Date> <Calendar /> {date}</Date>

       {/* <Arrow /> */}

      {/* <Skills color={color}> */}

      {/* {props.react ? <ReactIcon /> : ''}
      {props.styledComponents ? <img src="https://user-images.githubusercontent.com/52588477/160459541-a51fdbdc-8ec2-4854-b8e6-1baaebd731bc.png" alt="styled components icon" /> : ''}
      {props.html ? <Html /> : ''}
      {props.css ? <Css /> : ''} */}
      {/* </Skills> */}
    </Item>
  )
}

export default UserItem;


  // React.useEffect(() => {
  //   const divItem = document.getElementsByClassName('divItem')[item];
  //   const pItem = divItem.querySelector('p');
  //   const setSvg = divItem.querySelector('svg');

  //   if(pItem.scrollHeight > 150) setSvg.style.display = 'flex';
  //   else setSvg.style.display = 'none';

  //   pItem.addEventListener('scroll', () => {
  //       let scrollDetect = pItem.scrollTop;

  //       if(scrollDetect >= 18) {
  //         setSvg.style.transform = "rotate(180deg)";
  //       }

  //       if(scrollDetect === 0) {
  //         setSvg.style.display = "none";
  //       }
  //   });

  // });


  // const Item = styled.div`
//   position: relative;
//   /* grid-column: 1; */
//   border-left: 3px solid ${(props) => props.color};
//   border-right: 3px solid ${(props) => props.color};
//   padding: 15px 35px 15px 20px;
//   margin: 0 0 -20px 0;

//   h3 {
//     :before {
//       position: absolute;
//       left: -7px;
//       top: 25px;
//       content: "";
//       display: inline-block;
//       width: 10px;
//       height: 10px;
//       border-radius: 50%;
//       z-index: 999;
//       background: ${(props) => props.theme.colors.text};
//     }
//   }

//   p {
//     height: 150px;
//     overflow-y: scroll;
//     text-align: justify;
//     font-weight: 300;
//     font-size: 0.9rem;
//     margin-top: 15px;
//     -ms-overflow-style: none;
//     scrollbar-width: none;

//     svg {
//     position: absolute;
//     right: 8px;
//     bottom: 25px;
//     width: 16px;
//     height: 16px;
//     opacity: .8;
//     fill: ${props => props.color};
//     animation: arrowUp 1s infinite;
//     display: none;
//   }

//     // chrome, safaria & Opera
//     ::-webkit-scrollbar {
//       display: none;
//     }

//     :before {
//       position: absolute;
//       content: attr(data-date);
//       width: 25%;
//       padding-bottom: 2px;
//       text-align: center;
//       white-space: pre-wrap;
//       font-weight: 700;
//       left: -132px;
//       top: 22px;
//       color: ${(props) => props.theme.colors.text};
//       border-bottom: 1px solid ${(props) => props.color};
//       font-size: 0.7rem;
//     }

//     u {
//       text-decoration: none;
//       border-bottom: 1px solid ${(props) => props.rgba};
//       margin-left: 10px;
//     }
//   }

// `;

// const Skills = styled.div`
// display: flex;
// align-items: center;
// margin-top: 10px;

//   svg, img {
//     width: 30px;
//     height: 24px;
//     fill: ${props => props.theme.colors.text};
//     margin: 0 10px 0 0;

//     :hover {
//       fill: ${props => props.color};
//     }
//   }

//   img {
//     width: 35px;
//   }

//   h5 {
//     position: relative;
//     color: ${props => props.theme.colors.text};
//     height: initial;
//     margin-right: 10px;
//     font-weight: 500;

//     :before {
//       position: absolute;
//       left: -8px;
//       bottom: 5px;
//       content: '';
//       width: 3px;
//       height: 12px;
//       display: block;
//       background: ${props => props.color};
//     }
//   }
// `;