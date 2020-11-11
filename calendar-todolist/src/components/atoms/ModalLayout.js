import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;

`;

function ModalLayout(props) {
      return (
        <Layout>
            {props.children}
        </Layout>
      );
}

export default React.memo(ModalLayout);