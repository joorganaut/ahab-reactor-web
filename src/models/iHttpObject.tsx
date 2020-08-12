import IModel from "./iModel";

export default interface IHttpObject {
    ToString(): Promise<string> | null;
    ToObject(value:string):Promise<IHttpObject> | null;
}
export interface IRequest extends IHttpObject{
    Model?: IModel[];
    SearchParams?: any;
    Url?: string;
    Method?: string;
}
export interface IResponse extends IHttpObject{
    Model?: IModel[];
    Code?: any;
    Message?: string;
    Error?: string;
}
export class Request implements IRequest {
    Model?: IModel[];
    SearchParams?: any;
    Url?: string;
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
    Code?: string;
    Message?: string;
    Error?: string;
    async ToObject(value: string): Promise<IResponse> {
        return await new Promise(()=>{ JSON.parse(value)});
    }
    async ToString(): Promise<string> {
        return await new Promise(() => { JSON.stringify(this) });
    }
}