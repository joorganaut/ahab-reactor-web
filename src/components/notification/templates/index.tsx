import React from 'react';
import {WelcomeContainer} from './styled';


export const WelcomeNotification : React.FC = ({...props}) => {
    return<WelcomeContainer>
    Welcome to <strong>Xchange&trade;</strong>, the leading platform for informal FX exchanges. Endeavour to 
    read the <a href={'/dashboard/terms-and-conditions'}><strong>Term &amp; Conditions</strong></a> extremely well. 
    Please feel free to <a href={'/dashboard/exchange'}>check out</a> transactions that fit your budget.
    So glad to have you on board.
    <br />
    <br />
    yours sincerely,
    <br />
    '<strong>Xchange&trade;</strong> Team'
    </WelcomeContainer>
}

export const AcceptNotification : React.FC = ({...props}) => {
    return<></>
}

export const ContactNotification : React.FC = ({...props}) => {
    return<></>
}