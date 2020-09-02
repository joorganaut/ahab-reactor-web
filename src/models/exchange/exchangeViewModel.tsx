import { useContext } from 'react';
import { ViewModel, IModelAttribute } from "../iModel";
import ExchangeModel from "./exchangeModel";
import MiddlewareManager from "../../services/middlewareManager";
import UpdateExchangeRequest from "./updateExchangeRequest";
import UpdateExchangeResponse from "./updateExchangeResponse";
import AddNotificationRequest from "../notification/addNotificationRequest";
import NotificationModel from "../notification/notificationModel";
import { AppContext } from '../../services/contextManager';

export default class ExchangeViewModel extends ViewModel {
    constructor(props: ExchangeModel) {
        super(props);
        this.Error = { FieldName: 'Error', Type: 'text', Value: '' };
        this.FirstName = { FieldName: "dashboard.exchange.functions.viewDetails.fields.rate", Type: "text", Value: props.FirstName };
        this.LastName = { FieldName: "dashboard.exchange.functions.viewDetails.fields.rate", Type: "text", Value: props.LastName };
        this.Amount = { FieldName: "dashboard.exchange.functions.viewDetails.fields.amount", Type: "text", Value: props.Amount };
        this.Rate = { FieldName: "dashboard.exchange.functions.viewDetails.fields.rate", Type: "text", Value: props.Rate };
        this.ExpiryDate = {
            FieldName: "dashboard.exchange.functions.viewDetails.fields.expiryDate", Type: "text", Value: props.ExpiryDate
        };
        this.FromCurrency = {
            FieldName: "dashboard.exchange.functions.viewDetails.fields.fromCurrency", Type: "text", Value: props.FromCurrency
        };
        this.ToCurrency = {
            FieldName: "dashboard.exchange.functions.viewDetails.fields.toCurrency", Type: "text", Value: props.ToCurrency
        };
        this.Button1= { FieldName: "dashboard.exchange.functions.viewDetails.fields.buttons.button1", Type: "button", Value: this.SubmitAction, Options: { value: 'in-progress' }, VisibleIfNotAuthenticated: true }
        this.Button3 = { FieldName: "dashboard.exchange.functions.viewDetails.fields.buttons.button3", Type: "button", Value: this.SubmitAction, Options: { value: 'close' }, VisibleIfNotAuthenticated: this.GetAuthStatus(props.RequesterUserID) }

    }
    Error: IModelAttribute;
    FirstName: IModelAttribute;
    LastName: IModelAttribute;
    Amount: IModelAttribute;
    Rate: IModelAttribute;
    ExpiryDate: IModelAttribute;
    FromCurrency: IModelAttribute;
    ToCurrency: IModelAttribute;
    // Status: IModelAttribute = { FieldName: "dashboard.exchange.functions.viewDetails.fields.status", Type: "select", Value: '', Options: ['pending' , 'completed' , 'cancelled', ''] };
    Button1: IModelAttribute;
    Button3: IModelAttribute;
    GetAuthStatus = (id?: number) => {
        const context = useContext(AppContext);
        const auth = context.actions.getAuthDetails();
        const result: boolean = id === auth.Model.UserModel.ID;
        return result;
    }
    async SubmitAction(params: UpdateExchangeRequest, status?: 'in-progress' | 'cancelled' | 'completed', context?: any): Promise<UpdateExchangeResponse | void> {
        const getResponseFromStatus = (status?: 'in-progress' | 'cancelled' | 'completed') => {
            switch(status){
                case 'in-progress':{
                    return 'Accepted';
                }
                case 'cancelled':{
                    return 'Cancelled';
                }
                case 'completed':{
                    return 'Completed';
                }
            }
        }
        this.Manager = new MiddlewareManager();
        let response: UpdateExchangeResponse;
        let masterView = new ViewModel();
        try {
            let data: ExchangeModel = params.Model !== undefined ? params?.Model[0] : {}
            data.InstitutionCode = masterView.MasterCode();
            data.Status = status;
            let auth = context.actions.getAuthDetails();
            let request = new UpdateExchangeRequest(data);
            let token = await masterView.GetToken("sazeespectra@gmail.com", "string")
            if (token.Code !== '00') {
                response = new UpdateExchangeResponse();
                response.Error = token.Message;
                return response;
            }
            request.Config = {
                headers: { Authorization: `Bearer ${token.Token}` }
            }
            let res = await this.Manager.PutData(request);
            response = new UpdateExchangeResponse(res);
            if (!ViewModel.IsNullOrUndefined(response)) {
                switch (response.Code) {
                    case '00': {
                        response.Message = `Successfully ${await getResponseFromStatus(status)} the Exchange`;
                        response.Redirect = true;
                        response.RedirectPath = '/dashboard/exchange';
                        let notification = new AddNotificationRequest(new NotificationModel({
                            Title: "Transaction Accepted",
                            Sender: "Xchange Team",
                            Recipient: data.RequesterUserID,
                            Template: "approval-request",
                            Body: `Your transaction has been accepted, please {action} the acceptance to exchange contact details`,
                            Status: 'unread'
                        }));
                        notification.Config = {
                            headers: { Authorization: `Bearer ${token.Token}` }
                        }
                        let notification2 = new AddNotificationRequest(new NotificationModel({
                            Title: "Transaction Accepted",
                            Sender: "Xchange Team",
                            Recipient: auth.Model.UserModel.ID,
                            Template: "approval-request-sender",
                            Body: `You accepted a transaction, a notification has been sent to the requester, contact details would be shared up-on approval please bear with us.`,
                            Status: 'unread'
                        }));
                        notification2.Config = {
                            headers: { Authorization: `Bearer ${token.Token}` }
                        }
                        await this.Manager.PostData(notification2);
                        context.actions.refreshNotifications();
                        //TODO: Notify requester
                        break;
                    }
                    default: {
                        response.Message = 'Something terrible happened';
                        break;
                    }
                }

                return response;
            } else {
                response = new UpdateExchangeResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new UpdateExchangeResponse();
            response.Error = e.message;
            return response;
        }
    };
}