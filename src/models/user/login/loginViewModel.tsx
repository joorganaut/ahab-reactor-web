import { ViewModel, IModelAttribute } from "../../iModel";
import LoginRequest from "./loginRequest";
import LoginResponse from "./loginResponse";
import { IRequest } from "../../iHttpObject";
import LoginModel from "./loginModel";
import MiddlewareManager from "../../../services/middlewareManager";

export default class LoginViewModel extends ViewModel {
    constructor(model: LoginModel){
        super()
        this.Model = model;
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    InstitutionCode: IModelAttribute = { FieldName: "Institution Code", Type: "text", Value: '' };
    LoginUsername: IModelAttribute = { FieldName: "Username", Type: "text", Value: '' };
    Password: IModelAttribute = { FieldName: "Password", Type: "password", Value: '' };
    Button: IModelAttribute = { FieldName: "Submit", Type: "button", Value: this.SubmitAction }
    async SubmitAction(params: LoginRequest): Promise<LoginResponse | void> {
        this.Manager = new MiddlewareManager();
        let response: LoginResponse;
        try {
            let data: LoginModel = params.Model !== undefined ? params?.Model[0] : {}
            let request = new LoginRequest(data);
            let res = await this.Manager.PostData(request);
            response = new LoginResponse(res);
            if (!ViewModel.IsNullOrUndefined(response)) {
                if(response.Code === '00'){
                    response.Redirect = true;
                    response.RedirectPath = '/dashboard';
                }
               return response;
            } else {
                response = new LoginResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new LoginResponse();
            response.Error = e.message;
            return response;
        }
    };
}