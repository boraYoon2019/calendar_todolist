import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function eventStyleGetter(event) {
	const style = {
		backgroundColor: 'palevioletred',
	};
	return {
		style: style,
	};
}

const BigCalendar = (props) => (
	<div>
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
			style={{ height: 700 }}
		/>
	</div>
);

export default BigCalendar;
