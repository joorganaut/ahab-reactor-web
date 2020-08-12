import { Model } from "../IModel"

export default class CustomerModel extends Model{
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    Gender: string;
    constructor(model: any){
        super(model.ID);
        this.FirstName = model.FirstName;
        this.LastName = model.LastName;
        this.Email = model.Email;
        this.PhoneNumber = model.PhoneNumber;
        this.Gender = model.Gender;
    }
}