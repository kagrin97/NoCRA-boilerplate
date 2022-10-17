import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  /** 버튼 안의 내용 */
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <Container>{text}</Container>;
}

const Container = styled.button`
  background: red;
  &:hover {
    background: yellow;
    cursor: pointer;
  }
`;
