import * as userAPI from '../api/user';
import * as dataAPI from '../api/data';
import * as postsAPI from '../api/posts';
import {
  userReducerUtils,
  joinIn, signIn,
  handle_signIn_actions,
  handle_join_actions,
} from '../lib/userAsyncUtills';
import {
  dataReducerUtils,
  getCalendar,
  handle_data_actions
} from '../lib/dataAsyncUtills';
import {
  postReducerUtils,
  getTodolists_byDate,
  addTodolist_withList,
  deleteTodolist_byId,
  deleteTodoItem_byId,
  updateTodoItem_withItem,
  handle_getLists_actions,
  handle_addList_actions,
  handle_deleteList_actions,
  handle_deleteItem_actions,
  handle_updateItem_actions
} from '../lib/postsAsyncUtills';

import { takeEvery,takeLatest, getContext } from 'redux-saga/effects';
import moment from "moment"

// 액션 타입 
const SHOW_MODAL = 'SHOW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_SIGNIN = 'SET_SIGNIN';

const GO_TO_HOME = 'GO_TO_HOME';
const GO_TO_WRITING = 'GO_TO_WRITING';

// 회원 가입하기
const JOININ = 'JOININ'; // 요청 시작
const JOININ_SUCCESS = 'JOININ_SUCCESS'; // 요청 성공
const JOININ_ERROR = 'JOININ_ERROR'; // 요청 실패

// 로그인하기
const SIGNIN = 'SIGNIN'; // 요청 시작
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'; // 요청 성공
const SIGNIN_ERROR = 'SIGNIN_ERROR'; // 요청 실패

// 캘린더 데이터 조회하기
const GET_CALENDAR = 'GET_CALENDAR'; // 요청 시작
const GET_CALENDAR_SUCCESS = 'GET_CALENDAR_SUCCESS'; // 요청 성공
const GET_CALENDAR_ERROR = 'GET_CALENDAR_ERROR'; // 요청 실패
const GET_CALENDAR_LOGIN_ERROR = 'GET_CALENDAR_LOGIN_ERROR'; // 로그인 무효 요청 실패

const SET_DATE = 'SET_DATE';

// todolist 데이터 조회하기
const GET_TODOLISTS = 'GET_TODOLISTS';
const GET_TODOLISTS_SUCCESS = 'GET_TODOLISTS_SUCCESS';
const GET_TODOLISTS_ERROR = 'GET_TODOLISTS_ERROR';
const GET_TODOLIST_LOGIN_ERROR = 'GET_TODOLIST_LOGIN_ERROR';

// todolist 추가하기
const ADD_TODOLIST = 'ADD_TODOLIST';
const ADD_TODOLIST_SUCCESS = 'ADD_TODOLIST_SUCCESS';
const ADD_TODOLIST_ERROR = 'ADD_TODOLIST_ERROR';

// todolist 삭제하기
const DELETE_TODOLIST = 'DELETE_TODOLIST';
const DELETE_TODOLIST_SUCCESS = 'DELETE_TODOLIST_SUCCESS';
const DELETE_TODOLIST_ERROR = 'DELETE_TODOLIST_ERROR';

// todolist 아이템 삭제하기
const DELETE_TODOLISTIEM = 'DELETE_TODOLISTIEM';
const DELETE_TODOLISTIEM_SUCCESS = 'DELETE_TODOLISTIEM_SUCCESS';
const DELETE_TODOLISTIEM_ERROR = 'DELETE_TODOLISTIEM_ERROR';

// todolist 아이템 완료여부 체크하거나, 세부 계획 내용 변경
const UPDATE_TODOLISTIEM = 'UPDATE_TODOLISTIEM';
const UPDATE_TODOLISTIEM_SUCCESS = 'UPDATE_TODOLISTIEM_SUCCESS';
const UPDATE_TODOLISTIEM_ERROR = 'UPDATE_TODOLISTIEM_ERROR';

// 액션 생성 함수 (액션 타입 정의)- 컴포넌트에서 직접 디스패치되는 함수 모음
// 모달
export const showModal = () => ({type: SHOW_MODAL});
export const closeModal = () => ({type: CLOSE_MODAL});

// 로그인관련
export const setSignIn = boolean => {
  return { type: SET_SIGNIN, boolean: boolean }
};
export const joinning = (userInfo) => ({ type: JOININ, payload: userInfo });
export const signningIn = (userInfo) => ({ type: SIGNIN, payload: userInfo });

// 페이지 이동
export const goToHome = () => ({ type: GO_TO_HOME });
export const goToWriting = () => ({ type: GO_TO_WRITING });

// 메인 화면 (캘린더 관련)
export const requestCalendarData = (date, when) => ({ type: GET_CALENDAR, date: date, when: when});

// todolist 관련
export const setDate = date => {
  return { type: SET_DATE, date: date}
};
export const requestTodolists = (date) => ({ type: GET_TODOLISTS, date: date });
export const addTodolist = (list) => ({ type: ADD_TODOLIST, list: list });
export const deleteTodolist = (todolistId) => ({ type: DELETE_TODOLIST, id: todolistId });

