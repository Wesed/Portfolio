import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.div`
  background: transparent;
  border-style: none;
  border-radius: 4px;
  border: 1px solid ${props => props.color};
  transition: .1s;

  :hover,
  :focus {
    border: 1px solid ${props => props.theme.colors.text};
  }

  input, textarea {
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    padding: 1rem;
    width: 100%;
    border-style: none;
    background: transparent;
    resize: none;
    outline: none;
  }
`;
const Input = ({color, type, rows, placeholder}) => {

  if (type === 'textarea') {
    return (
      <InputStyle color={color}>
        <textarea rows={rows} />
      </InputStyle>
    )
  } else {
    return (
      <InputStyle color={color}>
        <input type={type} placeholder={placeholder}  />
      </InputStyle>
      );
  }
  } 
// Feed.propTypes = {
//   user: PropTypes.oneOfType([
//     PropTypes.string.isRequired,
//     PropTypes.number.isRequired,
//   ]),
// }

export default Input;