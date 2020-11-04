import React, { useState }  from 'react';
import styled from 'styled-components';
import XButton from '../atoms/XButton';
import Checkbox from '../atoms/Checkbox';

const Item = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding: .6em;
  /* margin: -1px .7em; */
  border: 2px solid #ccc;
  background-color: #fff2f2;
  border-radius: 6px;
  box-shadow: 0px 0px 4px 2px #ccc;
    
	@media screen and (max-width: 414px) {
  padding: .3em;
	}
`;

const Text = styled.span`
  text-decoration: ${props=>props.checked? 
  'line-through' : 'none' };
  color: ${props=>props.checked? 
  '#8e8e8e' : '#111' };
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

	const onChange = (event) => {
		setChecked(event.target.checked);
		props.onChangeChecked(event);
	}
	
  
  if (props.checkbox) {
    return (
      <Item onClick={props.onItemClick}>
        <Checkbox type='checkbox' checked={checked} value={props.value} onChange={onChange}/>
        <Text checked={checked}>{props.children}</Text>
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

export default React.memo(ListItem);
