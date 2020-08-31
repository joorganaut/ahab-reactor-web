import React from 'react';
import { Form } from '../../../components/common/form/';
import { FormSection } from '../../../components/common/container/'
import { GoogleButton, FacebookButton } from '../../../components/common/button/';
import SignupViewModel from '../../../models/user/signup/signupViewModel';
import SignupModel from '../../../models/user/signup/signupModel';
import { LogoMedium } from '../../common/logo/';
import styled from 'styled-components/macro';
import useI18n from '../../../hooks/useI18n';

const LoginWrapper = styled.div`
    display: grid;
    /* grid-template-columns: 2fr 2fr; */
    /* grid-gap: 20px; */
    margin: 5px;
    width: 100%;
    background-image: url('/assets/bg-vector-mosaic-tile.jpg');
    background: no-repeat;
    justify-content: center;
    animation: fullView 0.5s forwards linear;
        @keyframes fullView {
        100% {
            width: 100%;
        }
        }
        .animate {
        animation : shimmer 2s infinite;
        background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
        background-size: 1000px 100%;
        }
    @media screen and (max-width: ${props => props.theme.breakpoints.small}){
        width: 100%;
        align-items: center;
        grid-template-columns: 1fr;
        position: absolute;
        left: -6%;
    }
    `
const LoginImageWrapper = styled.div`
        width: 100%;
        max-height: 100%;
        margin: 40px;
        @media screen and (max-width: ${props => props.theme.breakpoints.small}){
        display: none;
    }
    `
const LoginFormWrapper = styled.div`
    border: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.border};
    border-radius: 15px;
    margin: 1px;
    opacity: 80%;   
    width: 450px;
    bottom: 100px;
    background-color: ${props => props.theme.colors.background};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const LoginImage = styled.img`
        width: 100%;
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
bottom: 0; 
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
const SignUp: React.FC = () => {
    const { t } = useI18n();
    return (<>
        <LogoMedium />
        <LoginWrapper className='animate'>
            <LoginFormWrapper>
                    <LoginForm
                        title={''}
                        color={''}
                        showConfirm={false}
                        Model={new SignupModel()}
                        ViewModel={new SignupViewModel(new SignupModel())} >
                        <FormSection>
                            <GoogleButton signIn={false} loginWithGoogle={() => { }} />
                            <FacebookButton signIn={false} loginWithFacebook={() => { }} />
                        </FormSection>
                    </LoginForm>
                    <LoginFooter>
                    <LoginFooterItem href={'/'} >{t('auth.signIn')}</LoginFooterItem>
                    </LoginFooter>
                </LoginFormWrapper>
        </LoginWrapper>
    </>)
}
export default SignUp;