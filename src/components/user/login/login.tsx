import React from 'react';
import { Form } from '../../../components/common/form/';
import { FormSection } from '../../../components/common/container/'
import { GoogleButton, GoogleButtonX, FacebookButton } from '../../../components/common/button/';
import LoginViewModel from '../../../models/user/login/loginViewModel';
import LoginModel from '../../../models/user/login/loginModel';
import BasePage from './../../common/page/basePage';
import { LogoMedium } from '../../common/logo/';
import styled from 'styled-components/macro';
import { withTranslation, WithTranslation } from 'react-i18next';
import LoginRequest from '../../../models/user/login/loginRequest';
import {AppContext} from '../../../services/contextManager';
import GoogleLoginRequest from '../../../models/user/login/googleLoginRequest';

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
    /* width: 50%; */
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
    constructor(props: any){
        super(props);
        this.Submit = this.Submit.bind(this);
    }
    componentDidMount() {
        this.setState({ IsLoading: false, LoadingTitle: 'Loading' });
    }
    async Submit(res: any) {
        debugger
        let e: MouseEvent = new MouseEvent('click');
        e.preventDefault();
        await this.signinWithGoogle(e, res);
    }
    signinWithGoogle = async (e: any, res: any) => {
        debugger
        const viewModel: LoginViewModel = new LoginViewModel(new LoginModel());
        const request: GoogleLoginRequest = new GoogleLoginRequest(new LoginModel({
            LoginUsername: res.email,
            Password: 'string',
            FirstName: res.FirstName,
            LastName: res.LastName
        }))
        const response = await viewModel.SigninWithGoogle(request, this.context)
        if (response !== null) {
            if (response.Code === '00') {
                this.setState({
                    Redirect: response.Redirect,
                    RedirectPath: response.RedirectPath,
                    RedirectParams: response.Model
                });
                await this.alert('Success', response.Message, 'success', () => { });
                await this.notify('success', response.Message);
            } else {
                await this.alert('Info', (response.Message !== undefined ? response.Message : response.Error ? response.Error : 'Unable to get info'), 'info', () => { });
                this.notify('info', (response.Message !== undefined ? response.Message : response.Error))
            }
        } else {
            await this.alert('Error', 'null response', 'error', () => { });
            this.notify('error', 'null response')
        }
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
                            <GoogleButtonX signIn={true} loginWithGoogle={this.Submit} />
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
Login.contextType = AppContext;
export default withTranslation()(Login);