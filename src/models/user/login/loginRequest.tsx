import {Request, IRequest} from '../../iHttpObject'
import LoginModel from './loginModel';
class LoginRequest extends Request implements IRequest{
    constructor(props: LoginModel){
        super();
        this.Model = [];
        this.Model.push(props);
        // this.Url = process.env.REACT_APP_MIDDLEWARE;
        // eslint-disable-next-line no-control-regex
        this.Method = ('/api​/MobileMiddleware​/Authentication​/Login').replace(/[^\x00-\xFF]/g, '');
    }
}
export default LoginRequest;