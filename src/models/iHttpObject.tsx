import IModel from "./iModel";

export default interface IHttpObject {
    ToString(): Promise<string> | null;
    ToObject(value:string):Promise<IHttpObject> | null;
}
export interface IRequest extends IHttpObject{
    Model?: IModel[];
    Url?: string;
    Method?: string;
    Config?: any;
}
export interface IResponse extends IHttpObject{
    Model?: IModel[];
    Redirect?: boolean;
    RedirectPath?: string;
    RedirectParams?: any;
    Code: string;
    Message: string;
    Error?: string;
}
export interface ISearchCriteria{
    fieldName: string;
    fieldValue: any;
}
export interface ISearchResult extends IResponse{
    page: number;
    pageSize: number;
    count: number;
}
export interface ISearchParams extends IRequest{
    Criteria: Array<ISearchCriteria>;
    page: number;
    pageSize: number;
    sort: string;
    direction: 'asc' | 'desc';
}
export class SearchResult implements ISearchResult{
    page: number = 0;
    pageSize: number = 5;
    count: number = 0;
    Model?: IModel[] | undefined;
    Redirect?: boolean | undefined;
    RedirectPath?: string | undefined;
    RedirectParams?: any;
    Code: string = '';
    Message: string = '';
    Error?: string | undefined;
    constructor(props: any){
        this.Code = props === undefined ? '' : props.Code;
        this.Message = props === undefined ? '' : props.Message;
        this.Model = props === undefined ? {} : props.Model;
        this.count = props === undefined ? {} : props.count;
        this.Error = props === undefined ? '' : props.Error;
    }
    async ToObject(value: string): Promise<IRequest> {
        return await new Promise(()=>{ JSON.parse(value)});
    }
    async ToString(): Promise<string> {
        return await new Promise(() => { JSON.stringify(this) });
    }
}
export class SearchParams implements ISearchParams{
    Criteria: ISearchCriteria[] = [];
    page: number = 0;
    pageSize: number = 5;
    sort: string = 'ID';
    direction: "asc" | "desc" = 'asc';
    Model?: IModel[] | undefined;
    Url?: string = process.env.REACT_APP_MIDDLEWARE;
    Method?: string | undefined;
    Config?: any;
    constructor(props?: IRequest){
        this.Model = props === undefined ? [] : props.Model;
    }
    async ToObject(value: string): Promise<IRequest> {
        return await new Promise(()=>{ JSON.parse(value)});
    }
    async ToString(): Promise<string> {
        return await new Promise(() => { JSON.stringify(this) });
    }

}
export class Request implements IRequest {
    Model?: IModel[];
    SearchParams?: any;
    Config?: any;
    Url?: string = process.env.REACT_APP_MIDDLEWARE;
    Method?: string;
    async ToObject(value: string): Promise<IRequest> {
        return await new Promise(()=>{ JSON.parse(value)});
    }
    async ToString(): Promise<string> {
        return await new Promise(() => { JSON.stringify(this) });
    }
}
export class Response implements IResponse{
    Model?: IModel[];
    Code: string;
    Message: string;
    Error?: string;
    constructor(props: any){
        this.Code = props === undefined ? '' : props.Code;
        this.Message = props === undefined ? '' : props.Message;
        this.Model = props === undefined ? {} : props.Model;
        this.Error = props === undefined ? '' : props.Error;
    }
    Redirect?: boolean;
    RedirectPath?: string;
    RedirectParams?: any;
    async ToObject(value: string): Promise<IResponse> {
        return await new Promise(()=>{ JSON.parse(value)});
    }
    async ToString(): Promise<string> {
        return await new Promise(() => { JSON.stringify(this) });
    }
}