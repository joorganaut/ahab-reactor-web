import React, { useState, useEffect } from 'react';
import {
    Content,    
    StyledModal,
    ModalBody
} from './styled';
import AddExchange from './addExchange';
import { ModalAttributes } from '../../common/modal/modalAttributes'; 
import ExchangeToolBar from './toolbar';
import AllExchanges from './allExchanges';
import useI18n from '../../../hooks/useI18n';
import AllExchangesRequest from '../../../models/exchange/allExchangesRequest';
const Exchange: React.FC = () => {
    let request: AllExchangesRequest = new AllExchangesRequest();
    const [searchParam, setSearchParam] = useState<AllExchangesRequest>( request);
    const [searchParameters, setSearchParameters_func] = useState<string>('')
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {

    })
    const { t } = useI18n();
    const Submit = (e: any) => {
        var code = e.keyCode || e.which;
        if (code === 13) { //13 is the enter keycode
            alert(searchParameters)
        }
    }
    function setSearchParameters(e: any){
        setSearchParameters_func(e);
        let x = searchParam;
        if(x.Criteria[0] === undefined){
            x.Criteria[0] = {fieldName: 'Amount', fieldValue: ''}
        }
        x.Criteria[0].fieldValue = e;
        setSearchParam(x);
    }
    function toggleModal(e: any) {
        setShowModal(!showModal)
    }
    return (<>
        <Content>
           <ExchangeToolBar search={Submit} 
           setSearchParam={setSearchParameters}
           searchParam={searchParameters}
           showModal={(e: any)=>setShowModal(true)}/>
           <AllExchanges SearchParams={searchParam}/>
        </Content>
        {/* <Content>
            
        </Content> */}
        <Content>
            <StyledModal
                isOpen={showModal}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                <ModalBody size={'sm'} fadeType={'in'}>
                    <ModalAttributes
                        handleClick={toggleModal}
                        title={t('dashboard.exchange.functions.add.title')}>
                            <AddExchange onSuccess={toggleModal} />
                    </ModalAttributes>
                </ModalBody>
            </StyledModal>
        </Content>
    </>)
}
export default Exchange;