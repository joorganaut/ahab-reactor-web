import React, { createContext } from 'react';

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
}
export const AppContext = createContext<ContextProps>({ state: {}, actions: {} })
export default class ContextManager extends React.Component<ContextManagerProps, ContextManagerState>{
    constructor(props: ContextManagerProps) {
        super(props);
        this.state = {
            AuthDetails: {},
            Notifications: 0,
            ID: ''
        }
        this.setAuthDetails = this.setAuthDetails.bind(this);
        this.getAuthDetails = this.getAuthDetails.bind(this);
    }
    getAuthDetails(){
        const userID = localStorage.getItem('UserID');
        const authDetails = localStorage.getItem(userID?? '');
        return JSON.parse(authDetails?? '');
    }
    setAuthDetails(id: string, value: any) {
        if (value === null) {
            this.setState({ ID: '', AuthDetails: {} }, ()=>{localStorage.removeItem('UserID'); localStorage.removeItem(id)});
        } else {
            this.setState({ ID: id, AuthDetails: value }, ()=>{localStorage.setItem('UserID', id); localStorage.setItem(id, JSON.stringify(value))});
        }
    }
    getNotifications(){
        return 5;
    }
    render() {
        return (
            <AppContext.Provider value={
                {
                    state: {
                        ...this.state
                    },
                    actions: {
                        getAuthDetails: ()=>this.getAuthDetails(),
                        setAuthDetails: (id: string, value: any) => this.setAuthDetails(id, value),
                        getNotifications: () => this.getNotifications()
                    }
                }
            }>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}