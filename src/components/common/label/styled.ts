import styled from 'styled-components/macro';

export const Label = styled.span<{bold: boolean; color?: string}>`
    margin: 0 20px 0 20px;
    font-weight: ${props => props.bold? 'bold' : 'none'};
    color: ${props => props.color? props.color : props.theme.colors.banner2}
`