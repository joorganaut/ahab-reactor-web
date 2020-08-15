import React, { FC } from 'react'
import styled from 'styled-components/macro'

const Container = styled.label`
  display: inline-flex;
  border: 1px solid ${(props) => props.theme.colors.compliment};
  border-radius: 6px;
  position: relative;
  padding: 12px 10px;
  background-color: white;

  font-size: 0.875rem;
  width: 100%;
`

const Caption = styled.div`
  position: absolute;
  top: -18%;
  font-size: 0.75rem;
  background: white;
  padding: 0 3px;
  left: 10px;
  color: ${(props) => props.theme.colors.primary};
`

const Hint = styled.div`
  font-size: 0.625rem;
  padding: 5px 3px 0;
  color: ${(props) => props.theme.colors.mediumText};

  text-align: left;
`

export const Label: FC<{
  label: string
  hint?: string
}> = ({ children, label, hint }) => (
  <>
    <Container>
      <Caption>{label}</Caption>
      {children}
    </Container>
    <Hint>{hint}</Hint>
  </>
)