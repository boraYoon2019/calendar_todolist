import React, {useEffect} from 'react';
import WritingTemplate from '../templates/WritingTemplate';
import WritingTodolist from '../organisms/WritingTodolist';
import Todolist from '../organisms/Todolist';
import Header from '../organisms/Header';
import DatePicker from '../organisms/DatePicker';
import EditText from '../organisms/EditText';
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

  const dispatch = useDispatch();

  const signInOrOut = useSelector((state) => state.signInOrOut);

  useEffect(() => {

    if(localStorage.getItem('token')===null ) {  
      alert('로그인이 필요한 페이지입니다. :)');
      props.history.push('/');

    } else if(localStorage.getItem('token')!==null && signInOrOut.todolists.initial===true){
      dispatch(requestTodolists(new Date(signInOrOut.date)));

    }
    // 렌더링이 얼마나 되는지 확인용
    // console.log("WritingPage rendering!!!!");
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

  const changeChecked = (checked, postId, itemId) => {
    const content = { is_completed: checked };
    dispatch(updateTodolistItem(postId, itemId, content));
  }

  const editDetailPlan = (editted_DetailPlan, postId, itemId) => {
    const content = { detail_context: editted_DetailPlan };
    dispatch(updateTodolistItem(postId, itemId, content));
  }


  const deleteList = (id) => {
    dispatch(deleteTodolist(id)); 
  }
  const deleteItem = (todolistId, itemId) => {
    dispatch(deleteTodolistItem(todolistId, itemId));
  }  
  const makeList = (noDateList) => {
    const list = noDateList;
    list.start_at=signInOrOut.date;
    list.end_at=signInOrOut.date;

    dispatch(addTodolist(noDateList));
  }
  
  const onClickLogo = () =>  {
    dispatch(goToHome());
  }

  const data = signInOrOut.todolists.data;
  const listsData = data !== undefined ? data : [];

  const todolists = listsData.map((list, index)=>(
    <Todolist
      todolist={list}
      key={list.id.toString()}
      index={index}
      changeChecked={changeChecked}
      deleteList={deleteList}
      deleteItem={deleteItem}
      editDetailPlan={editDetailPlan}
    />
  ));

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

      mainSection={
        todolists
      }

    />
  );
}

export default WritingPage;
// feedbackSection={(
//   <EditText
//   display={'inline-block'}
//   status={'clicked'}
//   type={'feedback'}
//   value={listsData.feedback}
//   />
// )}
