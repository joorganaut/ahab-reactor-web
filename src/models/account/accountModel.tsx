import { Model } from "../iModel";

export default class AccountModel extends Model{
    AccountNumber: string;
    ProductID: number;
    AccountBalance: number;
    CustomerID: number;
    IsGL: boolean;
    MinimumBalance: number;
    HasOverDraft: boolean;
    OverDraftLimit: number;
    OverDraftInterestRate: number;
    OverDraftTenor: number;
    DepositInterestRate: number;
    Status: string;
    DepositTenor: number;
    CurrencyID: number;
    Currency: string;
    constructor(props?: any){
        super(props);
        this.AccountNumber = props === undefined ? '' :  props.AccountNumber;
        this.ProductID = props === undefined ? 0 :  props.ProductID;
        this.AccountBalance = props === undefined ? 0 :  props.AccountBalance;
        this.CustomerID = props === undefined ? 0 :  props.CustomerID;
        this.IsGL = props === undefined ? false :  props.IsGL;
        this.MinimumBalance = props === undefined ? 0 :  props.MinimumBalance;
        this.HasOverDraft = props === undefined ? false :  props.HasOverDraft;
        this.OverDraftLimit = props === undefined ? 0 :  props.OverDraftLimit;
        this.OverDraftInterestRate = props === undefined ? 0 :  props.OverDraftInterestRate;
        this.OverDraftTenor = props === undefined ? 0 :  props.OverDraftTenor;
        this.DepositInterestRate = props === undefined ? 0 :  props.DepositInterestRate;
        this.Status = props === undefined ? '' :  props.Status;
        this.DepositTenor = props === undefined ? 0 :  props.DepositTenor;
        this.CurrencyID = props === undefined ? 0 : props.CurrencyID;
        this.Currency = props === undefined ? 'NGN' : props.Currency;
    }
}