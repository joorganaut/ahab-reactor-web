import React from 'react';
import IModel from '../../models/iModel';
import BaseProp from '../../models/contracts/baseProp';
import BaseState from '../../models/contracts/baseState';
import styled from 'styled-components/macro';
import IHttpObject from '../../models/iHttpObject';
import { PrimaryTextBox } from './input/primaryTextBox';
import { SubmitButton } from './button/submitButton';
import ObjectProcessor from '../../services/objectProcessor';
interface FormProp extends BaseProp{
    Model: any;
    ViewModel: any;
}
interface FormState extends BaseState{
    Model: any;
    ViewModel: any;
}
const Container = styled.div`
margin: 20px;

`
export default class Form 
extends React.Component<FormProp, FormState>{
    constructor(props: FormProp){
        super(props);
        this.state = props;
        this.state.ViewModel.SubmitAction = this.state.ViewModel.SubmitAction.bind(this);
        this.Submit = this.Submit.bind(this);
        this.HandleTextChange = this.HandleTextChange.bind(this);
    }
    async HandleTextChange(e: any){
        let viewModel = this.state.ViewModel;
        let model = this.state.Model;
        model[e.target.name] = e.target.value;
        viewModel[e.target.name].Value = e.target.value;
        this.setState({ViewModel : viewModel, Model : model});
        //alert(JSON.stringify(e.target.name));
    }
    async Submit(){
        //e.preventDefault();
        this.setState({IsLoading : true})
        let data : IModel[] = [];
        data.push(this.state.Model);
        let request = {
            Model : data, 
            ToObject: () => new Promise<IHttpObject>(()=>{}),
            ToString: () => new Promise<string>(()=>{}) 
        }
        let response = await this.state.ViewModel.SubmitAction(request);
        this.setState({IsLoading : false})
        //Do something with response
    }
    render(){
        return <>
            {/* Design the form using the view model*/}
            <div>
                <Container>
                    {ObjectProcessor.GetProperties(this.state.ViewModel).map((x:string) => {
                        if(x !== 'Model' && x !== 'Error' && x !== 'Manager'){
                            return (<>
                                <PrimaryTextBox 
                                type={this.state.ViewModel[x].Type} 
                                name={x} 
                                onTextChange={this.HandleTextChange} 
                                label={this.state.ViewModel[x].FieldName} 
                                value={this.state.ViewModel[x].Value} />
                            </>)
                        }else{
                            return <></>
                        }
                    })}
                    <SubmitButton action={this.Submit}></SubmitButton>
                </Container>
            </div>
        </>
    }
}