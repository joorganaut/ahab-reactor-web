import React from 'react'
import styled from 'styled-components/macro'
import useI18n from '../../../hooks/useI18n'

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
  background-color: ${props => props.theme.colors.banner2}
`

const Text = styled.div`
  font-size: 0.65rem;
  line-height: 1.2;
  display: inline-flex;
`
export const FacebookButton: React.FC<{signIn: boolean, loginWithFacebook: (e: any)=>void}> = ({ signIn, loginWithFacebook }) => {
  const { t } = useI18n();
  const buttonText = signIn ? t('auth.facebook.signIn') : t('auth.facebook.signUp')
  return (
    <OutlineButton onClick={loginWithFacebook}>
      <IconContainer>
        <Text>{buttonText}</Text>
        <Icon src="/icons/gb/facebook.png"  />
      </IconContainer>
    </OutlineButton>
  )
}