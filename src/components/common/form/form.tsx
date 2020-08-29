import React from 'react';
import BaseState from '../../../models/contracts/baseState';
import Input from './../input/';
import { DropDown as PrimarySelect } from './../select/dropdown';
import { Button } from './../button/button';
import ObjectProcessor from '../../../services/objectProcessor';
import { Form as FormX, FormContainer, FormSection, Title } from './../container/'
import BasePage from './../page/basePage';
import IModel, { IViewModel } from '../../../models/iModel';
import IHttpObject, { IRequest, IResponse } from '../../../models/iHttpObject';
import { withTranslation, WithTranslation } from 'react-i18next';
import { AppContext } from '../../../services/contextManager';
import { ButtonContainer } from '../button';
interface FormProp extends WithTranslation {
    Model?: IModel;
    ViewModel: IViewModel;
    title: string;
    color: string;
    showConfirm: boolean;
    onSuccess?: (e: any) => void
}
interface FormState extends BaseState {
    Model: IModel;
    ViewModel: IViewModel;
}
class Form
    extends BasePage<FormProp, any> {
    constructor(props: any) {
        super(props);
        //this.confirm(()=>{alert('hello world')});
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
        let model = this.state.ViewModel.Model;
        model[e.target.name] = e.target.value;
        viewModel[e.target.name].Value = e.target.value;
        this.setState({ ViewModel: viewModel, Model: model });
    }
    SubmitAction = async (e: any, context: any) => {
        this.setState({ IsLoading: true, LoadingTitle: 'Please Wait' })
        let data: IModel[] = [];
        data.push(this.state.Model);
        let request: IRequest = {
            Model: data,
            ToObject: () => new Promise<IHttpObject>(() => { }),
            ToString: () => new Promise<string>(() => { })
        }
        let response: IResponse = await this.state.ViewModel.SubmitAction(request, context);
        if (response !== null) {
            if (response.Code === '00') {
                this.setState({
                    Redirect: response.Redirect,
                    RedirectPath: response.RedirectPath,
                    RedirectParams: response.Model
                });
                await this.alert('Success', response.Message, 'success', () => { });
                await this.notify('success', response.Message);
                let v = this.props.onSuccess !== undefined ? this.props.onSuccess(e) : () => { };
            } else {
                await this.alert('Info', (response.Message !== undefined ? response.Message : response.Error ? response.Error : 'Unable to get info'), 'info', () => { });
                this.notify('info', (response.Message !== undefined ? response.Message : response.Error))
            }
        } else {
            await this.alert('Error', 'null response', 'error', () => { });
            this.notify('error', 'null response')
        }
        this.setState({ IsLoading: false })
    }
    async Submit(e: any, context: any) {
        e.preventDefault();
        if (this.props.showConfirm) {
            await this.confirm(async () => {
                await this.SubmitAction(e, context);
            })
        } else {
            await this.SubmitAction(e, context)
        }

    }
    renderPage() {
        return (
            <FormContainer>
                <AppContext.Consumer>
                    {
                        value => {
                            return (
                                <FormX method="POST" onSubmit={(e) => this.Submit(e, value)}>
                                {this.state.Title !== undefined ? <Title>{this.state.Title}</Title> : <></>}
                                {this.props.children}
                                {ObjectProcessor.GetProperties(this.state.ViewModel).map((x: string) => {
                                    if (x !== 'Model' && x !== 'Error' && x !== 'Manager' && x !== 'Button' && x !== 'Context') {
                                        if (this.state.ViewModel[x].Type === 'select') {
                                            return (<>
                                                <FormSection>
                                                    <PrimarySelect
                                                        name={x}
                                                        onSelectChange={this.HandleTextChange}
                                                        label={this.props.t(this.state.ViewModel[x].FieldName)}
                                                        selectedValue={this.state.ViewModel[x].Value}
                                                        data={this.state.ViewModel[x].Options} />
                                                </FormSection>
                                            </>)
                                        }
                                        if (this.state.ViewModel[x].Type === 'date') {
                                            return (<>
                                                <FormSection>
                                                    <Input type={this.state.ViewModel[x].Type}
                                                        label={this.props.t(this.state.ViewModel[x].FieldName)}
                                                        name={x}
                                                        min={this.state.ViewModel[x].Min}
                                                        max={this.state.ViewModel[x].Max}
                                                        value={this.state.ViewModel[x].Value} onTextChange={this.HandleTextChange} />
                                                </FormSection>
                                            </>)
                                        }
                                        return (<>
                                            <FormSection>
                                                <Input type={this.state.ViewModel[x].Type}
                                                    label={this.props.t(this.state.ViewModel[x].FieldName)}
                                                    name={x}
                                                    value={this.state.ViewModel[x].Value} onTextChange={this.HandleTextChange} />
                                            </FormSection>
                                        </>)
                                    }
                                })}
                                <ButtonContainer>
                                    {ObjectProcessor.GetProperties(this.state.ViewModel).filter(x => x.includes('Button')).map((b: any) => {
                                        return (
                                            <Button name={b} type="primary" onClick={(e) => { this.Submit(e, value) }}>
                                                {this.props.t(this.state.ViewModel[b].FieldName)}
                                            </Button>
                                        )
                                    })}
                                </ButtonContainer>
                            </FormX>          
                                    )
                        }
                    }
                </AppContext.Consumer>
            </FormContainer>
        )
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}
Form.contextType = AppContext;
export default withTranslation()(Form);