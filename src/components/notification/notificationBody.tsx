import React from 'react'
import {
     NotificationBodyHeader, 
     NotificationBodyHeaderMain, 
     NotificationBodyHeaderFooter, 
     NotificationFooterIcon, 
     NotificationListItemSenderDate, 
     NotificationFooterName, 
     NotificationBodyMain } from './styled';
import {WelcomeNotification} from './templates'

const NotificationBody: React.FC = ({...props}) => {
    return <>
    <NotificationBodyHeader>
        <NotificationBodyHeaderMain>
        Olakunle Aboaba Don’t Worry, Someone's got your back
        </NotificationBodyHeaderMain>
        <NotificationBodyHeaderFooter>
        <NotificationFooterIcon  src={'/icons/gb/info.svg'}/>  
        <NotificationFooterName>Notification to Olakunle Aboaba </NotificationFooterName>
        <NotificationListItemSenderDate>
        28/8/2020 10:15pm
        </NotificationListItemSenderDate>
        </NotificationBodyHeaderFooter>        
    </NotificationBodyHeader>
    <NotificationBodyMain>
<WelcomeNotification/>
        </NotificationBodyMain>
    </>
}
export default NotificationBody;