import React from 'react';
import Form from '../../../components/common/form';
import LoginViewModel from '../../../models/user/login/loginViewModel';
import LoginModel from '../../../models/user/login/loginModel';
import BasePage from './../../common/page/basePage';
import { LogoMedium } from '../../common/logo/';
import styled from 'styled-components/macro';
const LoginWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin: 0px 20px 0px 20px;
    `
    const LoginImageWrapper = styled.div`
        width: 100%;
        max-height: 50%;
        margin: 0px 20px 0px 100px;
    `
    const LoginImage = styled.img`
        width: 50%;
        opacity: 85%;
    `
    const LoginForm = styled(Form)`
        color: ${props=> props.theme.colors.primary};
    `
export class Login extends BasePage {
    componentDidMount() {
        this.setState({ IsLoading: false, LoadingTitle: 'Loading' });
    }
    
    renderPage = () => {
        return (<>
       
            <LogoMedium />
 <LoginWrapper>
     <LoginImageWrapper>
            <LoginImage src={'/assets/login-background.png'} />
     </LoginImageWrapper>
            <LoginForm 
            title={'Sign in'} 
            Model={new LoginModel()} 
            ViewModel={new LoginViewModel(new LoginModel())} />
            </LoginWrapper>
        </>
        )
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}