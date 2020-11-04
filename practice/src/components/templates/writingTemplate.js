import React from 'react';
import Section from '../atoms/Section';

function WritingTemplate(props) {
	return (
    <>
      {props.headerSection}

      <Section name='main'>
      {props.writingSection}
      </Section>
      
      <Section>
      {props.mainSection}
      </Section>

      <Section name='feedback'>
      {props.feedbackSection}
      </Section>
		</>
	);
}

export default WritingTemplate;
