import React from 'react';
import styled from 'styled-components';
import Form from '../atoms/Form';
import Xbutton from '../atoms/XButton';
import XButton from '../atoms/XButton';
import IdPwInput from '../molecules/IdPwInput';
import ModalButtons from '../molecules/ModalButtons';
import SocialLogin from '../molecules/SocialLogin';

const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;

	@media screen and (max-width: 414px) {
	}
`;

function ModalLayout(props) {
      return (
        <Layout>
          <Form method={props.method} onSubmit={function(){ props.onSubmit
          }}>
          <Xbutton inItem='true'/>
            {props.children}
          </Form>
        </Layout>
      );
}

export default ModalLayout;