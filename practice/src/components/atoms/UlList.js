import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 1em;
  width: 100%;
  max-width: 37em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  list-style-type: none;
`;

function UlList(props){
	return (
    <List>
      {props.children}
    </List>
	);
}

export default React.memo(UlList);
