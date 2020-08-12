import {Request} from '../IHttpObject'
class GetCustomerRequest extends Request{
    constructor(id?: number){
        super();
        this.Model = [];
        this.Model.push({ID : id});
        this.Url = process.env.REACT_APP_MIDDLEWARE;
        this.Method = '/Customer/:'+id;
    }
}
export default GetCustomerRequest;