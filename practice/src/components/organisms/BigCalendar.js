import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// 빅 캘린더 내부 아이템 style 지정 
// - 함수로 지정하면, 최우선 순위로 css적용되서 css파일에서 직접 hover등에서 커스텀해도 변경되지 않는 문제 있음. > 그래서 그런 부분은 직접 css파일 수정함.
function eventStyleGetter(event) {
	const style = {
		// backgroundColor: '#bbdefb',
    // color: '#424242',
    fontSize: '1.2rem',
    textAlign: 'center',
		fontWeight: 'bold'
	};
	return {
		style: style,
	};
}

function get_date_str(localeDate)
{
	const date = new Date(localeDate);

	// +15일을 해 준 이유?
	// 인자로 받는 startDate 기준이 달력에 뿌려주는 시작 날짜이기 때문에 종종 그 전 달 날짜를 받아온다. 
	// 그렇게 되면, 이 전달 기준날짜로 보내게 되면 전 달 데이터를 가져오는 문제가 생기므로 
	// 서버에 보낼 기준 날짜로 쓰기 부적합하여 +15일을 통해 중간날짜를 받아와 기준으로 삼음.
	// (보통 +-7일 이내로 월이 바뀌지만 넉넉하게 15일로 잡았음.)
	date.setDate(date.getDate()+15);

  var sYear = date.getFullYear();
  var sMonth = date.getMonth() + 1;
  var sDate = date.getDate();

  sMonth = sMonth > 9 ? sMonth : "0" + sMonth;
	sDate  = sDate > 9 ? sDate : "0" + sDate;
	
	// 서버로 보낼 날짜 반환
	return `${sYear}-${sMonth}-${sDate}`;
}

// z-index: state를 모달 띄웠을때 조정해주자
const state='0';

const BigCalendar = (props) => (
		<Calendar
			views={['month']}
			localizer={localizer}
			onSelectEvent={(e)=> {
				alert(`${e.title} : ${e.start}`);
			}}
			onRangeChange={
				(e)=> {
				  console.log(get_date_str(e.start));
			  }
		  }
			eventPropGetter={eventStyleGetter}
			events={
				[{
					title: 'TodoList',
					start: '2020-09-15',
					end: '2020-09-15',
				},				{
					title: 'TodoList',
					start: '2020-09-19',
					end: '2020-09-19',
				}]
			}
			style={{ width:'100%', maxWidth:1500, height:700, margin:10, zIndex: state }}
		/>
);

export default BigCalendar;