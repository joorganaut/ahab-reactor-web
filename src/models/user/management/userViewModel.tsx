import { ViewModel, IModelAttribute } from "../../iModel";
import UserModel from "./../userModel";
import MiddlewareManager from "../../../services/middlewareManager";
import GetUserRequest from "./getUserRequest";
import GetUserResponse from "./getUserResponse";

export default class UserViewModel extends ViewModel {
    constructor(props: UserModel) {
        super(props);
        this.Error = { FieldName: 'Error', Type: 'text', Value: '' };
    }
    Error: IModelAttribute;
    // Status: IModelAttribute = { FieldName: "dashboard.Notification.functions.viewDetails.fields.status", Type: "select", Value: '', Options: ['pending' , 'completed' , 'cancelled', ''] };
    
    
    async SubmitAction(params: GetUserRequest): Promise<GetUserResponse> {
        
        this.Manager = new MiddlewareManager();
        let response: GetUserResponse;
        let masterView = new ViewModel();
        try {
            params.InstitutionCode = masterView.MasterCode();
            let token = await masterView.GetToken("sazeespectra@gmail.com", "string")
            if (token.Code !== '00') {
                response = new GetUserResponse();
                response.Error = token.Message;
                return response;
            }
            params.Config = {
                headers: { Authorization: `Bearer ${token.Token}` }
            }
            let res = await this.Manager.GetSingleData(params);
            response = new GetUserResponse(res);
            if (!ViewModel.IsNullOrUndefined(response)) {
                if (response.Code === '00') {
                    response.Message = `Successful`;
                    response.Redirect = false;
                }

                return response;
            } else {
                response = new GetUserResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new GetUserResponse();
            response.Error = e.message;
            return response;
        }
        return response;
    }
}