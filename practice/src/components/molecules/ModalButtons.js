import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const Sizediv = styled.div`
  display:flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 2em;
  padding-top: 1.5em;
  justify-content: space-around;

	@media screen and (max-width: 414px) {    
    padding: 0.5em;
    padding-top: 1em;
	}
`;

const Space = styled.span`
	margin: 0.4em;
	padding: 0.4em;
  width: 100%;
	max-width: 5em;
	@media screen and (max-width: 414px) {
    width: 0;
	}
`;

class ModalButtons extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
  }

	render() {
		return (
          <Sizediv>
            <Space></Space>    
            <Button color='primary'>Join</Button>
            <Button>Sign In</Button>
          </Sizediv>
		);
	}
}

export default ModalButtons;