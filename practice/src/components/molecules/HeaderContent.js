import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Title from '../atoms/Title';

const Span = styled.span`
  display: flex;
	flex-flow: row wrap;
  justify-content: center;
	align-items: center;
`;

const Img = styled.img`
  width: 20%;
  max-width: 5em;
`;


// 리덕스 개념에서 프리젠테이셔널 컴포넌트. 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트.

class HeaderContent extends React.Component {
  // 풀자면 이런 형태일 것임.
  // constructor({isSignIn, LoginButtonColor, onClickButton}) {
  //   super();
  // } 
  componentDidMount() {
    console.log('HeaderContent Component did mount.');
  }

  shouldComponentUpdate() {    
    console.log('HeaderContent Component should update.');
    return true;
  }

  render(){
    return  (
      <>
        <Img src='/Logo.png'></Img>
        <Title type='header'/>
        <Span>
          <Button color={this.props.LoginButtonColor} onClick={this.props.onButtonClick}
          >{this.props.isSignIn ===true ? 'SIGN OUT': 'SIGN IN' }</Button>
        </Span>
      </>
    );
  }
}

export default HeaderContent;
