import { createStore } from 'redux';
import rootReducer from './';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState()); // 스토어의 상태 확인.

export default store;