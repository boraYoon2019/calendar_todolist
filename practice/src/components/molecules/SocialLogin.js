import React from 'react';
import styled from 'styled-components';
import KakaoLogin from '../atoms/KakaoLogin';
// import GoogleLogin from '../atoms/GoogleLogin';
// <GoogleLogin />
import Title from '../atoms/Title';

const Wrapper = styled.div`
  width:100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: .5em 0;
	@media screen and (max-width: 414px) {
	}
`;

function SocialLogin (props){
		return (
      <Wrapper>
        <KakaoLogin 
          onSuccess={props.onSuccess}
          onFailure={props.onFailure}
        />
      </Wrapper>
		);
}

export default SocialLogin;