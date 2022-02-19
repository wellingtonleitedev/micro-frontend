import styled from "styled-components";

import CheckIcon from '../../assets/check-icon.svg';

export const Wrapper = styled.div.attrs({
  className: 'wrapper'
})`
  align-items: center;
  background-image: url(${CheckIcon});
  background-size: 100%;
  display: flex;
  font-size: 1rem;
  gap: 1rem;
  margin-top: .5rem;
`;

export const Label = styled.label`
  color: #7A7A80;
`;

export const InputStyled = styled.input`
  color: #7A7A80;
  /* display: none; */
  
  &::placeholder {
    color: #AEAEB3;
  }
  
  &:checked {
    background-color: #51B853;
  }
`;