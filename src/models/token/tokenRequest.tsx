import {Request, IRequest} from '../iHttpObject'
import TokenModel from './tokenModel';
class TokenRequest extends Request implements IRequest{
    constructor(props: TokenModel){
        super();
        this.Model = [];
        this.Model.push(props);
        // this.Url = process.env.REACT_APP_MIDDLEWARE;
        // eslint-disable-next-line no-control-regex
        this.Method = ('/authenticate/token').replace(/[^\x00-\xFF]/g, '');
    }
}
export default TokenRequest;