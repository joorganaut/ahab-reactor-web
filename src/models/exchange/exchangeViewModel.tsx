import { ViewModel, IModelAttribute } from "../iModel";
import ExchangeModel from "./exchangeModel";
import MiddlewareManager from "../../services/middlewareManager";
import UpdateExchangeRequest from "./updateExchangeRequest";
import UpdateExchangeResponse from "./updateExchangeResponse";
import { stat } from "fs";

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
        this.Button1= { FieldName: "dashboard.exchange.functions.viewDetails.fields.buttons.button1", Type: "button", Value: this.SubmitAction, Options: { value: 'in-progress' } }
        this.Button2 = { FieldName: "dashboard.exchange.functions.viewDetails.fields.buttons.button2", Type: "button", Value: this.SubmitAction, Options: { value: 'cancelled' } }

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
    Button2: IModelAttribute;
    
    async SubmitAction(params: UpdateExchangeRequest, status?: 'in-progress' | 'cancelled' | 'completed'): Promise<UpdateExchangeResponse | void> {
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