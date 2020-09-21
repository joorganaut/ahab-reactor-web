import React, { useContext } from 'react';
import { AppContext } from '../../services/contextManager';
import {
    NotificationBodyHeader,
    NotificationBodyHeaderMain,
    NotificationBodyHeaderFooter,
    NotificationFooterIcon,
    NotificationListItemSenderDate,
    NotificationFooterName,
    NotificationBodyMain,
    NotificationBodyMainEmpty
} from './styled';
import { WelcomeNotification, AddTransactionNotification, AcceptNotification } from './templates'
import NotificationModel from '../../models/notification/notificationModel';
import moment from 'moment';

interface NotificationBodyProps {
    Model?: NotificationModel
}

const NotificationBody: React.FC<NotificationBodyProps> = ({ ...props }) => {
    const context = useContext(AppContext);
    if (props.Model?.Body !== undefined) {
        const getName = (id?: string) => {
            let result: string | undefined;
            let auth = context.actions.getAuthDetails();
            const userModel = auth.Model.UserModel;
            result = userModel.FirstName + ' ' + userModel.LastName;
            return result;
        }
        const getDate = () => {
            const format1 = "YYYY-MM-DD HH:mm:ss"
            var date1 = new Date(props.Model?.createdAt ?? new Date());
            const dateTime1 = moment(date1).format(format1);
            return dateTime1;
        }
        const getBody = (model: NotificationModel) => {
            switch (model?.Template) {
                case 'add-xchange':
                    return (<AddTransactionNotification name={getName(props.Model?.Recipient)} model={props.Model} />)
                case 'approval-request-sender':
                    return (<AcceptNotification name={getName(props.Model?.Recipient)} model={props.Model} />)
                case 'approval-request':
                    return (<AcceptNotification name={getName(props.Model?.Recipient)} model={props.Model} />)
                default:
                    return (<WelcomeNotification name={getName(props.Model?.Recipient)} model={props.Model} />)
            }
        }
        return <>
            <NotificationBodyHeader>
                <NotificationBodyHeaderMain>
                    {props.Model?.Title}
                </NotificationBodyHeaderMain>
                <NotificationBodyHeaderFooter>
                    <NotificationFooterIcon src={'/icons/gb/info.svg'} />
                    <NotificationFooterName>Notification to {getName(props.Model.Recipient)} </NotificationFooterName>
                    <NotificationListItemSenderDate>
                        {getDate()}
                    </NotificationListItemSenderDate>
                </NotificationBodyHeaderFooter>
            </NotificationBodyHeader>
            <NotificationBodyMain>
                {/* <AddTransactionNotification name={getName(props.Model.Recipient)} message={props.Model.Body} /> */}
                {getBody(props.Model)}
            </NotificationBodyMain>
        </>
    }
    return (<NotificationBodyMainEmpty>
        <div></div>
        Please select a message
        </NotificationBodyMainEmpty>)
}
export default NotificationBody;