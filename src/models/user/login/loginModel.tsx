import { Model } from "../../iModel"

export default class LoginModel extends Model{
    LoginUsername?: string;
    Password?: string;
    constructor(model?: any){
        super(model);
        this.LoginUsername = model === undefined ? '' : model.FirstName;
        this.Password = model === undefined ? '' : model.LastName;
    }
}