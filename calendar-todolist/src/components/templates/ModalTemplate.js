import React from 'react';
import styled from 'styled-components';
import ModalBackground from '../atoms/ModalBackground';

const Template = styled.div`
  position: relative;  
  background-color: #fefefe;
  padding: 1.6em;
	border: 2px solid #ffc7c7;
  border-radius: 10px;
  width: 100%;
  min-width: 30vw;
  max-width: 30vw;

	@media screen and (max-width: 1200px) {
    max-width: 35vw;
  }
	@media screen and (max-width: 1024px) {
    max-width: 45vw;
  }
  
	@media screen and (max-width: 768px) {
    max-width: 55vw;
    padding: 1.4em;
  }

	@media screen and (max-width: 630px) {
    max-width: 75vw;
	}

	@media screen and (max-width: 472px) {
    max-width: 92vw;
	}
`;
        
function ModalTemplate(props) {

		return (
      <ModalBackground display='none'>
        <Template>
          {props.children}
        </Template>
      </ModalBackground>
		);
}

export default React.memo(ModalTemplate);