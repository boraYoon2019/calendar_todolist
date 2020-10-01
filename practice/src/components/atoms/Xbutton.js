import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: rgb(133, 133, 133);
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding: .4em .8em;
  margin: ${props => props.inItem? '0' : '.7em 1em'};  
  margin-left: auto;
  transform: scale(1.3);

  &:hover{
    cursor: pointer;
    color:  ${props => props.inItem ==='true'? '#f30d0d' : '#111'};
    transform: ${props => props.inItem? 'none' : 'scale(1.6)'}; 
    transition: ${props => props.inItem? 'none' : 'transform 200ms ease'}; 
  }
`;

function Xbutton(props) {
	return (
			<Button>&times;</Button>
	);
};

export default React.memo(Xbutton);

// import XButton from '../atoms/XButton';