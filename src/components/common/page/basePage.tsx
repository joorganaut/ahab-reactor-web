import React from 'react';
import { ActivityIndicator } from '../loader/activityIndicator';
import { Redirect } from 'react-router-dom';
import { Notification } from '../notification/';
import BaseProcessor from '../../../models/baseProcessor';
import MiddlewareManager from '../../../services/middlewareManager';
import BaseState from '../../../models/contracts/baseState';
import BaseProp from '../../../models/contracts/baseProp';
import { Wrapper} from '../container/'

export default class BasePage extends React.Component<any, any>{
    manager: MiddlewareManager;
    theme: any;
    Notification: Notification;
    baseProcessor!: BaseProcessor;
    constructor(props: any){
        super(props);
        this.state = {
            IsLoading: props.IsLoading === undefined ? false : props.IsLoading,
            LoadingTitle:  props.LoadingTitle === undefined ? 'loading' : props.LoadingTitle,
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
        await this.Notification.showNotification(type, word);
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