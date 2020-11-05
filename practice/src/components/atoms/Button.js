import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	outline: none;
	width:${props => props.width!==undefined? props.width : '7.5em'};
	max-width: ${props => props.maxWidth!==undefined? props.maxWidth : '7.5em'};
	background: ${props => props.color!==undefined && props.color==='primary' ? 'white' : '#ffe2e2'};
	color: ${props => props.color!==undefined && props.color === 'primary' ? '#646363' : '#646363'};
	font-size: 1em;	
	font-weight: ${props => props.color!==undefined && props.color === 'primary' ? 550 : 600};
	text-transform: uppercase;
	margin: ${props => props.margin!==undefined? props.margin : '0.4em 0.6em'};
	padding: ${props => props.padding!==undefined? props.padding : '0.6em 1em'};
	border: ${props => props.color!==undefined && props.color==='primary' ? '4px solid #ffe2e2' : '4px solid #fff'};
	border-radius: ${props =>
	props.borderRadius !== undefined ? props.borderRadius : '10px'};

  &:hover {
		cursor: pointer;
		transition: 400ms ease;
		box-shadow: 0px 0px 10px 2px #ffe2e2;
  }

	@media screen and (max-width: 414px) {
		font-size: 0.8em;
		margin: 0.5em 0.2em;
		padding: 0.7em 1em;
	}
`;

function Button({color, type, onClick, children, margin, padding, width, maxWidth}) {	

	return (
		<Btn 
		color={color} 
		onClick={onClick}
		type={type}
		margin={margin}
		padding={padding}
		width={width}
		maxWidth={maxWidth}
		>
			{children}
		</Btn>
	);
}

// 디폴트 기본 값 설정방법
Button.defaultProps = {
	color: 'none'
};

export default React.memo(Button);