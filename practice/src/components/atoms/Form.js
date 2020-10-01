import React from 'react';
import styled from 'styled-components';

const form = styled.form`
  width: 100%;
	height: 100%;
	
	@media screen and (max-width: 411px) {
	}
`;

function Form(props) {
		return (
			<form method={props.method} onSubmit={function(){
        props.target
      }}>
        {props.children}
			</form>
		);
}

export default Form;