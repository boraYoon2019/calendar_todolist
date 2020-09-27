import React from 'react';
import styled from 'styled-components';
import Form from '../atoms/Form';
import IdPwInput from '../molecules/IdPwInput';
import ModalButtons from '../molecules/ModalButtons';

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;

	@media screen and (max-width: 414px) {
	}
`;

class ModalContent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
  }

	render() {
		return (
      <Content>
        <Form method='post' onSubmit={function(){
        }.bind(this)}>
          <IdPwInput type='id'></IdPwInput>
          <IdPwInput type='pw'></IdPwInput>
          <ModalButtons></ModalButtons>
        </Form>
      </Content>
		);
	}
}

export default ModalContent;