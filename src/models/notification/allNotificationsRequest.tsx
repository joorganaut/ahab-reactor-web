import { SearchParams, ISearchParams } from '../iHttpObject';

class AllNotificationsRequest extends SearchParams {
    constructor(props?: ISearchParams) {
        super(props);
        this.Config = props === undefined ? {} : props.Config;
        this.Criteria = props === undefined ? [] : props.Criteria;
        this.page = props === undefined ? 0 : props.page;
        this.pageSize = props === undefined ? 0 : props.pageSize;
        this.sort = props === undefined ? '' : props.sort;
        this.direction = props === undefined ? 'asc' : props.direction;
        // eslint-disable-next-line no-control-regex
        this.Method = ('/api/notification').replace(/[^\x00-\xFF]/g, '');
    }
}
export default AllNotificationsRequest;