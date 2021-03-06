import styled from "styled-components";

export const Wrapper = styled.div.attrs({
  className: 'wrapper'
})`
  background-color: #F2F2FA;
  border: 1px solid #DCE2E6;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 10px 20px;

  & + div {
    border-radius: 0px 0px 10px 10px;
  }
`;

export const Label = styled.label`
  color: #7A7A80;
`;

export const InputStyled = styled.input`
  background-color: #F2F2FA;
  border: 0;
  color: #7A7A80;

  &::placeholder {
    color: #AEAEB3;
  }
`;