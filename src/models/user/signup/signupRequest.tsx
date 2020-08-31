import {Request, IRequest} from '../../iHttpObject';
import SignupModel from './signupModel';
class SignupRequest extends Request implements IRequest{
    constructor(props: SignupModel){
        super();
        this.Model = [];
        this.Model.push(props);
        // this.Url = process.env.REACT_APP_MIDDLEWARE;
        // eslint-disable-next-line no-control-regex
        this.Method = ('/api/MobileMiddleware/Registration/RegisterIndividual').replace(/[^\x00-\xFF]/g, '');
    }
}
export default SignupRequest;