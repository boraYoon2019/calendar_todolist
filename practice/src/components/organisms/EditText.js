import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import Label from '../atoms/Label';
import Textarea from '../atoms/Textarea';
import Button from '../atoms/Button';

const Layout = styled.div`
  width: 100%;
  max-width:${props => props.type === 'feedback'? '55em' :' 40em'};
  padding: 2.5em 1.5em 0 1.5em;
  display: ${props => props.display};
  flex-flow: column nowrap;
`;

function EditText(props) {

  const comparedStandard = useRef(props.title);

  const [value, setValue] = useState(props.value);
  const [readOnly, setReadOnly] = useState(true);

  useEffect(() => {
    if (comparedStandard.current !== props.title) {
      console.log(comparedStandard.current, '!==', props.title)
      setValue(props.value);
      setReadOnly(true);      
      comparedStandard.current=props.title;
    }
    // Your useEffect code here to be run on update
    console.log("** EditText rendering!!!!");
    console.log('prosp value, title', props.value, props.title);
    console.log('value, title', value, props.title);
  });
  

  function handleChange(event) {
    setValue(event.target.value);
  }

  function onClickTextArea(event) {
    setReadOnly(!readOnly);
    console.log('onClickTextArea', event.target);
  }

  function onFinishEdit() {
    setReadOnly(!readOnly);
    props.onFinishEdit(value);
  }

    return (
      <Layout display={props.display} type={props.type}>
        {props.title !== undefined && (
          <Title>{props.title}</Title>
        )}{''}
        <Label>{props.type}
          <Textarea 
            value={value}
            onClick={onClickTextArea} 
            readOnly={readOnly}
            onChange={handleChange}
            placeholder={props.type ==='feedback'? '오늘의 피드백을 적어보세요 :) 클릭하면 수정할 수 있어요.' : '상세 계획을 적어보세요. :) 클릭하면 수정할 수 있어요.'}
          />
        </Label>
        {!readOnly && (
          <Button onClick={onFinishEdit}>수정완료</Button>
        )}{''}
      </Layout>
    );
}

export default React.memo(EditText);