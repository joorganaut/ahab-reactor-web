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
    showModal: (e: any) => void;
    searchParam: string;
    setSearchParam: (e: any) => void;
    submit: (e: any) => void;
}


const ExchangeToolBar: React.FC<ExchangeToolBarProps> = ({ ...props }) => {
    const pressKey = (e: any) => {
        var code = e.keyCode || e.which;
        if (code === 13) {
            e.target.name = 'searchBarItem';
            e.target.value = props.searchParam;
            props.submit(e);
        }
    }
    return (
        <ToolBar>
            <ToolBarItem>
                <ToolBarButton onClick={props.showModal}>
                    <ToolBarButtonIcon name={'add_database'} />
                </ToolBarButton>
            </ToolBarItem>
            <ToolBarItem>
                <ToolBarButton onClick={props.showModal}>
                    <ToolBarButtonIcon name={'accept_database'} />
                </ToolBarButton>
            </ToolBarItem>
            <ToolBarItem>
                <ToolBarButton onClick={props.showModal}>
                    <ToolBarButtonIcon name={'delete_database'} />
                </ToolBarButton>
            </ToolBarItem>
            <ToolBarItem float={'right'}>
                {/* <SearchForm > */}
                <FormSection>
                    <SearchContainer >
                        <SearchIcon className={'icon'}></SearchIcon>
                        <SearchInput type={'number'}
                            onKeyPress={pressKey}
                            placeholder={'amount'}
                            name={'searchBarItem'} 
                            value={props.searchParam} 
                            onChange={props.setSearchParam} />
                    </SearchContainer>
                </FormSection>
                {/* </SearchForm> */}
            </ToolBarItem>
        </ToolBar>
    )
}
export default ExchangeToolBar;