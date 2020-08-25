import styled from 'styled-components/macro';

export const ButtonGroup = styled.div<{vertical?: boolean}>`
display: flex;
width: 100%;
flex-direction: ${props => props.vertical ? 'row' : 'column'};
justify-content: space-between;
align-items: center;

> * ~ * {
    margin-top: ${props => !props.vertical && '20px'};
}
`

export const ButtonContainer = styled.div`
& > button {
    margin: 0.5em;

    &:last-of-type{
        margin-right: 0;
    }
    &:first-of-type{
        margin-left: 0;
    }
}
`