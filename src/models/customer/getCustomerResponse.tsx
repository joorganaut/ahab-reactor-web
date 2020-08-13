import { Response } from '../iHttpObject';
import CustomerModel from './customerModel';
class GetCustomerResponse extends Response{
    CustomerModel: CustomerModel;
    constructor(props: any){
        super(props);
        this.CustomerModel = props === undefined ? new CustomerModel() : props.CustomerModel;
    }
}
export default GetCustomerResponse;