import React from 'react';
import ExchangeModel from '../../../models/exchange/exchangeModel';
import ExchangeViewModel from '../../../models/exchange/exchangeViewModel';
import { ExchangeDetailForm } from './styled';


interface ViewExchangeProps{
    Model: ExchangeModel;
    onSuccess: (e: any)=>void;
}
const ViewExchange: React.FC<ViewExchangeProps> = ({...props}) => {
    const viewModel = new ExchangeViewModel(props.Model);
    return (<>
    <ExchangeDetailForm 
    title={''}
    color={''}
    Model={viewModel.Model} 
    ViewModel={viewModel} 
    showConfirm={true}
    onSuccess={props.onSuccess}
     />
    </>)
}
export default ViewExchange;