import React from 'react';
import styled from 'styled-components';

const GeneralForm = styled.form`
  height: 100%;
  width: 100%;
`;
// padding: 1.2em;
const ListForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 37em;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

function Form(props) {
  if (props.inList==='true') {
		return (
      <ListForm onSubmit={props.onSubmit}>
      {props.children}
      </ListForm>
    );
  } else {
    return (
      <GeneralForm onSubmit={props.onSubmit}>
        {props.children}
      </GeneralForm>
    );
  }
}

export default React.memo(Form);