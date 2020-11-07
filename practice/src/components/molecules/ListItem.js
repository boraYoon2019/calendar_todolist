import React, { useState }  from 'react';
import styled from 'styled-components';
import XButton from '../atoms/Xbutton';
import Checkbox from '../atoms/Checkbox';

const Item = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding: .6em;
  /* margin: -1px .7em; */
  border: 2px solid #e6e6e6;
  background-color: ${props=>props.active===true? '#88d7d0' : '#dbdbdb' };
  border-radius: 6px;
  box-shadow: 0px 0px 4px 2px #ccc;
  font-size: 1.1rem;

	@media screen and (max-width: 414px) {
    padding: .3em;
    font-size: 1rem;
  }

`;

const Text = styled.p`
  width: 100%;
  line-height:1.1rem;
  text-decoration: ${props=>props.checked? 
  'line-through' : 'none' };
  color: ${props=>props.checked? 
  '#729293' : '#111' };
  padding: .5em .5em;

  &:hover {
    cursor:pointer;    
  }
`;

const InputText = styled.label`
  border: none;
  background-color: transparent;
  width: 100%;
  color: #494949;
  font-size: 1.2rem;
  margin: .3em .8em;
  line-height: 1.2;
  word-break: break-all;
`;

function ListItem(props){
  	
	const [checked, setChecked] = useState(props.checked);
	// const [active, setActive] = useState(false);

	const onChange = (event) => {
    setChecked(event.target.checked);
    props.onChangeChecked(event);
  }
  
  const onItemTextClick = (event) => {
    props.onItemClick(event);
    // setActive(!active);
  }

  if (props.checkbox) {
    return (
      <Item active={props.active}>
        <Checkbox type='checkbox' checked={checked} value={props.value} onChange={onChange}/>
        <Text onClick={onItemTextClick} checked={checked}>{props.children}</Text>
        <XButton inItem value={props.id} onClick={props.onXClick}/>
      </Item>
    );
  } else {
    return (
      <Item>
        <InputText disabled value={props.children}>{props.children}</InputText>
        <XButton inItem value={props.id} onClick={props.onXClick}/>
      </Item>
    );
  }
}

export default ListItem;
