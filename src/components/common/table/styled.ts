import styled from 'styled-components/macro';

export const GridTableContainer = styled.div<{ noOfColumns: number }>`
    display: grid;
    grid-template-rows: 1fr 2fr;
    width: 100%;
    border-radius: 6px 6px 0 0;
    background-color: ${props => props.theme.colors.background};
`
export const SocialTableContainer = styled.div<{ noOfRows: number }>`
display: grid;
 grid-template-rows: ${props => {
        let result = '1fr ';
        for (let i = 1; i < props.noOfRows; i++) {
            result += '1fr ';
        }
        result += ';'
        return result;
    }};
    grid-gap: 10px;
width: 100%;
`
export const SocialTableRowContainer = styled.div<{ noOfColumns: number }>`
display: grid;
 grid-template-columns: ${props => {
        let result = '1fr ';
        for (let i = 1; i < props.noOfColumns; i++) {
            result += '1fr ';
        }
        result += ';'
        return result;
    }};
width: 100%;
font-size: 15px;
height: 80px;
background-color: ${props => props.theme.colors.white};
border-radius: 10px;
opacity: 95%;
border-color: ${props => props.theme.colors.border};
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
&:hover {
    transform: scale(1.02); 
    transition: all .2s ease-in-out;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    }
`
export const CurrencyContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* grid-auto-columns: 1fr 1fr 1fr; */
    align-items: center;
    justify-content: center;
    width: 100%;
    margin:10px;
`
export const Flag = styled.img`
height: 40px;
width: 40px;
border-radius: 100px;
`
export const FlagConnector = styled.img`
height: 40px;
width: 40px;
margin-left: 10px;
margin-right: 10px;
`
export const ClockContainer = styled.div`
font-size: 20px;
color: ${props => props.theme.colors.white};
align-items: center;
justify-content: center;
justify-self: center;
align-self: center;
margin: 20px;
font-weight: 600;
font-family: 'clock-digital';
@font-face {
    font-family: 'clock-digital';
    src: url('/fonts/digital-7.ttf');
}
`
export const NameContainer = styled.div`
font-weight: 600;
font-size: 20px;
align-items: center;
justify-content: center;
align-self: center;
color: ${props => props.theme.colors.banner1};
`
export const AmountAndRateContainer = styled.div`
align-items: center;
justify-content: center;
align-self: center;
text-align: -webkit-center;
`
export const ViewLink = styled.a`
`
export const ViewButtonContainer = styled.div`
align-items: center;
justify-content: center;
align-self: center;
text-align: -webkit-center;
width: 40px;
justify-self: center;
`
export const ViewButton = styled.img`
align-items: center;
justify-content: center;
align-self: center;
text-align: -webkit-center;
height: 100px;
width: 50px;
cursor: pointer;
`
export const ContactContainer = styled.div`
align-items: center;
justify-content: center;
align-self: center;
`
export const Mobile = styled.div`
margin: 5px;
text-align: center;
background-color: ${props => props.theme.colors.primaryHover};
color: ${props => props.theme.colors.white};
border-radius: 50px;
font-weight: 600;
width: 80%;
`
export const Email = styled.div`
margin: 5px;
text-align: center;
background-color: ${props => props.theme.colors.banner2};
color: ${props => props.theme.colors.white};
border-radius: 50px;
font-weight: 600;
font-size: 10px;
width: auto;
`
export const Amount = styled.div`
color: ${props => props.theme.colors.money};
font-weight: 600;
font-size: 25px;
`
export const Rate = styled.div`
margin: 5px;
text-align: center;
background-color: ${props => props.theme.colors.banner1};
color: ${props => props.theme.colors.white};
border-radius: 50px;
font-weight: 600;
width: 50%;
font-size: 10px;
`
export const GridTableHeaderContainer = styled.div<{ noOfColumns: number }>`
 display: grid;
 grid-template-columns: ${props => {
        let result = '1fr ';
        for (let i = 1; i < props.noOfColumns; i++) {
            result += '1fr ';
        }
        result += ';'
        return result;
    }};
width: 100%;
font-size: 15px;
background-image: linear-gradient(to right,${props => props.theme.colors.banner1},${props => props.theme.colors.banner2});
color: ${props => props.theme.colors.white};
 `
export const GridTableColumn = styled.div`
    text-align: center;
    border: solid;
    border-width: 1px;
    border-radius: 3px;
    border-color: ${props => props.theme.colors.border};
    padding: 5px;
    width: auto;
    font-weight: 600;
 `
export const Clock = styled.div`
 height: 40px;
 width: 100px;
 align-items: center;
justify-content: center;
justify-self: center;
align-self: center;
text-align: center;
justify-items: center;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.primaryDark};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 `

