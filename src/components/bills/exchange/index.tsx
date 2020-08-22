import React, { useState, useEffect } from 'react';
import {
    Content,    
    StyledModal,
    ModalBody
} from './styled';
import AddExchange from './addExchange';
import { ModalAttributes } from './modalAttributes'; 
import ExchangeToolBar from './toolbar';
import useI18n from '../../../hooks/useI18n';
const Exchange: React.FC = () => {
    const [searchParam, setSearchParam] = useState('');
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {

    })
    const { t } = useI18n();
    const Submit = (e: any) => {
        var code = e.keyCode || e.which;
        if (code === 13) { //13 is the enter keycode
            alert(searchParam)
        }
    }
    function toggleModal(e: any) {
        setShowModal(!showModal)
    }
    return (<>
        <Content>
           <ExchangeToolBar search={Submit} 
           setSearchParam={setSearchParam}
           searchParam={searchParam}
           showModal={(e: any)=>setShowModal(true)}/>
        </Content>
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