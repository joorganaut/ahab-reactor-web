import React from 'react';
import { Form } from '../../../components/common/form/';
import { FormSection } from '../../../components/common/container/'
import { GoogleButton, FacebookButton } from '../../../components/common/button/';
import LoginViewModel from '../../../models/user/login/loginViewModel';
import LoginModel from '../../../models/user/login/loginModel';
import BasePage from './../../common/page/basePage';
import { LogoMedium } from '../../common/logo/';
import styled from 'styled-components/macro';
import { withTranslation, WithTranslation } from 'react-i18next';
const LoginWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 20px 20px 20px 20px;
    width: 100%;
    justify-content: center;
    @media screen and (max-width: ${props => props.theme.breakpoints.small}){
        width: 100%;
        align-items: center;
        grid-template-columns: 1fr;
        position: absolute;
        /* left: -6%; */
    }
    `
const LoginImageWrapper = styled.div`
        width: auto;
        margin: 20px 20px 20px 20px;
        justify-self: center;
        @media screen and (max-width: ${props => props.theme.breakpoints.small}){
        display: none;
    }
    `
const LoginFormWrapper = styled.div`
    border: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.border};
    border-radius: 15px;
    margin: 20px;
    opacity: 80%;   
    width: 50%;
    justify-self: center;
    background-color: ${props => props.theme.colors.background};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const LoginImage = styled.img`
        /* width: 100%; */
        /* opacity: 85%; */
    `
const LoginForm = styled(Form)`
        color: ${props => props.theme.colors.primary};
    `
const LoginFooter = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
color: ${props => props.theme.colors.primary};
text-decoration: none;
/* left: 25%;*/
bottom: 0px; 
width: 100%;
margin: auto;
position: relative;
justify-content: center;
`
const LoginFooterItem = styled.a`
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    margin: auto;
    font-size: 0.625rem;
`
interface LoginProps extends WithTranslation {

}
class Login extends BasePage<LoginProps, any>{
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
                <LoginFormWrapper>
                    <LoginForm
                        title={''}
                        color={''}
                        showConfirm={false}
                        Model={new LoginModel()}
                        ViewModel={new LoginViewModel(new LoginModel())} >
                        <FormSection>
                            <GoogleButton signIn={true} loginWithGoogle={() => { }} />
                        </FormSection>
                        <FormSection>
                            <FacebookButton signIn={true} loginWithFacebook={() => { }} />
                        </FormSection>
                    </LoginForm>
                    <LoginFooter>
                    <LoginFooterItem href={'/passwordrecovery'}>{this.props.t('auth.forgotPassword')}</LoginFooterItem>
                    <LoginFooterItem href={'/user'} >{this.props.t('auth.signUp')}</LoginFooterItem>
                    </LoginFooter>
                </LoginFormWrapper>
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
export default withTranslation()(Login);