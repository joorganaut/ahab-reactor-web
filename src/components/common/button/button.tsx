import React from 'react';
import styled from 'styled-components/macro';
import { darken, lighten } from 'polished';

interface ButtonProps {
  type?: string
  disabled?: boolean
  submit?: boolean
  onClick?: (e: unknown) => void
  className?: string,
  name: string
}

const BaseButton = styled.button.attrs<ButtonProps>((props) => ({
  type: props.submit ? 'submit' : 'button',
}))`
  font-family: ${(props) => props.theme.fonts.primary};
  cursor: pointer;
  font-size: 0.75rem;
  letter-spacing: 0.2px;

  border-radius: 6px;
  padding: 10px 30px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors.lightPrimary};
  color: ${(props) => props.theme.colors.primary};

  transition: all 0.15s ease;

  &:active {
    display: relative;
    top: 1px;
  }

  &:focus {
    outline: none;
  }
`

const PrimaryButton = styled(BaseButton)<ButtonProps>`
  color: rgba(255, 255, 255, 0.8);
  background-color: ${(props) => props.theme.colors.banner1};

  &:hover {
    background-color: ${(props) => lighten(0.025, props.theme.colors.banner1)};
    color: white;
  }
`

const SecondaryButton = styled(BaseButton)<ButtonProps>`
  color: rgba(255, 255, 255, 0.8);
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => lighten(0.025, props.theme.colors.secondary)};
    color: white;
  }
`

const OutlineButton = styled(BaseButton)<ButtonProps>`
  color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.primary};
  background-color: transparent;

  &:hover {
    border-color: ${(props) => darken(0.1, props.theme.colors.primary)};
    color: ${(props) => darken(0.1, props.theme.colors.primary)};
  }
`

const DisabledButton = styled(BaseButton)<ButtonProps>`
  color: ${(props) => props.theme.colors.mediumText};
  background-color: ${(props) => props.theme.colors.outline};
`

const BareButton = styled(BaseButton)<ButtonProps>`
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
`

const IconButton = styled(BaseButton)<ButtonProps>`
  border-radius: 100%;
  padding: 0;
  height: 2em;
  width: 2em;
`

export const Button: React.FC<ButtonProps> = ({ type, children, disabled, submit = false, onClick, className, name }) => {
  if (disabled) return <DisabledButton name={name} className={className}>{children}</DisabledButton>
  switch (type) {
    case 'outline':
      return (
        <OutlineButton name={name} className={className} onClick={onClick} submit={Boolean(submit)}>
          {children}
        </OutlineButton>
      )
    case 'secondary':
      return (
        <SecondaryButton name={name} className={className} onClick={onClick} submit={Boolean(submit)}>
          {children}
        </SecondaryButton>
      )
    case 'primary':
      return (
        <PrimaryButton name={name} className={className} onClick={onClick} submit={Boolean(submit)}>
          {children}
        </PrimaryButton>
      )
    case 'bare':
      return (
        <BareButton name={name} className={className} onClick={onClick} submit={Boolean(submit)}>
          {children}
        </BareButton>
      )
    case 'icon':
      return (
        <IconButton name={name} className={className} onClick={onClick} submit={submit}>
          {children}
        </IconButton>
      )
    default:
      return (
        <BaseButton
          className={className}
          name={name} 
          onClick={onClick}
          // @ts-ignore
          submit={Boolean(submit)}
        >
          {children}
        </BaseButton>
      )
  }
}
