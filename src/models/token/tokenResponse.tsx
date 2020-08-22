import {Response, IResponse} from '../iHttpObject';
/*{
  "Token": "string",
  "Expiry": "string",
  "Code": "string",
  "Message": "string",
  "Error": "string"
}
*/
class TokenResponse extends Response implements IResponse{
    Token: string;
    Expiry: string;
    constructor(props?: IResponse | any ){
        super(props);
        this.Token = props === undefined ? '' : props.Token;
        this.Expiry = props === undefined ? '' : props.Expiry;
    }
}
export default TokenResponse;