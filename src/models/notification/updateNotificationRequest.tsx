import {Request, IRequest} from '../iHttpObject'
import NotificationModel from './notificationModel';
class UpdateNotificationRequest extends Request implements IRequest{
    constructor(props: NotificationModel){
        super();
        this.Model = [];
        this.Model.push(props);
        // this.Url = process.env.REACT_APP_MIDDLEWARE;
        // eslint-disable-next-line no-control-regex
        this.Method = ('/api/notification').replace(/[^\x00-\xFF]/g, '');
    }
}
export default UpdateNotificationRequest;