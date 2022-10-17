import React from 'react';
import styled from 'styled-components';

export default function Button() {
  return <Container>버튼</Container>;
}

const Container = styled.button`
  background: red;
  &:hover {
    background: yellow;
    cursor: pointer;
  }
`;
