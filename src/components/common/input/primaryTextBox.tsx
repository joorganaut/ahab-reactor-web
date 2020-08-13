import React, { FC } from 'react';
import styled from 'styled-components/macro';
interface PTBProps{
    label: string;
    value: any;
    name: string;
    type: string;
    onTextChange: (e: any)=>{}
}
const Input = styled.input`

    `
const Container = styled.div`
    flex: row;

`
export const PrimaryTextBox: FC<PTBProps> = ({label, value, name, type, onTextChange}) => {

    return (
        <Container>
            {label}: <Input type={type} name={name} value={value} onChange={onTextChange}></Input>
        </Container>
    )
}