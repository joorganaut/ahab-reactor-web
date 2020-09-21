import {Response, IResponse} from '../../iHttpObject'
import UserModel from './../userModel';
class GetUserResponse extends Response implements IResponse{
    UserModel: UserModel;
    constructor(props?: IResponse | any ){
        super(props);
        this.UserModel = props === undefined ? new UserModel() : props.UserModel;
        this.Error = props === undefined ? '' : props.Error;
        this.RedirectParams = {
            Model : this.UserModel
        };
    }
}
export default GetUserResponse;