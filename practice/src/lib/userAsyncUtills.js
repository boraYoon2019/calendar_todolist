import { call, put } from 'redux-saga/effects';

// 회원가입하는 용도인 사가
export const joinIn = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* joinSaga(action) {
    
    console.log('modules/userAsyncUtills: function* joinSaga', action);
    
    try {
      // call > 함수 동기적 호출 = 응담을 받은 후 전달할 파라미터 두번째 인자에서부터 전달
      const payload = yield call(promiseCreator, action);

      // call을 통해 받은 결과값으로 액션 함수로 진행시킴.
      console.log('userAsyncUtils.js / suc :', payload);
      yield put({ type: SUCCESS }); 

    } catch (error) {

      console.log(error);
      alert(error.toString().split('Error: ')[1]);
      yield put({ type: ERROR });

    }
  };
};

// 로그인하는 용도인 사가
export const signIn = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* signInSaga(action) {
    
    try {
      const payload = yield call(promiseCreator, action);
      localStorage.setItem('token', payload.token);

      yield put({ type: SUCCESS});
      console.log('userAsync token',localStorage.getItem('token'));
      yield put({ type: 'GET_CALENDAR', date: new Date(), when: 'login' });   

    } catch (error) {

      console.log(error);
      switch (error.toString().split('Error: ')[1]) {
        
        case 'non_field_errors':
          alert('가입되지 않은 아이디이거나 비밀번호가 일치하지 않습니다.');
          break;

        default:
          alert('로그인 도중 오류가 발생하였습니다.');
          break;
      }

      yield put({ type: ERROR });
    }
  };
};

// 여러 유틸 함수들.
export const userReducerUtils = {
  initial: (initialData = null) => ({
    result: initialData
  }),
  // 성공 상태
  success: payload => ({
    result: payload
  }),

  // 실패 상태
  error: error => ({
    result: null
  })
};


export const handle_join_actions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {

    switch (action.type) {
      case SUCCESS:
        return {
          ...state,
          modal: false,
          [key]: userReducerUtils.success(action.payload)
        };
      case ERROR:
        return {
          ...state,
          [key]: userReducerUtils.error(action.payload)
        };
      default:
        return state;
    }
  };
};


export const handle_signIn_actions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {

    switch (action.type) {
      case SUCCESS: 
        return {
          ...state,
          modal: false,
          [key]: true
        };
      case ERROR:
        return {
          ...state,
          [key]: false
        };
      default:
        return state;
    }
  };
};
