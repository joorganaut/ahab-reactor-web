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
position: relative;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 100px;
    margin: 0px 20px 0px 20px;
    width: 100%;
    left: 15%;
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
        margin: 0px 20px 0px 100px;
        @media screen and (max-width: ${props => props.theme.breakpoints.small}){
        display: none;
    }
    `
const LoginFormWrapper = styled.div`
    border: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.border};
    border-radius: 15px;
    margin: 10px;
    opacity: 80%;   
    background-color: ${props => props.theme.colors.background};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const LoginImage = styled.img`
        width: 100%;
        /* opacity: 85%; */
    `

const SignUp: React.FC = () => {
    return (<>
<LogoMedium/>
<LoginWrapper>
                <LoginImageWrapper>
                    <LoginImage src={'/assets/bg-vector-mosaic-tile.jpg'} />
                </LoginImageWrapper>
                <LoginFormWrapper>
                    </LoginFormWrapper>
                    </LoginWrapper>
    </>)
}
export default SignUp;