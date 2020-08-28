import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import BasePage from './../../common/page/basePage';
import { AllExchangesWrapper, AllExchangesGridTable } from './styled';
import DetailsModal from '../../common/modal/detailsModal';
import ViewExchange from './viewExchange';
import { SocialTableRowProps } from '../../common/table/socialTable';


interface AllExchangesProps extends WithTranslation {
    records?: SocialTableRowProps[]
    showDetails: boolean;
    exchange: any;
    toggleModal: (e: any)=> void;
}

class AllExchanges extends BasePage<AllExchangesProps, any>{
    showModal(){
        if(this.props.showDetails){
            return(<>
            <DetailsModal size={'sm'} 
            title={this.props.t('dashboard.exchange.functions.viewDetails.title')} 
            showModal={this.props.showDetails} toggleModal={this.props.toggleModal}>
                <ViewExchange Model={this.props.exchange} onSuccess={this.props.toggleModal}/>
            </DetailsModal>
            </>)
        }
    }
    async componentDidMount() {
        
    }
    renderPage = () => {
        //records.
        return (<>
            <AllExchangesWrapper>
                <AllExchangesGridTable records={this.props.records} />
            </AllExchangesWrapper>
            {this.showModal()}
        </>)
    }
    render() {
        return (<>
            {this.renderAllComponents(this.renderPage())}
        </>)
    }
}
export default withTranslation()(AllExchanges);