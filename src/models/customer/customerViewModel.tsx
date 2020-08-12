import { ViewModel, IModelAttribute } from "../iModel";
import GetCustomerRequest from "./getCustomerRequest";
import GetCustomerResponse from "./getCustomerResponse";
import CustomerModel from "./customerModel";

export default class CustomerViewModel extends ViewModel {
    constructor(props: CustomerModel) {
        super(props);
        this.ID = props.ID;
        this.Manager<GetCustomerRequest, GetCustomerResponse>().GetData(new GetCustomerRequest(this.ID)).then(response => {
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
    Error: IModelAttribute = { FieldName: 'Error', Type: 'label', Value: '' };
    ID?: number = 0;
    FirstName: IModelAttribute = { FieldName: "First Name", Type: "label", Value: '' };
    LastName: IModelAttribute = { FieldName: "Last Name", Type: "label", Value: '' };
    Email: IModelAttribute = { FieldName: "Email", Type: "label", Value: '' };
    PhoneNumber: IModelAttribute = { FieldName: "Phone Number", Type: "label", Value: '' };
    Gender: IModelAttribute = { FieldName: "Gender", Type: "label", Value: '' };
    SubmitAction = async () => {
        throw new Error("Method not implemented.");
    };
}