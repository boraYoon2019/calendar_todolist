import React from 'react';
import styled from 'styled-components';

const ImageButton = styled.img`
  width:100%;
  margin: 1em;
  max-width: 60px;

  &:hover {
    cursor:pointer;    
  transform: scale(1.1);
  transition: transform 200ms ease;
  }
	@media screen and (max-width: 414px) {
  max-width: 50px;
	}
`;

function GoogleLogin (props){
		return (
      <>      
        <ImageButton src="/google.png" alt="" onClick={(e)=>alert('구글로그인')}></ImageButton>
        <span>
          <a target="_blank" href="https://icons8.com/icons/set/google-logo">Google icons</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </span>
      </>
		);
}

export default GoogleLogin;