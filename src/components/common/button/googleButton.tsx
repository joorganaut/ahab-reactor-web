import React from 'react'
import styled from 'styled-components/macro';
import useI18n from '../../../hooks/useI18n';
const OutlineButton = styled.button`
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: pointer;
  font-size: 0.45rem;

  border-radius: 5px;
  margin: 10px 10px;
  border: 1px solid transparent;

  &:active {
    top: 1px;
  }

  &:focus {
    outline: none;
  }

  background-color: white;
  color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.primary};
`

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
`

const Icon = styled.img`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 12px;
  width: 12px;
  background-color: ${props => props.theme.colors.white}
`

const Text = styled.div`
  font-size: 0.65rem;
  line-height: 1.2;
  display: inline-flex;
`
export const GoogleButton: React.FC<{signIn: boolean, loginWithGoogle: (e: any)=>void}> = ({ signIn, loginWithGoogle }) => {
  const { t } = useI18n();
  const buttonText = signIn ? t('auth.google.signIn') : t('auth.google.signUp')
  return (
    <OutlineButton onClick={loginWithGoogle}>
      <IconContainer>
        <Text>{buttonText}</Text>
        <Icon src="/icons/gb/google.svg" />
      </IconContainer>
    </OutlineButton>
  )
}