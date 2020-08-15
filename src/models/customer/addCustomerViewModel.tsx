import { ViewModel, IModelAttribute } from "../iModel";
import CustomerModel from "./customerModel";
import { IRequest, IResponse } from "../iHttpObject";

export default class AddCustomerViewModel extends ViewModel {
    constructor(model: CustomerModel) {
        super(model);
        this.FirstName.Value = model.FirstName;
        this.LastName.Value = model.LastName;
        this.Email.Value = model.Email;
        this.PhoneNumber.Value = model.PhoneNumber;
        this.Gender.Value = model.Gender;
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    ID: number = 0;
    FirstName: IModelAttribute = { FieldName: "First Name", Type: "text", Value: '' };
    LastName: IModelAttribute = { FieldName: "Last Name", Type: "text", Value: '' };
    Email: IModelAttribute = { FieldName: "Email", Type: "text", Value: '' };
    PhoneNumber: IModelAttribute = { FieldName: "Phone Number", Type: "text", Value: '' };
    Gender: IModelAttribute = { FieldName: "Gender", Type: "select", Value: '', Inputs: ['Male', 'Female'] };
    async SubmitAction<T extends IRequest, U extends IResponse>(request: T) : Promise<U>{
        let response = await this.Manager.PostData(request);
        if (!ViewModel.IsNullOrUndefined(response)) {
            if (response.Code === '00') {
                //figure out what you want to do here
                return response as U;
            } else {
                this.Error.Value = response.Message + ': ' + response.Error;
            }
        } else {
            this.Error.Value = 'Null response from Middleware';
        }
        return response as U;
    };
}