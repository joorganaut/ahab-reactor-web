import { Model } from "../../iModel"

export default class LoginModel extends Model{
    LoginUsername?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    constructor(model?: any){
        super(model);
        this.LoginUsername = model === undefined ? '' : model.LoginUsername;
        this.Password = model === undefined ? '' : model.Password;
        this.FirstName = model === undefined ? '' : model.FirstName;
        this.LastName = model === undefined ? '' : model.LastName;
    }
}