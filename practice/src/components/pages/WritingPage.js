import React, {useEffect} from 'react';
import WritingTemplate from '../templates/WritingTemplate';
import WritingTodolist from '../organisms/WritingTodolist';
import Todolist from '../organisms/Todolist';
import Header from '../organisms/Header';
import DatePicker from '../organisms/DatePicker';
// 리덕스
import { useDispatch, useSelector } from 'react-redux'

// 리덕스 사가
import { 
  setSignIn, goToHome, 
  requestTodolists, addTodolist, deleteTodolist, 
  deleteTodolistItem, updateTodolistItem } 
from '../../modules/signInOrOut';

'use strict';

function WritingPage(props) {

// 컴포넌트 state
// 1. 제목 input과 목록 추가 input state 분리
// 2. 목록 추가에 eventListener로 엔터 클릭 시, 추가된 목록 data에 추가하여 변경 (실제 todolist 동작 한 번 보고 참고하자)
// 3. 각 아이템의 x 클릭 시, 해당 데이터 삭제
// 4. 만들기 클릭 시, 할일목록 데이터에 데이터 객체 추가(리덕스 스토어에) > 구독하고 있을테니, 자동으로 추가될 것 임.
// 5. all/active/completed 클릭 시, 할일목록 데이터에서 완료 체크된 것, 미완료 된 것 만 구분해서 data 변경하기

// 1. 리덕스 연결
// 2. 데이트 피커 통해 날짜 클릭 시,
// 스토어에 있는 투두리스트 날짜(YYYY-MM-DD) 선택된 날짜로 변경되고, 사가 통해 데이터 불러오는 작업 실행
// 3. 사가 결과를 특정 data state에 저장
// 4. data state를 기준으로 map하여 돔 그리기
// 5. 만들기 클릭 시, 모든 데이터 서버에 저장하는 로직 (사가)

  const dispatch = useDispatch();

  const signInOrOut = useSelector((state) => state.signInOrOut);

  useEffect(() => {
    console.log("writing page, useEffect : else");
    if(localStorage.getItem('token')===null ) {  
      alert('로그인이 필요한 페이지입니다. :)');
      props.history.push('/');

    } else if(localStorage.getItem('token')!==null && signInOrOut.todolists.initial===true){
      dispatch(requestTodolists(new Date));

    } else {
      console.log("writing page, useEffect : else");
    }

    // 렌더링이 얼마나 되는지 확인용
    console.log("WritingPage rendering!!!!");
  });

  const onDateChange = (date) => {
    dispatch(requestTodolists(date));
  }

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(setSignIn(false));
    alert('로그아웃 되었습니다. :)');
    props.history.push('/');
  }

  const toggleCheck = () => {
  }

  const showDetailPlan = () => {
    
  }
  const deleteList = (id) => {
    dispatch(deleteTodolist(id)); 
  }
  const deleteItem = (todolistId, itemId) => {
    // dispatch(deleteTodolist(id));
    console.log('listId, itemId :',todolistId, itemId);
    dispatch(deleteTodolistItem(todolistId, itemId));
  }  
  const makeList = (noDateList) => {
    const list = noDateList;
    list.start_at=signInOrOut.date;
    list.end_at=signInOrOut.date;

    dispatch(addTodolist(noDateList));
    console.log('makeList', list);
  }
  
  const onClickLogo = () =>  {
    dispatch(goToHome());
  }


  return (
    <WritingTemplate

      headerSection={(
        <Header 
          modal={signInOrOut.modal}
          isSignIn={signInOrOut.isSignIn}
          onSignButtonClick={logout}
          onClickLogo={onClickLogo}
          page='writing'
        />
      )}

      writingSection={
        <>
          <DatePicker 
            onDateChange={onDateChange}
            date={signInOrOut.date}
          />
          <WritingTodolist
            makeList={makeList}
          />
        </>
      }

      mainSection={(
        <Todolist
          todolists={signInOrOut.todolists}
          toggleCheck={toggleCheck}
          showDetailPlan={showDetailPlan}
          deleteList={deleteList}
          deleteItem={deleteItem}
        />
      )}

      feedbackSection={''}

    />
  );
}

export default WritingPage;