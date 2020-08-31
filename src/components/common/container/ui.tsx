import styled from 'styled-components/macro'

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 20px 0 20px;
`

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FormSection = styled.div`
  align-items: center;
  display: flex;
  padding: 0 5px;
  width: 100%;

  margin-bottom: 15px;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    width: 100%;
  }
`

export const TextContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 20px;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  margin-bottom: 30px;
`

export const Text = styled.div`
  display: inline-flex;
  line-height: 1.4;
  padding: 0 1em;
`

export const Error = styled.div`
  color: red;
`