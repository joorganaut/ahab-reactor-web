import { ViewModel, IModelAttribute } from "../../iModel";
import LoginRequest from "./loginRequest";
import LoginResponse from "./loginResponse";
import LoginModel from "./loginModel";
import MiddlewareManager from "../../../services/middlewareManager";
import ContextManager, { AppContext } from "../../../services/contextManager";

export default class LoginViewModel extends ViewModel {
    constructor(model: LoginModel) {
        super()
        this.Model = model;
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    // InstitutionCode: IModelAttribute = { FieldName: "auth.labels.institution", Type: "text", Value: '202062418221' };
    LoginUsername: IModelAttribute = { FieldName: "auth.labels.email", Type: "text", Value: '' };
    Password: IModelAttribute = { FieldName: "auth.labels.password", Type: "password", Value: '' };
    Button: IModelAttribute = { FieldName: "auth.signIn", Type: "button", Value: this.SubmitAction }
    async SubmitAction(params: LoginRequest, context?: any): Promise<LoginResponse | void> {
        this.Manager = new MiddlewareManager();
        let response: LoginResponse;
        try {
            let data: LoginModel = params.Model !== undefined ? params?.Model[0] : {}
            data.InstitutionCode = '202062418221';
            let request = new LoginRequest(data);
            console.log(JSON.stringify(request))
            let res = await this.Manager.PostData(request);
            response = new LoginResponse(res);
            if (!ViewModel.IsNullOrUndefined(response)) {
                switch (response.Code) {
                    case '00': {
                        context.actions.setAuthDetails(response.UserModel.ID?.toString()?? '', response.RedirectParams);
                        const test = context.actions.getAuthDetails();
                        response.Message = 'Welcome';
                        response.Redirect = true;
                        response.RedirectPath = '/dashboard';
                        break;
                    }
                    case 'AE': {
                        response.Message = 'Invalid Login Credentials';
                        break;
                    }
                    default: {
                        response.Message = 'Something terrible happened';
                        break;
                    }
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