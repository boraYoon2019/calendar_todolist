import React from 'react';
import styled from 'styled-components';

const Tab = styled.button`
    width: 100%;
    height: 100%;
    max-width: 7rem;
    padding: 0.5em;
    font-size: 1em;
    background-color: ${props=>props.type==='selected'? '#ff8888' : '#757575' };
    text-align: center;
    outline: none;
    color: #fff;
    font-weight: bold;
    border: 1px solid #fff;
    
    &:hover {
      cursor: pointer;
      background-color: #ff8888;
    }
`;

function TabButton(props){
	return (
    <Tab type={props.type} active={props.active}>
      {props.children}
    </Tab>
	);
}

export default React.memo(TabButton);