export const addTodolistItems = (todolistId) => ({ type: ADD_TODOLISTIEMS, todolistId: todolistId });
export const deleteTodolistItem = (todolistId, itemId) => ({ type: DELETE_TODOLISTIEM, todolistId:todolistId, itemId:itemId });
export const updateTodolistItem = (todolistId, itemId, content) => ({ type: UPDATE_TODOLISTIEM, todolistId:todolistId, itemId:itemId, content: content });

// 로그인/회원가입 사가
const joinSaga = joinIn(JOININ, userAPI.joinIn);
const signInSaga = signIn(SIGNIN, userAPI.signIn);
// 메인 달력 사가
const getCalendarSaga = getCalendar(GET_CALENDAR, dataAPI.getCalendarData);
// todolist 사가
const getTodolistsSaga = getTodolists_byDate(GET_TODOLISTS, postsAPI.getTodolists);
const addTodolistSaga = addTodolist_withList(ADD_TODOLIST, postsAPI.addTodolist);
const deleteTodolistsSaga = deleteTodolist_byId(DELETE_TODOLIST, postsAPI.deleteTodolist);

const deleteTodoItemSaga = deleteTodoItem_byId(DELETE_TODOLISTIEM, postsAPI.deleteTodoItem);
const updateTodoItemSaga = updateTodoItem_withItem(UPDATE_TODOLISTIEM, postsAPI.updateTodoItem);

// 페이지 이동 사가
function* goToHomeSaga() {
  const history = yield getContext('history');
  history.push('/');
}
function* goToWritingSaga() {
  const history = yield getContext('history');
  history.push('/writing');
}


// 사가들을 합치기 + watcher : 이 함수는 sagaMiddleware.run 에서 사용되어 언제나 액션들을 리스닝 할 것임.
export function* saga() {
  // 로그인/회원가입
  yield takeLatest(JOININ, joinSaga);
  yield takeLatest(SIGNIN, signInSaga);

  // 메인 캘린더
  yield takeEvery(GET_CALENDAR, getCalendarSaga);

  // 페이지 이동
  yield takeLatest(GO_TO_HOME, goToHomeSaga);
  yield takeLatest(GO_TO_WRITING, goToWritingSaga);

  // todolist
  yield takeEvery(GET_TODOLISTS, getTodolistsSaga);
  yield takeLatest(ADD_TODOLIST, addTodolistSaga);
  yield takeLatest(DELETE_TODOLIST, deleteTodolistsSaga);
  yield takeLatest(DELETE_TODOLISTIEM, deleteTodoItemSaga);
  yield takeLatest(UPDATE_TODOLISTIEM, updateTodoItemSaga);
}

/* 초기 상태 선언 */
const initialState = {
  isSignIn: false,
  modal: false,
  calendarData: dataReducerUtils.initial(),
  date: moment(new Date()),
  todolists: postReducerUtils.initial()
};

/* 리듀서 선언 */
// 혹은 function 타입 선언
// export default function signInOrOut (state = initialState, action) {}
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false
      };
    case SET_SIGNIN:      
      return {
        ...state,
        isSignIn: action.boolean
      };
    case SET_DATE:      
      return {
        ...state,
        date: moment(new Date(action.date))
      };
    case JOININ:
    case JOININ_SUCCESS:
    case JOININ_ERROR:
      return handle_join_actions(JOININ, 'join')(state, action);
    
    case SIGNIN:
    case SIGNIN_ERROR:
    case SIGNIN_SUCCESS:
      return handle_signIn_actions(SIGNIN, 'isSignIn')(state, action);

    case GET_CALENDAR:
    case GET_CALENDAR_SUCCESS:
    case GET_CALENDAR_ERROR:
    case GET_CALENDAR_LOGIN_ERROR:
      return handle_data_actions(GET_CALENDAR, 'calendarData')(state, action);

    case GET_TODOLISTS:
    case GET_TODOLISTS_SUCCESS:
    case GET_TODOLISTS_ERROR:
    case GET_TODOLIST_LOGIN_ERROR:
      return handle_getLists_actions(GET_TODOLISTS, 'todolists')(state, action);

    case ADD_TODOLIST:
    case ADD_TODOLIST_SUCCESS:
    case ADD_TODOLIST_ERROR:
      return handle_addList_actions(ADD_TODOLIST)(state, action);

    case DELETE_TODOLIST:
    case DELETE_TODOLIST_SUCCESS:
    case DELETE_TODOLIST_ERROR:
      return handle_deleteList_actions(DELETE_TODOLIST)(state, action);

    case DELETE_TODOLISTIEM:
    case DELETE_TODOLISTIEM_SUCCESS:
    case DELETE_TODOLISTIEM_ERROR:
      return handle_deleteItem_actions(DELETE_TODOLISTIEM)(state, action);
    
    case UPDATE_TODOLISTIEM:
    case UPDATE_TODOLISTIEM_SUCCESS:
    case UPDATE_TODOLISTIEM_ERROR:
      return handle_updateItem_actions(UPDATE_TODOLISTIEM)(state, action);
    
    default:
      return state;
  }
}

export default reducers;
