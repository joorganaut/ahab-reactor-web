import { SearchResult, ISearchResult, IResponse } from '../iHttpObject';

class AllExchangesResponse extends SearchResult{
    
    constructor(props?: ISearchResult | IResponse){
        super(props);
        
    }
}
export default AllExchangesResponse;