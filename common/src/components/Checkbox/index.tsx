import React, { InputHTMLAttributes } from 'react';
import { Wrapper, Label, InputStyled  } from './styles'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: JSX.Element | string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
  <Wrapper>
    <InputStyled id="checkbox" type="checkbox" />
    <Label htmlFor="checkbox" >{label}</Label>
  </Wrapper>
  );
}