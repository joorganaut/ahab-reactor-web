import {Request, IRequest} from '../iHttpObject'
import ExchangeModel from './exchangeModel';
class UpdateExchangeRequest extends Request implements IRequest{
    constructor(props: ExchangeModel){
        super();
        this.Model = [];
        this.Model.push(props);
        // this.Url = process.env.REACT_APP_MIDDLEWARE;
        // eslint-disable-next-line no-control-regex
        this.Method = ('/product-service/xchange').replace(/[^\x00-\xFF]/g, '');
    }
}
export default UpdateExchangeRequest;