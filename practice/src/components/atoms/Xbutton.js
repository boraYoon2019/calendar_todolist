import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: rgb(133, 133, 133);
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding: .4em .8em;
  margin: ${props => props.inItem === true ? '0' : '.7em 1em'};  
  margin-left: auto;
  transform: scale(1.3);

  &:hover{    
    cursor: pointer;
    color:  ${props => props.inItem === true ? '#f30d0d' : '#111'};
    transform: ${props => props.inItem === true ? 'none' : 'scale(1.6)'}; 
    transition: ${props => props.inItem === true ? 'none' : 'transform 200ms ease'}; 
  }
`;

const Xbutton = (props) => {
	return (
			<Button>&times;</Button>
	);
};

export default Xbutton;

// import XButton from '../atoms/XButton';