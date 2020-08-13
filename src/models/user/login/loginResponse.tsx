import {Response, IResponse} from '../../iHttpObject'
import InstitutionModel from '../../institution/institutionModel';
import UserModel from '../userModel';
import CustomerModel from '../../customer/customerModel';
import AccountModel from '../../account/accountModel';
class LoginResponse extends Response implements IResponse{
    IsAuthenticated: boolean;
    InstitutionModel: InstitutionModel;
    UserModel: UserModel;
    CustomerModel: CustomerModel;
    AccountModels: AccountModel[];
    constructor(props?: IResponse | any ){
        super(props);
        this.IsAuthenticated = props === undefined ? false : props.IsAuthenticated;
        this.InstitutionModel = props === undefined ? new InstitutionModel() : props.InstitutionModel;
        this.UserModel = props === undefined ? new UserModel() : props.UserModel;
        this.CustomerModel = props === undefined ? new CustomerModel() : props.CustomerModel;
        this.AccountModels = props === undefined ? [] : props.AccountModels;
        this.Error = props === undefined ? '' : props.Error;
    }
}
export default LoginResponse;