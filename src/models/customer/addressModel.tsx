import { Model } from "../iModel";

export default class AddressModel extends Model{
    Street: string;
    City: string;
    State: string;
    Country: string;
    constructor(props?: any){
        super(props);
        this.Street = props === undefined ? '' :  props.Street;
        this.City = props === undefined ? '' :  props.City;
        this.State = props === undefined ? '' :  props.State;
        this.Country = props === undefined ? '' :  props.Country;
    }
}