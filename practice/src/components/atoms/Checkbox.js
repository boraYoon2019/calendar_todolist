import React from 'react';
import styled from 'styled-components';

const Check = styled.checkbox`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.role ==='submit' ? '#eaf6ff' : 'white')};
	color: #111;
	font-size: 3em;
	margin: 0.4em;
	padding: 0.25em 1em;
	border: ${(props) => (props.role ==='submit' ? '2px solid #eaf6ff' : '2px solid #bbdefb')};
	border-radius: 3px;
`;

const Checkbox = (props) => {
	return (
			<Check>{}</Check>
	);
};

export default Checkbox;
