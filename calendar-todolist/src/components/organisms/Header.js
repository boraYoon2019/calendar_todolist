import React from 'react';
import styled from 'styled-components';
import HeaderContent from '../molecules/HeaderContent';

import ModalPage from '../pages/ModalPage';
import ModalPortal from '../../ModalPortal';


const Wrapper = styled.header`
  display: flex;
	flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  
	padding: 0.8em;
	margin-bottom: 1em;

  @media screen and (max-width: 411px) {
    margin-bottom: .5em; 
  }
`;

function Header (props) {
  const {modal, isSignIn, onSignButtonClick, onClickLogo, onWritingButtonClick, page} = props;


  return (
    <Wrapper>
      <HeaderContent 
        isSignIn={isSignIn}
        onClickLogo={onClickLogo!==null? onClickLogo : ()=>false}
        onWritingButtonClick={onWritingButtonClick !==null? onWritingButtonClick : ()=>false}
        onSignButtonClick={onSignButtonClick !==null? onSignButtonClick : ()=>false}
        page={page}
      />
      {modal && (
        <ModalPortal>
          <ModalPage/>
        </ModalPortal>
      )}{' '}
    </Wrapper>
  )
}

export default Header;
