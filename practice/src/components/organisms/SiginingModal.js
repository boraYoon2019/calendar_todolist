import React from 'react';
import styled from 'styled-components';
import IdPwInput from '../molecules/IdPwInput';
import ModalButtons from '../molecules/ModalButtons';
import SocialLogin from '../molecules/SocialLogin';
import ModalLayout from '../molecules/ModalLayout';

function SiginingModal(props) {
  switch(props.state) {
    case 'signingUp':
      return (
        <ModalLayout>
          <IdPwInput label='E-mail' type='text'></IdPwInput>
          <IdPwInput label='Password' type='password'></IdPwInput>            
          <IdPwInput label='Confirm' type='password'></IdPwInput>
          <ModalButtons status='signingUp'></ModalButtons>
        </ModalLayout>
      );
    default:
      return (       
        <ModalLayout>
          <IdPwInput label='E-mail' type='text'></IdPwInput>
          <IdPwInput label='Password' type='password'></IdPwInput>
          <ModalButtons status=''></ModalButtons>
          <SocialLogin></SocialLogin>
        </ModalLayout>
      );
  }
}

export default SiginingModal;