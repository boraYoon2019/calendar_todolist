import React from 'react';
import IdPwInput from '../molecules/IdPwInput';
import ModalButtons from '../molecules/ModalButtons';
import SocialLogin from '../molecules/SocialLogin';
import ModalLayout from '../atoms/ModalLayout';
import Form from '../atoms/Form';
import Title from '../atoms/Title';
import Xbutton from '../atoms/Xbutton';

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
    this.noFunction = this.noFunction.bind(this);
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

  onSignUp(event) {
    event.preventDefault();

    const id = this.state.id;
    const password = this.state.password;
    const passwordConfirm=this.state.passwordConfirm;

    const idInput = getElementById('E-mail');
    const pwInput = getElementById('Password');
    const pwConfirmInput = getElementById('Confirm');

    if (id === '' || password === '' || passwordConfirm === '') {
      alert('빈칸을 모두 입력해주세요. :)');
      return;
    }

    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!(regExp.test(id))) {      
      alert('올바른 이메일 형식이 아닙니다. :)');
      idInput.focus();
      return;
    }

    if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(password)){            
      alert('비밀번호는 숫자,영문자,특수문자 조합으로 8자리 이상 사용해주세요. :)');
      pwInput.focus();
      return false;
    }

    if(/(\w)\1\1\1/.test(password)){
        alert('비밀번호 내 같은 문자를 4번 이상 사용하실 수 없습니다. :)');
        pwInput.focus();
        return false;
    }
    
    if (password != passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다. :)');
      pwInput.focus();
      return;
    }

    if(password.search(id) > -1){
        alert("비밀번호에 아이디가 포함되어 있습니다. :)");
        pwInput.focus();
        return false;
    }

    return true;
    
    // 로그인 사가로 전달
    this.props.onSignUp(event, this.state.id, this.state.password);
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
    // accounts/login 에 id, password 전달하고 jwt 받아오는 로직의 사가 액션 디스패치
  }
  
  noFunction(event) {
    event.preventDefault();
  }

render() {
  const { onXClick, status, goJoin, socialLoginOnSuccess, socialLoginOnFailure} = this.props;
  const { id, password, passwordConfirm } = this.state;
  const { noFunction, handleIdChange, handlePwChange, onSignUp, onSignIn} = this;

  switch(status) {
    case 'SIGNNING_UP':
      return (
        <ModalLayout>        
          <Xbutton onClick={onXClick}/>
          <Form onSubmit={noFunction}>
            <Title>Join Us!</Title>
            <IdPwInput label='E-mail' type='text' value={id} onChange={handleIdChange} ></IdPwInput>
            <IdPwInput label='Password' type='password' value={password} onChange={(event)=>handlePwChange(event, 'password')}></IdPwInput>            
            <IdPwInput label='Confirm' type='password' value={passwordConfirm} onChange={(event)=>handlePwChange(event, 'passwordConfirm')}></IdPwInput>
            <ModalButtons 
              status={status}
              onSignUp={onSignUp}
            >
            </ModalButtons>
          </Form>          
        </ModalLayout>
      );
    default:
      return (
        <ModalLayout>        
          <Xbutton onClick={onXClick}/>
          <Form onSubmit={noFunction}>
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
    }
  }

}
export default SignInModal;