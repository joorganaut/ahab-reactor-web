import styled from 'styled-components/macro'

export const MagnifiContainer = styled.div<{ show: boolean }>`
    background-color: ${(props) => props.theme.colors.primary};
  /* background: url('/icons/Call Circle.svg') no-repeat center; */
  background-size: 100%;
  padding: 0.5em 1.5em;
  color: ${(props) => props.theme.colors.primary};
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 1em;
  font-size: 0.6rem;
  z-index: 100;
  display: none;
  @media print {
    display: none;
  }
`