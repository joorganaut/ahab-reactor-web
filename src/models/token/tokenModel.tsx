import { Model } from "../iModel";
/*{
  "Username": "string",
  "Password": "string",
  "InstitutionCode": "string"
}
*/

export default class TokenModel extends Model{
    Username?: string;
    Password?: string;
    constructor(props?: any){
        super(props);
        this.Username = props === undefined ? 0 :  props.Username;
        this.Password = props === undefined ? 0 :  props.Password;
    }
}