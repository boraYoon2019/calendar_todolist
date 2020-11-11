import React from 'react';
import ModalTemplate from '../templates/ModalTemplate';
import SignInModal from '../organisms/Modal';

import { connect } from 'react-redux'
import * as actions from '../../modules/signInOrOut';
'use strict';
class ModalPage extends React.Component {

  constructor() {
    super();
    // BEFORE_SIGN_IN
    // SIGNNING_UP
    this.state = {
      status:'BEFORE_SIGN_IN'
    };
    this.successToSocialLogin = this.successToSocialLogin.bind(this);
    this.failToSocialLogin = this.failToSocialLogin.bind(this);    
    this.goJoin = this.goJoin.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  successToSocialLogin() {
    // 로그인 모달 닫기
    this.props.closeModal();
    // 로그인 상태 변경 
    this.props.setSignIn(true);
  }
  
  goJoin(event) {
    event.preventDefault();
    this.setState({
      status:'SIGNNING_UP'
    });
  }
  
  onSignIn(event, id, pw) {
    event.preventDefault();
    const userInfo = {
      id: id,
      pw: pw
    }
    this.props.signningIn(userInfo);
  }
  
  onSignUp(event, id, pw) {
    event.preventDefault();
    const userInfo = {
      id: id,
      pw: pw
    }
    this.props.joinning(userInfo);
  }

  failToSocialLogin() {
    alert('로그인에 실패하였습니다. 다시 시도해주세요.');    
  }

  render() {
		return (
        <ModalTemplate>
          <SignInModal
            onXClick={this.props.closeModal}
            status={this.state.status}            
            goJoin={this.goJoin}
            onSignUp={this.onSignUp}
            onSignIn={this.onSignIn}
            socialLoginOnSuccess={
              (e) => {this.successToSocialLogin();}            
            }
            socialLoginOnFailure={
              this.failToSocialLogin
            }
          ></SignInModal>
        </ModalTemplate>
		);
  }

};

const mapStateToProps = (state) => ({
  isSignIn: state.signInOrOut.isSignIn,
  modal: state.signInOrOut.modal,
  join: state.signInOrOut.join
});

const mapDispatchToProps = (dispatch) => ({
  setSignIn: (boolean) => dispatch(actions.setSignIn(boolean)),
  showModal: () => dispatch(actions.showModal()),
  closeModal: () => dispatch(actions.closeModal()),
  joinning: (userInfo) => dispatch(actions.joinning(userInfo)),
  signningIn: (userInfo) => dispatch(actions.signningIn(userInfo)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);