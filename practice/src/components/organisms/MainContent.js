import React from 'react';
import styled from 'styled-components';
import BigCalendar from '../molecules/BigCalendar';
import Charts from '../molecules/Charts';

const Div = styled.div`
	display: flex;
	flex-flow: row wrap;
  justify-content: space-around;
	align-items: center;
  width: 100%;
`;

function MainContent() {
	return (
			<Div>
				<BigCalendar></BigCalendar>
				<Charts></Charts>
			</Div>
	);
}

export default MainContent;
