import React from 'react';
import IdPwInput from '../molecules/IdPwInput';
import ModalButtons from '../molecules/ModalButtons';
import SocialLogin from '../molecules/SocialLogin';
import ModalLayout from '../atoms/ModalLayout';
import Form from '../atoms/Form';
import Title from '../atoms/Title';
import Xbutton from '../atoms/Xbutton';

import styled from 'styled-components';

const Content = styled.p`
  width: 100%;
  font-size: 1.2rem;
  word-break: keep-all;
`;
class SignInModal extends React.Component {

  constructor() {
    super();    
    this.state = {
      id: '',
      password: '',
      passwordConfirm: '',
    };
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePwChange = this.handlePwChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  handleIdChange(event) {
    this.setState({
      id: event.target.value
    });
  }

  handlePwChange(event, type) {
    if(type === 'password') {      
      this.setState({
        password: event.target.value
      });
    } else {
      this.setState({
        passwordConfirm: event.target.value
    }); 
    } 
  }

  checkBeforeSignUp(id, password, passwordConfirm) {
    if (id === '' || password === '' || passwordConfirm === '') {
      alert('빈칸을 모두 입력해주세요. :)');
      return false;
    }

    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!(regExp.test(id))) {      
      alert('올바른 이메일 형식이 아닙니다. :)');
      return false;
    }

    if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(password)){            
      alert('비밀번호는 숫자,영문자,특수문자 조합으로 8자리 이상 사용해주세요. :)');
      return false;
    }

    if(/(\w)\1\1\1/.test(password)){
        alert('비밀번호 내 같은 문자를 4번 이상 사용하실 수 없습니다. :)');
        return false;
    }
    
    if (password != passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다. :)');
      return false;
    }

    if(password.search(id) > -1){
        alert("비밀번호에 아이디가 포함되어 있습니다. :)");
        return false;
    }

    return true;
  }

  onSignUp(event) {
    event.preventDefault();

    const id = this.state.id;
    const password = this.state.password;
    const passwordConfirm=this.state.passwordConfirm;

    if(this.checkBeforeSignUp(id, password, passwordConfirm)) {
      // 로그인 사가로 전달
      this.props.onSignUp(event, id, password);
    }  
  }

  onSignIn(event) {
    event.preventDefault();

    const id = this.state.id;
    const password = this.state.password;
    if (id === '' || password === '') {
      alert('E-Mail 혹은 Password를 입력해주세요. :)');
      return;
    }
    this.props.onSignIn(event, this.state.id, this.state.password);
  }
  
render() {
  const { onXClick, status, goJoin, socialLoginOnSuccess, socialLoginOnFailure} = this.props;
  const { id, password, passwordConfirm } = this.state;
  const { handleIdChange, handlePwChange, onSignUp, onSignIn} = this;

  switch(status) {
    case 'SIGNNING_UP':
      return (
        <ModalLayout>        
          <Xbutton onClick={onXClick}/>
          <Form>
            <Title>Join Us!</Title>
            <IdPwInput label='E-mail' type='text' value={id} onChange={handleIdChange}></IdPwInput>
            <IdPwInput label='Password' type='password' value={password} onChange={(event)=>handlePwChange(event, 'password')} placeholder='영문자, 숫자, 특수문자 조합 8자 이상'></IdPwInput>            
            <IdPwInput label='PWConfirm' type='password' value={passwordConfirm} onChange={(event)=>handlePwChange(event, 'passwordConfirm')} placeholder='입력해주세요 :)'></IdPwInput>
            <ModalButtons 
              status={status}
              onSignUp={onSignUp}
            >
            </ModalButtons>
          </Form>          
        </ModalLayout>
      );
    case 'BEFORE_SIGN_IN':
      return (
        <ModalLayout>        
          <Xbutton onClick={onXClick}/>
          <Form>
            <Title type='h2'>Welcome!</Title>
            <IdPwInput label='E-mail' type='text' value={id} onChange={handleIdChange}></IdPwInput>
            <IdPwInput label='Password' type='password' value={password} onChange={(event)=>handlePwChange(event, 'password')}></IdPwInput>
            <ModalButtons 
              status={status}
              goJoin={goJoin}
              onSignIn={onSignIn}
            />          
          </Form>
            <SocialLogin         
              onSuccess={socialLoginOnSuccess}
              onFailure={socialLoginOnFailure}
            ></SocialLogin>          
        </ModalLayout>
      );
      default:
        return (
          <ModalLayout>        
            <Xbutton onClick={onXClick}/>
              <Title color='red'>INFORMATION</Title>
              <Content>
              안녕하세요! 반갑습니다. 😊<br></br>
              현재 카카오 로그인과 차트는 서버쪽 로직이 구현되지 않아 동작하지 않습니다.
              참고 부탁드립니다! 회원가입없이 이용해보시려면<br></br>　
              <b>ID: admin / PW: 123</b><br></br>
              으로 로그인이 가능합니다. 🥰</Content>
          </ModalLayout>
        );
    }
  }
}
export default SignInModal;