import React from 'react';
import styled from 'styled-components';

const CustomedTextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  padding: .5em;
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-family: sans-serif;
  
  &.hover, &:read-write {
    border: 2px solid rgb(195, 195, 195);
    border-radius: 8px;
    background-color: #fff2f2;
  }

  &:read-only {
    background-color: rgb(236, 236, 236);
    border: 2px solid rgb(236, 236, 236);
    border-radius: 8px;
    cursor: pointer;
  }
`;

function TextArea({value,onChange,onClick,readOnly,placeholder}){
	return (
    <CustomedTextArea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      readOnly={readOnly}
    />
	);
}

export default React.memo(TextArea);
