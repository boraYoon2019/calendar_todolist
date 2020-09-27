import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/IdPwInput';

const Div = styled.div`
	display: flex;
  width: 100%;
	flex-flow: row nowrap;
`;

const Label = styled.span`
	margin: 0.4em;
	padding: 0.4em;
  width: 100%;
	max-width: 6em;
	font-size: 1.2em;
	font-weight: bold;
	text-transform: capitalize;
	
	@media screen and (max-width: 414px) {        
		font-size: 1em;
		max-width: 4em;
	}
`;

// const Input = styled.input`
// 	margin: 0.4em;
//   width: 100%;
// 	height: 2.5em;
// 	background-color: #eaf6ff;
// 	border: none;
// 	border-radius: 2px;
// 	flex-grow: 3;
	
// 	border: 2px solid #efefef;
//   border-radius: 5px;
// 	height: 1.5em;
// `;

class IdPwInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
  }

	render() {
		return (
			<Div>			
				<Label>{this.props.type ==='id'? ' Email' : 'Password' }</Label>
				<Input type={this.props.type} ></Input>
			</Div>
		);
	}
}

export default IdPwInput;