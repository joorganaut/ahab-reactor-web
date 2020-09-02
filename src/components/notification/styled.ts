import styled from 'styled-components/macro';


export const DashboardContainer = styled.div`
display: grid;
grid-template-columns: 2fr 4fr;
grid-gap: 20px;
background-color: ${props => props.theme.colors.border};
margin: 20px;
height: 90%;
width: 90%;
padding: 20px;
`
export const NotificationListContainer = styled.div<{ noOfRows: number }>`
display: grid;
grid-template-rows: ${props => {
        let rowNo = 0;
        if (props.noOfRows !== undefined) {
            rowNo = props.noOfRows
        }
        let result = '1fr ';
        for (let i = 1; i < rowNo; i++) {
            result += '1fr ';
        }
        result += ';'
        return result;
    }};
grid-gap: 5px;
height: 100%;
overflow-y: scroll;
overflow-x: hidden;
`
export const NotificationBodyContainer = styled.div`
display: grid;
grid-template-rows: 0.2fr 3fr;
grid-gap: 5px;
background-color: ${props => props.theme.colors.background};
border-radius: 6px;
padding: 15px;
`
export const NotificationBodyMain = styled.div`
background-color: ${props => props.theme.colors.white};
border-radius: 6px;
padding: 15px;
color: ${props => props.theme.colors.banner1}
`

export const NotificationBodyMainEmpty = styled.div`
background-color: ${props => props.theme.colors.white};
border-radius: 6px;
padding: 15px;
font-size: 24px;
font-weight: 900;
text-align: center;
color: ${props => props.theme.colors.banner1}
`
export const NotificationBodyHeader = styled.div`
background-color: ${props => props.theme.colors.white};
display: grid;
grid-template-rows: 1fr 1fr;
border-radius: 6px;
padding: 15px;
height: fit-content;
`
export const NotificationBodyHeaderMain = styled.div`
font-weight: 900;
font-size: 20px;
text-align: left;
align-self: center;
color: ${props => props.theme.colors.banner1};
`
export const NotificationBodyHeaderFooter = styled.div`
display: grid;
grid-template-columns: 0.1fr 2fr 0.9fr;
background-color: ${props => props.theme.colors.white};
font-weight: 900;
font-size: 15px;
text-indent: 20px;
color: ${props => props.theme.colors.banner1};
`
export const NotificationFooterName = styled.div`
align-self: center;
`
export const NotificationFooterIcon = styled.img`
align-self: center;
height: 15px;
width: 15px;
color: red;
justify-self: center;
`
export const NotificationListItemContainer = styled.div<{ status: 'read' | 'unread' }>`
display: grid;
grid-template-rows: 1fr 0.8fr 0.5fr;
padding: 15px;
background-color: ${props => props.theme.colors.background};
border-radius: 6px;
height: auto;
&:hover {
    transform: scale(1.01); 
    transition: all .2s ease-in-out;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
     background-color: ${props => props.theme.colors.brand};
    }
    &:active {
        background-color: ${props => props.theme.colors.primary};
    }
`

export const NotificationListItemSender = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`
export const NotificationListItemSenderName = styled.div`
font-weight: 900;
font-size: 20px;
text-align: left;
align-self: center;
color: ${props => props.theme.colors.banner1};
white-space: nowrap;
`
export const NotificationListItemIcon = styled.img`
height: 20px;
width: 20px;
color: red;
`
export const NotificationListItemSenderDate = styled.div`
font-weight: 600;
font-size: 12px;
text-align: right;
align-self: center;
color: ${props => props.theme.colors.compliment};
margin-right: 10px;
`

export const NotificationListItemTitle = styled.div`
font-weight: 700;
font-size: 15px;
text-align: left;
align-self: center;
color: ${props => props.theme.colors.banner2};
`
export const NotificationListItemSummary = styled.div`
font-weight: 550;
font-size: 11px;
height: 12px;
color: ${props => props.theme.colors.primary};
`