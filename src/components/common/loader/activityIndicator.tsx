import React from 'react';
import styled from 'styled-components/macro';
import { CubeSpinner as Spinner } from "react-spinners-kit";
import { theme } from '../../../styles/global';
interface ActivityIndicatorProps {
    show: boolean;
    title: string;
}
const Center = styled.div`
`

const MainLevels = styled(Spinner)`
color: ${props => props.theme.colors.primary}

`
const toggleIndicator = (show: boolean, title: string) => {
    if (show) {
        return (<>
            <Center>
                {/* <Sentry color={theme.colors.brand} size={32} speed={1} animating={this.state.Show} /> */}
                <MainLevels size={100} frontColor={theme.colors.primary} backColor={theme.colors.compliment} loading={show} />
                {title}.....
            </Center>
        </>)
    } else {
        return (<></>)
    }
}
const Indicator = styled.div`
    position: absolute;
    z-index:5;
    left: 50%;
    right: 0;
    top: 45%;
    bottom: 0;
    align-items: center;
    justify-content: center;
    background-color: #F5FCFF88;
    opacity: 0.5;
`
export const ActivityIndicator = ({ ...props }) => {
    return (
        <Indicator>
            {toggleIndicator(props.show, props.title)}
        </Indicator>
    )

}