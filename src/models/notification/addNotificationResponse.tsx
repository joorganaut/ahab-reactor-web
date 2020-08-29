import {Response, IResponse} from '../iHttpObject'
import NotificationModel from './notificationModel';
class AddNotificationResponse extends Response implements IResponse{
    NotificationModel: NotificationModel;
    constructor(props?: IResponse | any ){
        super(props);
        this.NotificationModel = props === undefined ? new NotificationModel() : props.NotificationModel;
        this.Error = props === undefined ? '' : props.Error;
        this.RedirectParams = {
            Model : this.NotificationModel
        };
    }
}
export default AddNotificationResponse;