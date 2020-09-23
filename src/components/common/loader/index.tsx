import React from 'react';
import {SpinnerBox} from './styled';
// import './styled.css';

export enum SpinnerName {
    Circle = 'Circle',
    Orbit = 'Orbit',
    Planes = 'Planes',
    Squares = 'Squares',
    Dots = 'Dots',
    Solar = 'Solar',
    Quarter = 'Quarter'
}
export interface SpinnerProps {
    name: SpinnerName
    show: boolean
}

const GetSpinnerByName = (name: SpinnerName) => {
    switch (name) {
        case SpinnerName.Circle: {
            return <>
                <div className="circle-border">
                    <div className="circle-core"></div>
                </div>
            </>
        }
        case SpinnerName.Orbit: {
            return <>
                <div className="blue-orbit leo">
                </div>

                <div className="green-orbit leo">
                </div>

                <div className="red-orbit leo">
                </div>

                <div className="white-orbit w1 leo">
                </div><div className="white-orbit w2 leo">
                </div><div className="white-orbit w3 leo">
                </div>
            </>
        }
        case SpinnerName.Planes: {
            return <>
                <div className="leo-border-1">
                    <div className="leo-core-1"></div>
                </div>
                <div className="leo-border-2">
                    <div className="leo-core-2"></div>
                </div>
            </>
        }
        case SpinnerName.Squares: {
            return <>
                <div className="configure-border-1">
                    <div className="configure-core"></div>
                </div>
                <div className="configure-border-2">
                    <div className="configure-core"></div>
                </div>
            </>
        }
        case SpinnerName.Dots: {
            return <>
                <div className="pulse-container">
                    <div className="pulse-bubble pulse-bubble-1"></div>
                    <div className="pulse-bubble pulse-bubble-2"></div>
                    <div className="pulse-bubble pulse-bubble-3"></div>
                </div>
            </>
        }
        case SpinnerName.Solar: {
            return <>
                <div className="solar-system">
                    <div className="earth-orbit orbit">
                        <div className="planet earth"></div>
                        <div className="venus-orbit orbit">
                            <div className="planet venus"></div>
                            <div className="mercury-orbit orbit">
                                <div className="planet mercury"></div>
                                <div className="sun"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
        case SpinnerName.Quarter: {
            return <>
                <div className="three-quarter-spinner"></div>
            </>
        }
        default: {
            return <></>
        }
    }
}


const Spinner: React.FC<SpinnerProps> = ({ ...props }) => {

    return <SpinnerBox show={props.show}>
        {GetSpinnerByName(props.name)}
    </SpinnerBox>
}
export default Spinner;