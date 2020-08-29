import { Model } from "../iModel";

export default class NotificationModel extends Model{
    Title?: string;
    Sender?: string;
    Recipient?: string;
    Body?: string;
    Template?: string;
    Status?: 'read' | 'unread' | 'deleted';
    constructor(props?: any){
        super(props);
        this.Title = props === undefined ? '' :  props.Title;
        this.Sender = props === undefined ? '' :  props.Sender;
        this.Recipient = props === undefined ? '' : props.Recipient;
        this.Body = props === undefined ? '' :  props.Body;
        this.Template = props === undefined ? '' :  props.Template;
        this.Status = props === undefined ? 'unread' :  props.Status;
    }
}