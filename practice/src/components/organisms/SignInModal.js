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
      pw: '',
      pwConfirm: '',
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
    if(type === 'pw') {      
      this.setState({
        pw: event.target.value
      });
    } else {
      this.setState({
        pwConfirm: event.target.value
    }); 
    } 
  }

  onSignUp(event) {
    event.preventDefault();

    const id = this.state.id;
    const pw = this.state.pw;
    const pwConfirm=this.state.pwConfirm;

    if (id === '' || pw === '' || pwConfirm === '') {
      alert('빈칸을 모두 입력해주세요. :)');
      return;
    }

    if (pw != pwConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다. :)');
      return;
    }
    
    // 로그인 사가로 전달
    this.props.onSignUp(event, this.state.id, this.state.pw);
  }

  onSignIn(event) {
    event.preventDefault();

    const id = this.state.id;
    const pw = this.state.pw;
    if (id === '' || pw === '') {
      alert('E-Mail 혹은 Password를 입력해주세요. :)');
      return;
    }
    this.props.onSignIn(event, this.state.id, this.state.pw);
    // accounts/login 에 id, pw 전달하고 jwt 받아오는 로직의 사가 액션 디스패치
  }
  
  noFunction(event) {
    event.preventDefault();
  }

render() {
  const { onXClick, status, goJoin, socialLoginOnSuccess, socialLoginOnFailure} = this.props;
  const { id, pw, pwConfirm } = this.state;
  const { noFunction, handleIdChange, handlePwChange, onSignUp, onSignIn} = this;

  switch(status) {
    case 'SIGNNING_UP':
      return (
        <ModalLayout>        
          <Xbutton onClick={onXClick}/>
          <Form onSubmit={noFunction}>
            <Title>Join Us!</Title>
            <IdPwInput label='E-mail' type='text' value={id} onChange={handleIdChange} ></IdPwInput>
            <IdPwInput label='Password' type='password' value={pw} onChange={(event)=>handlePwChange(event, 'pw')}></IdPwInput>            
            <IdPwInput label='Confirm' type='password' value={pwConfirm} onChange={(event)=>handlePwChange(event, 'pwConfirm')}></IdPwInput>
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
            <IdPwInput label='Password' type='password' value={pw} onChange={(event)=>handlePwChange(event, 'pw')}></IdPwInput>
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