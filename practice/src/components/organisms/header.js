import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';


const Title = styled.h1`
	/* font-size: 1.5em;
	text-align: center;
	color: palevioletred; */
`;

const Wrapper = styled.header`
  display: flex;
	flex-flow: row nowrap;
  justify-content: space-between;
	align-items: center;
  
	padding: 0.8em;
	margin-bottom: 3em;  
`;

function Header() {
	return (
		<div>
      <Wrapper>
				<Title>TodoList</Title>
        <div>
          <Button role='submit' text='LOGIN'></Button>
          <Button text='SIGN IN'></Button>
        </div>
			</Wrapper>
		</div>
	);
}

export default Header;
