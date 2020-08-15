import { ViewModel, IModelAttribute } from "../iModel";
import GetCustomerRequest from "./getCustomerRequest";
import GetCustomerResponse from "./getCustomerResponse";
import CustomerModel from "./customerModel";

export default class CustomerViewModel extends ViewModel {
    constructor(props: CustomerModel) {
        super(props);
        this.ID = props.ID;
        this.Manager.GetData(new GetCustomerRequest(this.ID)).then(res => {
            let response: GetCustomerResponse = new GetCustomerResponse(res);
            if (!ViewModel.IsNullOrUndefined(response) && !ViewModel.IsNullOrUndefined(response.Model)) {
                if (response.Code === '00') {
                    let records = (response.Model as CustomerModel[]);
                    let data = records !== undefined ? records[0] : new CustomerModel({});
                    this.FirstName.Value = data.FirstName;
                    this.LastName.Value = data.LastName;
                    this.Email.Value = data.Email;
                    this.PhoneNumber.Value = data.PhoneNumber;
                    this.Gender.Value = data.Gender;
                } else {
                    this.Error.Value = response.Message + ': ' + response.Error;
                }
            } else {
                this.Error.Value = 'Null response from Middleware';
            }
        })
    }
    Error: IModelAttribute = { FieldName: 'Error', Type: 'text', Value: '' };
    ID?: number = 0;
    FirstName: IModelAttribute = { FieldName: "First Name", Type: "text", Value: '' };
    LastName: IModelAttribute = { FieldName: "Last Name", Type: "text", Value: '' };
    Email: IModelAttribute = { FieldName: "Email", Type: "email", Value: '' };
    PhoneNumber: IModelAttribute = { FieldName: "Phone Number", Type: "text", Value: '' };
    Gender: IModelAttribute = { FieldName: "Gender", Type: "select", Value: [{ key: 'male', value: '0' }, { key: 'female', value: '1' }] };
    SubmitAction = async () => {
        throw new Error("Method not implemented.");
    };
}