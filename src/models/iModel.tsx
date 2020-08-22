import MiddlewareManager from '../services/middlewareManager';
import BaseProcessor from './baseProcessor';
import { IRequest, IResponse } from './iHttpObject';
import TokenRequest from './token/tokenRequest';
import TokenResponse from './token/tokenResponse';

//const t = useI18n()
export default interface IModel {
    ID?: number;
    InstitutionCode?: string;
    IsEnabled?: boolean;
    DateCreated?: Date;
    DateLastModified?: Date;
    CreatedBy?: number;
    LastModifiedBy?: number;
}
export interface IModelAttribute {
    FieldName?: string;
    Type?: 'text' | 'select' | 'password' | 'email' | 'button' | 'number' | 'date' | 'mobile';
    Value: any;
    Options?: any;
    Inputs?: any;
    Min?: string;
    Max?: string;
}

export interface IViewModel {
    Model?: IModel;
    Error?: any;
    Manager?: MiddlewareManager
    SubmitAction(request?: IRequest): Promise<IResponse | void>;
    GetToken(username: string, password: string): Promise<TokenResponse>;
}
export class ViewModel extends BaseProcessor implements IViewModel {
    MasterCode = () =>{ return '202062418221'};
    Model?: IModel;
    constructor(model?: IModel) {
        super();
        this.Model = model;
        this.Manager = new MiddlewareManager();
        this.Error = { FieldName: 'global.error', Type: 'text', Value: '' };
    }
     async GetToken(username: string, password: string): Promise<TokenResponse>{
        let response: TokenResponse;
        let request: TokenRequest = new TokenRequest({ Username: username, Password: password, InstitutionCode: this.MasterCode() });
        let res = await this.Manager.PostData(request);
        response = new TokenResponse(res);
        return response;
    }
    SubmitAction(request?: IRequest): Promise<IResponse | void> {
        throw new Error("Method not implemented.");
    }
    Error: IModelAttribute;
    Manager: MiddlewareManager;
}
export class Model implements IModel {
    ID?: number;
    InstitutionCode?: string;
    constructor(model: IModel) {
        this.ID = model === undefined ? 0 : model.ID;
        this.InstitutionCode = model === undefined ? '' : model.InstitutionCode;
        this.IsEnabled = model === undefined ? false : model.IsEnabled;
        this.DateCreated = model === undefined ? new Date() : model.DateCreated;
        this.DateLastModified = model === undefined ? new Date() : model.DateLastModified;
        this.CreatedBy = model === undefined ? 0 : model.CreatedBy;
        this.LastModifiedBy = model === undefined ? 0 : model.LastModifiedBy;
    }
    IsEnabled?: boolean;
    DateCreated?: Date;
    DateLastModified?: Date;
    CreatedBy?: number;
    LastModifiedBy?: number;
    Error?: any;
}