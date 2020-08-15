import React from 'react';
import BaseProp from '../../models/contracts/baseProp';
import BaseState from '../../models/contracts/baseState';
import Input from './input/';
import { PrimarySelect } from './select/primarySelect';
import { Button } from './button/button';
import ObjectProcessor from '../../services/objectProcessor';
import { Form as FormX, FormContainer, FormSection, Title } from './container/'
import BasePage from './page/basePage';
import IModel, { IViewModel } from '../../models/iModel';
import IHttpObject, { IRequest, IResponse } from '../../models/iHttpObject';
import { FormWrapper } from './container/';
interface FormProp extends BaseProp {
    Model: IModel;
    ViewModel: IViewModel;
    Title: string;
}
interface FormState extends BaseState {
    Model: IModel;
    ViewModel: IViewModel;
}
export default class Form
    extends BasePage {
    constructor(props: any) {
        super(props);

        this.state = {
            ViewModel: props.ViewModel,
            Model: props.Model,
            BackgroundColor: props.color,
            Title: props.title
        };
        this.state.ViewModel.SubmitAction = this.state.ViewModel.SubmitAction.bind(this);
        this.Submit = this.Submit.bind(this);
        this.HandleTextChange = this.HandleTextChange.bind(this);
    }
    componentDidMount() {
        this.setState({ IsLoading: false })
    }
    async HandleTextChange(e: any) {
        let viewModel = this.state.ViewModel;
        let model = this.state.Model;
        model[e.target.name] = e.target.value;
        viewModel[e.target.name].Value = e.target.value;
        this.setState({ ViewModel: viewModel, Model: model });
        // alert(JSON.stringify(e.target.name));
    }
    async Submit(e: any) {
        e.preventDefault();

        await this.setState({ IsLoading: true })
        let data: IModel[] = [];
        data.push(this.state.Model);
        let request: IRequest = {
            Model: data,
            ToObject: () => new Promise<IHttpObject>(() => { }),
            ToString: () => new Promise<string>(() => { })
        }
        let response: IResponse = await this.state.ViewModel.SubmitAction(request);
        if (response !== null) {
            if (response.Code === '00') {
                await this.setState({
                    Redirect: response.Redirect,
                    RedirectPath: response.RedirectPath,
                    RedirectParams: response.Model
                });
                await this.notify(response.Message);
            } else {
                this.notify('info', (response.Message !== undefined ? response.Message : response.Error))
            }
        } else {
            this.notify('error', 'null response')
        }
        this.setState({ IsLoading: false })
        //Do something with response
    }
    renderPage() {
        return (<FormWrapper color={this.state.BackgroundColor}>
            {/* Design the form using the view model*/}
            <FormContainer>
                <FormX method="POST">
                    {this.state.Title !== undefined ? <Title>{this.state.Title}</Title> : <></>}
                    {ObjectProcessor.GetProperties(this.state.ViewModel).map((x: string) => {
                        if (x !== 'Model' && x !== 'Error' && x !== 'Manager' && x !== 'Button') {
                            if (this.state.ViewModel[x].Type === 'select') {
                                return (<>
                                    <PrimarySelect
                                        name={x}
                                        onSelectChange={this.HandleTextChange}
                                        label={this.state.ViewModel[x].FieldName}
                                        value={this.state.ViewModel[x].Value} />
                                </>)
                            }
                            return (<>
                                <FormSection>
                                    <Input type={this.state.ViewModel[x].Type}
                                        label={this.state.ViewModel[x].FieldName}
                                        name={x}
                                        value={this.state.ViewModel[x].Value} onTextChange={this.HandleTextChange} />
                                </FormSection>
                            </>)
                        } else {
                            if (this.state.ViewModel[x] !== undefined && this.state.ViewModel[x].Type === 'button') {
                                return (<>
                                    <FormSection>
                                        <Button type="outline" onClick={this.Submit}>
                                            {this.state.ViewModel[x].FieldName}
                                        </Button>
                                    </FormSection>
                                </>)
                            }
                        }
                    })}
                </FormX>
            </FormContainer>
        </FormWrapper>)
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}