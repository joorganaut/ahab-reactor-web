import React from 'react';
import Form from '../../../components/common/form';
import LoginViewModel from '../../../models/user/login/loginViewModel';
import LoginModel from '../../../models/user/login/loginModel';
import BasePage from './../../common/page/basePage';
import {LogoSmall} from '../../common/logo/logoSmall';
import {theme} from '../../../styles/global';
export class Login extends BasePage{
    componentDidMount(){
        this.setState({IsLoading : false, LoadingTitle : 'Loading'});
    }
    renderPage=()=>{
        return (<>
            <LogoSmall />
            <Form title={'Sign in'} color={theme.colors.primary} Model={new LoginModel()} ViewModel={new LoginViewModel(new LoginModel())}></Form>
            </>
        )
    }
    render(){
        return(<>
        {this.renderAllComponents(this.renderPage())}
        </>)
    }
}