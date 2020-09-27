import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	width:100%;
	background: ${props => props.color === 'primary' ? 'white' : '#eaf6ff'};
	color: #111;
	font-size: 1em;
	margin: 0.4em 0.6em;
	padding: 0.8em 1em;
	border: ${props =>
		props.color === 'primary' ? '2px solid #bbdefb' : '2px solid #eaf6ff'};
	border-radius: 20px;

  &:hover {
    background: #90caf9;
  }

	@media screen and (max-width: 414px) {
		font-size: 0.8em;
		margin: 0.5em 0.2em;
		padding: 0.7em 1em;
	}
`;

class Button extends React.Component {
	constructor(props) {
		super(props); // React.Component의 생성자 메소드를 먼저 실행
	}

	render() {
		return (
			<Btn color={this.props.color} onClick={function(){
				// 클릭 시 로그인 여부를 받아오는 로직이 성공하면 스토어를 통해 로그인 state값을 변경처리한다. 
        // store.dispatch({isLogin:true},)
			}.bind(this)}>
				{this.props.children}
			</Btn>
		);
	}
}

// 디폴트 기본 값 설정방법
// Button.defaultProps = {
// 	role: 'primary',
// };

export default Button;