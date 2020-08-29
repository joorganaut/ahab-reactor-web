import React, { useState, useEffect, useCallback, useContext } from 'react';
import { AppContext } from '../../services/contextManager';
import useI18n from '../../hooks/useI18n';
import {
    DashboardContainer,
    NotificationBodyContainer,
    NotificationListContainer
} from './styled';
import NotificationListItem, { NotificationListItemProps } from './notificationListItem';
import NotificationBody from './notificationBody';


const NotificationDashboard: React.FC = () => {
    const context = useContext(AppContext);
    const [notifications, setNotifications] = useState<NotificationListItemProps[]>([])
    const [activeNotification, setActiveNotification] = useState();
    const { t } = useI18n();
    const data: Array<string> = ['', '', '', '', '']
    return (
        <DashboardContainer>
            <NotificationListContainer noOfRows={5}>
                {data.map(x=>{
                    return(<NotificationListItem/>)
                })}
        </NotificationListContainer>
            <NotificationBodyContainer>
                <NotificationBody/>
        </NotificationBodyContainer>
        </DashboardContainer>
    )

}

export default NotificationDashboard;