import React, {useState, useEffect} from 'react';
import {
    SocialTableContainer,
    SocialTableRowContainer,
    CurrencyContainer,
    Flag,
    FlagConnector,
    ClockContainer,
    AmountAndRateContainer,
    Amount,
    Rate,
    ContactContainer,
    Mobile,
    Email,
    NameContainer,
    Clock,
    ViewButtonContainer,
    ViewButton,
    ViewLink
} from './styled';
import Countdown from "react-countdown";

export interface SocialTableProps {
    records?: Array<SocialTableRowProps>
}
export interface SocialTableRowProps {
    id?: number;
    record?: RecordProps;
    viewAction: (id?: number) => void;
}
interface RecordProps {
    FromCurrency?: string;
    ToCurrency?: string;
    FirstName?: string;
    LastName?: string;
    PhoneNumber?: string;
    Email?: string;
    Amount?: number;
    Rate?: number;
    ExpiryDate?: Date;
}
const SocialTable: React.FC<SocialTableProps> = ({ ...props }) => {
    return (<SocialTableContainer noOfRows={props.records?.length}>
        {props.records?.map(x => {
            return (<SocialTableRow id={x.id} record={x.record} viewAction={x.viewAction} />)
        })}
    </SocialTableContainer>)
}

const SocialTableRow: React.FC<SocialTableRowProps> = ({ ...props }) => {
    return (
        <ViewLink onClick={()=>props.viewAction(props.id)}>
        <SocialTableRowContainer noOfColumns={3} >            
            <CurrencyContainer>
                <Flag src={FlagImage(props.record? props.record.FromCurrency : '')} />
                <FlagConnector src={'/icons/gb/advance.svg'} />
                <Flag src={FlagImage(props.record? props.record.ToCurrency : '')} />
            </CurrencyContainer>
            <AmountAndRateContainer>
                <Amount>${return2DecimalPlace(props.record? props.record.Amount : 0)}</Amount>
                <Rate>Rate: {return2DecimalPlace(props.record? props.record.Rate : 0)}</Rate>
            </AmountAndRateContainer>
            {/* <NameContainer> */}
                {/* Osazee Igbinosun */}
                {/* {`${props.record? props.record.FirstName : ''} ${props.record? props.record.LastName : ''}`}  */}
            {/* </NameContainer> */}
            {/* <ContactContainer> */}
                {/* <Mobile>{props.record? props.record.PhoneNumber : ''}</Mobile>
                <Email>{props.record? props.record.Email : ''}</Email> */}
                {/* <Mobile>+1-647-679-1133</Mobile> */}
                {/* <Email>sazeespectra@gmail.com</Email> */}
            {/* </ContactContainer> */}
            <ClockContainer>
                <Clock>
                <Countdown date={props.record?
                 props.record.ExpiryDate : ''} daysInHours/>
                 </Clock>
            </ClockContainer>
            {/* <ViewButtonContainer>
                <ViewButton src={'/icons/gb/contacts.svg'} />
            </ViewButtonContainer> */}           
        </SocialTableRowContainer>
         </ViewLink>
    )
}

const return2DecimalPlace=(value?: number)=>{
    let result: string = '0.00';
    let word = value?.toString();
    result = parseFloat(word? word : '0').toFixed(2);
    return result;
}

interface ClockProps{
    startTimeInSeconds: number;
}

const FlagImage = (currency?: string): string => {
    let result = '';
    switch (currency) {
        case 'ngn': {
            result = '/icons/flags/ng.svg';
            break;
        }
        case 'cad': {
            result = '/icons/flags/ca.svg';
            break;
        }
        case 'usd': {
            result = '/icons/flags/us.svg';
            break;
        }
        case 'gbp': {
            result = '/icons/flags/uk.svg';
            break;
        }
        default: {
            result = '';
            break;
        }
    }
    return result;
}

export default SocialTable;