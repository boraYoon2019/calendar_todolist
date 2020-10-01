
// 리덕스 함수 사용 위한 import (function형에서 hooks 사용할 때)
// import { useSelector, useDispatch } from 'react-redux';

// 액션 가져오기
import {setUserStat, changeStatus} from '../../modules/signInOrOut'

// useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
// state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
const { isSignIn, set } = useSelector(state => ({
  isSignIn: state.signInOrOut.isSignIn,
  set: state.signInOrOut.isSignIn,
}));
  

// useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
const dispatch = useDispatch();
// 각 액션을 디스패치하는 함수들
const onChangeStatus = () => dispatch(changeStatus());
const onSet = set => dispatch(setUserStat(set));
