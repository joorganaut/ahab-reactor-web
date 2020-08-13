import { ViewModel, IModelAttribute } from "../../iModel";
import LoginRequest from "./loginRequest";
import LoginResponse from "./loginResponse";

export default class LoginViewModel extends ViewModel {
    Error: IModelAttribute = { FieldName: 'Error', Type: 'label', Value: '' };
    InstitutionCode: IModelAttribute = { FieldName: "Institution Code", Type: "text", Value: 'Hello inst code' };
    Username: IModelAttribute = { FieldName: "Username", Type: "text", Value: 'hello username ' };
    Password: IModelAttribute = { FieldName: "Password", Type: "password", Value: 'hello password' };
    async SubmitAction() : Promise<LoginResponse | void>{
        let request = new LoginRequest({
            Username : this.Username.Value, 
            Password : this.Password.Value, 
            InstitutionCode : this.InstitutionCode.Value
        });

        let response: LoginResponse; 
        let res = await this.Manager().PostData(request);
        response = new LoginResponse(res);
        if (!ViewModel.IsNullOrUndefined(response)) {
            if (response.Code === '00') {
                //figure out what you want to do here
                return response;
            } else {
                this.Error.Value = response.Message + ': ' + response.Error;
            }
        } else {
            this.Error.Value = 'Null response from Middleware';
        }
    };
}