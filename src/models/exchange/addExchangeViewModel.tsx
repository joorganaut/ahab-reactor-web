import { ViewModel, IModelAttribute } from "../iModel";
import AddExchangeRequest from "./addExchangeRequest";
import AddExchangeResponse from "./addExchangeResponse";
import ExchangeModel from "./exchangeModel";
import MiddlewareManager from "../../services/middlewareManager";
import AddNotificationRequest from "../notification/addNotificationRequest";
import NotificationModel from "../notification/notificationModel";
const datePlus = (days?: number) => {
    let result = new Date();
    result.setDate(new Date().getDate() + (days ? days : 1))
    return result.toISOString().split('T')[0]
}
export default class AddExchangeViewModel extends ViewModel {
    constructor() {
        super()
        this.Model = new ExchangeModel({
            Amount: this.Amount.Value,
            Rate: this.Rate.Value,
            ExpiryDate: this.ExpiryDate.Value,
            FromCurrency: this.FromCurrency.Value,
            ToCurrency: this.ToCurrency.Value
        });
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    Amount: IModelAttribute = { FieldName: "dashboard.exchange.functions.viewDetails.fields.amount", Type: "number", Value: 0 };
    Rate: IModelAttribute = { FieldName: "dashboard.exchange.functions.viewDetails.fields.rate", Type: "number", Value: 0 };
    ExpiryDate: IModelAttribute = {
        FieldName: "dashboard.exchange.functions.viewDetails.fields.expiryDate", Type: "date", Value: datePlus(),
        Min: datePlus(),
        Max: datePlus(100)
    };
    FromCurrency: IModelAttribute = {
        FieldName: "dashboard.exchange.functions.viewDetails.fields.fromCurrency", Type: "select", Value: '',
        Options: [{ key: 'ngn', value: 'ngn' }, { key: 'cad', value: 'cad' }, { key: 'usd', value: 'usd' }]
    };
    ToCurrency: IModelAttribute = {
        FieldName: "dashboard.exchange.functions.viewDetails.fields.toCurrency", Type: "select", Value: '',
        Options: [{ key: 'ngn', value: 'ngn' }, { key: 'cad', value: 'cad' }, { key: 'usd', value: 'usd' }]
    };
    // Status: IModelAttribute = { FieldName: "dashboard.exchange.functions.viewDetails.fields.status", Type: "select", Value: '', Options: ['pending' , 'completed' , 'cancelled'] };
    Button: IModelAttribute = { FieldName: "dashboard.exchange.functions.add.fields.buttons.button1", Type: "button", Value: this.SubmitAction }
    async SubmitAction(params: AddExchangeRequest, context?: any): Promise<AddExchangeResponse | void> {
        this.Manager = new MiddlewareManager();
        let response: AddExchangeResponse;
        let masterView = new ViewModel();
        try {
            let data: ExchangeModel = params.Model !== undefined ? params?.Model[0] : {}
            data.InstitutionCode = masterView.MasterCode();
            data.Status = 'pending';
            let auth = context.actions.getAuthDetails();
            data.RequesterUserID = auth.Model.UserModel.ID;
            let request = new AddExchangeRequest(data);
            let token = await masterView.GetToken("sazeespectra@gmail.com", "string")
            if (token.Code !== '00') {
                response = new AddExchangeResponse();
                response.Error = token.Message;
                return response;
            }
            request.Config = {
                headers: { Authorization: `Bearer ${token.Token}` }
            }
            let res = await this.Manager.PostData(request);
            response = new AddExchangeResponse(res);
            if (!ViewModel.IsNullOrUndefined(response)) {
                switch (response.Code) {
                    case '00': {
                        //notify user
                        response.Message = 'Transaction Successful,\n TransactionRef: ' + response.TransactionRef;
                        response.Redirect = true;
                        response.RedirectPath = '/dashboard/exchange';
                        let notification = new AddNotificationRequest(new NotificationModel({
                            Title: "Transaction Successful",
                            Sender: "Xchange Team",
                            Recipient: auth.Model.UserModel.ID,
                            Template: "add-xchange",
                            Body: `Your request has been logged with transaction reference: "${response.TransactionRef}"`,
                            Status: 'unread'
                        }));
                        notification.Config = {
                            headers: { Authorization: `Bearer ${token.Token}` }
                        }
                        await this.Manager.PostData(notification);
                        context.actions.refreshNotifications();
                        break;
                    }
                    default: {
                        //response.Message = 'Something terrible happened';
                        break;
                    }
                }

                return response;
            } else {
                response = new AddExchangeResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new AddExchangeResponse();
            response.Error = e.message;
            return response;
        }
    };
}