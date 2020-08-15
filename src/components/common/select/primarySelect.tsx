import React, { FC } from 'react';
import styled from 'styled-components/macro';
interface PSProps{
    label: string;
    value: string[];
    name: string;
    onSelectChange: (e: any)=>void
}
const Input = styled.select`
width: 200px
    `
const Container = styled.div`
    flex: row;

`
export const PrimarySelect: FC<PSProps> = ({label, value, name, onSelectChange}) => {

    return (
        <Container>
            {label}: <Input  name={name} value={value} onSelect={onSelectChange}>
                {value.map((x: any) => {
                    return(<option value={x.value}>{x.key}</option>)
                })}
            </Input>
        </Container>
    )
}