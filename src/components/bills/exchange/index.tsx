import React, { useState, useEffect, useCallback } from 'react';
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
import Pager, { Direction } from '../../common/pager';
import { SocialTableRowProps } from '../../common/table/socialTable';
import AllExchangesViewModel from '../../../models/exchange/allExchangesViewModel';
import ExchangeModel from '../../../models/exchange/exchangeModel';
import IHttpObject, { ISearchCriteria } from '../../../models/iHttpObject';
import { ActivityIndicator } from '../../common/loader/activityIndicator';

export interface SearchParametersProps {
    Criteria: Array<ISearchCriteria>;
    searchBarItem: string;
    page: number;
    pageSize: number;
    sort: string;
    count: number;
    direction: Direction;
    SetCount: (e: number) => void;
    ToString(): Promise<string> | null;
    ToObject(value:string):Promise<IHttpObject> | null;
}

const Exchange: React.FC = () => {
    const { t } = useI18n();
    const [searchParameters, setSearchParameters] = useState<SearchParametersProps>(
        {
            Criteria: [],
            page: 0,
            count: 0,
            pageSize: 5,
            sort: 'Amount',
            direction: Direction.asc,
            searchBarItem: '',
            SetCount: (e: number)=>{},
            ToString: ()=> {return null},
            ToObject: (value: string)=> {return null}
        }
    )
    const [records, setRecords] = useState<SocialTableRowProps[]>();
    const [showModal, setShowModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [exchangeModel, setExchangeModel] = useState<ExchangeModel>();
    const [showLoader, setShowLoader] = useState(false);
    const viewExchange = useCallback((record?: ExchangeModel) => {
        setShowDetailsModal(true);
        setExchangeModel(record);
        //get details from state and send to Modal
    }, [])
    const setCount = useCallback((count: number)=>{
        let x = searchParameters;
            if (x !== undefined) {
                x.count = count;
            }
            setSearchParameters(x);
    }, [])
    const process = useCallback(
        async () => {
            setShowLoader(true)
            let recordList: SocialTableRowProps[] = [];
                let searchParams = new AllExchangesRequest(searchParameters);
                const viewModel = new AllExchangesViewModel(searchParams)
                let r = await viewModel.SubmitAction(searchParams);
                //const {model , count} = r.Model
                setCount(r.Model !== undefined ? r.count : 0)
                const model = r.Model;
                model?.forEach(element => {
                    let exchange: ExchangeModel = new ExchangeModel(element);
                    let row: SocialTableRowProps = {
                        viewAction: () => { viewExchange(exchange) },
                        id: exchange.ID,
                        record: exchange
                    }
                    recordList.push(row);
                })
                setRecords(recordList)
                setShowLoader(false);
        },
        [setCount, viewExchange, setRecords],
    )
    useEffect(() => {
        process()
    }, [])

    const Submit = async () => {
        await process()
    }
    const SetSearchCriteria = async(e: any) => {
        let x: SearchParametersProps = searchParameters;
        let y: ISearchCriteria = {
            fieldName: "Amount",
            fieldValue: x.searchBarItem
        }
        x.Criteria = [];
        x.Criteria.push(y);
        setSearchParameters(x);
        await Submit();
    }
    const SetSearchParameters = async (e: any) => {
        let x: SearchParametersProps = searchParameters;
        let name: string = e.target.name;
        (x as any)[name] = e.target.value;
        setSearchParameters(x);
        if(e.target.name !== 'searchBarItem'){
            await Submit();
        }else{
            SetSearchCriteria(e);
        }
    }
    function toggleModal(e: any) {
        setShowModal(!showModal)
    }

    function toggleDetailsModal(e: any) {
        setShowDetailsModal(!showDetailsModal)
    }
    
    return (<>
        <Content>
            <ExchangeToolBar
                submit={SetSearchCriteria}
                searchParam={searchParameters.searchBarItem}
                setSearchParam={SetSearchParameters}
                showModal={(e: any) => setShowModal(true)} />
            <AllExchanges
            toggleModal={toggleDetailsModal}
            exchange={exchangeModel}
            showDetails={showDetailsModal} 
            records={records? records : []} />
            <Pager
                direction={searchParameters ? searchParameters.direction : Direction.asc}
                setDirection={SetSearchParameters}
                page={searchParameters ? searchParameters.page : 0}
                setPage={SetSearchParameters}
                onSelectChange={SetSearchParameters}
                sort={searchParameters?.sort}
                count={searchParameters ? searchParameters.count : 20}
                pageSize={searchParameters ? searchParameters.pageSize : 0}
                sortItems={['Amount', 'Expiry Date']}
                sortAction={SetSearchParameters} />
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
    <ActivityIndicator display={showLoader} show={showLoader} title={'Loading Xchanges'}/>
    </>)
}
export default Exchange;