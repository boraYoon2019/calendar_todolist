import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  padding: .8em;
  max-width: 40em;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  border: 3px solid #fff;
  border-radius: 15px;
  background-color: ${props => props.state==='selected'? '#ffc7c7' : '#ffc3c3'};
  box-shadow: 7px 7px 8px 4px #ccc;

  @media screen and (max-width: 411px) {
    padding: .5em;
  }

`;

function ListLayout (props){
	return (
    <Layout 
      state={props.state}
    >
      {props.children}
    </Layout>
	);
}

export default React.memo(ListLayout);
