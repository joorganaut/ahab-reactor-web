import { ViewModel, IModelAttribute } from "../iModel";
import AllNotificationsRequest from "./allNotificationsRequest";
import AllNotificationsResponse from "./allNotificationsResponse";
import NotificationModel from "./notificationModel";
import MiddlewareManager from "../../services/middlewareManager";

export default class AllNotificationsViewModel extends ViewModel {
    Records: NotificationModel[] = [];
    constructor(props: AllNotificationsRequest) {
        super()
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    async SubmitAction(params: AllNotificationsRequest): Promise<AllNotificationsResponse> {
        this.Manager = new MiddlewareManager();
        let response: AllNotificationsResponse;
        let masterView = new ViewModel();
        try {
            let token = await masterView.GetToken("sazeespectra@gmail.com", "string")
            if (token.Code !== '00') {
                response = new AllNotificationsResponse();
                response.Error = token.Message;
                return response;
            }
            params.Config = {
                headers: { Authorization: `Bearer ${token.Token}` }
            }
            let res = await this.Manager.GetData(params);
            if (!ViewModel.IsNullOrUndefined(res)) {
                response = new AllNotificationsResponse(res);
                switch (response.Code) {
                    case '00': {
                        response.Redirect = true;
                        response.RedirectPath = '/dashboard/messages';
                        break;
                    }
                    default: {
                        //response.Message = 'Something terrible happened';
                        break;
                    }
                }

                return response;
            } else {
                response = new AllNotificationsResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new AllNotificationsResponse();
            response.Error = e.message;
            return response;
        }
        return response;
    };
}