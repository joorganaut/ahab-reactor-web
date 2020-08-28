import React, { useState, useEffect } from 'react';
import {
    PagerContainer,
    PagerButtonContainer,
    PagerSortContainer,
    PagerButton,
    Count,
    PageSize,
    PageNumber,
    PagerSelect,
    PagerSelectOption,
    PagerDirectionButton
} from './styled';

interface PagerProps {
    page: number;
    pageSize: number;
    count: number;
    sortItems: string[];
    sort?: string;
    direction: Direction;
    sortAction: (e: any) => void;
    onSelectChange: (e: any) => void;
    setPage: (e: any) => void;
    setDirection: (e: any) => void;
}
export enum Direction {
    asc = 'asc',
    desc = 'desc'
}
const Pager: React.FC<PagerProps> = ({ ...props }) => {

    const getTotalPages = () => {
        let pages = Math.ceil(props.count / props.pageSize);
        return pages;
    }
    const changePage = (e: any) => {
        switch (e.target.id) {
            case 'next': {
                e.target.name = 'page';
                e.target.value = props.page + 1 < getTotalPages() ? props.page + 1 : props.page
                props.setPage(e);
                break;
            }
            case 'previous': {
                e.target.name = 'page';
                e.target.value = props.page > 0 ? props.page - 1 : 0;
                props.setPage(e);
                break;
            }
            case 'begin': {
                e.target.name = 'page';
                e.target.value = 0;
                props.setPage(e);
                break;
            }
            case 'end': {
                e.target.name = 'page';
                e.target.value = getTotalPages() - 1;
                props.setPage(e);
                break;
            }
        }
    }

    const setDirectionArrow = (e: any) => {
        if (props.direction === Direction.asc) {
            e.target.name = 'direction';
            e.target.value = Direction.desc;
            props.setDirection(e);
        } else {
            e.target.name = 'direction';
            e.target.value = Direction.asc;
            props.setDirection(e);
        }
    }
    const getDirectionArrow = () => {
        if (props.direction === Direction.asc) {
            return (<>&#8593;</>)
        }
        return (<>&#8595;</>)
    }
    return (<>
        <PagerContainer>
            <PagerButtonContainer>
                <PagerButton disabled ={props.page === 0} id={'begin'} onClick={changePage}>&lt;&lt;</PagerButton>
                <PagerButton disabled ={props.page === 0} id={'previous'} onClick={changePage}>&lt;</PagerButton>
                <PagerButton disabled={props.page + 1 === getTotalPages()}  id={'next'} onClick={changePage}>&gt;</PagerButton>
                <PagerButton disabled={props.page + 1 === getTotalPages()} id={'end'} onClick={changePage}>&gt;&gt;</PagerButton>
            </PagerButtonContainer>
            <PagerSortContainer>
                <PagerSelect name={'sort'} value={props.sort} onChange={props.onSelectChange} id={'sort'}>
                    {props.sortItems.map(x => (
                        <PagerSelectOption value={x.replace(' ', '')}>{x}</PagerSelectOption>
                    ))}
                </PagerSelect>
                <PagerDirectionButton id={'next'} onClick={(e: any) => setDirectionArrow(e)}>
                    {/* <>&#8593;</><>&#8595;</> */}
                    {getDirectionArrow()}
                    </PagerDirectionButton>
            </PagerSortContainer>
            <PageNumber>{`page ${props.page + 1} of ${getTotalPages()}`}</PageNumber>
            <PageSize>{`showing ${(props.page * props.pageSize) + 1} to
             ${(props.page * props.pageSize) + props.pageSize < props.count ? (props.page * props.pageSize) + props.pageSize : props.count} of `}</PageSize>
            <Count>{props.count}</Count>
        </PagerContainer>
    </>)
}
export default Pager;