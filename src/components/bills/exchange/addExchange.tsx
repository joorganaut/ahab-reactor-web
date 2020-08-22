import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import AddExchangeViewModel from '../../../models/exchange/addExchangeViewModel';
import ExchangeModel from '../../../models/exchange/exchangeModel';
import BasePage from './../../common/page/basePage';
import {AddExchangeWrapper, AddExchangeForm } from './styled';

interface AddExchangeProps extends WithTranslation{
    onSuccess: (e: any)=>void
}

class AddExchange extends BasePage<AddExchangeProps, any>{
    renderPage = () => {
        const viewModel = new AddExchangeViewModel()
        return(
            <AddExchangeWrapper>                
                <AddExchangeForm 
                    title={''}
                    color={''}
                    showConfirm
                    onSuccess={this.props.onSuccess}
                    Model={new ExchangeModel(viewModel.Model)}
                    ViewModel={viewModel} >
                </AddExchangeForm>
            </AddExchangeWrapper>
        )
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}
export default withTranslation()(AddExchange);