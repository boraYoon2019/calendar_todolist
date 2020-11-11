import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;

const Label = styled.span`
	flex-grow: 1;
	margin: 0.4em 0;
	padding: 0.4em 0;
  width: 100%;
	max-width: 5.5em;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: capitalize;
	word-break:keep-all;
	
	@media screen and (max-width: 414px) {        
		font-size: 1rem;
	}
`;

const Input = styled.input`
	flex-grow: 4;	
  width: 100%;
	margin: 0.4em;
	height: 2.5em;
	background-color: #f6f6f6;
	border: none;
	border-radius: 2px;

	@media screen and (max-width: 411px) {
	}
`;

function IdPwInput(props) {
	return (
		<Container>
		<Label>{props.label}</Label>
		<Input id={props.label} type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
		</Container>
	);
}

export default React.memo(IdPwInput);