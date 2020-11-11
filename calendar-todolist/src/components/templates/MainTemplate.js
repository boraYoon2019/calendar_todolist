import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-flow: row wrap;
  justify-content: space-around;
	align-items: center;
  width: 100%;
`;

const MainTemp = styled.div`
	z-index: -1;
`;

function MainTemplate(props) {
	return (
		<MainTemp>
			{props.headerSection}
				<Div>				
					{props.children}
				</Div>
		</MainTemp>
	);
}

export default React.memo(MainTemplate);
