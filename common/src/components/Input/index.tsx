import React from 'react';
import { Wrapper, Label, InputStyled  } from './styles'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: JSX.Element | string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <Wrapper>
    <Label>{label}</Label>
    <InputStyled {...props} />
  </Wrapper>
);