import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import BigCalendar from '../organisms/BigCalendar';
import Charts from '../organisms/Charts';


// 실제 Organisms들을 레이아웃이나 데이터 흐름을 연결합니다.
// 클래스 시스템의 클래스로, 객체의 설계도, 페이지의 설계도입니다.

const Div = styled.div`
	display: flex;
	flex-flow: row wrap;
  justify-content: space-around;
	align-items: center;
  width: 100%;
`;

const MainTemp = styled.div`
	z-index: -1;
`;

function MainTemplate(props) {

	// 해당 onButtonClick 에 로그인/로그아웃 했을 때의 function 전해준다.
	return (
		<MainTemp>
			<Header/>			
				<Div>					
					<BigCalendar />
					<Charts />
				</Div>
		</MainTemp>
	);
}
export default MainTemplate;
