import { ViewModel, IModelAttribute } from "../../iModel";
import SignupRequest from "./signupRequest";
import SignupResponse from "./signupResponse";
import SignupModel from "./signupModel";
import MiddlewareManager from "../../../services/middlewareManager";

export default class SignupViewModel extends ViewModel {
    constructor(model: SignupModel) {
        super()
        this.Model = model;
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    // InstitutionCode: IModelAttribute = { FieldName: "auth.labels.institution", Type: "text", Value: '202062418221' };
    SignupUsername: IModelAttribute = { FieldName: "auth.labels.email", Type: "text", Value: '' };
    FirstName: IModelAttribute = { FieldName: "First Name", Type: "text", Value: '' };
    LastName: IModelAttribute = { FieldName: "Last Name", Type: "text", Value: '' };
    PhoneNumber: IModelAttribute = { FieldName: "Phone Number", Type: "text", Value: '' };
    Password: IModelAttribute = { FieldName: "auth.labels.password", Type: "password", Value: '' };
    PasswordRepeat: IModelAttribute = { FieldName: "Password Confirm", Type: "password", Value: '' };
    // DateOfBirth: IModelAttribute = { FieldName: "Date of Birth", Type: "date", Value: '' };
    Button: IModelAttribute = { FieldName: "auth.signUp", Type: "button", Value: this.SubmitAction }
    async SubmitAction(params: SignupRequest, context?: any): Promise<SignupResponse | void> {
        this.Manager = new MiddlewareManager();
        let response: SignupResponse;
        try {
            //TODO: Perform field validation 
            let data: SignupModel = params.Model !== undefined ? params?.Model[0] : {}
            data.InstitutionCode = '202062418221';
            let request = new SignupRequest(data);
            console.log(JSON.stringify(request))
            let res = await this.Manager.PostData(request);
            response = new SignupResponse(res);
            if (!ViewModel.IsNullOrUndefined(response)) {
                switch (response.Code) {
                    case '00': {
                        response.Message = 'Thank you for Signing up';
                        response.Redirect = true;
                        response.RedirectPath = '/';
                        break;
                    }
                    case 'AE': {
                        response.Message = 'Invalid Signup Details';
                        break;
                    }
                    default: {
                        response.Message = 'Something terrible happened';
                        break;
                    }
                }

                return response;
            } else {
                response = new SignupResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new SignupResponse();
            response.Error = e.message;
            return response;
        }
    };
}