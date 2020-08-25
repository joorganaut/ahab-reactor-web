import { ViewModel, IModelAttribute } from "../iModel";
import AllExchangesRequest from "./allExchangesRequest";
import AllExchangesResponse from "./allExchangesResponse";
import ExchangeModel from "./exchangeModel";
import MiddlewareManager from "../../services/middlewareManager";
const datePlus = (days?: number) => {
    let result = new Date();
    result.setDate(new Date().getDate() + (days ? days : 1))
    return result.toISOString().split('T')[0]
}
export default class AllExchangesViewModel extends ViewModel {
    Records: ExchangeModel[] = [];
    constructor(props: AllExchangesRequest) {
        super()
        // this.SubmitAction(props).then((r)=>{
        //     r.Model?.forEach(element=>{
        //         this.Records.push(element);
        //     })
        // });
        
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
    Button: IModelAttribute = { FieldName: "dashboard.exchange.functions.viewDetails.fields.button", Type: "button", Value: this.SubmitAction }
    async SubmitAction(params: AllExchangesRequest): Promise<AllExchangesResponse> {
        this.Manager = new MiddlewareManager();
        let response: AllExchangesResponse;
        let masterView = new ViewModel();
        try {
            let token = await masterView.GetToken("sazeespectra@gmail.com", "string")
            if (token.Code !== '00') {
                response = new AllExchangesResponse();
                response.Error = token.Message;
                return response;
            }
            params.Config = {
                headers: { Authorization: `Bearer ${token.Token}` }
            }
            let res = await this.Manager.GetData(params);
            if (!ViewModel.IsNullOrUndefined(res)) {
                response = new AllExchangesResponse(res);
                switch (response.Code) {
                    case '00': {
                        response.Redirect = true;
                        response.RedirectPath = '/dashboard/exchange';
                        break;
                    }
                    default: {
                        //response.Message = 'Something terrible happened';
                        break;
                    }
                }

                return response;
            } else {
                response = new AllExchangesResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new AllExchangesResponse();
            response.Error = e.message;
            return response;
        }
        return response;
    };
}