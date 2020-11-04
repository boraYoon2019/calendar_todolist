import React, {useState} from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import Label from '../atoms/Label';
import Textarea from '../atoms/Textarea';
import Button from '../atoms/Button';

const Layout = styled.div`
  width: 100%;
  max-width: 40em;
  padding: 2.5em 1.5em;
  display: ${props => props.display};
  flex-flow: column nowrap;
`;

function DetailPlan(props) {
  
  const [value, setValue] = useState(props.value);
  const [readOnly, setReadOnly] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
    console.log('handleChange', event.target.value);
  }

  function onClickTextArea(event) {
    setReadOnly(!readOnly);
    console.log('onClickTextArea', event.target);
  }

  if (props.status==='clicked') {
    return (
      <Layout display={props.display}>
        <Title>{props.title}</Title>
        <Label>Detail Plan
          <Textarea value={value} onClick={onClickTextArea} readOnly={readOnly} onChange={handleChange}/>
        </Label>
        <Button>수정완료</Button>
      </Layout>
    );
  } else {
    return (
      ''
    );
  }
}

export default DetailPlan;


// const Icon = styled.i`
//   font-size: 18vw;
//   width: 100%;
//   height: 100%;
//   color: #f48fb1;
//   text-align: center;
//   margin: .1em 0;
//   transition: 300ms ease;

//   &:hover &:focus {
//     transform: scale(1.2);
//     transition: transform 300ms ease;
//   }

//   @media screen and (max-width: 540px) {
//     display: none;
// 	}
// `;
// <Icon className="fas fa-heart"></Icon>