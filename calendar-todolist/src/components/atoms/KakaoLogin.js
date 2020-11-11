import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import {kakao} from '../../envs';

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 100%;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const responseKaKao = (res) => {
  // const { data } = this.state;
  console.log(res.token);
  alert(res.token);
};

function KakaoLogin (props){
  return (
      <>
        <KaKaoBtn
          jsKey={kakao}
          buttonText='카카오 계정으로 로그인'
          onSuccess={props.onSuccess}
          onFailure={props.onFailure}
          getProfile={true}
        />
      </>
		);
}

export default React.memo(KakaoLogin);