import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
`;

const ModalBackground = (props) => {
	return (
      <Background>
        {this.props.children}
      </Background>
	);
}

export default ModalBackground;