import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: ${props => props.flexFlow!==undefined? props.flexFlow : 'row nowrap'};
  align-items: ${props => props.alignItems!==undefined? props.alignItems : 'center'};
	padding: ${props => props.padding!==undefined? props.padding : '0 0 .2em .2em'};
  justify-content: ${props => props.justifyContent!==undefined? props.justifyContent : 'center'};  
  transition: ${props => props.transition!==undefined? props.transition : ''};
  margin-bottom: ${props => props.marginBottom!==undefined? props.marginBottom : ''};
`;

function FlexContainer ({children, justifyContent, padding, marginBottom, transition, flexFlow}){
	return (
    <Container
      justifyContent={justifyContent}
      padding={padding}
      transition={transition}
      marginBottom={marginBottom}
      flexFlow={flexFlow}
    >
      {children}
    </Container>
	);
}

export default React.memo(FlexContainer);
