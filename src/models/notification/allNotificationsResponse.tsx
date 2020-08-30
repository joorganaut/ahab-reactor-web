import { SearchResult, ISearchResult, IResponse } from '../iHttpObject';

class AllNotificationsResponse extends SearchResult{
    
    constructor(props?: ISearchResult | IResponse){
        super(props);
        
    }
}
export default AllNotificationsResponse;