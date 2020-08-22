import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { lighten } from 'polished'

const Container = styled.label`
  display: inline-flex;
  border: 1px solid ${(props) => props.theme.colors.compliment};
  border-radius: 6px;
  position: relative;
  padding: 12px 10px;
  background-color: ${props => props.theme.colors.white};;

  font-size: 0.875rem;
  width: 100%;
`

const Caption = styled.div`
  position: absolute;
  border-radius: 3px;
  top: -18%;
  font-size: 0.75rem;
  background: ${props => props.theme.colors.white};
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
}

const Option = styled.option<TextInputProps>`
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
const Select = styled.select`
display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 300;
	color: ${props => props.theme.colors.primary};
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
  border: 1px solid #aaa;
  border-color: ${props => props.theme.colors.primary};
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	/* background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); */
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
.select-css::-ms-expand {
	display: none;
}
.select-css:hover {
	border-color: #888;
}
.select-css:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px ${props => props.theme.colors.banner2};
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
.select-css option {
	font-weight:normal;
}
`
interface OptionProps {
  key: string;
  value: any;
}
export const DropDown: FC<{ name: string, data?: OptionProps[], label: string, onSelectChange: (e: any) => void, selectedValue?: string }>
  = ({ data, label, onSelectChange, selectedValue, name }) => (
    <Label label={label}>
      <Select onChange={onSelectChange} name={name} value={selectedValue}
        placeholder={'please select...'}>
        <Option value="" selected disabled hidden>Choose a {label.toLowerCase()}</Option>
        {data?.map(x => {
          return (<Option value={x.value} 
          >{x.key}</Option>)
        })}
      </Select>
    </Label>
  )