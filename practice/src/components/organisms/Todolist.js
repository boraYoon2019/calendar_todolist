import React, { useEffect, useState, useRef} from 'react';
import UlList from '../atoms/UlList';
import ListLayout from '../atoms/ListLayout';
import ListItem from '../molecules/ListItem';
import Title from '../atoms/Title';
import TabList from '../molecules/TabList';
import Xbutton from '../atoms/Xbutton';
import EditText from './EditText';
import FlexContainer from '../atoms/FlexContainer';


function Todolist ({ todolist, changeChecked, editDetailPlan, deleteList, deleteItem, index }) {
  const isInitialMount = useRef(true);
  
  const [clickedItemInfo, setclickedItemInfo] = useState({
      id: "",
      title: "",
      contents: "",
      display: 'none'
    });

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      console.table(clickedItemInfo);
    } else {
      //  console.log("** Todolist rendering!!!!");
    }
  });

  const listData = todolist !== undefined ? todolist : [];

  // Todolist 관련
  const deleteOneList = (event) => {
    deleteList(event.target.value);
  }

  const onCheckHandler = (event, postId, itemId) => {
    changeChecked(event.target.checked, postId, itemId);
  }
  
  const onFinishEdit = (editted_DetailPlan) => {
    editDetailPlan(editted_DetailPlan, listData.id, clickedItemInfo.id);
  }

  const onItemClick = (event, itemId, itemIndex) => {
    const node = event.target.nodeName;

    if (node==="P"){
      let clickedAgain = false;

      if(clickedItemInfo.id !== ""){
        clickedAgain = true;
      }

      if (clickedAgain) {
        if(clickedItemInfo.id === itemId) {
          setclickedItemInfo({
            id: "",
            title: "",
            contents: "",
            display: 'none'
          });
          return;
        }
      }

      setclickedItemInfo({
        id: itemId,
        title: todolist.comments[itemIndex].detail_title,
        contents: todolist.comments[itemIndex].detail_context,
        display: 'inline-block'
      });
      console.log('onItemclicked After setClickITem',clickedItemInfo.contents);
      console.table(clickedItemInfo);
    }
  }
  
  const items = 
  listData.comments.map((oneItem, index)=>(
    <ListItem 
      checkbox
      key={oneItem.id.toString()}
      id={oneItem.id}
      index={index}
      checked={oneItem.is_completed}
      onChangeChecked={(event)=>onCheckHandler(event, oneItem.post, oneItem.id)}
      onXClick={()=>deleteItem(oneItem.post, oneItem.id)}
      active={clickedItemInfo.id === oneItem.id? true:false}
      onItemClick={(event)=>{
        onItemClick(event, oneItem.id, index)}}
    >
      {oneItem.detail_title}
    </ListItem>
    ));
  
		return (
      <FlexContainer 
        alignItems='flex-start'
        marginBottom='3em'
        transition='400ms ease'
        flexFlow='row wrap'
        key={listData.id}
      >
      <ListLayout>
        <Xbutton value={listData.id} onClick={deleteOneList}/>
        <Title>{listData.title}</Title>
        <UlList>
          {items}
        </UlList>
      </ListLayout>
      {clickedItemInfo.display !== 'none' && (
        <EditText
          display={clickedItemInfo.display !== undefined? clickedItemInfo.display : ""}
          title={clickedItemInfo.title}
          value={clickedItemInfo.contents!== undefined? clickedItemInfo.contents : ""}
          type={'datail plan'}
          onFinishEdit={onFinishEdit}
        />
      )}{''}
    </FlexContainer>
		);
}

export default Todolist;