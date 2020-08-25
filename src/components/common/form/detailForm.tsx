import React from 'react';
import { Button } from './../button/button';
import ObjectProcessor from '../../../services/objectProcessor';
import BasePage from './../page/basePage';
import { withTranslation, WithTranslation } from 'react-i18next';
import IModel, { IViewModel } from '../../../models/iModel';
import { FormContainer, Title, FormSection, Form as FormX } from '../container';
import { ButtonGroup, ButtonContainer } from '../button';
import IHttpObject, { IRequest, IResponse } from '../../../models/iHttpObject';

interface DetailFormProps extends WithTranslation {
    Model?: IModel;
    ViewModel: IViewModel;
    title: string;
    color: string;
    showConfirm: boolean;
    onSuccess?: (e: any) => void;
}
interface ButtonProps {
    FieldName: string;
    value: any;
}
class DetailForm extends BasePage<DetailFormProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ViewModel: props.ViewModel,
            Model: props.Model,
            BackgroundColor: props.color,
            Title: props.title,
            IsLoading: true,
            currentAction: ''
        }
        this.state.ViewModel.SubmitAction = this.state.ViewModel.SubmitAction.bind(this);
        this.Submit = this.Submit.bind(this);
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ IsLoading: false, LoadingTitle: 'Loading' })
        }, 1000)
    }

    async SubmitAction(e: any) {
        this.setState({ IsLoading: true, LoadingTitle: 'Please Wait' });
        let data: IModel[] = [];
        data.push(this.state.Model);
        let request: IRequest = {
            Model: data,
            ToObject: () => new Promise<IHttpObject>(() => { }),
            ToString: () => new Promise<string>(() => { })
        }
        const extraParams = this.state.ViewModel[this.state.currentAction].Options;
        
        let response: IResponse = await this.state.ViewModel[this.state.currentAction].Value(request, extraParams.value);
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
    async Submit(e: any) {
        e.preventDefault();
        if (this.props.showConfirm) {
            await this.confirm(async () => {
                await this.SubmitAction(e);
            })
        } else {
            await this.SubmitAction(e)
        }

    }
    renderPage = () => {

        return (
            <FormContainer>
                <FormX method="POST" onSubmit={this.Submit}>
                    {this.state.Title !== undefined ? <Title>{this.state.Title}</Title> : <></>}
                    {this.props.children}
                    {ObjectProcessor.GetProperties(this.state.ViewModel).map((x: string) => {
                        if (x !== 'Model' && x !== 'Error' && x !== 'Manager' && !x.includes('Button')) {
                            if (this.state.ViewModel[x].Type === 'date') {
                                return (<>
                                    <FormSection>

                                    </FormSection>
                                </>)
                            }
                            return (<>
                                <FormSection>

                                </FormSection>
                            </>)
                        }

                    })}
                    <ButtonContainer>
                        {ObjectProcessor.GetProperties(this.state.ViewModel).filter(x => x.includes('Button')).map((b: string) => {
                            return (
                                <Button name={b} type="primary" onClick={(e: any)=>{this.setState({currentAction: b}); this.Submit(e)}}>
                                    {this.props.t(this.state.ViewModel[b].FieldName)}
                                </Button>
                            )
                        })}
                    </ButtonContainer>
                </FormX>
            </FormContainer >

        )
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}
export default withTranslation()(DetailForm);