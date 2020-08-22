import styled from 'styled-components/macro';

export const BottomBanner = styled.div`
    height: 40px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    text-align: right;
    text-overflow: ellipsis;
    align-content: center;
    /* margin: 20px; */
    background-color: ${props=> props.theme.colors.white};
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.3)
`
export const Copyright = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    font-size: 10px;
    margin-top: 13px;
    color: ${props => props.theme.colors.primaryHover}
`