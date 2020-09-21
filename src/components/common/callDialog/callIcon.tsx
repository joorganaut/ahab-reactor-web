import styled from 'styled-components/macro'

export const CallIcon = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  background: url('/icons/Call Circle.svg') no-repeat center;
  background-size: 100%;
  padding: 0.5em 1.5em;
  color: ${(props) => props.theme.colors.primary};
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 1em;
  font-size: 0.6rem;
  z-index: 100;
`
export const CallIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CallButtonContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  background: url('/icons/Call Circle.svg') no-repeat center;
  background-size: 100%;
  padding: 0.5em 1.5em;
  color: ${(props) => props.theme.colors.primary};
  height: 3rem;
  width: 3rem;
  border-radius: 1em;
  @media print {
    display: none;
  }
`