import styled from 'styled-components/macro';

export const Wrapper = styled.div`
width: 100%;
max-width: 1280px;
margin: 200px;
`
export const FormWrapper = styled.div<{ color: string }>`
    border-color : ${props => props.color};
    border: solid;
    border-width: 3px;
    border-radius: 30px;
    width: 70%;
    margin: 0 auto;
`