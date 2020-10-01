import React from 'react';
import styled from 'styled-components';
import ModalBackground from '../molecules/ModalBackground';
import SiginingModal from '../organisms/SiginingModal';


// 실제 Organisms들을 레이아웃이나 데이터 흐름을 연결합니다.
// 클래스 시스템의 클래스로, 객체의 설계도, 페이지의 설계도입니다.

const Template = styled.div`
  position: relative;  
  background-color: #fefefe;
  padding: 2.5em;
	border: 2px solid #bbdefb;
  border-radius: 10px;
  width: 100%;
  max-width: 25vw;

	@media screen and (max-width: 1024px) {
    max-width: 35vw;
  }
  
	@media screen and (max-width: 768px) {
    max-width: 45vw;
  }

	@media screen and (max-width: 414px) {
    max-width: 75vw;
    padding: 1.8em;
	}
`;
        
class ModalTemplate extends React.Component {

	render() {
		return (
      <ModalBackground display='none'>
        <Template>
          <SiginingModal state=''></SiginingModal>
        </Template>
      </ModalBackground>
		);
	}
}

export default ModalTemplate;