import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Arrow} from '../../Assets/arrow.svg';
import {ReactComponent as ReactIcon} from '../../Assets/react.svg';
import {ReactComponent as Html} from '../../Assets/html5.svg';
import {ReactComponent as Css} from '../../Assets/css3.svg';
import {ReactComponent as Calendar} from '../../Assets/calendar.svg';
import {ReactComponent as Freelance} from '../../Assets/briefcase.svg';
import {ReactComponent as CompanyIcon} from '../../Assets/company.svg';
import {ReactComponent as Voluntario} from '../../Assets/voluntary.svg';
import {ReactComponent as Graduacao} from '../../Assets/graduation.svg';
import {ReactComponent as Curso} from '../../Assets/medal.svg';
import {ReactComponent as Estudo} from '../../Assets/study.svg';

const Item = styled.div`
  position: relative;
  width: 15rem;
  grid-column: 1 / -1;
  margin-left: 3.4rem;

  @media (max-width: 30rem) {
    grid-column: auto;
    margin: auto auto 3rem auto;
    /* padding: 0 0 0 1rem; */

    ::before {
      position: absolute;
      left: -1.7rem;
      top: 1rem;
      z-index: -1;
      content: '';
      display: inline-block;
      width: 2px;
      height: 13rem;
      background: linear-gradient(45deg, ${props => props.color} 30%, ${props => props.theme.colors.text} 100%);
    }

    :last-child {
      ::before {
        height: 7rem;
      }
    }
  }

  :not(:last-child):after {
    position: absolute;
    content: "";
    top: 1.12rem;
    right: -2.4rem;
    width: 2px;
    height: 100%;
    background: ${(props) => props.theme.colors.text};

    @media (max-width: 30rem) {
      display: none;
    }
  }

  @media (min-width: 31rem) {
    :nth-child(even) {
    grid-column: 2;
    margin-left: 3rem;
    /* os itens da direita pode crescer inifto a direita */
    width: 100%;

    :after {
      right: initial;
      left: -3.33rem;
    }

    p:first-of-type {
      :before {
        left: -3.33rem;
        width: 40px;
        background: linear-gradient(
          -90deg,
          ${(props) => props.color} 15%,
          ${(props) => props.theme.colors.text} 100%
        );
      }
    }
  }
  }

  p {
    padding: 0.3rem 0;

    :first-child {
      display: inline-block;
      padding-right: 1rem;
      background: ${(props) => props.theme.colors.primary};
    }
  }

  svg {
    width: 10px;
    fill: ${(props) => props.theme.colors.text};
    margin-right: 0.2rem;
  }
`;

// const Skills = styled.div`
// `;

const Title = styled.p`
  font-weight: 700;

  :before {
    position: absolute;
    content: '';
    top: 18px;
    right: -2.3rem;
    z-index: 999;
    display: block;
    width: 120px;
    height: 2px;
    background: ${props => props.color};
    background: linear-gradient(90deg, ${props => props.color} 30%, ${props => props.theme.colors.text} 100%);
    z-index: -1;

    @media (max-width: 30rem) {
      border-radius: 50%;
      width: 14px;
      height: 14px;
      left: -2.07rem;
      top: 10px;
      background: ${props => props.color};
    }
  }
`;

const Description = styled.p`
  font-size: .8rem;
`; 

const Company = styled.p`
    display: flex;
    gap: .2rem;
    font-size: .8rem;

    svg {
      /* margin-right: .5rem; */
      width: 15px;
    }
`

const Date = styled.p`
  font-weight: 300;
  font-size: .7rem;
  margin-top: 1rem;

  svg {
    opacity: .8;
  }
`;


const UserItem = ({item, title, description, company, type, date, color, rgba, ...props}) => {
  let typeData = 'null';

    switch(type) {
      case 'Freelance':
        typeData = <Freelance/>;
        break;

        case 'Voluntario':
        typeData = <Voluntario/>;
        break;

        case 'Certificacao':
        typeData = <Curso/>;
        break;

        case 'Graduacao':
        typeData = <Graduacao/>;
        break;

        case 'Estudo':
        typeData = <Estudo/>;
        break;

        default:
        typeData = <CompanyIcon/>;
        break;
    }


  return (
    <Item color={color} rgba={rgba}>
      <Title color={color}> {title} </Title>
      <Description> {description} </Description>
      <Company> {typeData} {company} </Company>
      <Date> <Calendar /> {date} </Date>
      
      <div color={color}>

      {props.html ? <Html /> : ''}
      {props.css ? <Css /> : ''}
      {props.react ? <ReactIcon /> : ''}
      </div>
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