import React from 'react';
import styled from 'styled-components';

const H1Title = styled.h1`
  font-size: 3em; 
  margin-left: 0.8em;
  color: #646363;
  text-shadow: 2px 2px 5px #ffc7c7;

  @media screen and (max-width: 768px) {
    margin-left: 0.8em;
    font-size: 2.5em;
  }
  @media screen and (max-width: 411px) {
    margin-left: 0.6em;    
    margin-right: 0.6em;
    font-size: 2em;
  }

  @media screen and (max-width: 300px) {
    font-size: 1.8em;
  }

  &:hover {
    cursor: pointer;
  }
`;

const H2Title = styled.h2`
  padding: 0 .7em .8em .7em;
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.color!==undefined? props.color : '#111'};
`;


const H3Title = styled.h3`
  text-align: center;
  margin: .5em 0;
	@media screen and (max-width: 414px) {
	}
`;

function Title(props) {

  switch (props.type) {
    case 'header':
      return (
        <>
          <H1Title onClick={props.onClick}>TodoList</H1Title>
        </>
      );
    case 'h2' :
      return (
        <>
          <H2Title onClick={props.onClick}>{props.children}</H2Title>
        </>
      );
    case 'h3' :
      return (
        <>
          <H3Title onClick={props.onClick}>{props.children}</H3Title>
        </>
      );
    default:
      return (
        <>
          <H2Title onClick={props.onClick} color={props.color}>{props.children}</H2Title>
        </>
      );
  }
}

export default React.memo(Title);