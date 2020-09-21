import React, {useEffect, useState, useCallback} from 'react';
import {WelcomeContainer} from './styled';
import { CallDialog, Contact } from '../../common/callDialog';
import UserViewModel from '../../../models/user/management/userViewModel';
import UserModel from '../../../models/user/userModel';
import GetUserRequest from '../../../models/user/management/getUserRequest';
import NotificationModel from '../../../models/notification/notificationModel';
import ExchangeViewModel from '../../../models/exchange/exchangeViewModel';
import ExchangeModel from '../../../models/exchange/exchangeModel';
import ViewExchangeRequest from '../../../models/exchange/viewExchangeRequest';
import GetUserResponse from '../../../models/user/management/getUserResponse';
import { CallIcon } from '../../common/callDialog/callIcon';

interface NotificationProps{
    name?: string
    model?: NotificationModel,
    ID?: number,
    ReceiverID?: number
}
export const WelcomeNotification : React.FC<NotificationProps> = ({...props}) => {
    return<WelcomeContainer>
    Hi {props.name},
    <br/>
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

export const AcceptNotification : React.FC<NotificationProps> = ({...props}) => {
    const [open, setOpen] = useState(false)
    const [contact, setContact] = useState<Contact>()
    const dialogOpen = () => {
        setOpen(true)
    }
    const dialogClose = () => {
        setOpen(false)
    }
    const getCallButton = () => {
        if(props.model?.Template === 'approval-request'){
            return <CallIcon onClick={dialogOpen}/>
        }
    }
    const GetUser = useCallback( async () => {
        switch(props.model?.TransactionType){
            case 'Xchange':{
                const xchangeResponse = await new ExchangeViewModel(new ExchangeModel()).GetAction(new ViewExchangeRequest({
                    ID: props.model?.TransactionID
                }));
                if(xchangeResponse.Code === '00'){
                    const xModel = new ExchangeModel(xchangeResponse.Model);
                    const response: GetUserResponse = await new UserViewModel(new UserModel()).SubmitAction(new GetUserRequest({
                        ID: xModel?.AccepterUserID
                    }))
                    if(response.Code === '00'){
                        const model = new UserModel(response.Model)
                        const receipientContact = {
                            firstName: model.FirstName,
                            lastName: model.LastName,
                            email: model.Email,
                            phone: model.PhoneNumber,
                            id: model.ID? model.ID.toString() : ''
                        }
                        setContact(receipientContact)
                    }
                }
                break
            }
            case 'Airtime':{
                break
            }
            default:{
                break
            }
        }
    }, [props.model])

    useEffect(() => {
        GetUser()
    }, [GetUser])

    return<WelcomeContainer>
    Hi {props.name},
    <br/>
    {props.model?.Body}.
    {getCallButton()}
    <CallDialog open={open} handleClose={dialogClose} contact={contact}/>
    <br />
    <br />
    yours sincerely,
    <br />
    '<strong>Xchange&trade;</strong> Team'
    </WelcomeContainer>
}

export const ContactNotification : React.FC = ({...props}) => {
    return<></>
}
export const AddTransactionNotification : React.FC<NotificationProps> = ({...props}) => {
    return<WelcomeContainer>
    Hi {props.name},
    <br/>
    {props.model?.Body}.
    <br />
    <br />
    yours sincerely,
    <br />
    '<strong>Xchange&trade;</strong> Team'
    </WelcomeContainer>
}