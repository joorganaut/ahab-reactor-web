import { Model } from "../iModel";

export default class UserModel extends Model{
    Username: string;
    ProfileImage: string;
    FirstName: string;
    LastName: string;
    Password: string;
    TransactionPin: string;
    ForcePasswordChange: boolean;
    ForcePinChange: string;
    DateOfBirth: Date;
    Email: string;
    IsAuthenticated: boolean;
    LastLoginDate: Date;
    NumberOfFailedAttempts: number;
    PhoneNumber: string;
    constructor(props?: any){
        super(props);
        this.ID =  props === undefined ? 0 : props.ID;
        this.Username =  props === undefined ? '' : props.Username;
        this.ProfileImage =  props === undefined ? '' : props.ProfileImage;
        this.FirstName =  props === undefined ? '' : props.FirstName;
        this.LastName =  props === undefined ? '' : props.LastName;
        this.Password =  props === undefined ? '' : props.Password;
        this.TransactionPin = props === undefined ? '' :  props.TransactionPin;
        this.ForcePasswordChange = props === undefined ? false :  props.ForcePasswordChange;
        this.ForcePinChange = props === undefined ? false :  props.ForcePinChange;
        this.DateOfBirth = props === undefined ? new Date() :  props.DateOfBirth;
        this.Email = props === undefined ? '' :  props.Email;
        this.IsAuthenticated = props === undefined ? false :  props.IsAuthenticated;
        this.LastLoginDate = props === undefined ? new Date() :  props.LastLoginDate;
        this.NumberOfFailedAttempts = props === undefined ? 0 :  props.NumberOfFailedAttempts;
        this.PhoneNumber = props === undefined ? '' :  props.PhoneNumber;
    }
}