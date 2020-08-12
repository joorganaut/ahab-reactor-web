import {Request, IRequest} from '../iHttpObject'
import CustomerModel from './customerModel';
class AddCustomerRequest extends Request implements IRequest{
    constructor(props: CustomerModel){
        super();
        this.Model = [];
        this.Model.push(props);
        this.Url = process.env.REACT_APP_MIDDLEWARE;
        this.Method = '/Customer';
    }
}
export default AddCustomerRequest;