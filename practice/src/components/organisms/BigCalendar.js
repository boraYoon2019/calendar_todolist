import React, { Component, } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
moment.locale('ko');

class BigCalendar extends Component {

// 빅 캘린더 내부 아이템 style 지정 
// - 함수로 지정하면, 최우선 순위로 css적용되서 css파일에서 직접 hover등에서 커스텀해도 변경되지 않는 문제 있음. > 그래서 그런 부분은 직접 css파일 수정함.
eventStyleGetter() {
	const style = {
    fontSize: '1rem',
    textAlign: 'center',
		fontWeight: 'bold'
	};
	return {
		style: style,
	};
}

	render() {
		return (
			<Calendar
				toolbar={this.props.isSignIn? true:false}
				views={['month']}
				localizer={localizer}
				onSelectEvent={this.props.onSelectEvent}
				onRangeChange={this.props.onRangeChange}
				eventPropGetter={this.eventStyleGetter}
				events={this.props.events}
				style={{ width:'100%', height:'80vh', margin:10, zIndex:0 }}
			/>
		);
	}
}

export default BigCalendar;