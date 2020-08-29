import { ViewModel, IModelAttribute } from "../iModel";
import AddNotificationRequest from "./addNotificationRequest";
import AddNotificationResponse from "./addNotificationResponse";
import NotificationModel from "./NotificationModel";
import MiddlewareManager from "../../services/middlewareManager";

export default class AddNotificationViewModel extends ViewModel {
    constructor() {
        super()
        this.Model = new NotificationModel({
            Title: this.Title.Value,
            Sender: this.Sender.Value,
            Recipient: this.Recipient.Value,
            Body: this.Body.Value,
            Status: this.Status.Value
        });
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    Title: IModelAttribute = { FieldName: "dashboard.Notification.functions.add.fields.amount", Type: "text", Value: 0 };
    Sender: IModelAttribute = { FieldName: "dashboard.Notification.functions.add.fields.rate", Type: "text", Value: 0 };
    Recipient: IModelAttribute = { FieldName: "dashboard.Notification.functions.add.fields.rate", Type: "text", Value: 0 };
    Body: IModelAttribute = { FieldName: "dashboard.Notification.functions.add.fields.rate", Type: "text", Value: 0 };
    Status: IModelAttribute = { FieldName: "dashboard.Notification.functions.add.fields.status", Type: "text", Value: '', Options: ['read' , 'unread' , 'deleted'] };
    Button: IModelAttribute = { FieldName: "dashboard.Notification.functions.add.fields.buttons.button1", Type: "button", Value: this.SubmitAction }
    async SubmitAction(params: AddNotificationRequest): Promise<AddNotificationResponse | void> {
        this.Manager = new MiddlewareManager();
        let response: AddNotificationResponse;
        let masterView = new ViewModel();
        try {
            let data: NotificationModel = params.Model !== undefined ? params?.Model[0] : {}
            data.InstitutionCode = masterView.MasterCode();
            data.Status = 'unread';
            let request = new AddNotificationRequest(data);
            let token = await masterView.GetToken("sazeespectra@gmail.com", "string")
            if (token.Code !== '00') {
                response = new AddNotificationResponse();
                response.Error = token.Message;
                return response;
            }
            request.Config = {
                headers: { Authorization: `Bearer ${token.Token}` }
            }
            let res = await this.Manager.PostData(request);
            response = new AddNotificationResponse(res);
            if (!ViewModel.IsNullOrUndefined(response)) {
                switch (response.Code) {
                    case '00': {
                        response.Message = 'Notification Successful';
                        response.Redirect = true;
                        response.RedirectPath = '/dashboard/Notification';
                        break;
                    }
                    default: {
                        // TODO: remember to uncomment
                        //response.Message = 'Something terrible happened';
                        break;
                    }
                }

                return response;
            } else {
                response = new AddNotificationResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new AddNotificationResponse();
            response.Error = e.message;
            return response;
        }
    };
}