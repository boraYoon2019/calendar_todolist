import React, {useEffect} from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  padding: .4em .8em;
  width: 100%;
  padding: .8em;
  display: block;
  text-align: center;
  border: ${props=> props.title==='true'? '1px solid #ffc7c7' : '1px solid #ccc'};
  outline: none;
  max-width: ${props=> props.title==='true'? '23em' : props.maxWidth!==undefined? props.maxWidth : ''};
  margin: ${props=> props.title==='true'? '1.2em' : props.margin!==undefined? props.margin : '1em'};
  font-size: ${props=> props.title==='true'? '1.4rem' : props.fontSize!==undefined? props.fontSize : '1.1rem'};
  border-radius: ${props=> props.title==='true'? '12px' : '8px'};
  background-color: #fff;
  box-shadow: 0px 0px 4px 2px #ccc;

  &:hover, &:focus {
    background-color: ${props=> props.title==='true'? '#fff2f2' : '#eceeee'};
  }
  
	@media screen and (max-width: 414px) {
    font-size: ${props=> props.title==='true'? '1.2rem' : props.fontSize? props.fontSize : '1rem'};
    margin: ${props=> props.title==='true'? '.8em .7em' : props.margin!==undefined? props.margin : '.6em'};
    padding: 0.5em .8em;
    border-radius: ${props=> props.title==='true'? '12px' : 0};
	}

`;

function Input(props){

  function noKeyPress(event) {
    if( event.key== 'Enter' ){
      event.preventDefault();
    }
  }

  return (
    <TextInput 
      maxWidth={props.maxWidth}
      margin={props.margin}
      fontSize={props.fontSize}
      placeholder={props.placeholder}
      title={props.title.toString()}
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress !== undefined? props.onKeyPress : noKeyPress}
      id={props.id !== undefined? props.id : null}
    ></TextInput>
  );
}

export default Input;
