import React, { createContext } from 'react';
import AllNotificationsRequest from '../models/notification/allNotificationsRequest';
import AllNotificationsViewModel from '../models/notification/allNotificationsViewModel';
import { Direction } from '../components/common/pager';

interface ContextProps {
    state: any;
    actions: any;
}
interface ContextManagerProps {

}
interface ContextManagerState {
    AuthDetails: any;
    Notifications: number;
    ID: string
    Test: number
}
export const AppContext = createContext<ContextProps>({ state: {}, actions: {} })
export default class ContextManager extends React.Component<ContextManagerProps, ContextManagerState>{
    constructor(props: ContextManagerProps) {
        super(props);
        this.state = {
            AuthDetails: {},
            Notifications: 0,
            ID: '',
            Test: 0
        }
        this.setAuthDetails = this.setAuthDetails.bind(this);
        this.getAuthDetails = this.getAuthDetails.bind(this);
    }
    getAuthDetails = () => {
        const userID = localStorage.getItem('UserID');
        if (userID !== undefined) {
            const authDetails = localStorage.getItem(userID ?? '');
            return JSON.parse(authDetails ?? '');
        }
        return undefined;
    }
    setAuthDetails(id: string, value: any) {
        if (value === null) {
            this.setState({ ID: '', AuthDetails: {} }, () => { localStorage.removeItem('UserID'); localStorage.removeItem(id) });
        } else {
            this.setState({ ID: id, AuthDetails: value }, () => { localStorage.setItem('UserID', id); localStorage.setItem(id, JSON.stringify(value)) });
        }
    }
    test() {
        this.setState({ Test: this.state.Test + 1 })
    }
    contextRefreshCallBack = () => {
        setInterval(() => {
            this.refreshNotifications();
            this.contextRefreshCallBack();
        }, 100000)
    }
    refreshNotifications = async () => {
        await this.componentDidMount();
    }
    getNotifications() {
        return this.state.Notifications;
    }
    componentDidMount = async () => {
        try {
            const auth = this.getAuthDetails();
            if (auth !== undefined) {
                let searchParams = new AllNotificationsRequest({
                    Criteria: [
                        { fieldName: 'Status', fieldValue: 'unread' },
                        { fieldName: 'Recipient', fieldValue: auth.Model.UserModel.ID },
                    ],
                    page: 0,
                    pageSize: 100,
                    sort: 'createdAt',
                    direction: Direction.desc,
                    ToString: () => { return null },
                    ToObject: (value: string) => { return null }
                });
                const viewModel = new AllNotificationsViewModel(searchParams)
                let r = await viewModel.SubmitAction(searchParams);
                this.setState({ Notifications: r.Model?.length ?? 0 });
                // this.refreshNotifications();
            }
        } catch{

        }
    }
    render() {
        return (
            <AppContext.Provider value={
                {
                    state: {
                        ...this.state
                    },
                    actions: {
                        getAuthDetails: () => this.getAuthDetails(),
                        setAuthDetails: (id: string, value: any) => this.setAuthDetails(id, value),
                        getNotifications: () => this.getNotifications(),
                        refreshNotifications: () => this.refreshNotifications(),
                        test: () => this.test()
                    }
                }
            }>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}