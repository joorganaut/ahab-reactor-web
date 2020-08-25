import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import AllExchangesRequest from '../../../models/exchange/allExchangesRequest';
import AllExchangesViewModel from '../../../models/exchange/allExchangesViewModel';
import BasePage from './../../common/page/basePage';
import { AllExchangesWrapper, AllExchangesGridTable } from './styled';
import ExchangeModel from '../../../models/exchange/exchangeModel';
import { SocialTableRowProps } from '../../common/table/socialTable';
import DetailsModal from '../../common/modal/detailsModal';
import ViewExchange from './viewExchange';

interface AllExchangesProps extends WithTranslation {
    SearchParams: AllExchangesRequest;
}
interface AllExchangesState extends WithTranslation {
    records: ExchangeModel[]
    showDetails: boolean;
    exchange: any;
}

class AllExchanges extends BasePage<AllExchangesProps, AllExchangesState>{
    constructor(props: any) {
        super(props)
        this.state = {
            records: [],
            showDetails: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    viewExchange(id?: number) {
        const model: any  = this.state.records.filter((x: any)=>x.id === id)[0];
        const exchangeModel = model.record;
        this.setState({showDetails : true, exchange : exchangeModel});
        //get details from state and send to Modal
    }
    toggleModal(e: any) {
        this.setState({showDetails : !this.state.showDetails});
    }
    async componentDidMount() {
        let records: SocialTableRowProps[] = [];
        const viewModel = new AllExchangesViewModel(this.props.SearchParams)
        let r = await viewModel.SubmitAction(this.props.SearchParams);
        const model = r.Model?.splice(10, 5);
        model?.forEach(element => {
            let exchange: ExchangeModel = new ExchangeModel(element);
            let row: SocialTableRowProps = {
                viewAction : ()=>{this.viewExchange(exchange.ID)},
                id: exchange.ID,
                record: exchange
            }
            records.push(row);
        })
        this.setState({ records: records })
    }
    renderPage = () => {
        //records.
        return (<>
            <AllExchangesWrapper>
                <AllExchangesGridTable records={this.state.records} />
            </AllExchangesWrapper>
            <DetailsModal size={'sm'} title={this.props.t('dashboard.exchange.functions.viewDetails.title')} showModal={this.state.showDetails} toggleModal={this.toggleModal}>
                <ViewExchange Model={this.state.exchange} onSuccess={this.toggleModal}/>
            </DetailsModal>
        </>)
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}
export default withTranslation()(AllExchanges);