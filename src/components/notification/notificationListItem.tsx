import React from 'react';
import { 
    NotificationListItemContainer, 
    NotificationListItemSender, 
    NotificationListItemTitle, 
    NotificationListItemSummary,
    NotificationListItemSenderName,
    NotificationListItemSenderDate,
    NotificationListItemIcon
 } from './styled';


export interface NotificationListItemProps {
    // ID: number;
    // Title: string;
    // Status: 'read' | 'unread' | 'deleted';
    // Date: Date;
    // Summary: string;
    // From: string;
}
const NotificationListItem: React.FC<NotificationListItemProps> = ({ ...props }) => {

    return <NotificationListItemContainer status={'unread'} onClick={()=> alert('hello world')}>
        <NotificationListItemSender>
            <NotificationListItemSenderName>
                <NotificationListItemIcon src={'/icons/gb/info.svg'}/> Xchange
            </NotificationListItemSenderName>
            <NotificationListItemSenderDate>
                28/8/2020 10:15pm
            </NotificationListItemSenderDate>
        </NotificationListItemSender>
        <NotificationListItemTitle>
            Welcome to Xchange
        </NotificationListItemTitle>
        <NotificationListItemSummary>
            Xchange is the leading informal FX exchange platform...
        </NotificationListItemSummary>
    </NotificationListItemContainer>
}
export default NotificationListItem;