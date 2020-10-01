import React from 'react';
import styled from 'styled-components';
import HeaderContent from '../molecules/HeaderContent';
import { connect } from 'react-redux'

// 액션 가져오기
// import {setUserStat, changeStatus} from '../../modules/signInOrOut'
import * as actions from '../../modules/signInOrOut';


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

// 컨테이너 컴포넌트. 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트. 
// HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트를 불러와 사용.
class Header extends React.Component {

	// 예전에 생성자 선언했었으나, 버전 업그레이드 후 생략 됨.
  // constructor() {
  //   super(); // React.Component의 생성자 메소드를 먼저 실행
  //   this.state = { // 이 컴포넌트의 state 설정
  //     isSignIn: false // 초기 값 설정
  //   };
  // }
  
  // 컴포넌트 내부의 state를 바꾸는 3가지 방식
  // changeLoginStatus() {
  //   const isSignIn = !this.state.isSignIn;
  //   this.setState({
  //     isSignIn: isSignIn
  //   });
  //   console.log('체인지');
  // }

  // changeLoginStatus() {
  //   this.setState((prevState) => {
  //     return { 
  //       isSignIn: !prevState.isSignIn
  //     }
  //   });
  // }
  
  // changeLoginStatus = () => {
  //   this.setState((prevState) => {
  //     return { 
  //       isSignIn: !prevState.isSignIn
  //     }
  //   });
  // };
  
  componentDidMount() {
    console.log('Header Component did mount.');
  }

  shouldComponentUpdate() {    
    console.log('Header Component should update.');
    return true;
  }

  render(){
    // 리덕스 관련 변수
    const { setUserStat, changeStatus } = this.props;

    return  (
        <Wrapper>
          <HeaderContent LoginButtonColor={
            this.props.isSignIn===true? 'noPrimary' : 'primary'
          } isSignIn={this.props.isSignIn} onButtonClick={
            () => {
              changeStatus();
            }
          }/>
        </Wrapper>
    );
  }
}


const mapStateToProps = (state) => ({
  isSignIn: state.signInOrOut.isSignIn,
});

const mapDispatchToProps = (dispatch) => ({
  setUserStat: () => dispatch(actions.setUserStat()),
  changeStatus: () => dispatch(actions.changeStatus()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
