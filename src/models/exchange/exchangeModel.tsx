import { Model } from "../iModel";

export default class ExchangeModel extends Model{
    RequesterUserID?: number;
    AccepterUserID?: number;
    FirstName?: string;
    LastName?: string;
    Amount?: number;
    Rate?: number;
    FromCurrency?: string;
    ToCurrency?: string;
    Status?: 'pending' | 'in-progress' | 'completed' | 'cancelled' | 'expired';
    PhoneNumber?: string;
    Email?: string;
    ExpiryDate?: Date;
    constructor(props?: any){
        super(props);
        this.RequesterUserID = props === undefined ? 0 :  props.RequesterUserID;
        this.AccepterUserID = props === undefined ? 0 :  props.AccepterUserID;
        this.Amount = props === undefined ? 0 :  props.Amount;
        this.Rate = props === undefined ? 0 : props.Rate;
        this.FirstName = props === undefined ? '' :  props.FirstName;
        this.LastName = props === undefined ? '' :  props.LastName;
        this.PhoneNumber = props === undefined ? '' :  props.PhoneNumber;
        this.Email = props === undefined ? '' :  props.Email;
        this.FromCurrency = props === undefined ? '' :  props.FromCurrency;
        this.ToCurrency = props === undefined ? '' :  props.ToCurrency;
        this.Status = props === undefined ? 'pending' :  props.Status;
        this.ExpiryDate = props === undefined ? new Date() : props.ExpiryDate;
    }
}