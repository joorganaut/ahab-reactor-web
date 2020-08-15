import MiddlewareManager from '../services/middlewareManager';
import BaseProcessor from './baseProcessor';
import { IRequest, IResponse } from './iHttpObject';
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
    Type?: 'text' | 'select' | 'password' | 'email' | 'button';
    Value: any;
    Inputs?: any;
}

export interface IViewModel {
    Model?: IModel;
    Error?: any;
    Manager?: MiddlewareManager
    SubmitAction(request?: IRequest): Promise<IResponse | void>;
}
export class ViewModel extends BaseProcessor implements IViewModel {
    Model?: IModel;
    constructor(model?: IModel) {
        super();
        this.Model = model;
        this.Manager = new MiddlewareManager();
    }
    SubmitAction(request?: IRequest): Promise<IResponse | void> {
        throw new Error("Method not implemented.");
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    Manager: MiddlewareManager;
}
export class Model implements IModel {
    ID?: number;
    InstitutionCode?: string;
    constructor(model: IModel) {
        this.ID = model === undefined ? 0 : model.ID;
        this.InstitutionCode = model === undefined ? '' : model.InstitutionCode;
        this.IsEnabled = model === undefined ? false :  model.IsEnabled;
        this.DateCreated = model === undefined ? new Date() :  model.DateCreated;
        this.DateLastModified = model === undefined ? new Date() :  model.DateLastModified;
        this.CreatedBy = model === undefined ? 0 :  model.CreatedBy;
        this.LastModifiedBy = model === undefined ? 0 :  model.LastModifiedBy;
    }
    IsEnabled?: boolean;
    DateCreated?: Date;
    DateLastModified?: Date;
    CreatedBy?: number;
    LastModifiedBy?: number;
    Error?: any;
}