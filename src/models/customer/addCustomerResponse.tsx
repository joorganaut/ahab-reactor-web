import {Response} from '../iHttpObject';
class AddCustomerResponse extends Response{
    constructor(props: any){
        super(props);
        this.Code = props === undefined ? '' : props.Code;
        this.Model = props === undefined ? {} : props.Model;
        this.Error = props === undefined ? '' : props.Error;
        this.Message = props === undefined ? '' : props.Message;
    }
}
export default AddCustomerResponse;