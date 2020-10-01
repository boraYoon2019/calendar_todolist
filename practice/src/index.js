import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 리덕스 개발자 도구를 추가해 만듬.
console.log(store.getState()); // 스토어의 상태를 확인.

ReactDOM.render(
  // Provider로 store를 넣어서 App 을 감싸게 되면 우리가 렌더링하는 그 어떤 컴포넌트던지 리덕스 스토어에 접근 할 수 있게 됨.
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
