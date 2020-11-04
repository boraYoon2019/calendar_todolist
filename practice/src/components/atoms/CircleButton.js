import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	outline: none;
	width:${props => props.width!==undefined? props.width : '100%'};
	max-width: ${props => props.maxWidth!==undefined? props.maxWidth : '24px'};
	background: ${props => props.color === 'primary' ? 'white' : '#ff8888'};
	color:#fff;
	font-size: 1.5em;	
	text-transform: uppercase;
	margin: ${props => props.margin!==undefined? props.margin : '0'};
	padding: ${props => props.padding!==undefined? props.padding : '0'};
  border-radius: 50%;	
  border: 0px;
  box-shadow: 2px 2px 4px 0px #757575;

  &:hover {
		cursor: pointer;
    background: #f05454;
  }
`;

function CircleButton({color, onClick, children, margin, padding, width, maxWidth}) {	
	return (
		<Btn 
      color={color} 
      onClick={onClick}
      margin={margin}
      padding={padding}
      width={width}
      maxWidth={maxWidth}
		>
			{children}
		</Btn>
	);
}

export default React.memo(CircleButton);