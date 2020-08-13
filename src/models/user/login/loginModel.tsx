import { Model } from "../../iModel"

export default class LoginModel extends Model{
    Username: string;
    Password: string;
    constructor(model?: any){
        super(model);
        this.Username = model === undefined ? '' : model.FirstName;
        this.Password = model === undefined ? '' : model.LastName;
    }
}