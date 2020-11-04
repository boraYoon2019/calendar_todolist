import React from 'react';
import TabButton from '../atoms/TabButton';
import FlexContainer from '../atoms/FlexContainer';

function TabList(props){
  return (
    <FlexContainer padding='0'>
      <TabButton active={props.active==='all'?true:false}>all</TabButton>
      <TabButton active={props.active==='active'?true:false}>active</TabButton>
      <TabButton active={props.active==='completed'?true:false}>completed</TabButton>
    </FlexContainer>
  );
}

export default React.memo(TabList);
