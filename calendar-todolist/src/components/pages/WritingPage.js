import React, {useEffect,useRef} from 'react';
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

  const dispatch = useDispatch();
  const signInOrOut = useSelector((state) => state.signInOrOut);

  const initialRendering = useRef(true);

  useEffect(() => {
    if (initialRendering.current) { // 첫번째 렌더링 시 (=componentDidMount)
      initialRendering.current=false;

      if(localStorage.getItem('token')===null ) {  
        alert('로그인이 필요한 페이지입니다. :)');
        props.history.push('/');

      } else {
        // 첫 페이지로 writing 페이지 들어왔을 때, 따로 데이터 받아와야 함.
        if(signInOrOut.todolists.initial===true){ 
          dispatch(requestTodolists(new Date(signInOrOut.date)));
        }
      }
    
    } else { // 리렌더링 시 (=componentShouldUpdate)
      if(localStorage.getItem('token')===null ) {
        alert('로그인이 필요한 페이지입니다. :)');
        props.history.push('/');  
      }      
    }
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
    // console.log(list.start_at);
    list.end_at=signInOrOut.date;
    // console.log(list);

    dispatch(addTodolist(list));
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
