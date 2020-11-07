import React from 'react';

import { createGlobalStyle } from 'styled-components';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import '!style-loader!css-loader!react-dates/lib/css/_datepicker.css';


// 라우터 관련
import { Route, Switch } from 'react-router-dom';
import { MainPage, WritingPage } from 'pages';

const GlobalStyle =createGlobalStyle`
  * {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body {
		background-color: #f9f9f9;
	}

	.container:hover input ~ .checkmark {
		background-color: #ccc;
	}

	.container input:checked ~ .checkmark {
		background-color: #ff8888;
	}

	.container input:checked ~ .checkmark:after {
		display: block;
	}	
`;

//  exact 를 하지 않으면, /이 포함된 다른 페이지도 함께 보여짐.
function App() {
	return (
		<>
			<GlobalStyle/>
			<Route exact path="/" component={MainPage}/>
			<Switch>
				<Route path="/writing/:date" component={WritingPage}/>
				<Route path="/writing" component={WritingPage}/>
			</Switch>
		</>
	);
}

export default App;
