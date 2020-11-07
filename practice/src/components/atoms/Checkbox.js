import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.input`
	/* transform: scale(1.5);
	margin: .6rem;
	visibility: hidden; */
	position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
	width: 0;
`;

const Label = styled.label`
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	user-select: none;
`;

const Span = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #eee;
	margin-top: -5px;
	border-radius: 7px;

	&:after {
		content: "";
		position: absolute;
		display: none;		
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
	}
`;

function CheckInput({checked, value, onChange}) {	
	
	return (
		<Label className='container'>
			<Checkbox
				type='checkbox'
				checked={checked}
				value={value}
				onChange={onChange}
			></Checkbox>
			<Span className='checkmark'></Span>
		</Label>
	);
};

export default CheckInput;
