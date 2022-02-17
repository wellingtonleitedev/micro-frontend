import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const modifiers = {
  primary: () =>`
    background: #CCC;
  `
}

export const Wrapper = styled.header`
  background: #000;

  ${applyStyleModifiers(modifiers)};
`