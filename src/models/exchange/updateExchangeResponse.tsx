import {Response, IResponse} from '../iHttpObject'
import ExchangeModel from './exchangeModel';
class UpdateExchangeResponse extends Response implements IResponse{
    ExchangeModel: ExchangeModel;
    constructor(props?: IResponse | any ){
        super(props);
        this.ExchangeModel = props === undefined ? new ExchangeModel() : props.ExchangeModel;
        this.Error = props === undefined ? '' : props.Error;
        this.RedirectParams = {
            Model : this.ExchangeModel
        };
    }
}
export default UpdateExchangeResponse;