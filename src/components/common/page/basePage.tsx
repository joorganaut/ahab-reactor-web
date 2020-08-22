import React from 'react';
import { ActivityIndicator } from '../loader/activityIndicator';
import { Redirect } from 'react-router-dom';
import { Notification } from '../notification/';
import BaseProcessor from '../../../models/baseProcessor';
import MiddlewareManager from '../../../services/middlewareManager';
import { Wrapper} from '../container/';
import { WithTranslation } from 'react-i18next';
import DialogNotification from '../notification/dialogNotification'


class BasePage<T = WithTranslation, U = any> extends React.Component<T, any>{
    manager: MiddlewareManager;
    theme: any;
    Notification: Notification;
    baseProcessor!: BaseProcessor;
    constructor(props: any){
        super(props);
        this.state = {
            IsLoading: props.IsLoading === undefined ? false : props.IsLoading,
            LoadingTitle:  props.LoadingTitle === undefined ? ('global.loading'): props.LoadingTitle,
            UserID:  props.UserID === undefined ? 0 : props.UserID,
            Redirect:  props.Redirect === undefined ? false : props.Redirect,
            RedirectPath:  props.RedirectPath === undefined ? '/' : props.RedirectPath,
            RedirectParams: props.RedirectParams === undefined ? {} : props.RedirectParams,
            User: props.User === undefined ? {} : props.User
        }
        
        this.manager = new MiddlewareManager();
        this.Notification = new Notification();
    }

    renderRedirect = (path?: string, obj?: unknown) => {
        return <Redirect to = {{pathname : path, state : {
            Values : obj
        }}}/>
     }
     renderLoading=()=>{
        return(
            <ActivityIndicator show={this.state.IsLoading} title={this.state.LoadingTitle} />
        )
    }
    async notify(type: string, word?: string){
        //await this.Notification.showNotification(type, word);
    }
    async alert(title: string, message: string, type: 'info' | 'success' | 'error', callback?: ()=>void){
        const button = [{
            label: 'Ok',
            onClick: callback ? callback : () =>{}
        }]
        return DialogNotification(title, message, button, true, type)
    }
    async confirm(callback: ()=>void){
        const buttons = [
            {
                label: 'Ok',
                onClick: callback
            },
            {
                label: 'Cancel',
                onClick: ()=>{}
            }
        ]
        return DialogNotification("Confirm", 'Are you sure?', buttons, true, 'info')
    }
    renderAllComponents=(callback?: any)=>{
        //this.ValidateRoles();
       
        if(this.state.Redirect === true)
        {
            return this.renderRedirect(this.state.RedirectPath, this.state.RedirectParams)
        }
        if(this.state.IsLoading === true)
        {
            return(
                this.renderLoading()
            )
        }
        else{
            return (
                <>
                {callback}
                </>
            )
        }
    }
    render(){
        return(<Wrapper>
            {this.renderAllComponents()}           
        </Wrapper>)
    }
}
export default BasePage;