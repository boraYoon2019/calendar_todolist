import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

// 리덕스 관련
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// 모듈내에서 리듀서, 사가 호출
import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

import App from './App'; // route를 포함하고 있는 App
import { createBrowserHistory } from 'history'; // provider에 적용된 자식 컴포넌트들은 모두 history 객체를 지니고 있음.
import createSagaMiddleware from 'redux-saga';


const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware
    )
  )
); // 스토어를 리덕스 개발자 도구를 추가해 만듬.

sagaMiddleware.run(rootSaga);

// console.log(store.getState()); // 스토어 상태 확인.

ReactDOM.render(
  // Provider로 store를 넣어서 App 을 감싸게 되면 우리가 렌더링하는 그 어떤 컴포넌트던지 리덕스 스토어에 접근 할 수 있게 됨.
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, 
  document.getElementById('root')
);