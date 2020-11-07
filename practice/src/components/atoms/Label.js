import React from 'react';
import styled from 'styled-components';

const CustomedLabel = styled.label`
  display: block;
  font-size: 1.5rem;
  margin: .3em;
  text-transform: capitalize;
`;

function Label(props){
	return (
    <CustomedLabel>
      {props.children}
    </CustomedLabel>
	);
}

export default React.memo(Label);
