import React from 'react';
import { InputStyled, Label  } from './styles'

export const Input: React.FC = ({...props}) => {
  return (
    <Label>
      <InputStyled {...props} />
    </Label>
  )
}