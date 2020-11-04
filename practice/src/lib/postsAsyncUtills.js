import { call, put } from 'redux-saga/effects';
import moment from "moment"
'use strict';

// 날짜별 todolist 조회 사가
export const getTodolists_byDate = (type, promiseCreator) => {
  const [SUCCESS, ERROR, LOGIN_ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`, `${type}_LOGIN_ERROR`];

  return function* listSaga(action) {
    
    try {
      const payload = yield call(promiseCreator, action.date);
      
      console.table(payload);
      yield put({ type: SUCCESS, payload: payload}); 

    } catch (error) {

      console.log(error);
      switch (error.toString().split('Error: ')[1]) {
        case 'Signature has expired':
          yield put({ type: LOGIN_ERROR });
          console.log(error);
          localStorage.removeItem('token');
          yield put({ type: 'GO_TO_HOME' });
          break;

        default:
          alert('데이터를 불러오는 도중 오류가 발생하였습니다.');   
          yield put({ type: ERROR, error: error, payload: error});
          break;
      }
    }
  };
};

// todolist 추가 사가
export const addTodolist_withList = (type, promiseCreator) => {

  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* addListSaga(action) {
    
    try {
      
      const payload = yield call(promiseCreator, action.list);
      // 여기서 아이템(todolist) 추가!
      console.log(payload);
      yield put({ type: SUCCESS, list: payload}); 

    } catch (error) {
      
      // 추가에 실패했다고 알리는 alert 삽입
      console.log(error);
      yield put({ type: ERROR, error: error, list: error});
    }
  };
};

// todolist 삭제 사가
export const deleteTodolist_byId = (type, promiseCreator) => {

  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* deleteListSaga(action) {
    
    try {

      const payload = yield call(promiseCreator, action.id);      
      yield put({ type: SUCCESS, id: action.id}); 

    } catch (error) {

      // 삭제에 실패했다고 알리는 alert 삽입
      console.log(error);
      yield put({ type: ERROR, error: error});
    }
  };
};

// todolist 아이템 삭제 사가
export const deleteTodoItem_byId = (type, promiseCreator) => {
console.log('deleteTodoItem_byId');
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* deleteItemSaga(action) {
    
    try {
      
      console.log('deleteTodoItem_byId payload');
      const payload = yield call(promiseCreator, action.todolistId, action.itemId);
      console.log(payload);
      yield put({ type: SUCCESS, todolistId: action.todolistId, itemId: action.itemId}); 

    } catch (error) {
      // 삭제에 실패했다고 알리는 alert 삽입
      console.log(error);
      yield put({ type: ERROR, error: error});
    }
  };
};


// todolist 아이템 수정 사가
export const updateTodoItem_withItem = (type, promiseCreator) => {

  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* addListSaga(action) {
    
    try {
      const payload = yield call(promiseCreator, action.list); 
      console.log(payload);
      yield put({ type: SUCCESS, list: payload}); 

    } catch (error) {

      console.log(error);
      yield put({ type: ERROR, error: error, list: error});
    }
  };
};

// 리듀서에서 사용 할 수 있는 여러 유틸 함수들.
export const postReducerUtils = {
  initial: (initialData = []) => ({
    initial: true,
    data: initialData,
    error: null
  }),

  loading: (prevState = []) => ({
    initial: false,
    data: prevState,
    error: null
  }),

  // 성공 상태
  success: payload => ({
    initial: false,
    data: payload,
    error: null
  }),

  // 실패 상태
  error: error => ({
    initial: false,
    data: [],
    error: error
  }),
};

export const handle_getLists_actions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR, LOGIN_ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`,  `${type}_LOGIN_ERROR`];

  return (state, action) => {

    switch (action.type) {
      case type:
        return {
          ...state,
          date : moment(new Date(action.date)).format('YYYY-MM-DD'),
          [key]: postReducerUtils.loading(keepData ? state[key].data : null)
        };
      case SUCCESS:
        return {
          ...state,
          [key]: postReducerUtils.success(action.payload.reverse())
        };
      case ERROR:
        return {
          ...state,
          [key]: postReducerUtils.error(action.payload)
        };
        
      case LOGIN_ERROR:
        return {
          ...state,
          isSignIn : false
        }
      default:
        return state;
    }
  };
};

export const handle_addList_actions = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {

    switch (action.type) {
      case SUCCESS:
        // 리스트 추가 후, 교체해주기
        console.log('리스트 추가 후, 교체해주기',state.todolists.data.concat(action.list));

        return {
          ...state,
          todolists: postReducerUtils.success(state.todolists.data.concat(action.list))
        };
      case ERROR:
        return {
          ...state,
          todolists: postReducerUtils.error(action.error)
        };
      default:
        return state;
    }
  };
};

export const handle_deleteList_actions = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {

    switch (action.type) {
      case SUCCESS:
        // 리스트 변경해주기
        // console.log(action.id);
        const index = state.todolists.data.findIndex(listObject => listObject.id == action.id);
        // console.log(index);
        // console.log(state.todolists.data);
        const newData = state.todolists.data.slice();
        // console.log(newData);
        newData.splice(index, 1);
        // console.log(newData);
        return {
          ...state,
          todolists: postReducerUtils.success(newData)
        };
      case ERROR:
        return {
          ...state,
          todolists: postReducerUtils.error(action.error)
        };
      default:
        return state;
    }
  };
};

export const handle_deleteItem_actions = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {

    switch (action.type) {
      case SUCCESS:
        // 먼저 slice 
        // 해당 리스트 id로 인덱스 찾아서, 안에 코멘트 배열 선택 후, 배열의 id로 인덱스 찾아서,
        // 해당 아이템만 제거해 주기
        // 해당 newData로 변경
        const listIndex = state.todolists.data.findIndex(listObject => listObject.id == action.todolistId);
        console.log('listIndex',listIndex);
        const newData = state.todolists.data.slice();
        console.log('newData', newData);
        const itemIndex = newData[listIndex].comments.findIndex(listObject => listObject.id == action.itemId);
        console.log('itemIndex',itemIndex);
        newData[listIndex].comments.splice(itemIndex, 1);
        console.log(newData);
        
        return {
          ...state,
          todolists: postReducerUtils.success(newData)
        };
      case ERROR:
        return {
          ...state,
          todolists: postReducerUtils.error(action.error)
        };
      default:
        return state;
    }
  };
};

export const handle_updateItem_actions = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {

    switch (action.type) {
      case SUCCESS:
        // 리스트 변경해주기
        return {
          ...state,
          todolists: postReducerUtils.success(state.todolists.data.concat(action.list))
        };
      case ERROR:
        return {
          ...state,
          todolists: postReducerUtils.error(action.error)
        };
      default:
        return state;
    }
  };
};