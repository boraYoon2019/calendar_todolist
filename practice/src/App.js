import React from 'react';
import MainPage from './components/pages/MainPage';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import Modal from './components/templates/ModalTemplate';

function App() {
	return (
		<>
			<MainPage></MainPage>
			<Modal></Modal>
		</>
	);
}

export default App;
