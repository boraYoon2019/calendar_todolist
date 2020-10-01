// src/actions/count.js
// 액션 타입 
const SET_USERSTAT = 'signInOrOut/SET_USERSTAT';
const CHANGESTATUS = 'signInOrOut/CHANGESTATUS';

// 액션 생성 함수
// export 통해 내보냄.
export const setUserStat = set => {
  return { type: SET_USERSTAT, set }
};
export const changeStatus = () => ({type: CHANGESTATUS});
// 액션 타입 정의 및 액션 크리에이터 = 생성 함수 만듬.


/* 초기 상태 선언 */
const initialState = {
  isSignIn: false,
  set: 'signOut'
};

/* 리듀서 선언 */
// 혹은 function 타입 선언
// export default function signInOrOut (state = initialState, action) {
const reducers = (state = initialState, action) => {
  // if(action.type === 'SIGNIN') {
  //   return { ...state, signIn: action.signIn}; 
  // } else if (action.type === 'SIGNOUT') {
  //   return { ...state, signOut: action.signOut}; 
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case SET_USERSTAT:
      return {
        ...state,
        set: action.set
      };
    case CHANGESTATUS:
      return {
        ...state,
        isSignIn: !(state.isSignIn)
      };
    default:
      return state;
  }
}
// 리듀서는 export default 로 내보냄.
export default reducers;