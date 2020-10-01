import React from 'react';
import styled from 'styled-components';

const H1Title = styled.h1`
  font-size: 3em; 
  margin-left: 0.8em;
	color: #111;

  @media screen and (max-width: 768px) {
    margin-left: 0.8em;
    font-size: 2em;
  }
  @media screen and (max-width: 411px) {
    margin-left: 0.6em;    
    margin-right: 0.6em;
    font-size: 2em;
  }
`;

const H2Title = styled.h2`
  padding: 0 .7em .8em .7em;
  font-size: 1.5rem;
  text-align: center;
`;

function Title(props) {
  if (props.type==='header') {
    return (
      <>
        <H1Title>TodoList</H1Title>
      </>
	  );
  } else {
    return (
      <>
        <H2Title>{props.children}</H2Title>
      </>
    );
  }
}

export default React.memo(Title);