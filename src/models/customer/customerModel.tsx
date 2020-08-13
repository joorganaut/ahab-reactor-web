import { Model } from "../iModel"
import AddressModel from './addressModel'
export default class CustomerModel extends Model{
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    Gender: string;
    OtherName: string;
    DateOfBirth: Date;
    BVN: string;
    Address: AddressModel;
    constructor(props?: any){
        super(props);
        this.FirstName = props === undefined ? '' :  props.FirstName;
        this.LastName = props === undefined ? '' :  props.LastName;
        this.OtherName = props === undefined ? '' :  props.OtherName;
        this.PhoneNumber = props === undefined ? '' :  props.PhoneNumber;
        this.Email = props === undefined ? '' :  props.Email;
        this.Gender = props === undefined ? 0 :  props.Gender;
        this.DateOfBirth = props === undefined ? new Date() :  props.DateOfBirth;
        this.BVN = props === undefined ? '' :  props.BVN;
        this.Address = props === undefined ? new AddressModel() :  props.Address;
    }
}