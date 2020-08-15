import React, { FC } from 'react';
import styled from 'styled-components/macro';
interface PTBProps {
    label: string;
    value: any;
    name: string;
    type: string;
    onTextChange: (e: any) => void
}
const Input = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 6px;
    `
const Container = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-column-gap: 10px;
`
export const PrimaryTextBox: FC<PTBProps> = ({ label, value, name, type, onTextChange }) => {
    return (
        <Container>
            {label}: <Input type={type} name={name} value={value} onChange={onTextChange}></Input>
        </Container>
    )
}