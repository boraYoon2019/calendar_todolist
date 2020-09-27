import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const Wrapper = styled.header`
  display: flex;
	flex-flow: row nowrap;
  justify-content: space-between;
	align-items: center;
  
	padding: 0.8em;
	margin-bottom: 3em; 

  @media screen and (max-width: 411px) {
    margin-bottom: 1.2em; 
  }
`;

const Title = styled.h1`
  font-size: 4em;
  margin: 0;
  margin-left: 0.8em;

  @media screen and (max-width: 768px) {
    margin-left: 0.8em;
    font-size: 3em;
  }
  @media screen and (max-width: 411px) {
    margin-left: 0.6em;    
    margin-right: 0.6em;
    font-size: 2em;
  }
`;

const Img = styled.img`
  width: 20%;
  max-width: 5em;
`;

const Span = styled.span`
  display: flex;
	flex-flow: row wrap;
  justify-content: center;
	align-items: center;
`;

class Header extends React.Component {

  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = { // 이 컴포넌트의 state 설정
      isLogin: false // 초기 값 설정
    };
    this.changeLoginStatus = this.changeLoginStatus.bind(this);
  };

  changeLoginStatus() {
    const isLogin = !this.state.isLogin;
    this.setState({
      isLogin: isLogin
    });
  }

  render(){
    return  (
      <div>
        <Wrapper>
          <Img src='/Logo.png'></Img>
          <Title>TodoList</Title>
          <Span>
            <Button color='primary' 
            >SIGN IN</Button>
          </Span>
        </Wrapper>
      </div>
    );
  }
}

export default Header;
