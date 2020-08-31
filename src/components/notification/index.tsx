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
import { ActivityIndicator } from '../common/loader/activityIndicator';
import { Direction } from '../common/pager';
import AllNotificationsRequest from '../../models/notification/allNotificationsRequest';
import AllNotificationsViewModel from '../../models/notification/allNotificationsViewModel';
import NotificationViewModel from '../../models/notification/notificationViewModel';
import IHttpObject, { ISearchCriteria } from '../../models/iHttpObject';
import NotificationModel from '../../models/notification/notificationModel';
import UpdateNotificationRequest from '../../models/notification/updateNotificationRequest';

export interface SearchParametersProps {
    Criteria: Array<ISearchCriteria>;
    searchBarItem: string;
    page: number;
    pageSize: number;
    sort: string;
    count: number;
    direction: Direction;
    SetCount: (e: number) => void;
    ToString(): Promise<string> | null;
    ToObject(value: string): Promise<IHttpObject> | null;
}

const NotificationDashboard: React.FC = () => {
    const context = useContext(AppContext);
    const [searchParameters, setSearchParameters] = useState<SearchParametersProps>(
        {
            Criteria: [],
            page: 0,
            count: 0,
            pageSize: 100,
            sort: 'createdAt',
            direction: Direction.desc,
            searchBarItem: '',
            SetCount: (e: number) => { },
            ToString: () => { return null },
            ToObject: (value: string) => { return null }
        }
    )
    const [notifications, setNotifications] = useState<NotificationListItemProps[]>([])
    const [activeNotification, setActiveNotification] = useState<NotificationModel>();
    const [showLoader, setShowLoader] = useState(false);
    const { t } = useI18n();
    const viewNotification = useCallback(async (record?: NotificationModel) => {
        await new NotificationViewModel(record?? new NotificationModel())
        .SubmitAction(new UpdateNotificationRequest(record?? new NotificationModel()), 'read')
        setActiveNotification(record);
        context.actions.refreshNotifications();
        context.actions.test();
    }, [])
    const GetAllNotifications = useCallback(async () => {
        setShowLoader(true)
        let notifications: NotificationListItemProps[] = [];
        let searchParams = new AllNotificationsRequest(searchParameters);
        const viewModel = new AllNotificationsViewModel(searchParams)
        let r = await viewModel.SubmitAction(searchParams);
        let model = r.Model;
        // model = model?.sort((a, b) => {
        //     if ((a?.DateCreated?? new Date()) > (b?.DateCreated?? new Date()))
        //         return 1
        //     if ((a?.DateCreated?? new Date()) < (b?.DateCreated?? new Date()))
        //         return 0
        //     else
        //         return -1
        // })
        model?.forEach(element => {
            let n: NotificationModel = new NotificationModel(element);
            let row: NotificationListItemProps = {
                viewAction: () => { viewNotification(n) },
                ID: n.ID ?? 0,
                Title: n.Title ?? '',
                Date: n.createdAt ?? new Date(),
                Status: n.Status ?? 'deleted',
                Summary: n.Body !== undefined ? n.Body.substring(0, 45) : '',
                From: n.Sender ?? '',
                Template: n.Template ?? 'Empty'
            }
            notifications.push(row);
        })
        setNotifications(notifications);
        setActiveNotification(new NotificationModel(model ?? [0]));
        setShowLoader(false);
    }, [])
    useEffect(() => {
        GetAllNotifications()
    }, [])
    const renderNotifications = () => {
        if (notifications.length > 0) {
            return (notifications.map((x, i) => {
                return (<NotificationListItem
                    Title={x.Title}
                    From={x.From}
                    ID={x.ID}
                    Status={x.Status}
                    Template={x.Template}
                    Summary={x.Summary}
                    Date={x.Date}
                    viewAction={x.viewAction}
                />)
            }))
        } else {
            return (<NotificationListItem
                Title={'You have no new Notifications'}
                From={''}
                ID={0}
                Status={'deleted'}
                Template={'Empty'}
                Summary={''}
                Date={new Date()}
                viewAction={() => { }}
            />)
        }
    }
    const renderActiveNotification = () => {
        return (<NotificationBody
            Model={activeNotification}
        />)
    }
    return (
        <DashboardContainer>
            <NotificationListContainer noOfRows={notifications.length}>
                {renderNotifications()}
            </NotificationListContainer>
            <NotificationBodyContainer>
                {renderActiveNotification()}
            </NotificationBodyContainer>
            <ActivityIndicator display={showLoader} show={showLoader} title={'Loading Messages'} />
        </DashboardContainer>
    )

}

export default NotificationDashboard;