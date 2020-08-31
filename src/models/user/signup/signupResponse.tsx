import { Response, IResponse } from '../../iHttpObject';
class SignupResponse extends Response implements IResponse {
    constructor(props?: IResponse | any) {
        super(props);
        this.Error = props === undefined ? '' : props.Error;
        this.RedirectParams = {};
    }
}
export default SignupResponse;