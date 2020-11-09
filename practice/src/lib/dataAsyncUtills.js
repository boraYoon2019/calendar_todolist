import { call, put } from 'redux-saga/effects';


// 캘린더의 특정 날짜(년-월) 데이터를 조회하는 용도인 사가
export const getCalendar = (type, promiseCreator) => {
  
  const [SUCCESS, ERROR, LOGIN_ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`, `${type}_LOGIN_ERROR`];

  return function* getCalendarDataSaga(action) {
    
    try {
      // call > 함수 동기적 호출 = 응담을 받은 후 (promiseCreator= api/posts.js : getCalendarData = async(action) ), 전달할 파라미터 두번째 인자에서부터 전달
      const payload = yield call(promiseCreator, action.date, action.when);
      
      // call을 통해 받은 결과값으로 액션 함수로 진행시킴.
      yield put({ type: SUCCESS, payload: payload}); 

    } catch (error) {
      // console.log(error);
      switch (error.toString().split('Error: ')[1]) {

        case 'Signature has expired':          
          alert('다시 로그인해주세요. :)');
          localStorage.removeItem('token');
          yield put({ type: LOGIN_ERROR });
          break;

        default:
          alert('데이터를 불러오는 도중 오류가 발생하였습니다.');
          yield put({ type: ERROR, error: error, payload: error});
          break;
      }
    }
  };
};


// 리듀서에서 사용 할 수 있는 여러 유틸 함수들.

export const dataReducerUtils = {
  initial: (initialData = []) => ({
    data: initialData,
    error: null
  }),
  // 성공 상태
  success: payload => ({
    data: payload,
    error: null
  }),

  // 실패 상태
  error: error => ({
    data: [],
    error: error
  })
};


// 비동기 관련 액션들을 처리하는 리듀서.
// type 은 액션의 타입, key 는 상태의 key (예: calendarData)임.
// 날짜별로 처리하는 유틸함수
export const handle_data_actions = (type, key) => {
  const [SUCCESS, ERROR, LOGIN_ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`, `${type}_LOGIN_ERROR`];

  // console.log('handle_DataAsyncActions');
  return (state, action) => {

    switch (action.type) {
      case SUCCESS:
        return {
          ...state,
          isSignIn: true,
          [key]: dataReducerUtils.success(action.payload.reverse())
        };
      case ERROR:
        return {
          ...state,
          [key]: dataReducerUtils.error(action.payload)
        };
      case LOGIN_ERROR:
        return {          
          ...state,
          isSignIn: false
        }
      default:
        return state;
    }
  };
};