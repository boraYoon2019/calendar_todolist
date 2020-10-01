import React from 'react';
import styled from 'styled-components';
import KakaoLogin from '../atoms/KakaoLogin';
import GoogleLogin from '../atoms/GoogleLogin';

const Wrapper = styled.div`
  width:100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
	@media screen and (max-width: 414px) {
	}
`;
function SocialLogin (props){
		return (
      <Wrapper>
        <h3>ㅡ 소셜 로그인 ㅡ</h3>
        <KakaoLogin />
        <GoogleLogin />
      </Wrapper>
		);
}

export default SocialLogin;