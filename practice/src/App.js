import React from 'react';
import MainPage from './components/pages/MainPage';
import Modal from './components/templates/ModalTemplate';
import styled from 'styled-components';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

function App() {
	return (
		<div>
			<MainPage></MainPage>
		</div>
	);
}

export default App;
