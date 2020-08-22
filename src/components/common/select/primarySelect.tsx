import React, { FC } from 'react';
import styled from 'styled-components/macro';
interface PSProps{
    label: string;
    value: string;
    name: string;
    data: [];
    onSelectChange: (e: any)=>void
}
const Input = styled.select`
width: 200px
    `
const Container = styled.div`
    flex: row;

`
export const PrimarySelect: FC<PSProps> = ({label, value, name, data, onSelectChange}) => {

    return (
        <Container>
            {label}: <Input  name={name} value={value} onChange={onSelectChange}>
                {data.map((x: any) => {
                    return(<option value={x}>{x}</option>)
                })}
            </Input>
        </Container>
    )
}