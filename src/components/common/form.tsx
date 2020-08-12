import React from 'react';
import IModel, { IViewModel }  from '../../models/iModel';
import BaseProp from '../../models/contracts/baseProp';
import BaseState from '../../models/contracts/baseState';
import { IRequest } from '../../models/iHttpObject';
interface FormProp extends BaseProp{
    Model: IModel;
    ViewModel: IViewModel;
}
interface FormState extends BaseState{
    Model: IModel;
    ViewModel: IViewModel;
}

export default class Form<T extends IModel, U extends IViewModel> 
extends React.Component<FormProp, FormState>{
    constructor(props: FormProp){
        super(props);
        this.state = props;
        this.state.ViewModel.SubmitAction = this.state.ViewModel.SubmitAction.bind(this);
    }
    async Submit(e: Event){
        e.preventDefault();
        this.setState({IsLoading : true})
        let data : IModel[] = [];
        data.push(this.state.Model);
        let request : IRequest = {
            Model : data, 
            ToObject: () => new Promise(() => { }),
            ToString: () => new Promise(() => { }) 
        }
        let response = await this.state.ViewModel.SubmitAction(request);
        this.setState({IsLoading : false})
        //Do something with response
    }
    render(){
        return <>
            {/* Design the form using the view model*/}
            <div>
                Hello World!!
            </div>
        </>
    }
}