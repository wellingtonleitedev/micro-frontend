import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  )
}