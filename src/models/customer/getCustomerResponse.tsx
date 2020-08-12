import {Response} from '../iHttpObject'
class GetCustomerResponse extends Response{
    constructor(props: any){
        super();
        this.Code = props === undefined ? '' : props.Code;
        this.Model = props === undefined ? {} : props.Model;
        this.Error = props === undefined ? '' : props.Error;
        this.Message = props === undefined ? '' : props.Message;
    }
}
export default GetCustomerResponse;