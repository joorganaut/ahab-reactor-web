import styled from 'styled-components/macro';

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
max-width: 1280px;
margin: 0px;
`
export const FormWrapper = styled.div`
    border-color : ${props => props.theme.colors.primary};
    border: solid;
    border-width: 3px;
    border-radius: 30px;
    width: 100%;
    margin: 0 auto;
`