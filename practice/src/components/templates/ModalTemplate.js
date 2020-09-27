import React from 'react';
import styled from 'styled-components';
import ModalBackground from '../molecules/ModalBackground';
import ModalContent from '../organisms/ModalContent';

const Template = styled.div`
  position: relative;
	flex-flow: column nowrap;
  background-color: #fefefe;
  top:0;
  margin: 15% 35%;
  padding: 2.5em;
	border: 2px solid #bbdefb;
  border-radius: 10px;
	width: 30%;
  height: 35%;

	@media screen and (max-width: 414px) {
    margin: 15% 3%;
    width: 75%;
    height: 40%;
    padding: 1.8em;
	}
`;
        
class ModalTemplate extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
  }

	render() {
		return (
      <ModalBackground>
        <Template>
          <ModalContent></ModalContent>
        </Template>
      </ModalBackground>
		);
	}
}

export default ModalTemplate;