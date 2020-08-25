import React from 'react';
import {Content, StyledModal, ModalBody} from './styled';
import { ModalAttributes } from './modalAttributes';
import useI18n from '../../../hooks/useI18n';

interface DetailsModalProps{
    showModal: boolean;
    toggleModal: (e: any)=>void;
    size: 'sm' | 'lg';
    title: string;
}


const DetailsModal: React.FC<DetailsModalProps> = ({...props}) => {
    const { t } = useI18n();
    return(<>
    <Content>
            <StyledModal
                isOpen={props.showModal}
                onBackgroundClick={props.toggleModal}
                onEscapeKeydown={props.toggleModal}>
                <ModalBody size={props.size} fadeType={'in'}>
                    <ModalAttributes
                        handleClick={props.toggleModal}
                        title={t(props.title)}>
                            {props.children}
                    </ModalAttributes>
                </ModalBody>
            </StyledModal>
        </Content>
    </>)
}
export default DetailsModal;