import React from 'react';
import styled from 'styled-components';
import BigCalendar from './components/organisms/BigCalendar';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const Wrapper = styled.section`
	padding: 3em;
	margin-bottom: 4em;
	background: papayawhip;
`;

function App() {
	return (
		<div>
			<Wrapper>
				<Title>TodoList</Title>
			</Wrapper>
			<BigCalendar></BigCalendar>
		</div>
	);
}

export default App;
