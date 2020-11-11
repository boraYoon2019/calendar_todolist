import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const Sizediv = styled.div`
  display:flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
  padding-top: 1.5em;
	@media screen and (max-width: 414px) {    
    padding: 0.5em;
    padding-top: 1em;
	}
`;

function ModalButtons({status, goJoin, onSignUp, onSignIn}) {
  
  switch(status) {
    case 'SIGNNING_UP':
      return (
      <Sizediv>
        <Button 
          color='primary' type='submit' onClick={onSignUp}>Sign Up</Button>
      </Sizediv>
      );
    default: 
      return (
        <Sizediv>        
          <Button type='submit' onClick={onSignIn}>Sign In</Button>
          <Button color='primary' onClick={goJoin}>Join</Button>
        </Sizediv>
      )
  }
}

export default ModalButtons;