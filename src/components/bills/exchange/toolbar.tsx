import React from 'react';
import {
    ToolBar,
    ToolBarItem,
    ToolBarButton,
    ToolBarButtonIcon,
    SearchContainer,
    SearchIcon,
    SearchInput
} from './styled';
import { FormSection } from '../../common/container';
import './toolbar.css';
interface ExchangeToolBarProps {
    search: (e: any) => void;
    showModal: (e: any) => void;
    setSearchParam: (e: any) => void;
    searchParam: string;
}


const ExchangeToolBar: React.FC<ExchangeToolBarProps> = ({showModal, search, searchParam, setSearchParam}) => {
    return (
        <ToolBar>
            <ToolBarItem>
                <ToolBarButton onClick={showModal}>
                    <ToolBarButtonIcon name={'add_database'} />
                </ToolBarButton>
            </ToolBarItem>
            <ToolBarItem float={'right'}>
                {/* <SearchForm > */}
                <FormSection>
                    <SearchContainer >
                        <SearchIcon className={'icon'}></SearchIcon>
                        <SearchInput type={'text'}
                            onKeyPress={search}
                            placeholder={'Search'}
                            name={'search'} value={searchParam} onChange={(e: any) => { setSearchParam(e.target.value) }} />
                    </SearchContainer>
                </FormSection>
                {/* </SearchForm> */}
            </ToolBarItem>
        </ToolBar>
    )
}
export default ExchangeToolBar;