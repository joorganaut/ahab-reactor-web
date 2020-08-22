import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { lighten } from 'polished'
import NumberFormat from 'react-number-format'

import { Label } from './label'

interface TextInputProps {
  value: string | number
  onTextChange?: (e: any) => void
  placeholder?: string
  type?: string
}

interface InputProps extends TextInputProps {
  name?: string
  label: string
  hint?: string
  placeholder?: string
  max?: string
  min?: string
}

const TextInput = styled.input<TextInputProps>`
  display: inline-block;
  border: none;
  background: transparent;
  width: 100%;
  max-width: 100%;
  font-size: 0.875rem;
  padding: 5px 0;

  color: ${(props) => props.theme.colors.primary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 0.875rem;
    color: ${(props) => lighten(0.2, props.theme.colors.mediumText)};
  }
`

export const Input: FC<InputProps> = ({
  name,
  max,
  min,
  label,
  value,
  type,
  hint,
  placeholder,
  onTextChange,
}) => {
  switch (type) {
    case 'date':
      return (
        <Label label={label} hint={hint}>
          <TextInput required min={min} max={max} name={name} value={value} onChange={onTextChange} type={type} placeholder={placeholder} />
        </Label>
      )
    case 'money':
      return (
        <Label label={label} hint={hint}>
          <NumberFormat
            customInput={TextInput}
            value={value}
            placeholder={placeholder}
            onValueChange={onTextChange}
            thousandSeparator={true}
            prefix={'$'}
          />
        </Label>
      )
    case 'phone':
      return (
        <Label label={label} hint={hint}>
          <NumberFormat
            customInput={TextInput}
            value={value}
            placeholder={placeholder}
            onValueChange={onTextChange}
            format="+1 (###) ###-####"
            allowEmptyFormatting
            mask="_"
          />
        </Label>
      )
    case 'text':
      return (
        <Label label={label} hint={hint}>
          <TextInput name={name} value={value} onChange={onTextChange} type={type} placeholder={placeholder} />
        </Label>
      )
    default:
      return (
        <Label label={label} hint={hint}>
          <TextInput
            name={name}
            value={value}
            onChange={onTextChange}
            type={type}
            placeholder={placeholder}
          />
        </Label>
      )
  }
}