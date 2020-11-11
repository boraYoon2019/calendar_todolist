import React from 'react';
import Section from '../atoms/Section';
import styled from 'styled-components';

const Explanation = styled.p`
  margin: 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;  
  
  @media screen and (max-width: 411px) {
    margin: 1rem;
    font-size: 1rem;
  }

`;

function WritingTemplate(props) {
	return (
    <>
      {props.headerSection}

      <Section name='main'>
      {props.writingSection}
      </Section>
      
      <Section>
      <Explanation>* 리스트를 클릭하면 상세 계획을 입력할 수 있습니다. 상세계획란을 활용해보세요. :)</Explanation>
      {props.mainSection}
      </Section>

      <Section name='feedback'>
      {props.feedbackSection}
      </Section>
		</>
	);
}

export default React.memo(WritingTemplate);
