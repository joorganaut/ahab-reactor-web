import React from 'react';
import { GridTableContainer, GridTableHeaderContainer, GridTableColumn } from './styled'

export interface HeaderProps {
    label: string;
    value: string;
    id: string;
}
export interface ColumnProps {
    label: string;
    value: any;
}
export interface RowAction {
    name: string;
    Action: (id: any) => void;
}
export interface RowProps {
    columns: Array<ColumnProps>
    Actions: Array<RowAction>
}

export interface GridTableProps {
    header: Array<HeaderProps>;
    rows?: Array<RowProps>;
}

const GridTable: React.FC<GridTableProps> = ({ ...props }) => {
    return (<>
        <GridTableContainer noOfColumns={props.header.length}>
            <GridTableHeader headers={props.header}/>
        </GridTableContainer>
    </>)
}
interface GridTableHeaderProps {
    headers: Array<HeaderProps>;
}
const GridTableHeader: React.FC<GridTableHeaderProps> = ({ ...props }) => {
    return (<GridTableHeaderContainer noOfColumns={props.headers.length}>
        {props.headers.map(x => (<GridTableColumn id={x.id} >
            {x.label}
            </GridTableColumn>))
}
    </GridTableHeaderContainer >)
}
export default GridTable;