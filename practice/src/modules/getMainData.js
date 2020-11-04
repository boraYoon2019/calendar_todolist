import * as dataAPI from '../api/data'; // api/data 안의 함수 > fetch함수를 통해 데이터 혹은 에러를 받아오는 함수 불러오기
import {
  dataReducerUtils,
  getCalendar,
  handleAsyncActionsByDate
} from '../lib/dataAsyncUtills';
import { takeEvery } from 'redux-saga/effects';


/* 액션 관련 */
// 캘린더 데이터 조회하기
const GET_CALENDAR = 'GET_CALENDAR'; // 요청 시작
const GET_CALENDAR_SUCCESS = 'GET_CALENDAR_SUCCESS'; // 요청 성공
const GET_CALENDAR_ERROR = 'GET_CALENDAR_ERROR'; // 요청 실패

// 액션 객체
// 데이터를 요청할 때 리액트 컴포넌트에서 직접 디스패치되는 함수
export const requestCalendarData = (date) => ({ type: GET_CALENDAR, date: date });


// 사가 함수 : ( lib/dataAsyncUtills.js )
// 두번째 파라미터 함수 : ( api/data.js : getCalendarData ) - 서버 통신 후 받아온 json 데이터 혹은 결과 반환
const getCalendarDataSaga = getCalendar(GET_CALENDAR, dataAPI.getCalendarData);


// 사가들을 합치기 + watcher : 이 함수는 sagaMiddleware.run 에서 사용되어 언제나 액션들을 리스닝 할 것임.
export function* getMainDataSaga() {
  yield takeEvery(GET_CALENDAR, getCalendarDataSaga);
}


// 리듀서 관련 ( lib/dataAsyncUtills.js : dataReducerUtils.initial )
const initialState = {
  calendarData: dataReducerUtils.initial(),
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case GET_CALENDAR:
    case GET_CALENDAR_SUCCESS:
    case GET_CALENDAR_ERROR:
      return handleAsyncActionsByDate(GET_CALENDAR, 'calendarData', true)(state, action);

    default:
      return state;
  }
}