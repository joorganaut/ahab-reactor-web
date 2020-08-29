import { ViewModel, IModelAttribute } from "../iModel";
import NotificationModel from "./NotificationModel";
import MiddlewareManager from "../../services/middlewareManager";
import UpdateNotificationRequest from "./updateNotificationRequest";
import UpdateNotificationResponse from "./updateNotificationResponse";

export default class NotificationViewModel extends ViewModel {
    constructor(props: NotificationModel) {
        super(props);
        this.Error = { FieldName: 'Error', Type: 'text', Value: '' };
        
        this.Button1= { FieldName: "dashboard.Notification.functions.viewDetails.fields.buttons.button1", Type: "button", Value: this.SubmitAction, Options: { value: 'in-progress' } }
        this.Button2 = { FieldName: "dashboard.Notification.functions.viewDetails.fields.buttons.button2", Type: "button", Value: this.SubmitAction, Options: { value: 'cancelled' } }

    }
    Error: IModelAttribute;
    // Status: IModelAttribute = { FieldName: "dashboard.Notification.functions.viewDetails.fields.status", Type: "select", Value: '', Options: ['pending' , 'completed' , 'cancelled', ''] };
    Button1: IModelAttribute;
    Button2: IModelAttribute;
    
    async SubmitAction(params: UpdateNotificationRequest, status?: 'read' | 'unread' | 'deleted'): Promise<UpdateNotificationResponse | void> {
        const getResponseFromStatus = (status?: 'read' | 'unread' | 'deleted') => {
            switch(status){
                case 'read':{
                    return 'Accepted';
                }
                case 'unread':{
                    return 'Cancelled';
                }
                case 'deleted':{
                    return 'Completed';
                }
            }
        }
        this.Manager = new MiddlewareManager();
        let response: UpdateNotificationResponse;
        let masterView = new ViewModel();
        try {
            let data: NotificationModel = params.Model !== undefined ? params?.Model[0] : {}
            data.InstitutionCode = masterView.MasterCode();
            data.Status = status;
            let request = new UpdateNotificationRequest(data);
            let token = await masterView.GetToken("sazeespectra@gmail.com", "string")
            if (token.Code !== '00') {
                response = new UpdateNotificationResponse();
                response.Error = token.Message;
                return response;
            }
            request.Config = {
                headers: { Authorization: `Bearer ${token.Token}` }
            }
            let res = await this.Manager.PutData(request);
            response = new UpdateNotificationResponse(res);
            if (!ViewModel.IsNullOrUndefined(response)) {
                switch (response.Code) {
                    case '00': {
                        response.Message = `Successfully ${await getResponseFromStatus(status)} the Notification`;
                        response.Redirect = true;
                        response.RedirectPath = '/dashboard/Notification';
                        break;
                    }
                    default: {
                        response.Message = 'Something terrible happened';
                        break;
                    }
                }

                return response;
            } else {
                response = new UpdateNotificationResponse();
                response.Error = 'Null response from Middleware';
            }
        } catch (e) {
            response = new UpdateNotificationResponse();
            response.Error = e.message;
            return response;
        }
    };
}