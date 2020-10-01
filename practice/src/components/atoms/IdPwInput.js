import React from 'react';
import styled from 'styled-components';
import store from '../../modules/store';

// const tagContent = this.props.type==='id'
// ? `	margin: 0.4em;
// width: 100%;
// height: 2.5em;
// background-color: #eaf6ff;
// border: none;
// border-radius: 2px;
// flex-grow: 3;
// /* height: 1.5em; */

// @media screen and (max-width: 411px) {
// }` : 
// `	margin: 0.4em;
// width: 100%;
// height: 2.5em;
// background-color: #eaf6ff;
// border: none;
// border-radius: 2px;
// flex-grow: 3;
// /* height: 1.5em; */

// @media screen and (max-width: 411px) {
// }`;

// const InputTag = styled.input`${tagContent}`;

const InputTag = styled.input.attrs(props => ({
  // we can define static props
  type: props.type,
}))`
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

function Input(props){
	return (
    <InputTag type={props.type}></InputTag>
	);
}

export default React.memo(Input);
