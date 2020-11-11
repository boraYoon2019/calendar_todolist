import { combineReducers } from 'redux';
import redux, { saga } from './redux';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  redux
});


export function* rootSaga() {
  yield all([
    saga()
  ]); 
  // all 함수를 통해 배열안의 Saga들을 하나로 묶어 동시에 실행시켜줍니다.
}

export default rootReducer;