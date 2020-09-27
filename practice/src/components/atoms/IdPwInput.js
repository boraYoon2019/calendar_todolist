import React from 'react';
import styled from 'styled-components';
import store from '../../store';

const InputTag = styled.input`
	margin: 0.4em;
  width: 100%;
	height: 2.5em;
	background-color: #eaf6ff;
	border: none;
	border-radius: 2px;
	flex-grow: 3;
	/* height: 1.5em; */

	@media screen and (max-width: 411px) {
	}
`;

class Input extends React.Component {

	constructor(props) {
		super(props); // React.Component의 생성자 메소드를 먼저 실행
		this.state = {
			// 이 컴포넌트의 초기 state 값 설정
		};
	}

	render() {
		return (
      <InputTag type={this.props.type}></InputTag>
		);
	}
}

export default Input;
