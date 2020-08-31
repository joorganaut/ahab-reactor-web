import { Model } from "../../iModel"

export default class SignupModel extends Model{
    SignupUsername?: string;
    FirstName?: string;
    LastName?: string;
    OtherName?: string;
    DateOfBirth?: Date;
    Password?: string;
    PasswordRepeat?: string;
    PhoneNumber?: string;
    Email?: string;

    constructor(model?: any){
        super(model);
        this.SignupUsername = model === undefined ? '' : model.SignupUsername;
        this.Password = model === undefined ? '' : model.Password;
        this.PasswordRepeat = model === undefined ? '' : model.PasswordRepeat;
        this.FirstName = model === undefined ? '' : model.FirstName;
        this.LastName = model === undefined ? '' : model.LastName;
        this.OtherName = model === undefined ? '' : model.OtherName;
        this.DateOfBirth = model === undefined ? new Date() : model.DateOfBirth;
        this.PhoneNumber = model === undefined ? '' : model.PhoneNumber;
        this.Email = model === undefined ? '' : model.Email;
    }
}