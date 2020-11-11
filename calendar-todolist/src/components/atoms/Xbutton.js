import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: rgb(133, 133, 133);
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding: ${props => props.inItem? '0 .4em' : '.4em .6em'};
  margin: ${props => props.inItem? '0' : '-.8em -.8em 0 0'}; 

  margin-left: auto;
  transform: scale(1.2);

  &:hover{
    cursor: pointer;
    color: ${props => props.inItem? '#f30d0d' : '#111'};
    transform: ${props => props.inItem? 'scale(1.2)' : 'scale(1.5)'}; 
    transition: ${props => props.inItem? 'none' : 'transform 200ms ease'}; 
  }
`;

function Xbutton({inItem, onClick, value}) {
	return (
      <Button 
      inItem={inItem}
      onClick={onClick}      
      value={value}
      >&times;</Button>
	);
};

export default React.memo(Xbutton);