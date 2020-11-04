import React from 'react';
import styled from 'styled-components';

const SectionMain = styled.section`
  margin: 2em;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1em 1em 5em 1em;
  border-bottom: 4px dotted #ffc7c7;

  @media screen and (max-width: 768px) {
    margin: 1em 0.7em;
    padding: .6em 1em 4em 1em;
  }

  @media screen and (max-width: 411px) {
    margin: .5em 0.3em;
    padding: .3em 1em 3em 1em;
  }
`;

const NormalSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const SectionFeedback = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 3em;
  
  @media screen and (max-width: 768px) {
    padding: 2em;
  }
  @media screen and (max-width: 411px) {
    padding: 1em;
  }
`;


function Section (props){
  if(props.name==='main') {
    return (
      <SectionMain>
        {props.children}
      </SectionMain>
    );
  } else if (props.name==='feedback') {
    return (
      <SectionFeedback>
        {props.children}
      </SectionFeedback>
    );
  } else {
    return (
      <NormalSection>
        {props.children}
      </NormalSection>
    );
  }
}

export default React.memo(Section);