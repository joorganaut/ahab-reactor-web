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
import moment from 'moment';

export interface NotificationListItemProps {
    ID: number;
    Title: string;
    Status: 'read' | 'unread' | 'deleted';
    Date: Date;
    Summary: string;
    From: string;
    Template: string;
    viewAction: () => void;
}
const NotificationListItem: React.FC<NotificationListItemProps> = ({ ...props }) => {
    const getDate = () => {
        let momentDate = moment(props.Date).toDate();
        return momentDate.toDateString()
    }
    return <NotificationListItemContainer status={'unread'} onClick={()=> props.viewAction()}>
        <NotificationListItemSender>
            <NotificationListItemSenderName>
                <NotificationListItemIcon src={'/icons/gb/info.svg'}/> {props.From}
            </NotificationListItemSenderName>
            <NotificationListItemSenderDate>
                {getDate()}
            </NotificationListItemSenderDate>
        </NotificationListItemSender>
        <NotificationListItemTitle>
            {props.Title}
        </NotificationListItemTitle>
        <NotificationListItemSummary>
            {props.Summary}...
        </NotificationListItemSummary>
    </NotificationListItemContainer>
}
export default NotificationListItem;