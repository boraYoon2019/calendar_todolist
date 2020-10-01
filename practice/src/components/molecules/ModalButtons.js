import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const Sizediv = styled.div`
  display:flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-top: 1.5em;
  justify-content: flex-end;

	@media screen and (max-width: 414px) {    
    padding: 0.5em;
    padding-top: 1em;
	}
`;

function ModalButtons(props) {
  
  switch(props.status) {
    case 'signingUp':
      return (
      <Sizediv>
        <Button color='primary'>회원가입</Button>
      </Sizediv>
      );
    default: 
      return (
        <Sizediv>
          <Button color='primary'>Join</Button>
          <Button>Sign In</Button>
        </Sizediv>
      )
  }
}

export default ModalButtons;