import { Model } from "../iModel";

export default class NotificationModel extends Model{
    Title?: string;
    Sender?: string;
    Recipient?: string;
    Body?: string;
    Template?: 'welcome' | 'add-xchange' | 'approval-request-sender'  | 'approval-request' | 'cancel' | 'general' |  'approval-response' | 'contact-details' | null;
    Status?: 'read' | 'unread' | 'deleted';
    TransactionType?: string;
    TransactionID?: number;
    constructor(props?: any){
        super(props);
        this.Title = props === undefined ? '' :  props.Title;
        this.Sender = props === undefined ? '' :  props.Sender;
        this.Recipient = props === undefined ? '' : props.Recipient;
        this.Body = props === undefined ? '' :  props.Body;
        this.Template = props === undefined ? null :  props.Template;
        this.Status = props === undefined ? 'unread' :  props.Status;
        this.TransactionType = props === undefined ? '' :  props.TransactionType;
        this.TransactionID = props === undefined ? 0 :  props.TransactionID;
    }
}