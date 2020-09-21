import {Request, IRequest} from '../iHttpObject'
class ViewExchangeRequest extends Request implements IRequest{
    ID: number
    InstitutionCode?: string
    constructor(props: any){
        super();
        this.Model = [];
        this.Model.push(props);
        this.ID = props === undefined ? 0 : props.ID;
        this.InstitutionCode = props === undefined ? '' : props.InstitutionCode;
        // this.Url = process.env.REACT_APP_MIDDLEWARE;
        // eslint-disable-next-line no-control-regex
        this.Method = ('/product-service/xchange').replace(/[^\x00-\xFF]/g, '');
    }
}
export default ViewExchangeRequest;