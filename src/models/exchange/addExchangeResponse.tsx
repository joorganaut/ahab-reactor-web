import {Response, IResponse} from '../iHttpObject'
import ExchangeModel from './exchangeModel';
class AddExchangeResponse extends Response implements IResponse{
    ExchangeModel: ExchangeModel;
    TransactionRef: string;
    constructor(props?: IResponse | any ){
        super(props);
        this.TransactionRef = props === undefined ? '' : props.TransactionRef;
        this.ExchangeModel = props === undefined ? new ExchangeModel() : props.ExchangeModel;
        this.Error = props === undefined ? '' : props.Error;
        this.RedirectParams = {
            Model : this.ExchangeModel
        };
    }
}
export default AddExchangeResponse;