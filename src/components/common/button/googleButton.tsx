import React from 'react'
import styled from 'styled-components/macro';
import useI18n from '../../../hooks/useI18n';
const OutlineButton = styled.button`
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: pointer;
  font-size: 0.75rem;

  border-radius: 6px;
  padding: 10px 30px;
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
  height: 16px;
  width: 16px;
`

const Text = styled.div`
  font-size: 0.75rem;
  line-height: 1.4;
  display: inline-flex;
`
export const GoogleButton: React.FC<{signIn: boolean, loginWithGoogle: (e: any)=>void}> = ({ signIn, loginWithGoogle }) => {
  const { t } = useI18n();
  const buttonText = signIn ? t('auth.google.signIn') : t('auth.google.signUn')
  return (
    <OutlineButton onClick={loginWithGoogle}>
      <IconContainer>
        <Text>{buttonText}</Text>
        <Icon src="/icons/gb/google.svg" />
      </IconContainer>
    </OutlineButton>
  )
}