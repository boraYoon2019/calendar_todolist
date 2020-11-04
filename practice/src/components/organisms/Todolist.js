import React, { useEffect, useState } from 'react';
import UlList from '../atoms/UlList';
import ListLayout from '../atoms/ListLayout';
import ListItem from '../molecules/ListItem';
import Title from '../atoms/Title';
import TabList from '../molecules/TabList';
import Xbutton from '../atoms/Xbutton';
import DetailPlan from '../molecules/DetailPlan';
import FlexContainer from '../atoms/FlexContainer';


function Todolist ({ todolists, toggleCheck, showDetailPlan, deleteList, deleteItem }) {

  useEffect(() => {
    // 렌더링이 얼마나 되는지 확인용
    console.log("Todolist rendering!!!!");

  });

  // Todolist 관련
  const deleteOneList = (event) => {
    deleteList(event.target.value);
  }

  // // Todolist 내 각 item 관련
  // const deleteListItem = (event, posts) => {
  //   // deleteItem();
  //   console.log('deletelistItem:', event.target.value, posts);
  // }

  const onCheckHandler = (event) => {
    // toggleCheck();
    console.log('checked: ', event.target.checked);
  }
  
  const onItemClick = (event) => {
    const node = event.target.nodeName;
    if(node==="BUTTON"||node==="INPUT") {
      return;
    }
    console.log('디테일 플랜 열리기');
    // showDetailPlan();
  }

  const listsData = todolists !== undefined ? todolists.data : [];
  console.log(listsData);
  
  const items = 
  listsData.map((item)=>(
    item.comments.map((oneItem)=>(
    <ListItem 
      checkbox
      key={oneItem.id.toString()}  
      checked={oneItem.is_completed}
      onChangeChecked={onCheckHandler}
      id={oneItem.id.toString()}
      onXClick={()=>deleteItem(oneItem.post.toString(), oneItem.id.toString())}
      onItemClick={onItemClick}
    >
      {oneItem.detail_title}
    </ListItem>
    ))
  ));
  
  const lists = listsData.map((list, index)=>(
    <FlexContainer 
      alignItems='flex-start'
      marginBottom='3em'
      transition='400ms ease'
      flexFlow='row wrap'
      key={list.id}
    >
      <ListLayout>
        <Xbutton value={list.id} onClick={deleteOneList}/>
        <Title>{list.title}</Title>
        <UlList>
          {items[index]}
        </UlList>
        <TabList active='all'/>
      </ListLayout>
      {list.comments[0] !== undefined && (
        <DetailPlan
        display={'inline-block'}
        status={list.comments[0] !== undefined? 'clicked' : ''}
        title={list.comments[0].detail_title}
        value={list.comments[0].detail_context}
        />
      )}{''}
    </FlexContainer>
  ));

		return (
      <>
      {lists}
      </>
		);
}

export default Todolist;

// <DetailPlan display='flex' title='옷구매' content='예우'/>
// {list.comments[0] !== undefined && (
// )}{''}