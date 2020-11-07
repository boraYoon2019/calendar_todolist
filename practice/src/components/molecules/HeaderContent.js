import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Title from '../atoms/Title';

const Span = styled.span`
  display: flex;
	flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 414px) {
	  flex-flow: row wrap;
	}
`;

const Img = styled.img`
  width: 20%;
  max-width: 5em;

  @media screen and (max-width: 320px) {
    display:none;
  }
`;


// 리덕스 개념에서 프리젠테이셔널 컴포넌트. 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트.
function HeaderContent(props) {
  const {isSignIn, onClickLogo, onSignButtonClick, onWritingButtonClick, page} = props;

    return  (
      <>
        <Img src='/Logo.png'/>
        <Title type='header' onClick={onClickLogo}/>
        <Span>
          <Button color={isSignIn? 'noPrimary' : 'primary'} onClick={onSignButtonClick}
          >{isSignIn ===true ? 'SIGN OUT': 'SIGN IN' }</Button>          
        {isSignIn && page === 'main'?
        <Button color='primary' onClick={onWritingButtonClick} margin='0' padding='.5em 0'
        >writing</Button> : ''
        }
        </Span>
      </>
    );
}

export default React.memo(HeaderContent);
