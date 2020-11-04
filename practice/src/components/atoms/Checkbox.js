import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.input`
  transform: scale(1.5);
  margin: .6rem;
`;

function CheckInput({checked, value, onChange}) {
	
	return (
		<Checkbox
			type='checkbox'
			checked={checked}
			value={value}
			onChange={onChange}
		></Checkbox>
	);
};

export default CheckInput;
