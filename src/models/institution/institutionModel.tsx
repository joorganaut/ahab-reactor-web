import { Model } from "../iModel"

export default class InstitutionModel extends Model{
    ContactEmail: string;
    ContactPhonenumber: string;
    ContactAddress: string;
    DecryptionKey: string;
    PassPhrase: string;
    Password: string;
    EncryptionKey: string;
    LocalConnectionString: string;
    RemoteConnectionString: string;
    Industry: string;
    ShortName: string;
    Name: string;
    constructor(props?: any){
        super(props);
        this.ContactEmail = props === undefined ? '' :  props.ContactEmail;
        this.ContactPhonenumber = props === undefined ? '' :  props.ContactPhonenumber;
        this.ContactAddress = props === undefined ? '' :  props.ContactAddress;
        this.DecryptionKey = props === undefined ? '' :  props.DecryptionKey;
        this.PassPhrase = props === undefined ? '' :  props.PassPhrase;
        this.Password = props === undefined ? '' :  props.Password;
        this.EncryptionKey = props === undefined ? '' :  props.EncryptionKey;
        this.LocalConnectionString = props === undefined ? '' :  props.LocalConnectionString;
        this.RemoteConnectionString = props === undefined ? '' :  props.RemoteConnectionString;
        this.Industry = props === undefined ? '' :  props.Industry;
        this.ShortName = props === undefined ? '' :  props.ShortName;
        this.Name = props === undefined ? '' :  props.Name;
    }
}