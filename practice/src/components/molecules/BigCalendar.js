import React from 'react';
import styled from 'styled-components';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './react-big-calendar.css';

const localizer = momentLocalizer(moment);

function eventStyleGetter(event) {

	const style = {
		backgroundColor: '#bbdefb',
    color: '#424242'
	};
	return {
		style: style,
	};
}

const BigCalendar = (props) => (
		<Calendar
			views={['month']}
			localizer={localizer}
			onSelectEvent={(e) => console.log(e)}
			eventPropGetter={eventStyleGetter}
			events={[
				{
					title: 'TodoList',
					start: new Date(2020, 8, 15),
					end: new Date(2020, 8, 15),
				},
			]}
			style={{ width:'100%', maxWidth:1500, height:700, margin:20 }}
		/>
);

export default BigCalendar;
