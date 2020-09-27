import React from 'react';
import styled from 'styled-components';

const form = styled.form`
  width: 100%;
	height: 100%;
	
	@media screen and (max-width: 411px) {
	}
`;

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
  }

	render() {
		return (
			<form method={this.props.method} onSubmit={function(){
        this.props.target
      }.bind(this)}>
        {this.props.children}
			</form>
		);
	}
}

export default Form;